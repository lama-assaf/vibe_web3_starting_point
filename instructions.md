# Building a Modern Landing Page with Next.js and Tailwind CSS

A comprehensive guide to building a visually rich, animated landing page using Next.js Pages Router and Tailwind CSS.

**Difficulty:** Intermediate
**Time Required:** 2-3 hours
**Prerequisites:** Basic knowledge of React, HTML/CSS, and terminal commands

---

## Table of Contents

1. [Introduction](#introduction)
2. [Part 1: Project Setup](#part-1-project-setup)
3. [Part 2: Animated Background](#part-2-animated-background)
4. [Part 3: Glassmorphism Cards](#part-3-glassmorphism-cards)
5. [Part 4: Page Assembly](#part-4-page-assembly)
6. [Part 5: Deployment](#part-5-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Introduction

### What You'll Build

This tutorial guides you through creating a fully animated landing page with:
- **Full-screen animated starfield background**
- **Custom CSS animations** integrated with Tailwind
- **Glassmorphism UI effects** for modern card designs
- **Responsive layout** that works on all screen sizes
- **Static site generation** for optimal performance

### Technical Stack

- **Next.js 15** - React framework with Pages Router
- **Tailwind CSS 4** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **React Icons** - Icon library

### Final Product Preview

The completed landing page features:
- Horizontally scrolling starfield background
- Floating glassmorphism cards with hover effects
- Smooth animations and transitions
- Pixel art aesthetic with modern design patterns

---

## Part 1: Project Setup

### 1.1. Initialize Next.js Project

Create a new Next.js project using the official CLI.

**Command:**
```bash
npx create-next-app@latest nyan-cat-landing
```

**Configuration prompts:**
```
✔ What is your project named? › nyan-cat-landing
✔ Would you like to use TypeScript? › Yes
✔ Would you like to use ESLint? › Yes
✔ Would you like to use Tailwind CSS? › Yes
✔ Would you like to use src/ directory? › Yes
✔ Would you like to use App Router? › No
✔ Would you like to customize the default import alias? › No
```

**Important:** Select **No** for App Router to use the Pages Router architecture.

**Why Pages Router?**
The Pages Router provides:
- Simpler file-based routing
- Familiar `pages/_app.js` pattern
- Better for smaller projects and learning
- The structure used in this existing starter kit

**Navigate to project:**
```bash
cd nyan-cat-landing
```

---

### 1.2. Organize Static Assets

Next.js serves static files from the `public/` directory.

**Create assets:**
1. Place `stars.png` in `public/` directory
2. Ensure image is tileable (seamless edges)
3. Recommended dimensions: 512x512px or larger

**Project structure:**
```
nyan-cat-landing/
├── public/
│   ├── stars.png          # Starfield background
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   └── styles/
└── package.json
```

**Getting the starfield image:**
- Use a star pattern generator online
- Create your own tileable texture
- Use the provided `stars.png` from this starter kit

---

### 1.3. Configure Custom Animations

Extend Tailwind CSS with custom animations by modifying `tailwind.config.js`.

**File: `tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // Add this if using src/ directory
  ],
  theme: {
    extend: {
      // Define custom keyframe animations
      keyframes: {
        'scroll-bg': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        bobbing: {
          '0%, 100%': { transform: 'translateY(-4%)' },
          '50%': { transform: 'translateY(4%)' },
        },
      },
      // Register animations as utility classes
      animation: {
        'scroll-bg': 'scroll-bg 20s linear infinite',
        'bobbing': 'bobbing 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
```

**What this does:**

| Configuration | Purpose | Effect |
|--------------|---------|--------|
| `keyframes.scroll-bg` | Horizontal scroll animation | Moves element left by 100% of its width |
| `keyframes.bobbing` | Vertical float animation | Gentle up-and-down motion |
| `animation.scroll-bg` | Applies scroll keyframes | 20s duration, linear timing, infinite loop |
| `animation.bobbing` | Applies bobbing keyframes | 2s duration, ease-in-out, infinite loop |

**Usage in components:**
```jsx
<div className="animate-scroll-bg">
  {/* This div will scroll horizontally */}
</div>

<div className="animate-bobbing">
  {/* This div will bob up and down */}
</div>
```

---

## Part 2: Animated Background

### 2.1. Create Background Component

Build a reusable component for the animated starfield.

**File: `src/components/NyanBackground.tsx`**

```typescript
import React from 'react';

const NyanBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Starfield Layer */}
      <div
        className="absolute inset-0 w-[200%] h-full bg-repeat animate-scroll-bg"
        style={{
          backgroundImage: "url('/stars.png')",
          backgroundSize: '512px 512px'
        }}
      />
    </div>
  );
};

export default NyanBackground;
```

**Code breakdown:**

```typescript
// Fixed positioning covers entire viewport
className="fixed inset-0 -z-10 overflow-hidden"

// Key classes explained:
// fixed         - Position relative to viewport
// inset-0       - Shorthand for top:0 right:0 bottom:0 left:0
// -z-10         - Places behind all other content
// overflow-hidden - Prevents scrollbars from animation
```

```typescript
// Starfield container - twice viewport width for seamless loop
className="absolute inset-0 w-[200%] h-full"

// Key attributes:
// w-[200%]     - Width is 200% of viewport (for scrolling)
// animate-scroll-bg - Our custom Tailwind animation
// bg-repeat    - Tiles the background image
```

**Why 200% width?**
The animation translates by -100%, so doubling the width ensures the image loops seamlessly without a visible jump.

---

### 2.2. Styling Deep Dive

**Full-screen canvas pattern:**
```typescript
// This pattern is commonly used for backgrounds
<div className="fixed inset-0 -z-10">
  {/* Background content */}
</div>
```

**Benefits:**
- Stays in place during page scroll
- Doesn't affect document flow
- Renders behind all content
- Works on all screen sizes

**Alternative approaches:**
```typescript
// Using absolute positioning (requires parent with relative)
<div className="absolute inset-0 -z-10">

// Using viewport units
<div className="fixed top-0 left-0 w-screen h-screen -z-10">
```

---

## Part 3: Glassmorphism Cards

### 3.1. Build Card Component

Create a reusable card with the glassmorphism effect.

**File: `src/components/Card.tsx`**

```typescript
import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="w-full max-w-sm p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
      <h2 className="text-xl font-bold text-white mb-4">
        {title}
      </h2>
      <div className="text-gray-200">
        {children}
      </div>
    </div>
  );
};

export default Card;
```

**Glassmorphism effect breakdown:**

```typescript
// Core glassmorphism classes
className="bg-white/10 backdrop-blur-lg border border-white/20"

// bg-white/10          - 10% opacity white background
// backdrop-blur-lg     - Blurs content behind the element
// border-white/20      - 20% opacity white border
```

**Hover animation:**
```typescript
// Smooth interactive effects
className="transition-transform duration-300 hover:scale-105 hover:-translate-y-2"

// transition-transform  - Animate transform changes
// duration-300         - 300ms transition time
// hover:scale-105      - Grow by 5% on hover
// hover:-translate-y-2 - Lift up by 0.5rem on hover
```

**Visual comparison:**

| Without glassmorphism | With glassmorphism |
|----------------------|-------------------|
| Solid background, flat appearance | Transparent, frosted glass look |
| No depth perception | Clear visual layering |
| Static, dated design | Modern, premium feel |

---

### 3.2. Understanding Backdrop Filters

**What is `backdrop-blur`?**
- Applies blur to elements BEHIND the component
- Different from regular blur (which blurs the element itself)
- Creates the "frosted glass" effect
- Requires semi-transparent background to be visible

**Browser support:**
Modern browsers fully support `backdrop-filter`. For older browsers, add fallback:

```typescript
<div className="bg-white/10 backdrop-blur-lg supports-[backdrop-filter]:bg-white/5">
  {/* Content */}
</div>
```

**Blur intensity options:**
```typescript
backdrop-blur-sm   // Subtle blur
backdrop-blur      // Medium blur
backdrop-blur-lg   // Strong blur (recommended)
backdrop-blur-xl   // Very strong blur
```

---

### 3.3. Advanced Hover Effects

Create a more sophisticated hover experience:

```typescript
const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="
      w-full max-w-sm p-6
      bg-white/10 backdrop-blur-lg
      rounded-xl border border-white/20
      shadow-lg
      transition-all duration-300
      hover:scale-105 hover:-translate-y-2
      hover:shadow-2xl hover:shadow-cyan-500/20
      hover:border-white/40
      group
    ">
      <h2 className="
        text-xl font-bold text-white mb-4
        transition-colors
        group-hover:text-cyan-300
      ">
        {title}
      </h2>
      <div className="text-gray-200 transition-colors group-hover:text-white">
        {children}
      </div>
    </div>
  );
};
```

**New features:**
- `group` class enables nested hover effects
- Shadow color changes on hover
- Border opacity increases
- Text color transitions
- All animations are smooth and coordinated

---

## Part 4: Page Assembly

### 4.1. Global Styles Setup

Configure fonts and base styles.

**File: `src/styles/globals.css`**

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

/* Import Tailwind directives */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base styles */
body {
  margin: 0;
  padding: 0;
  font-family: 'Press Start 2P', cursive;
  background-color: #0a0a2e;
  color: #ffffff;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar (optional) */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #0a0a2e;
}

::-webkit-scrollbar-thumb {
  background: #7e57c2;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9575cd;
}
```

**Font choices explained:**

| Font | Use Case | Character |
|------|----------|-----------|
| Press Start 2P | Headers, retro elements | Pixel art aesthetic |
| Orbitron | Body text, modern sections | Futuristic, readable |
| System fonts | Fallback | Performance |

---

### 4.2. Configure App Shell

**File: `src/pages/_app.tsx`**

```typescript
import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

**Why `_app.tsx` is important:**
- Wraps all pages in your application
- Only place to import global CSS
- Perfect for layout components
- Persists between page navigations

---

### 4.3. Build Main Page

**File: `src/pages/index.tsx`**

```typescript
import Head from 'next/head';
import NyanBackground from '../components/NyanBackground';
import Card from '../components/Card';

// Sample data for cards
const cardData = [
  {
    title: 'Fast Development',
    content: 'Build modern web apps with Next.js and TypeScript in record time.',
  },
  {
    title: 'Modern Design',
    content: 'Glassmorphism effects and smooth animations create a premium feel.',
  },
  {
    title: 'Fully Responsive',
    content: 'Works perfectly on all devices, from mobile to desktop.',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Vibe Web3 Landing Page</title>
        <meta name="description" content="Modern landing page with Next.js and Tailwind CSS" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Animated background */}
      <NyanBackground />

      {/* Main content */}
      <main className="relative flex min-h-screen items-center justify-center p-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title}>
              <p>{card.content}</p>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
```

**Layout breakdown:**

```typescript
// Centering container
className="relative flex min-h-screen items-center justify-center p-4"

// relative         - Establishes stacking context
// flex             - Enable flexbox
// min-h-screen     - Minimum full viewport height
// items-center     - Vertical centering
// justify-center   - Horizontal centering
// p-4              - Padding on all sides
```

```typescript
// Responsive grid
className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl"

// grid             - CSS Grid layout
// gap-8            - 2rem spacing between items
// md:grid-cols-2   - 2 columns on medium screens
// lg:grid-cols-3   - 3 columns on large screens
// max-w-6xl        - Maximum width constraint
```

**Responsive behavior:**

| Screen Size | Columns | Gap |
|------------|---------|-----|
| Mobile (< 768px) | 1 | 2rem |
| Tablet (768px+) | 2 | 2rem |
| Desktop (1024px+) | 3 | 2rem |

---

### 4.4. Add Dynamic Content

Enhance the page with more interactive elements:

```typescript
// Add hero section
<main className="relative flex min-h-screen flex-col items-center justify-center p-4">
  {/* Hero Section */}
  <div className="mb-16 text-center">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-bobbing">
      Welcome to the Future
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
      Experience modern web development with cutting-edge technologies
    </p>
  </div>

  {/* Cards Grid */}
  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
    {cardData.map((card, index) => (
      <Card key={index} title={card.title}>
        <p>{card.content}</p>
      </Card>
    ))}
  </div>
</main>
```

---

## Part 5: Deployment

### 5.1. Build for Production

**Prepare your site:**

```bash
# Install dependencies
npm install

# Run development server (test locally)
npm run dev

# Create production build
npm run build

# Test production build locally
npm start
```

**Build output explained:**
```
Page                              Size     First Load JS
┌ ○ /                            1.5 kB          75.2 kB
└ ○ /404                         182 B           73.9 kB
```

- **○** = Static page (pre-rendered at build time)
- **Size** = Page-specific JavaScript
- **First Load JS** = Total JavaScript for first page load

---

### 5.2. Deploy to Vercel

**Recommended hosting: Vercel (creators of Next.js)**

**Steps:**

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Next.js settings
   - Click "Deploy"

3. **Automatic deployments:**
   - Every push to `main` triggers a new deployment
   - Preview deployments for pull requests
   - Instant rollbacks if needed

**Alternative hosting options:**
- **Netlify** - Similar to Vercel, easy setup
- **GitHub Pages** - Free, requires next export
- **AWS Amplify** - Enterprise-grade hosting
- **Cloudflare Pages** - Fast global CDN

---

### 5.3. Configure for GitHub Pages

If deploying to GitHub Pages:

**File: `next.config.js`**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
};

module.exports = nextConfig;
```

**Deploy script in `package.json`:**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

---

## Troubleshooting

### Common Issues

**Issue: Animations not working**

**Solution:**
- Verify `tailwind.config.js` is properly configured
- Check that Tailwind directives are imported in `globals.css`
- Restart dev server after config changes

```bash
# Stop server (Ctrl+C) and restart
npm run dev
```

---

**Issue: Background image not showing**

**Solution:**
- Confirm `stars.png` is in `public/` directory
- Use inline styles instead of Tailwind arbitrary values for background images
- Verify image URL in component matches filename exactly

```typescript
// Correct - Use inline style
style={{ backgroundImage: "url('/stars.png')" }}

// Incorrect - Don't use relative paths
style={{ backgroundImage: "url('./stars.png')" }}
style={{ backgroundImage: "url('stars.png')" }}
```

---

**Issue: Glassmorphism effect not visible**

**Solution:**
- Ensure element has semi-transparent background
- Verify `backdrop-blur` is supported in browser
- Check that animated background is rendering behind cards

```typescript
// Must have transparent background for effect to show
className="bg-white/10 backdrop-blur-lg"  // ✓ Correct
className="bg-white backdrop-blur-lg"     // ✗ Wrong (opaque)
```

---

**Issue: TypeScript errors**

**Solution:**
- Install type definitions:
```bash
npm install --save-dev @types/react @types/node
```

- Ensure `tsconfig.json` is properly configured
- Check that all components have proper type annotations

---

**Issue: Build fails on deployment**

**Solution:**
- Test build locally first: `npm run build`
- Check for console errors in development
- Verify all imports use correct file paths
- Ensure no development-only code in production build

---

**Issue: Cards not responsive on mobile**

**Solution:**
- Add viewport meta tag in `_app.tsx`
- Use responsive Tailwind classes (`md:`, `lg:`)
- Test with browser DevTools mobile view

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

---

## Next Steps

### Enhance Your Project

1. **Add more animations:**
   - Scroll-triggered animations with `framer-motion`
   - Page transitions between routes
   - Loading states and skeletons

2. **Improve interactivity:**
   - Add form handling
   - Implement modal dialogs
   - Create interactive navigation

3. **Optimize performance:**
   - Implement lazy loading for images
   - Add service worker for offline support
   - Optimize bundle size with code splitting

4. **Integrate Web3:**
   - Connect wallet functionality
   - Smart contract interactions
   - Token displays and transfers

### Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

**Congratulations! You've built a modern, animated landing page from scratch.**

Ready to customize further? Check out the component files and experiment with different colors, animations, and layouts.
