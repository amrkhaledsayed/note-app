# Almdrasa-Notes

![Poster](./public/assest/poster.jpeg)

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/TailwindCSS-v4.0-38BDF8?logo=tailwindcss&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" />
  <img src="https://img.shields.io/badge/LocalStorage-Enabled-4CAF50?style=for-the-badge" />
</p>

Almdrasa-Notes is a simple and intuitive note-taking application designed to help you organize your thoughts, ideas, and important information. It allows you to create, view, and manage both regular and "pinned" notes, making it easy to keep your most crucial notes readily accessible. The application features a responsive design, adapting seamlessly to both desktop and mobile screens.

---

## 🚀 Demo

[Live Preview on Netlify](https://almadrasa-note1.netlify.app/)

---

## ✨ Features

- **Create Notes:** Easily add new notes with a title, author, and content.
- **Pinned Notes:** Mark important notes as "pinned" for quick access at the top.
- **View Note Details:** Click on any note to view its full content, date, and author.
- **Edit/Add to Notes:** Continue adding to existing notes through a dedicated "Add More" feature.
- **Delete Notes:** Remove notes you no longer need.
- **Search Functionality:** Quickly find your notes by searching through titles and content.
- **Responsive Design:** Works seamlessly on desktop and mobile.
- **Local Storage:** Your notes are saved locally in your browser.
- **User Feedback:** Visual alerts for successful actions (e.g., note added, deleted).

---

## 🎨 Animations

This application includes smooth animations to enhance the user experience:

- **Note Entry/Exit:** Notes fade or slide in/out when added or deleted.
- **Sidebar Transitions:** The sidebar opens/closes with a smooth slide effect.
- **Buttons & Interactive Elements:** Subtle hover and click animations for better user engagement.
- **Loading & Success Messages:** Animated loading spinners and fade-in success messages.

---

## 🛠️ Technologies Used

- **HTML5** — Structure of the web pages.
- **CSS3** & **Sass** — Styling and design.
- **TailwindCSS** — Utility-first CSS framework.
- **JavaScript (ES6+)** — Interactivity and logic.
- **Vite** — Fast development server and build tool.
- **LocalStorage** — Data persistence.
- **Google Fonts**, **Font Awesome**, **Flaticon** — Icons & Typography.

---

## 🏁 Getting Started

To get a local copy of this application up and running, follow these simple steps.

### Prerequisites

- **Node.js** (which includes npm)
- A modern web browser

### Installation

# Clone the repository
```bash
git clone https://github.com/amrkhaledsayed/note-app.git
```

# Navigate to the project directory
```bash
cd note-app
```

# Install dependencies
```bash
npm install
```
# Start the development server
```bash
npm run dev
```
## 📁 Project Structure
```bash
Almdrasa-Notes/
├── public/             # Publicly accessible assets.
│   └── assest/         # Images and icons used in the application.
├── styles/
│   ├── reset.css       # CSS reset stylesheet for consistent styling across browsers.
│   ├── style.scss      # Sass source file for the application's unique design.
│   └── style.css       # Compiled CSS from style.scss.
├── src/
│   └── output.css      # Compiled Tailwind CSS output.
├── scriptes/           # JavaScript files that power the application.
│   ├── element.js
│   ├── index.js
│   ├── render-notes.js
│   ├── search.js
│   ├── utils.js
│   └── viewHandlers.js
├── index.html          # Main HTML file.
└── README.md           # This project documentation.
```
