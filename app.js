(function () {
  const MM_TO_PX = 96 / 25.4;
  const PAGE_HEIGHT_PX = 297 * MM_TO_PX;
  const PADDING_PX = 14 * MM_TO_PX;

  const state = {
    formKey: 'workerProgressReport',
    datasetKey: 'A',
  };

  const stage = document.getElementById('app-stage');
  const measureHost = document.getElementById('measure-host');

  function measureElementHeight(el) {
    const rect = el.getBoundingClientRect();
    const cs = getComputedStyle(el);
    return rect.height + parseFloat(cs.marginTop) + parseFloat(cs.marginBottom);
  }

  // Break each .form-section down into its direct children so tables can
  // be split at row granularity while everything else stays atomic.
  function getAtomicFormBlocks(formEl) {
    const blocks = [];
    Array.from(formEl.children).forEach((sectionEl) => {
      if (!sectionEl.matches('section.form-section')) return;
      Array.from(sectionEl.children).forEach((child) => {
        if (child.matches('table.data-table')) {
          blocks.push({ type: 'table', el: child });
        } else {
          blocks.push({ type: 'atomic', el: child });
        }
      });
    });
    return blocks;
  }

  function buildFooterMarkup(data, pageNum, totalPages) {
    return window.Templates.footer({
      data: {
        appId: data.appId,
        submitted: data.submitted,
        pageNum,
        totalPages,
      },
    });
  }

  function paginateFormContent(formKey, data) {
    const rawHtml = window.Templates[formKey]({ data });
    measureHost.innerHTML = rawHtml;
    const formEl = measureHost.firstElementChild;

    const headerEl = formEl.querySelector('.form-header');
    const statementEl = formEl.querySelector('.statement');

    // Reserve space for a footer by measuring a representative one.
    const sampleFooterHtml = buildFooterMarkup(data, 1, 1);
    const footerProbe = document.createElement('div');
    footerProbe.innerHTML = sampleFooterHtml;
    formEl.appendChild(footerProbe.firstElementChild);
    const footerHeight = measureElementHeight(formEl.lastElementChild);
    formEl.removeChild(formEl.lastElementChild);

    const maxHeight = PAGE_HEIGHT_PX - 2 * PADDING_PX - footerHeight;

    const atomicBlocks = getAtomicFormBlocks(formEl);

    let pages = [];
    let currentItems = [];
    let currentHeight = 0;

    // Header + statement always open page 1.
    currentItems.push({ kind: 'raw', html: headerEl.outerHTML });
    if (statementEl) currentItems.push({ kind: 'raw', html: statementEl.outerHTML });
    currentHeight = measureElementHeight(headerEl) + (statementEl ? measureElementHeight(statementEl) : 0);

    function startNewPage() {
      pages.push({ items: currentItems });
      currentItems = [];
      currentHeight = 0;
    }

    atomicBlocks.forEach((block, i) => {
      if (block.type === 'table') {
        const theadEl = block.el.querySelector('thead');
        const theadHTML = theadEl ? theadEl.outerHTML : '';
        const theadHeight = theadEl ? measureElementHeight(theadEl) : 0;
        const rowEls = Array.from(block.el.querySelectorAll('tbody tr'));
        let rowIdx = 0;

        while (rowIdx < rowEls.length) {
          const availableForRows = maxHeight - currentHeight - theadHeight;
          if (availableForRows < measureElementHeight(rowEls[rowIdx]) && currentItems.length > 0) {
            startNewPage();
            continue;
          }
          let usedHeight = 0;
          let rowsHtml = '';
          let count = 0;
          while (rowIdx < rowEls.length) {
            const rh = measureElementHeight(rowEls[rowIdx]);
            if (usedHeight + rh > maxHeight - currentHeight - theadHeight && count > 0) break;
            rowsHtml += rowEls[rowIdx].outerHTML;
            usedHeight += rh;
            rowIdx += 1;
            count += 1;
          }
          currentItems.push({ kind: 'table', theadHTML, rowsHtml });
          currentHeight += theadHeight + usedHeight;
          if (rowIdx < rowEls.length) startNewPage();
        }
      } else {
        let neededHeight = measureElementHeight(block.el);
        // Orphan control: never leave a section heading alone at page bottom.
        if (block.el.matches('h2.section-heading') && atomicBlocks[i + 1]) {
          neededHeight += measureElementHeight(atomicBlocks[i + 1].el);
        }
        if (currentHeight + neededHeight > maxHeight && currentItems.length > 0) {
          startNewPage();
        }
        currentItems.push({ kind: 'raw', html: block.el.outerHTML });
        currentHeight += measureElementHeight(block.el);
      }
    });

    pages.push({ items: currentItems });
    return pages;
  }

  function renderPagesToStage(pages, formKey, data) {
    stage.innerHTML = pages
      .map((p, idx) => {
        const body = p.items
          .map((item) =>
            item.kind === 'raw'
              ? item.html
              : `<table class="data-table">${item.theadHTML}<tbody>${item.rowsHtml}</tbody></table>`
          )
          .join('');
        const footer = buildFooterMarkup(data, idx + 1, pages.length);
        return `<div class="wcb-form wcb-page" id="${formKey}-page-${idx + 1}">${body}${footer}</div>`;
      })
      .join('');
  }

  function renderReport() {
    const data = window.SimulatedData[state.formKey][state.datasetKey];
    const pages = paginateFormContent(state.formKey, data);
    renderPagesToStage(pages, state.formKey, data);
  }
  //  Toolbar wiring
  const formSelect = document.getElementById('form-select');
  if (formSelect) {
    formSelect.addEventListener('change', (e) => {
      state.formKey = e.target.value;
      state.datasetKey = 'A';
      const ds = document.getElementById('dataset-select');
      if (ds) ds.value = 'A';
      renderReport();
    });
  }

  document.getElementById('dataset-select').addEventListener('change', (e) => {
    state.datasetKey = e.target.value;
    renderReport();
  });

  document.getElementById('print-btn').addEventListener('click', () => {
    window.print();
  });

  window.addEventListener('resize', () => {
    clearTimeout(window.__repaginateTimer);
    window.__repaginateTimer = setTimeout(renderReport, 200);
  });

  renderReport();
})();
