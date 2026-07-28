# WCB Medical & Travel Expense Request — Pug/HTML/CSS/JS

Assignment 2 build. Pure client side: **HTML, CSS, JavaScript, and Pug — no Node.js
and no build tooling.** The application renders a **WCB Medical & Travel Expense Request**
form using **Pug templates**, styled with CSS and populated with simulated backend data.
Everything runs in the browser without a database or server-side rendering.

---

## Project Structure

```text
wcb-medical-travel-expense/
├── index.html                 Entry point
├── css/
│   └── style.css              Screen styling + A4 print rules
├── js/
│   ├── data.js                Two simulated backend datasets
│   ├── pug-renderer.js        Loads and compiles the Pug template
│   └── app.js                 Handles dataset switching and rendering
├── templates/
│   └── expense-form.pug       Main Pug template built using reusable mixins
├── assets/
│   └── wcb-logo.jpeg          WCB logo
└── README.md
```

---

## Running the Project

This project is completely client-side. Since the Pug template is loaded using
`fetch()`, browsers block loading local files (`file://`) for security reasons.

Run the project using any simple static server.

### Python

```bash
cd wcb-medical-travel-expense
python3 -m http.server 8080
```

Open your browser and visit:

```
http://localhost:8080
```

You can also use:

- VS Code Live Server
- PHP Built-in Server (`php -S localhost:8080`)
- Any other static file server

No **Node.js**, **npm install**, or build tools are required to run the project.

---

## Assignment Requirements

### ✔ Pug Template Rendering

The Medical & Travel Expense Request form is rendered using the reusable Pug
template located in:

```
templates/expense-form.pug
```

The template is compiled in the browser using **pug.js**, allowing the project
to remain entirely client-side.

---

### ✔ Matches the Supplied PDF

The interface recreates the provided WCB Medical & Travel Expense Request form,
including sections such as:

- Prescription Drugs
- Over-the-Counter Drugs
- Medical Supplies
- Parking Expenses
- Mileage
- Bus / Taxi Fare

The layout, typography, colors, tables, and branding closely resemble the
official WCB document while remaining responsive across different screen sizes.

---

### ✔ Simulated Backend Data

The application includes two sample datasets stored in:

```
js/data.js
```

These datasets simulate backend responses and populate the form automatically.

Users can switch between the datasets using the toolbar without entering any
data manually.

---

### ✔ Print-Ready A4 Layout

The form is optimized for printing.

Features include:

- A4 page size
- Repeating header and footer
- Proper table pagination
- Clean page breaks
- Print-friendly formatting

Use the **Print / Save as PDF** button or press **Ctrl + P** (Windows) /
**Cmd + P** (Mac) and choose **Save as PDF**.

---

## Code Reusability

The project is designed using reusable components.

### Reusable Pug Mixins

The template uses generic mixins for rendering different expense sections,
allowing new sections to be added with minimal changes.

### Shared Components

- Letterhead
- Footer
- Expense Tables
- Section Headers

can all be reused in future WCB forms.

### Generic Renderer

`PugRenderer` is template-independent.

Any `.pug` template can be loaded, compiled, cached, and rendered without
modifying the renderer itself.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Pug Template Engine (Browser Version)

---

## Features

- Responsive layout
- Client-side rendering
- Dynamic Pug templates
- Multiple datasets
- Backend data simulation
- Professional WCB-inspired interface
- Print-ready A4 formatting
- Reusable modular code
- Clean project structure

---

## Screenshots

### Medical & Travel Expense Request Form

<img width="1347" height="595" alt="Screenshot 2026-07-28 131328" src="https://github.com/user-attachments/assets/d688d62e-e780-4cf8-9524-3baefca1351e" />
<img width="1343" height="593" alt="Screenshot 2026-07-28 131605" src="https://github.com/user-attachments/assets/fb84176b-9423-4b8f-bc7e-7d34f5de7a12" />
<img width="1343" height="592" alt="Screenshot 2026-07-28 131619" src="https://github.com/user-attachments/assets/473b308c-c08e-4314-87f2-b31b0155ddf2" />
<img width="1366" height="768" alt="Screenshot 2026-07-28 131629" src="https://github.com/user-attachments/assets/1a121ee7-7601-44aa-8a9d-30752cb2d18f" />


## Future Improvements

- Backend integration
- Database connectivity
- Form validation
- PDF export
- User authentication
- Digital signatures
- Accessibility improvements

---

## Author

**G Devika**

---

Demo Video:---
https://drive.google.com/file/d/1qGjyiFipO4Ux7CQO5ZokP46_8nIjuV6w/view?usp=drive_link
    
