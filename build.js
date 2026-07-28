// build.js
const fs = require('fs');
const path = require('path');
const pug = require('pug');

const templates = {
  workerProgressReport: 'templates/worker-progress-report.pug',
  medicalTravelExpense: 'templates/medical-travel-expense.pug',
  footer: 'templates/footer.pug',
};

let out = `// Generated template output.
// Browser-ready render functions from the Pug sources.
// No extra runtime setup is needed.
window.Templates = {};
`;

for (const [name, file] of Object.entries(templates)) {
  const filePath = path.join(__dirname, file);
  const fnSource = pug.compileClient(fs.readFileSync(filePath, 'utf8'), {
    filename: filePath,
    name: `render_${name}`,
    compileDebug: false,
    inlineRuntimeFunctions: true, // <-- makes the output fully self-contained
  });
  out += `\n// ---- compiled from ${file} ----\n${fnSource}\nwindow.Templates.${name} = render_${name};\n`;
}

fs.writeFileSync(path.join(__dirname, 'build', 'templates.compiled.js'), out);
console.log('Built build/templates.compiled.js from', Object.values(templates).join(', '));
