# WCB Manitoba Forms — Assignment 2

This project contains responsive, print-ready recreations of two **WCB Manitoba** forms using **HTML, CSS, JavaScript, and Pug**.

- **Worker Progress Report**
- **Medical & Travel Expense Request**

Both forms are built as **pure client-side applications** with **no backend, Node.js, or build tools required to run**. The forms are rendered using reusable **Pug templates**, styled with **CSS**, and populated using **simulated backend datasets**.

---

# Project Structure

```text
WCB-Manitoba-Forms/
├── index.html                     Entry point
├── css/
│   ├── style.css                  Screen styling
│   └── print.css                  A4 print styles
├── js/
│   ├── data.js                    Simulated backend datasets
│   ├── pug-renderer.js            Loads and compiles Pug templates
│   └── app.js                     Form rendering & dataset switching
├── templates/
│   ├── worker-progress-report.pug
│   ├── medical-travel-expense.pug
│   ├── mixins.pug                 Shared reusable components
│   └── footer.pug
├── assets/
│   └── wcb-logo.jpeg
└── README.md
```

---

# Project Overview

This project recreates the official **WCB Manitoba** forms while maintaining a clean, responsive, and print-friendly interface.

The application demonstrates:

- Dynamic rendering using Pug templates
- Reusable template components
- Multiple simulated backend datasets
- Responsive layouts
- Print-ready A4 formatting
- Client-side rendering without any server-side framework

---

# Forms Included

## 1. Worker Progress Report

The Worker Progress Report reproduces the official WCB form including sections such as:

- Worker Information
- Employer Information
- Health Care Provider
- Functional Abilities
- Treatment Progress
- Return-to-Work Plan
- Recommendations
- Signatures

---

## 2. Medical & Travel Expense Request

The Medical & Travel Expense Request reproduces the official WCB expense claim form including:

- Prescription Drugs
- Over-the-Counter Drugs
- Medical Supplies
- Parking Expenses
- Mileage
- Bus / Taxi Fare

---

# Features

- Responsive design
- HTML5, CSS3, JavaScript & Pug
- Pure client-side implementation
- No database
- No backend
- Multiple datasets
- Dynamic template rendering
- Print-ready A4 layout
- Reusable Pug mixins
- Professional WCB-inspired interface

---

# Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Pug Template Engine

---

# Running the Project

The application is completely client-side.

Because `fetch()` is used to load `.pug` templates, browsers block loading them directly from `file://`.

Serve the project using any static web server.

Example using Python:

```bash
cd WCB-Manitoba-Forms
python3 -m http.server 8080
```

Then open:

```
http://localhost:8080
```

You can also use:

- VS Code Live Server
- PHP Built-in Server
- Any static file server

No **Node.js**, **npm install**, or server-side rendering is required to run the project.

---

# Assignment Requirements

## ✔ Pug Template Rendering

Both forms are rendered using reusable Pug templates located in the `templates/` folder.

The templates are compiled in the browser and rendered dynamically.

---

## ✔ Matches the Supplied PDF

Both forms closely replicate the supplied WCB Manitoba PDF layouts, including section ordering, tables, typography, branding, and overall appearance.

---

## ✔ Simulated Backend Data

The project includes multiple datasets stored in:

```
js/data.js
```

Each form supports switching between **Dataset A** and **Dataset B**, demonstrating how the same template renders different backend data without manual user input.

---

## ✔ Print-Ready A4 Output

Both forms are optimized for printing.

Features include:

- A4 page size
- Automatic page breaks
- Repeating headers
- Proper footer placement
- Print-friendly styling

Use **Print / Save as PDF** or **Ctrl + P** to generate PDF output.

---

# Code Reusability

The project emphasizes reusable design.

### Shared Pug Mixins

Reusable mixins generate:

- Section headers
- Tables
- Checkboxes
- Form fields
- Headers
- Footers

These components are shared between both forms.

### Generic Renderer

`pug-renderer.js` is template-independent.

Any `.pug` file can be loaded, compiled, cached, and rendered using the same rendering module.

### Shared Styles

Both forms use common CSS for:

- Typography
- Layout
- Tables
- Printing
- Responsive design

---

# Future Improvements

- Backend integration
- Database connectivity
- User authentication
- PDF export
- Form validation
- Digital signatures
- Accessibility improvements
- API integration

---

# Author

**G Devika**
