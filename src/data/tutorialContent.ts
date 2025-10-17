// Hero Section Content
export interface HeroContent {
  title: {
    line1: string;
    line2: string;
  };
  description: string;
  cloneCommand: string;
  ctaText: string;
}

export const heroContent: HeroContent = {
  title: {
    line1: "Web3 Apps",
    line2: "Starter Kit"
  },
  description: "Your starter web kit for building web3 apps on the Zilliqa ecosystem. EVM-first and beginner-friendly.",
  cloneCommand: "git clone https://github.com/lukozill/web3-app-starter-kit.git",
  ctaText: "Get Started"
};

// Tutorial Steps Content
export interface TutorialStep {
  stepNumber: number;
  title: string;
  icon: string;
  description: string;
  sections: {
    title?: string;
    content: string[];
    type: 'paragraph' | 'list' | 'code' | 'link-card' | 'expandable';
    items?: Array<{
      title?: string;
      description?: string;
      url?: string;
      icon?: string;
      features?: string[];
      code?: string;
      language?: string;
    }>;
  }[];
}

export const tutorialSteps: TutorialStep[] = [
  {
    stepNumber: 1,
    title: "Prerequisites - Get Your Tools Ready",
    icon: "FaDownload",
    description: "Before you start building, you'll need to install two essential tools. Choose your preferred IDE and get GitHub Desktop for easy repository management.",
    sections: [
      {
        title: "Step 1: Choose Your IDE",
        type: "link-card",
        content: ["Choose between Cursor (AI-powered) or VS Code (traditional editor)"],
        items: [
          {
            title: "Cursor IDE",
            description: "AI-powered coding assistant built-in",
            url: "https://www.cursor.com",
            icon: "✨",
            features: [
              "Built-in AI assistant (ChatGPT + Claude)",
              "Auto-completion with AI",
              "Great for beginners learning Web3"
            ]
          },
          {
            title: "VS Code",
            description: "Traditional, powerful, and customizable",
            url: "https://code.visualstudio.com",
            icon: "💻",
            features: [
              "Most popular code editor",
              "Tons of extensions available",
              "Lightweight and fast"
            ]
          }
        ]
      },
      {
        title: "Step 2: Install GitHub Desktop",
        type: "paragraph",
        content: [
          "GitHub Desktop makes it easy to clone repositories and manage your code without using command-line git.",
          "Download GitHub Desktop from github.com/desktop and install it on your computer."
        ]
      },
      {
        title: "Why These Tools?",
        type: "expandable",
        content: [],
        items: [
          {
            description: "These tools will help you code faster and manage your project effortlessly. Cursor/VS Code gives you a great coding environment, and GitHub Desktop handles all the git complexity for you - no terminal commands needed!"
          }
        ]
      },
      {
        title: "Quick Tips",
        type: "expandable",
        content: [],
        items: [
          {
            description: "Once you have your tools installed, you're ready to clone the starter repository and begin building. Remember to commit your changes regularly to GitHub so you never lose your progress!"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 2,
    title: "Clone Repo - Get the Code",
    icon: "FaFolderOpen",
    description: "Now let's get the starter kit onto your computer. We'll use GitHub Desktop to clone the repository - it's much easier than using command-line git!",
    sections: [
      {
        type: "list",
        content: [
          "Open GitHub Desktop",
          "Click 'File' → 'Clone Repository'",
          "Go to the 'URL' tab",
          "Paste this repository URL: https://github.com/lukozill/web3-app-starter-kit",
          "Choose where to save it on your computer",
          "Click 'Clone'",
          "Once cloned, click 'Open in Cursor' (or 'Open in VS Code')"
        ]
      },
      {
        title: "Need Help?",
        type: "expandable",
        content: [],
        items: [
          {
            title: "Don't have GitHub Desktop?",
            description: "Download it from github.com/desktop - it's free and makes git much easier!"
          },
          {
            title: "Repository not found?",
            description: "Make sure you copied the full URL: https://github.com/lukozill/web3-app-starter-kit"
          },
          {
            title: "Want to use terminal instead?",
            code: "git clone https://github.com/lukozill/web3-app-starter-kit.git",
            language: "bash"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 3,
    title: "Plan App - Blueprint Your App",
    icon: "FaFile",
    description: "Before writing any code, let's plan what you want to build. Create a features.md file to document your app's features - this will guide both you and AI assistants.",
    sections: [
      {
        type: "paragraph",
        content: [
          "In your project folder, create a new file called features.md and describe what your app should do. Be specific about each feature - this becomes your development roadmap."
        ]
      },
      {
        title: "Example features.md Template",
        type: "code",
        content: [],
        items: [
          {
            code: `# My Web3 App Features

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
- Export to CSV`,
            language: "markdown"
          }
        ]
      },
      {
        title: "Smart Planning Tips",
        type: "expandable",
        content: [],
        items: [
          {
            description: "Start with 2-3 core features. You can always add more later! Each feature should be clear and specific. This helps AI assistants (like Cursor's AI) generate better code for you."
          }
        ]
      },
      {
        title: "Example Features to Get Started",
        type: "expandable",
        content: [],
        items: [
          {
            title: "NFT Gallery",
            description: "Display NFTs owned by connected wallet"
          },
          {
            title: "Token Swap",
            description: "Exchange one token for another"
          },
          {
            title: "Smart Contract Interaction",
            description: "Read/write data from a deployed contract"
          },
          {
            title: "Profile Page",
            description: "Show user's Web3 identity and stats"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 4,
    title: "Start Building - Code with AI Assistance",
    icon: "FaWandMagicSparkles",
    description: "Now the fun part - building your app! If you're using Cursor IDE, you can use AI to help generate components and features. If you're using VS Code, you can still follow the features.md file as your guide.",
    sections: [
      {
        type: "paragraph",
        content: [
          "Open your features.md file and start implementing features one by one. Use AI assistants to help generate boilerplate code, explain concepts, or debug issues."
        ]
      },
      {
        title: "Pro Tips for Development",
        type: "list",
        content: [
          "Start with the simplest feature first (usually Wallet Connection)",
          "Test each feature before moving to the next one",
          "Use your features.md as a checklist - check off completed items",
          "Commit your changes regularly to GitHub"
        ]
      },
      {
        title: "🤖 Example AI Prompts to Get Started",
        type: "expandable",
        content: [],
        items: [
          {
            title: "For Component Generation:",
            description: "\"Create a WalletConnect button component that allows users to connect their MetaMask wallet. Include error handling and display the connected address.\""
          },
          {
            title: "For Feature Implementation:",
            description: "\"Implement the Dashboard feature from features.md. Use React hooks for state management and integrate with Web3.js to fetch wallet balance.\""
          },
          {
            title: "For Debugging:",
            description: "\"I'm getting an error 'Cannot read property of undefined' when connecting to MetaMask. Help me debug this issue.\""
          }
        ]
      },
      {
        title: "⚡ Quick Tips for AI-Assisted Development",
        type: "expandable",
        content: [],
        items: [
          {
            description: "• Be specific with your prompts - include context and expected behavior\n• Reference your features.md file when asking for implementations\n• Ask the AI to explain code before you use it\n• Request unit tests alongside component generation\n• Iterate and refine - AI-generated code is a starting point"
          }
        ]
      }
    ]
  },
  {
    stepNumber: 5,
    title: "How to Deploy",
    icon: "FaRocket",
    description: "Your app is ready! Now it's time to deploy it to the world. Choose from these popular platforms:",
    sections: [
      {
        title: "Deployment Platforms",
        type: "link-card",
        content: ["Choose the platform that best fits your needs"],
        items: [
          {
            title: "Vercel",
            description: "Best for Next.js apps",
            url: "https://vercel.com",
            features: [
              "✓ Zero configuration",
              "✓ Auto deployments from GitHub",
              "✓ Built-in preview URLs"
            ]
          },
          {
            title: "Netlify",
            description: "Great for static sites",
            url: "https://netlify.com",
            features: [
              "✓ Easy drag-and-drop deploy",
              "✓ Form handling included",
              "✓ Serverless functions"
            ]
          },
          {
            title: "GitHub Pages",
            description: "Free hosting from GitHub",
            url: "https://pages.github.com",
            features: [
              "✓ Completely free",
              "✓ Custom domain support",
              "✓ Direct from repository"
            ]
          }
        ]
      },
      {
        title: "🚀 Step-by-Step Deployment Guide",
        type: "expandable",
        content: [],
        items: [
          {
            title: "Deploying to Vercel:",
            description: "1. Go to vercel.com and sign up/login\n2. Click \"Add New Project\"\n3. Import your GitHub repository\n4. Vercel auto-detects Next.js - just click \"Deploy\"\n5. Your site is live in ~30 seconds!"
          },
          {
            title: "Deploying to Netlify:",
            description: "1. Go to netlify.com and sign up/login\n2. Click \"Add new site\" → \"Import an existing project\"\n3. Connect to GitHub and select your repo\n4. Configure build settings (usually auto-detected)\n5. Click \"Deploy site\""
          },
          {
            title: "Deploying to GitHub Pages:",
            description: "1. Run npm run build\n2. Push your out/ directory to gh-pages branch\n3. Go to repo Settings → Pages\n4. Select gh-pages branch as source\n5. Your site will be live at username.github.io/repo-name"
          }
        ]
      }
    ]
  }
];

export const stepTitles = tutorialSteps.map(step => step.title.split(' - ')[0]);
