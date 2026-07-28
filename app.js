(function initializeExpenseApp() {
  // Main UI elements
  const mountEl = document.getElementById('app');
  const datasetSelect = document.getElementById('dataset-select');
  const printBtn = document.getElementById('print-btn');
  const statusEl = document.getElementById('status');

  // Render the selected dataset
  function renderCurrentDataset() {
    const key = datasetSelect.value;
    const source = DATA_SOURCES[key];
    if (!source) return;

    try {
      mountEl.innerHTML = PugRenderer.render(source.data);
      updateStatusMessage(`Showing: ${source.label}`);
    } catch (err) {
      updateStatusMessage('Render error — see console.', true);
      console.error(err);
    }
  }

  // Show status messages in the toolbar
  function updateStatusMessage(text, isError) {
    statusEl.textContent = text;
    statusEl.classList.toggle('status--error', !!isError);
  }

  // Fill the dataset dropdown
  function populateDatasetSelection() {
    datasetSelect.innerHTML = '';
    Object.keys(DATA_SOURCES).forEach(function addDatasetOption(key) {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = DATA_SOURCES[key].label;
      datasetSelect.appendChild(opt);
    });
  }

  // Start the app and load the first view
  async function initializeApplication() {
    updateStatusMessage('Loading template…');
    populateDatasetSelection();

    try {
      await PugRenderer.init();
      renderCurrentDataset();
    } catch (err) {
      updateStatusMessage('Could not render the expense form. Please refresh the page or open it through a local server.', true);
      console.error(err);
    }
  }

  function handleDatasetChange() {
    renderCurrentDataset();
  }

  function handlePrintButtonClick() {
    window.print();
  }

  datasetSelect.addEventListener('change', handleDatasetChange);
  printBtn.addEventListener('click', handlePrintButtonClick);

  initializeApplication();
})();
