// Renders the expense form markup for the selected dataset
const PugRenderer = (() => {
  let renderFn = null;

  // Escape text before inserting it into HTML
  function escapeHtmlText(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Show a placeholder when a cell has no value
  function formatCellDisplayValue(value) {
    return value === undefined || value === '' || value === null ? '—' : escapeHtmlText(value);
  }

  // Build one expense section with its table rows
  function buildSectionMarkup(title, columns, rows, note) {
    const tableBody = rows && rows.length
      ? rows.map(function renderRowMarkup(row) {
          const cells = columns.map(function renderCellMarkup(col) {
            return `<td>${formatCellDisplayValue(row[col.key])}</td>`;
          }).join('');
          return `<tr>${cells}</tr>`;
        }).join('')
      : '';

    const noteMarkup = note ? `<p class="form-section__note">${escapeHtmlText(note)}</p>` : '';
    const emptyState = rows && rows.length ? '' : '<p class="form-section__empty">No entries submitted for this section.</p>';

    return `
      <section class="form-section ${rows && rows.length ? '' : 'is-empty'}">
        <h2 class="form-section__title">${escapeHtmlText(title)}</h2>
        ${noteMarkup}
        ${rows && rows.length ? `
          <table class="data-table">
            <thead>
              <tr>${columns.map(function renderColumnHeader(col) {
                return `<th>${escapeHtmlText(col.label)}</th>`;
              }).join('')}</tr>
            </thead>
            <tbody>${tableBody}</tbody>
          </table>` : emptyState}
      </section>`;
  }

  // Build the full document markup from the dataset
  function buildDocumentMarkup(data) {
    const sections = [
      buildSectionMarkup('Prescription Drugs', data.columns.prescriptionDrugs, data.sections.prescriptionDrugs),
      buildSectionMarkup('Over-the-Counter Drugs', data.columns.otcDrugs, data.sections.otcDrugs),
      buildSectionMarkup('Bandages, Braces or Other Medical Supplies', data.columns.medicalSupplies, data.sections.medicalSupplies),
      buildSectionMarkup('Parking for Medical Appointments', data.columns.parking, data.sections.parking),
      buildSectionMarkup('Mileage to Medical Appointments', data.columns.mileage, data.sections.mileage, 'The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work.'),
      buildSectionMarkup('Bus or Taxi Fare for Medical Appointments *', data.columns.busTaxi, data.sections.busTaxi, '*Note: Pre-approval is required from your WCB representative to claim taxi fare(s).')
    ];

    return `
      <div class="document" id="wcb-document">
        <table class="doc-table">
          <thead>
            <tr><td>
              <div class="letterhead">
                <div class="letterhead__brand">
                  <img class="letterhead__logo" src="${escapeHtmlText(data.logo)}" alt="WCB - Workers Compensation Board of Manitoba">
                </div>
                <div class="letterhead__address">
                  <p>${escapeHtmlText(data.address.line1)}</p>
                  <p>${escapeHtmlText(data.address.cityProvPostal)}</p>
                  <p>Phone: ${escapeHtmlText(data.address.phone)}</p>
                  <p>Toll Free: ${escapeHtmlText(data.address.tollFree)}</p>
                  <p>${escapeHtmlText(data.address.website)}</p>
                </div>
                <div class="letterhead__title">
                  <h1>${escapeHtmlText(data.formTitle)}</h1>
                  <div class="claim-box">
                    <span>Claim No.</span>
                    <strong>${escapeHtmlText(data.claimNo)}</strong>
                  </div>
                </div>
              </div>
            </td></tr>
          </thead>
          <tfoot>
            <tr><td>
              <div class="page-footer">
                <span class="page-footer__left">Worker App ID: ${escapeHtmlText(data.workerAppId || '')}</span>
                <span class="page-footer__right">Submitted: ${escapeHtmlText(data.submitted)}</span>
              </div>
            </td></tr>
          </tfoot>
          <tbody>
            <tr><td>
              <p class="intro-line"><strong>${escapeHtmlText(data.workerName)}</strong> requested reimbursement for the following medical and/or travel expenses:</p>
            </td></tr>
            <tr><td>${sections.join('')}</td></tr>
            <tr><td>
              <div class="privacy-notice">
                <span class="privacy-notice__check">✓</span>
                <span class="privacy-notice__text">
                  I understand that the
                  <a class="privacy-link" href="${escapeHtmlText(data.privacyUrl || '#')}">Privacy Notice</a>
                  applies to the personal information collected in this document.
                </span>
              </div>
            </td></tr>
          </tbody>
        </table>
      </div>`;
  }

  // Prepare the renderer before use
  async function initializeRenderer() {
    renderFn = buildDocumentMarkup;
    return renderFn;
  }

  function renderExpenseDocument(locals) {
    if (!renderFn) {
      throw new Error('PugRenderer.init() must be called before render().');
    }
    return renderFn(locals);
  }

  return { init: initializeRenderer, render: renderExpenseDocument };
})();
