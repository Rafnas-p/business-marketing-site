# Rafnas Portfolio Website

A modern, professional, fully responsive personal portfolio website built with React (Vite) and Tailwind CSS.

## Features

- ✅ **SEO Optimized** - Complete meta tags, Open Graph, semantic HTML
- ✅ **Dark/Light Mode** - Toggle with localStorage persistence
- ✅ **Effect Switcher** - Customize accent colors and animations
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Smooth Animations** - Powered by Framer Motion
- ✅ **Modern UI** - Premium design with professional aesthetics

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Helmet Async (SEO)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── EffectSwitcher.jsx
├── contexts/
│   └── ThemeContext.jsx
├── pages/
│   └── Home.jsx
├── utils/
│   └── cn.js
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Update Personal Information

Edit the following files to update your personal information:
- `src/components/Hero.jsx` - Hero section content
- `src/components/About.jsx` - About section content
- `src/components/Contact.jsx` - Contact information
- `src/components/Projects.jsx` - Project details

### Change Accent Colors

The accent colors can be changed via the Effect Switcher panel (settings button in bottom right) or by modifying the colors in `tailwind.config.js`.

## SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Semantic HTML structure
- Proper heading hierarchy
- Alt tags for images
- Canonical URLs

## License

MIT
