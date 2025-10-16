# Vibe Web3 Starting Point

A modern, cyberpunk-themed Web3 starter kit built with Next.js, TypeScript, and Tailwind CSS. Get from idea to implementation quickly using AI-powered development tools.

## What You'll Build

This starter kit provides a fully-configured development environment with:
- Next.js 15 with Pages Router
- TypeScript for type safety
- Tailwind CSS 4 with custom animations
- Modern glassmorphism UI components
- Responsive cyberpunk-themed design
- AI agent integration ready

## Prerequisites

Before you begin, ensure you have:
- A GitHub account ([create one free here](https://github.com/))
- Basic familiarity with web development
- A modern IDE (Cursor or VS Code recommended)

**Estimated time:** 15-20 minutes

---

## Getting Started

### 1. Get Your Own Copy of the Starter Kit

Fork the starter repository to create your own version that you can modify freely.

**Steps:**
1. Visit the repository: [web3-app-starter-kit](https://github.com/lukozill/web3-app-starter-kit)
2. Click the **Fork** button in the top-right corner
3. GitHub will create a copy under your account

**Why this matters:** Forking creates your own copy of the project, allowing you to make changes without affecting the original repository. This is your workspace.

**Common issues:**
- If you don't see the Fork button, make sure you're logged into GitHub
- If you already forked it, you can use your existing fork

---

### 2. Get Your Starter Kit Copy on Your Machine

Clone your forked repository to your local computer so you can edit and run it.

**Steps:**
1. Download and install [GitHub Desktop](https://desktop.github.com/download/)
2. Open GitHub Desktop and log in with your GitHub account
3. Click **File** > **Clone Repository**
4. Select your forked repository from the list
5. Choose a local folder location
6. Click **Clone**

**Alternative (Command Line):**
```bash
git clone https://github.com/YOUR-USERNAME/web3-app-starter-kit.git
cd web3-app-starter-kit
```

**Why this matters:** Cloning downloads all the project files to your computer. You need a local copy to edit code and run the development server.

**Common issues:**
- Make sure you're cloning YOUR fork, not the original repository
- If GitHub Desktop asks for permission, grant it access to your repositories

---

### 3. Select the IDE That Suits You

Choose your development environment. The starter kit works best with AI-powered IDEs.

**Recommended Options:**

#### Option A: Cursor (Recommended for Beginners)
- Built-in AI assistant
- Easy to use interface
- Optimized for AI-powered development
- [Download Cursor](https://cursor.com/docs/get-started/quickstart)

#### Option B: VS Code with GitHub Copilot
- Industry standard editor
- Extensive extension ecosystem
- Requires GitHub Copilot setup
- [Setup VS Code + Copilot](https://code.visualstudio.com/docs/copilot/setup)

**If you're unsure, choose Cursor.** It has better AI integration out of the box.

**Why this matters:** Modern AI-powered IDEs can help write code, explain concepts, and catch errors as you type. This dramatically speeds up development.

---

### 4. Start Building

Open your project and start the development server.

**Steps:**

1. **Open the project in your IDE:**
   - In Cursor/VS Code: File > Open Folder > Select your cloned directory

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This downloads all required packages (takes 1-2 minutes).

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View your application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser

**Why this matters:** The development server provides live reloading - any changes you make to the code will instantly appear in your browser.

**Common issues:**
- If `npm install` fails, ensure you have Node.js installed (v18 or higher)
- If port 3000 is busy, the server will use 3001 or another available port
- Check the terminal for the actual URL if localhost:3000 doesn't work

---

## Next Steps

Now that your environment is set up, you can:

1. **Explore the code:** Check out [src/components/CyberpunkHero.tsx](./src/components/CyberpunkHero.tsx) to see how the UI is built
2. **Follow the detailed tutorial:** See [instructions.md](./instructions.md) for an in-depth guide
3. **Customize the design:** Modify colors, animations, and content to match your vision
4. **Build your features:** Use AI agents to implement your ideas quickly

## Project Structure

```
vibe_web3_starting_point/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Next.js pages (routing)
│   ├── styles/        # Global styles and Tailwind config
│   └── lib/           # Utility functions
├── public/            # Static assets (images, fonts)
└── package.json       # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Run production server

## Need Help?

- Check the [detailed tutorial](./instructions.md) for comprehensive guidance
- Review [public/tutorial-images/README.md](./public/tutorial-images/README.md) for visual guides
- Common issues are documented in each step above

---

**Ready to build something amazing? Start customizing your project now!**