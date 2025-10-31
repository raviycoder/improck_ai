# 🚀 Improck AI - Landing Page

A modern, responsive landing page for Improck AI - an intelligent job application automation platform that helps job seekers land their dream jobs 10x faster.

![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient themes with blue-purple color scheme
- 🌓 **Dark/Light Mode** - Fully functional theme toggle with system preference detection
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- ⚡ **Performance** - Built with Next.js 15 and React 19 for optimal speed
- 🎭 **Animations** - Smooth animations powered by Framer Motion
- 🧩 **Component-Based** - Modular and reusable UI components
- 🎯 **SEO Optimized** - Proper meta tags and semantic HTML structure

## 📋 Sections

1. **Hero Section** - Eye-catching introduction with animated progress steps
2. **Issue Section** - Highlighting job search pain points with sticky scroll cards
3. **Solution Section** - 3-step process explaining how Improck solves problems
4. **Features Section** - Key features with interactive cards
5. **Testimonials** - Auto-scrolling customer testimonials
6. **Pricing Section** - Flexible pricing plans with monthly/yearly toggle
7. **FAQ Section** - Accordion-based frequently asked questions
8. **Call to Action** - Final conversion section with typewriter effect
9. **Footer** - Complete footer with links, newsletter, and theme toggle

## 🛠️ Tech Stack

- **Framework:** [Next.js 15.5.2](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5.x](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

## 📦 Installation

### Prerequisites

- Node.js 18.x or later
- Bun (recommended) or npm/yarn/pnpm

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/raviycoder/improck_ai.git
cd improck_landing_page
```

2. **Install dependencies**
```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install

# Or using yarn
yarn install
```

3. **Run the development server**
```bash
# Using Bun
bun dev

# Or using npm
npm run dev

# Or using yarn
yarn dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🚀 Build & Deploy

### Build for Production

```bash
# Using Bun
bun run build

# Or using npm
npm run build
```

### Start Production Server

```bash
# Using Bun
bun start

# Or using npm
npm start
```

### Deploy on Vercel

The easiest way to deploy this Next.js app is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/raviycoder/improck_ai)

## 📁 Project Structure

```
improck_landing_page/
├── public/                 # Static assets
│   ├── image-hero.png
│   └── ...
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── favicon.ico
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout with theme provider
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── sections/      # Page sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── issue-section.tsx
│   │   │   ├── solution-section.tsx
│   │   │   ├── feature-section.tsx
│   │   │   ├── testimonials-section.tsx
│   │   │   ├── price-section.tsx
│   │   │   ├── faq-section.tsx
│   │   │   ├── call-to-section.tsx
│   │   │   ├── footer-section.tsx
│   │   │   └── header.tsx
│   │   ├── ui/            # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── feature-card.tsx
│   │   │   ├── progress-steps.tsx
│   │   │   └── ...
│   │   └── svg/           # SVG components
│   │       └── improck-logo.tsx
│   └── lib/
│       └── utils.ts       # Utility functions
├── components.json        # shadcn/ui config
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies
```

## 🎨 Color Scheme

- **Primary Blue:** `#3B82F6` (blue-600) → `#60A5FA` (blue-400) in dark mode
- **Primary Purple:** `#9333EA` (purple-600) → `#A855F7` (purple-400) in dark mode
- **Gradients:** Blue to Purple for brand consistency
- **Backgrounds:** White/Gray-50 (light) → Gray-950/Gray-900 (dark)

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add it to `src/app/page.tsx`
3. Add navigation link in `src/components/sections/header.tsx`

### Changing Theme Colors

Edit the color values in:
- `src/app/globals.css` for CSS variables
- Component files for Tailwind classes

### Modifying Content

All content is directly in the component files for easy customization:
- Hero text: `hero-section.tsx`
- Pricing plans: `price-section.tsx`
- Testimonials: `testimonials-section.tsx`
- FAQ: `faq-section.tsx`

## 📄 Scripts

```bash
# Development
bun dev          # Start dev server

# Production
bun run build    # Build for production
bun start        # Start production server

# Linting
bun run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

**Ravi Yadav**
- GitHub: [@raviycoder](https://github.com/raviycoder)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Radix UI](https://www.radix-ui.com/) for accessible components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for beautiful icons

---

Made with ❤️ by Ravi Yadav

