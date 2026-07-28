- **Worker Progress Report**


Built using **HTML, CSS, JavaScript, and Pug** with a responsive interface, simulated backend datasets, and A4 print support.

---

## How to Run

Open `index.html` in any modern web browser.

No **Node.js**, **npm install**, server setup, or build tools are required to **view or demonstrate** the project.

### Features

- **Form** dropdown switches between the two WCB forms.
- **Dataset** dropdown switches between two simulated backend datasets (A/B) for each form.
- All form data is loaded from **`js/data.js`**—nothing is entered manually.
- **Print / Save as PDF** generates an A4-formatted version of the selected form.

---

## Why Pug, but No Node Required

The project uses **Pug templates** for clean, reusable markup.

During development, the `.pug` templates are precompiled into JavaScript so the browser can render them directly without requiring the Pug runtime or Node.js.

The browser loads the compiled templates, making the final project completely client-side.

If you modify any `.pug` template, simply rebuild the compiled templates (development only):

```bash
node build.js
```

This step is only required if you are editing the templates. It is **not required** to run or demonstrate the project.

---

## Project Structure

```text
WCB-Manitoba-Forms/

├── index.html                     Entry point
├── templates/
│   ├── mixins.pug                 Shared reusable Pug components
│   ├── worker-progress-report.pug
│   ├── medical-travel-expense.pug
│   └── footer.pug                 Footer template
│
├── build/
│   └── templates.compiled.js      Precompiled browser templates
│
├── css/
│   ├── styles.css                 Shared UI styling
│   └── print.css                  A4 print styling
│
├── js/
│   ├── data.js                    Simulated backend datasets
│   └── app.js                     Form rendering and dataset switching
│
├── assets/
│   └── wcb-logo.png               WCB logo
│
├── build.js                       Template compilation script
└── README.md
```

---

## Assignment Requirements

✔ Render forms using **Pug templates**

✔ Match the supplied WCB PDF layouts

✔ Simulate backend data using multiple datasets

✔ Allow live switching between datasets

✔ Generate print-ready A4 documents

✔ Build reusable templates using Pug mixins

✔ Create a responsive, user-friendly interface

---

## Code Reusability

The application follows a modular design.

- Shared **Pug mixins** are reused by both forms.
- Common headers, footers, tables, checkboxes, and layout components are centralized.
- Form rendering logic is handled by reusable JavaScript modules.
- Both forms use the same styling and print layout, reducing duplicated code.

---

## Pagination & Printing

The application automatically prepares content for **A4 printing**.

Before printing, JavaScript measures the rendered content and organizes it into properly sized pages. Headers and footers are positioned automatically, ensuring professional print output regardless of the amount of data displayed.

Use the **Print / Save as PDF** button or press **Ctrl + P** (Windows) / **Cmd + P** (Mac) to generate the PDF.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Pug Template Engine

---

## Screenshots

### Worker Progress Report

<img width="1348" height="594" alt="Screenshot 2026-07-28 133610" src="https://github.com/user-attachments/assets/d76c1f3a-524c-4407-935b-4e5a6f2a7fc0" />
<img width="1146" height="601" alt="Screenshot 2026-07-28 133623" src="https://github.com/user-attachments/assets/e55930cc-96e5-4dd5-ba96-603a61e70946" />
<img width="1343" height="596" alt="Screenshot 2026-07-28 133642" src="https://github.com/user-attachments/assets/35b6691f-1384-4d08-bcc6-c3d805dd8530" />
<img width="1348" height="593" alt="Screenshot 2026-07-28 133657" src="https://github.com/user-attachments/assets/e8f68b3f-1c34-42b9-abba-9b31387c699a" />
<img width="1366" height="768" alt="Screenshot 2026-07-28 133722" src="https://github.com/user-attachments/assets/f73e2d88-0c77-4057-87da-57b122a01ab6" />


## Future Improvements

- Backend integration
- API connectivity
- Database support
- User authentication
- Form validation
- PDF export enhancements
- Digital signatures
- Accessibility improvements

---

## Author

**G Devika**

---
##Demo Video:--https://drive.google.com/file/d/19CqMr7wzFCbOG_FebUFDBIh8lMJQHSey/view?usp=drive_link
