# Vibe Web3 Starting Point

Your starter web kit for building apps on the Zilliqa ecosystem. EVM-first and beginner-friendly.

## Quick Start

```bash
git clone https://github.com/lukozill/web3-app-starter-kit.git
cd web3-app-starter-kit
npm install
npm run dev
```

---

## Tutorial Steps


## 1. Prerequisites - Get Your Tools Ready

Before you start building, you'll need to install two essential tools. Choose your preferred IDE and get GitHub Desktop for easy repository management.

### Step 1: Choose Your IDE

#### ✨ [Cursor IDE](https://www.cursor.com)

AI-powered coding assistant built-in

- Built-in AI assistant (ChatGPT + Claude)
- Auto-completion with AI
- Great for beginners learning Web3

#### 💻 [VS Code](https://code.visualstudio.com)

Traditional, powerful, and customizable

- Most popular code editor
- Tons of extensions available
- Lightweight and fast

### Step 2: Install GitHub Desktop

GitHub Desktop makes it easy to clone repositories and manage your code without using command-line git.

Download GitHub Desktop from github.com/desktop and install it on your computer.

### Why These Tools?

These tools will help you code faster and manage your project effortlessly. Cursor/VS Code gives you a great coding environment, and GitHub Desktop handles all the git complexity for you - no terminal commands needed!

### Quick Tips

Once you have your tools installed, you're ready to clone the starter repository and begin building. Remember to commit your changes regularly to GitHub so you never lose your progress!

---

## 2. Clone Repo - Get the Code

Now let's get the starter kit onto your computer. We'll use GitHub Desktop to clone the repository - it's much easier than using command-line git!

- Open GitHub Desktop
- Click 'File' → 'Clone Repository'
- Go to the 'URL' tab
- Paste this repository URL: https://github.com/lukozill/web3-app-starter-kit
- Choose where to save it on your computer
- Click 'Clone'
- Once cloned, click 'Open in Cursor' (or 'Open in VS Code')

### Need Help?

**Don't have GitHub Desktop?**

Download it from github.com/desktop - it's free and makes git much easier!

**Repository not found?**

Make sure you copied the full URL: https://github.com/lukozill/web3-app-starter-kit

**Want to use terminal instead?**

```bash
git clone https://github.com/lukozill/web3-app-starter-kit.git
```

---

## 3. Plan App - Blueprint Your App

Before writing any code, let's plan what you want to build. Create a features.md file to document your app's features - this will guide both you and AI assistants.

In your project folder, create a new file called features.md and describe what your app should do. Be specific about each feature - this becomes your development roadmap.

### Example features.md Template

```markdown
# My Web3 App Features

## 1. Wallet Connection
- Users can connect their MetaMask wallet
- Display connected wallet address
- Show wallet balance

## 2. Dashboard
- Show user's wallet information
- Display recent transactions
- View token balances

## 3. Token Transfer
- Send tokens to another address
- Input validation for addresses
- Transaction confirmation

## 4. Transaction History
- List all past transactions
- Filter by date/type
- Export to CSV
```

### Smart Planning Tips

Start with 2-3 core features. You can always add more later! Each feature should be clear and specific. This helps AI assistants (like Cursor's AI) generate better code for you.

### Example Features to Get Started

**NFT Gallery**

Display NFTs owned by connected wallet

**Token Swap**

Exchange one token for another

**Smart Contract Interaction**

Read/write data from a deployed contract

**Profile Page**

Show user's Web3 identity and stats

---

## 4. Start Building - Code with AI Assistance

Now the fun part - building your app! If you're using Cursor IDE, you can use AI to help generate components and features. If you're using VS Code, you can still follow the features.md file as your guide.

Open your features.md file and start implementing features one by one. Use AI assistants to help generate boilerplate code, explain concepts, or debug issues.

### Pro Tips for Development

- Start with the simplest feature first (usually Wallet Connection)
- Test each feature before moving to the next one
- Use your features.md as a checklist - check off completed items
- Commit your changes regularly to GitHub

### 🤖 Example AI Prompts to Get Started

**For Component Generation:**

"Create a WalletConnect button component that allows users to connect their MetaMask wallet. Include error handling and display the connected address."

**For Feature Implementation:**

"Implement the Dashboard feature from features.md. Use React hooks for state management and integrate with Web3.js to fetch wallet balance."

**For Debugging:**

"I'm getting an error 'Cannot read property of undefined' when connecting to MetaMask. Help me debug this issue."

### ⚡ Quick Tips for AI-Assisted Development

• Be specific with your prompts - include context and expected behavior
• Reference your features.md file when asking for implementations
• Ask the AI to explain code before you use it
• Request unit tests alongside component generation
• Iterate and refine - AI-generated code is a starting point

---

## 5. How to Deploy

Your app is ready! Now it's time to deploy it to the world. Choose from these popular platforms:

### Deployment Platforms

#### 🔗 [Vercel](https://vercel.com)

Best for Next.js apps

- ✓ Zero configuration
- ✓ Auto deployments from GitHub
- ✓ Built-in preview URLs

#### 🔗 [Netlify](https://netlify.com)

Great for static sites

- ✓ Easy drag-and-drop deploy
- ✓ Form handling included
- ✓ Serverless functions

#### 🔗 [GitHub Pages](https://pages.github.com)

Free hosting from GitHub

- ✓ Completely free
- ✓ Custom domain support
- ✓ Direct from repository

### 🚀 Step-by-Step Deployment Guide

**Deploying to Vercel:**

1. Go to vercel.com and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js - just click "Deploy"
5. Your site is live in ~30 seconds!

**Deploying to Netlify:**

1. Go to netlify.com and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repo
4. Configure build settings (usually auto-detected)
5. Click "Deploy site"

**Deploying to GitHub Pages:**

1. Run npm run build
2. Push your out/ directory to gh-pages branch
3. Go to repo Settings → Pages
4. Select gh-pages branch as source
5. Your site will be live at username.github.io/repo-name

---

## Resources

- [Zilliqa Documentation](https://dev.zilliqa.com/)
- [Zilliqa GitHub](https://github.com/Zilliqa)
- [Web3.js Documentation](https://web3js.readthedocs.io/)

## License

MIT

---

**Powered by Zilliqa** 🚀
