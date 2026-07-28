Medical and Travel Expense Request:

A responsive web application that recreates the WCB Medical & Travel Expense Request form using HTML, CSS, JavaScript, and Pug. The project is completely client-side and demonstrates dynamic template rendering with multiple datasets to simulate backend data.



📌 Project Overview:

This application reproduces the Medical & Travel Expense Request form while maintaining a clean, responsive, and user-friendly interface. The form is rendered using Pug templates, styled with CSS, and populated using JavaScript. Two different datasets are included to simulate data received from a backend server, allowing users to switch between records during the demo.



✨ Features:

Responsive design for desktop, tablet, and mobile devices

Dynamic rendering using Pug templates

Pure client-side implementation (no database or backend)

Two sample datasets to simulate backend responses

Dataset switching for demonstration purposes

Organized layout matching the provided PDF form

Clean and reusable HTML, CSS, JavaScript, and Pug structure

Professional UI with print-friendly formatting



🛠️ Technologies Used:

HTML5

CSS3

JavaScript (ES6)

Pug Template Engine (Browser Version)



📂 Project Structure:

## Project structure

```
wcb-expense-report/
├── index.html              Entry point — loads pug.js, then app scripts
├── css/
│   └── style.css           Screen UI + A4 print rules
├── js/
│   ├── data.js              Two simulated "backend" datasets
│   ├── pug-renderer.js       Fetches + compiles the .pug template
│   └── app.js                 Wires up dataset switcher & print button
├── templates/
│   └── expense-form.pug    Single template, built from reusable mixins
└── assets/
    └── wcb-logo.jpeg        Letterhead logo
```


🚀 How to Run:

## Why a local server is needed (not Node — just static file serving)

`pug-renderer.js` uses `fetch()` to load `templates/expense-form.pug` as
text before compiling it. Browsers block `fetch()` against `file://` paths
for security (CORS), so double-clicking `index.html` won't load the
template. Serve the folder with any static file server, e.g.:

```bash
# Python (already on most systems, not Node)
cd wcb-expense-report
python3 -m http.server 8080
```

Then open `http://localhost:8080`. Any other static server (VS Code "Live
Server" extension, `php -S`, etc.) works identically — none of these are
Node/npm build steps, they're just serving static files.





📋 Assignment Objectives:

Render the page using Pug Templates

Match the provided PDF layout

Simulate backend data using multiple datasets

Demonstrate dynamic template rendering

Build a responsive and interactive user interface





📸 Screenshots:

Medical & Travel Expense Form
<img width="1347" height="595" alt="Screenshot 2026-07-28 131328" src="https://github.com/user-attachments/assets/d688d62e-e780-4cf8-9524-3baefca1351e" />
<img width="1343" height="593" alt="Screenshot 2026-07-28 131605" src="https://github.com/user-attachments/assets/fb84176b-9423-4b8f-bc7e-7d34f5de7a12" />
<img width="1343" height="592" alt="Screenshot 2026-07-28 131619" src="https://github.com/user-attachments/assets/473b308c-c08e-4314-87f2-b31b0155ddf2" />
<img width="1366" height="768" alt="Screenshot 2026-07-28 131629" src="https://github.com/user-attachments/assets/1a121ee7-7601-44aa-8a9d-30752cb2d18f" />



🔮 Future Improvements:

Backend integration

PDF export

Form validation

Database connectivity

User authentication

Print optimization


👩‍💻 Author
    
G Devika

Demo Video:---
https://drive.google.com/file/d/1qGjyiFipO4Ux7CQO5ZokP46_8nIjuV6w/view?usp=drive_link
    
