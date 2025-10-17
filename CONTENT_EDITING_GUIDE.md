# Content Editing Guide

This project uses a centralized content management system where all copy lives in one file.

## 📄 Single Source of Truth

All content is stored in: **`src/data/tutorialContent.ts`**

This file contains:
- Hero section content (title, description, clone command, CTA button text)
- All 5 tutorial steps with their complete content
- Structured, typed data that's easy to edit

## 🔄 How It Works

### Edit Content
1. Open `src/data/tutorialContent.ts`
2. Edit any text, links, or content
3. Save the file

### See Changes

**On the website:**
- Changes appear automatically (hot reload)
- Hero section reads from `heroContent`
- Tutorial section will read from `tutorialSteps` (when refactored)

**Generate markdown file:**
```bash
npm run generate:readme
```
- Creates/updates `TUTORIAL.md` at project root
- Perfect for GitHub, documentation, or sharing

## 📝 Content Structure

### Hero Content
```typescript
export const heroContent: HeroContent = {
  title: {
    line1: "Vibe Web3",
    line2: "Starting Point"
  },
  description: "Your starter web kit for building apps on the Zilliqa ecosystem...",
  cloneCommand: "git clone https://github.com/lukozill/web3-app-starter-kit.git",
  ctaText: "Get Started"
};
```

### Tutorial Steps
Each step has:
- `stepNumber`: The step number (1-5)
- `title`: The step title
- `icon`: Icon name (for React Icons)
- `description`: Short description
- `sections`: Array of content sections

Section types:
- `paragraph`: Plain text paragraphs
- `list`: Bullet point lists
- `code`: Code blocks with syntax highlighting
- `link-card`: Clickable cards with links
- `expandable`: Collapsible sections

## 🎯 Example Workflow

**Scenario:** Update the hero description

1. **Edit** `src/data/tutorialContent.ts`:
```typescript
export const heroContent: HeroContent = {
  // ...
  description: "Build amazing dApps on Zilliqa's EVM-compatible blockchain!",
  // ...
};
```

2. **View** changes instantly in browser (dev server auto-reloads)

3. **Generate** markdown:
```bash
npm run generate:readme
```

4. **Result**: Both website and TUTORIAL.md are updated!

## ✅ Benefits

- **Single Edit**: Change content once, updates everywhere
- **Type Safety**: TypeScript catches errors before runtime
- **Version Control**: All content changes tracked in git
- **Easy Review**: See all copy in one structured file
- **Export Ready**: Generate markdown for docs/README instantly

## 🚀 Quick Commands

```bash
# Run dev server
npm run dev

# Generate TUTORIAL.md
npm run generate:readme

# Build for production
npm run build
```

## 📍 File Locations

- **Content Data**: `src/data/tutorialContent.ts`
- **Hero Component**: `src/components/hero/HeroSection.tsx`
- **Tutorial Component**: `src/components/tutorial/TutorialSection.tsx`
- **Generator Script**: `scripts/generate-readme.ts`
- **Generated Output**: `TUTORIAL.md`

---

**Pro Tip**: When editing content, keep your dev server running to see changes instantly!
