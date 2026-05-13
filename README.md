# 📝 Notes App

A clean, minimal, and fully responsive Notes application built with **React 19** and **Tailwind CSS v4**. Create and delete notes instantly with a modern dark glassmorphism UI.

---

## 🚀 Live Demo

> _Coming soon — deploy link here_

---

## 📸 Preview
<img width="947" height="369" alt="image" src="https://github.com/user-attachments/assets/49c0d6e9-c9fa-48a9-adea-af1f8b999b04" />
<img width="950" height="409" alt="image" src="https://github.com/user-attachments/assets/b2edfcf6-e302-4faa-983e-814cd04a568f" />



---

## ✨ Features

- ✅ **Add Notes** — Create notes with a title and detailed description
- 🗑️ **Delete Notes** — Remove any note instantly with a single click
- 📱 **Fully Responsive** — Works seamlessly on mobile, tablet, and desktop
- 🎨 **Glassmorphism UI** — Modern dark theme with blur effects and smooth transitions
- ⚡ **Instant Updates** — Real-time state management with React `useState`
- 🔵 **Hover & Active Effects** — Polished micro-interactions on every button

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [React](https://react.dev/) | 19.x | UI library & state management |
| [Vite](https://vitejs.dev/) | 8.x | Lightning-fast build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |
| [Lucide React](https://lucide.dev/) | 1.x | Icon library (Trash2 icon) |

---

## 📁 Project Structure

```
.
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx        # Main component — all logic & JSX
│   ├── App.css        # Component-specific styles
│   ├── index.css      # Global styles & custom CSS classes
│   └── main.jsx       # React DOM entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js `v18+`
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/react-notes-app.git

# 2. Navigate into the project
cd react-notes-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

---

## 🧠 How It Works

```
User fills title + details  →  clicks "Add Note"
        ↓
submitHandler() fires  →  spreads existing task array
        ↓
pushes { title, details }  →  setTask() updates state
        ↓
React re-renders  →  new card appears in the grid

User clicks 🗑️  →  deleteNote(idx) fires
        ↓
splice(idx, 1) removes item  →  setTask() updates state
        ↓
React re-renders  →  card removed instantly
```

---

## 🎨 UI Highlights

- **Dark gradient background** — `from-gray-950 via-gray-900`
- **Glassmorphism form card** — `bg-gray-800/60` with `backdrop-blur`
- **Blue focus rings** on inputs for accessibility
- **Red trash icon button** with hover fill and active scale effect
- **Auto-height note cards** — content never overflows or gets clipped

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

## 🔮 Future Improvements

- [ ] Edit existing notes
- [ ] Persist notes with `localStorage`
- [ ] Search & filter notes
- [ ] Note categories / tags
- [ ] Drag and drop reordering
- [ ] Dark / Light theme toggle

---

## 👨‍💻 Author

**Your Name**
- GitHub: [Shah Alam Miyan](https://github.com/SoftwareShah)


## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ⭐ If you found this project helpful, please give it a star!
