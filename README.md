# Sirisha Annapureddy - Portfolio

A React.js portfolio with HTML and CSS. All pages include the shared header and footer; navigation links go to the respective pages.

## Folder structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js, Header.css
│   │   ├── Footer.js, Footer.css
│   ├── pages/
│   │   ├── Home.js, Home.css
│   │   ├── About.js, About.css
│   │   ├── Services.js, Services.css
│   │   ├── Projects.js, Projects.css
│   │   ├── Contact.js, Contact.css
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Install and run

```bash
cd "c:\Users\SLIM 3\Desktop\portfolio"
npm install
npm start
```

The app will open at **http://localhost:3000**.

## Pages

- **Home** – Hero with name (Sirisha Annapureddy), rotating role, Download CV, profile area.
- **About** – About Me section + My Skills grid; footer on all pages.
- **Services** – MY SERVICES with three cards (Web Development, Content Creation, Video Editing).
- **Projects** – My Projects with three project cards and “View Source” links.
- **Contact** – Contact info (left) and Get in Touch form (right).

Header and footer appear on every page; footer Quick Links and header nav route to the correct pages.
