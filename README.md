# Engineering Portfolio

A modern, professional engineering portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 18.x or higher recommended
- **npm**: Version 9.x or higher (comes with Node.js)

### Installation

```bash
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📝 Customizing Your Portfolio

All personal content is centralized in **one file** for easy editing:

### `src/config/portfolio.ts`

This file contains all your:
- Personal information (name, title, email, resume URL, hero image)
- Social links (GitHub, LinkedIn, Email)
- Skills (categories and individual skills)
- Experience (roles, companies, highlights)
- Education (degrees, institutions, coursework)
- Certifications & Awards
- Projects (with summaries, technologies, and engineering details)

Simply edit this file to personalize your portfolio!

## 🎨 Theme & Colors

The site uses a **Forest Green** color theme with:
- Comfortable light mode with soft backgrounds
- Easy-on-the-eyes dark mode
- Toggle button in the navigation bar

Colors can be customized in `src/index.css`.

## 📁 Project Structure

```
src/
├── components/
│   ├── home/           # Home page sections
│   ├── layout/         # Navbar, Footer
│   └── ui/             # Reusable UI components
├── config/
│   └── portfolio.ts    # ⭐ Your personal content here
├── hooks/              # Custom React hooks
├── pages/              # Page components
└── index.css           # Global styles & theme
```

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install all dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🔧 Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - UI component library
- **React Router** - Client-side routing
- **Lucide React** - Icons

## 📱 Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark/Light mode toggle
- ✅ Smooth animations
- ✅ Expandable project cards
- ✅ SEO-friendly structure
- ✅ Accessible HTML

## 🌐 Deployment

Build the production version:

```bash
npm run build
```

The `dist` folder contains the optimized site ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

## 📄 License

This project is open source and available under the MIT License.
