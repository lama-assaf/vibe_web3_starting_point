import React, { useState, useEffect } from 'react';
import {
  FaFolderOpen,
  FaDownload,
  FaFile,
  FaListCheck,
  FaCode,
  FaWandMagicSparkles,
  FaRocket,
} from 'react-icons/fa6';
import TutorialStep from './TutorialStep';
import ModernSidebarNav from './ModernSidebarNav';
import CopyButton from '../ui/CopyButton';
import ExpandableSection from '../ui/ExpandableSection';

export const TutorialSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const stepTitles = ['Clone Repo', 'Plan App', 'Start Building', 'Deploy'];

  // Observer to detect when we're scrolled back to hero
  useEffect(() => {
    const tutorialSection = document.getElementById('tutorial-section');
    if (!tutorialSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If tutorial section is NOT in view (we're in hero), reset to step 0
          if (!entry.isIntersecting && entry.boundingClientRect.top > 0) {
            setCurrentStep(0);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '-50% 0px -50% 0px', // Trigger when section is past middle of viewport
      }
    );

    observer.observe(tutorialSection);

    return () => observer.disconnect();
  }, []);

  const handleStepEnterView = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  const handleStepClick = (stepNumber: number) => {
    const stepElement = document.getElementById(`step-${stepNumber}`);
    if (stepElement) {
      const offset = 100; // Offset for fixed header
      const elementPosition = stepElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="tutorial-section" className="relative min-h-screen py-20 lg:py-32 lg:pl-64">
      {/* Modern Sidebar Navigation */}
      <ModernSidebarNav
        currentStep={currentStep}
        totalSteps={4}
        stepTitles={stepTitles}
        onStepClick={handleStepClick}
      />

      {/* Tutorial Steps */}
      <div className="relative z-10">
        {/* Step 1: Clone Your Repo */}
        <TutorialStep
          stepNumber={1}
          icon={<FaFolderOpen />}
          title="Clone Your Repo Using GitHub App"
          onEnterView={handleStepEnterView}
          content={
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Open GitHub Desktop and log in with your GitHub account</li>
                <li>Click <strong className="text-cyan-300">"Clone Repository"</strong> from the File menu</li>
                <li>
                  Select your forked <strong className="text-cyan-300">vibe-web3-starter-kit</strong> repository
                </li>
                <li>Choose a local path where you want to save the project</li>
                <li>Click <strong className="text-cyan-300">"Clone"</strong> and wait for the download to complete</li>
              </ul>
            </div>
          }
          interactiveElement={
            <div className="space-y-4">
              <CopyButton
                text="https://github.com/lukozill/web3-app-starter-kit.git"
                label="Copy Repo URL"
              />
              <ExpandableSection title="Need Help? Click for detailed instructions">
                <div className="space-y-3 text-sm text-gray-300">
                  <p>
                    <strong className="text-purple-300">First time using GitHub Desktop?</strong>
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>
                      Download and install{' '}
                      <a
                        href="https://desktop.github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 underline hover:text-cyan-300"
                      >
                        GitHub Desktop
                      </a>
                    </li>
                    <li>Sign in with your GitHub account</li>
                    <li>Go to File → Clone Repository</li>
                    <li>
                      Paste the repository URL or search for it by name in the "URL" tab
                    </li>
                    <li>Select where on your computer you want to save it</li>
                    <li>Click "Clone" and you're done!</li>
                  </ol>
                  <p className="mt-3 text-cyan-300">
                    📚{' '}
                    <a
                      href="https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-cyan-200"
                    >
                      Official GitHub Desktop Documentation
                    </a>
                  </p>
                </div>
              </ExpandableSection>
            </div>
          }
        />

        {/* Step 2: Plan Your App */}
        <TutorialStep
          stepNumber={2}
          icon={<FaFile />}
          title="Plan Your App - Write Clear Documentation"
          onEnterView={handleStepEnterView}
          content={
            <div className="space-y-4">
              <p className="text-gray-200">
                Before you start coding, take time to plan your application properly. Clear documentation helps AI
                agents understand exactly what you want to build.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>Create a <code className="bg-white/5 px-2 py-1 rounded-md text-cyan-400 font-mono text-sm border border-white/10">features.md</code> file in your project root</li>
                <li>List all features you want to build with detailed descriptions</li>
                <li>Be specific about requirements and user stories</li>
                <li>Include mockups or wireframes if available</li>
              </ul>
            </div>
          }
          interactiveElement={
            <div className="space-y-4">
              <ExpandableSection title="📋 View Example Features Template" defaultExpanded={false}>
                <div className="space-y-3 text-sm">
                  <pre className="bg-white/5 p-4 rounded-xl overflow-x-auto text-gray-300 border border-white/10 font-mono text-sm">
{`# Feature List

## User Authentication
- User can sign up with email and password
- User can log in with existing credentials
- User can reset password via email
- Session persists across browser closes

## Dashboard
- Display user's connected wallet address
- Show current balance in ETH and USD
- List recent transactions with timestamps
- Responsive design for mobile and desktop

## Web3 Integration
- Connect to MetaMask wallet
- Support for Ethereum mainnet and testnets
- Display network status and switch networks
- Handle transaction signing and confirmation`}
                  </pre>
                  <CopyButton
                    text={`# Feature List\n\n## User Authentication\n- User can sign up with email and password\n- User can log in with existing credentials\n- User can reset password via email\n- Session persists across browser closes\n\n## Dashboard\n- Display user's connected wallet address\n- Show current balance in ETH and USD\n- List recent transactions with timestamps\n- Responsive design for mobile and desktop\n\n## Web3 Integration\n- Connect to MetaMask wallet\n- Support for Ethereum mainnet and testnets\n- Display network status and switch networks\n- Handle transaction signing and confirmation`}
                    label="Copy Template"
                  />
                </div>
              </ExpandableSection>
              <ExpandableSection title="💡 Tips for Writing Good Documentation">
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Use clear, actionable language (User can..., System should...)</li>
                  <li>Break down complex features into smaller sub-features</li>
                  <li>Include acceptance criteria for each feature</li>
                  <li>Mention any technical constraints or preferences</li>
                  <li>Update the document as requirements evolve</li>
                </ul>
              </ExpandableSection>
            </div>
          }
        />

        {/* Step 3: Start Building */}
        <TutorialStep
          stepNumber={3}
          icon={<FaCode />}
          title="Start Building"
          onEnterView={handleStepEnterView}
          content={
            <div className="space-y-4">
              <p className="text-gray-200">
                Now that you have your plan, open your project in Cursor IDE and start building with AI assistance.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-200">
                <li>
                  Open your cloned project in <strong className="text-cyan-300">Cursor IDE</strong>
                </li>
                <li>Use AI agents to generate components based on your features list</li>
                <li>Review and refine the generated code</li>
                <li>Test each component as you build</li>
                <li>Commit your changes regularly to GitHub</li>
              </ul>
            </div>
          }
          interactiveElement={
            <div className="space-y-4">
              <ExpandableSection title="🤖 Example AI Prompts to Get Started">
                <div className="space-y-3 text-sm">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-purple-300 font-semibold mb-2">For Component Generation:</p>
                    <p className="text-gray-300">
                      "Create a WalletConnect button component that allows users to connect their MetaMask wallet.
                      Include error handling and display the connected address."
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-purple-300 font-semibold mb-2">For Feature Implementation:</p>
                    <p className="text-gray-300">
                      "Implement the Dashboard feature from features.md. Use React hooks for state management and
                      integrate with Web3.js to fetch wallet balance."
                    </p>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <p className="text-purple-300 font-semibold mb-2">For Debugging:</p>
                    <p className="text-gray-300">
                      "I'm getting an error 'Cannot read property of undefined' when connecting to MetaMask. Help me
                      debug this issue."
                    </p>
                  </div>
                </div>
              </ExpandableSection>
              <ExpandableSection title="⚡ Quick Tips for AI-Assisted Development">
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300">
                  <li>Be specific with your prompts - include context and expected behavior</li>
                  <li>Reference your features.md file when asking for implementations</li>
                  <li>Ask the AI to explain code before you use it</li>
                  <li>Request unit tests alongside component generation</li>
                  <li>Iterate and refine - AI-generated code is a starting point</li>
                </ul>
              </ExpandableSection>
            </div>
          }
        />

        {/* Step 4: Deploy */}
        <TutorialStep
          stepNumber={4}
          icon={<FaRocket />}
          title="How to Deploy"
          onEnterView={handleStepEnterView}
          content={
            <div className="space-y-4">
              <p className="text-gray-200">
                Your app is ready! Now it's time to deploy it to the world. Choose from these popular platforms:
              </p>
            </div>
          }
          interactiveElement={
            <div className="space-y-4">
              {/* Platform Comparison Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Vercel */}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-white/5 backdrop-blur-sm
                    border border-white/10 hover:bg-white/[0.03] hover:border-cyan-400/50
                    hover:shadow-[inset_0_0_25px_rgba(6,182,212,0.2)]
                    transition-all duration-300"
                >
                  <h4 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Vercel
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">Best for Next.js apps</p>
                  <ul className="text-xs text-gray-400 space-y-1.5">
                    <li>✓ Zero configuration</li>
                    <li>✓ Auto deployments from GitHub</li>
                    <li>✓ Built-in preview URLs</li>
                  </ul>
                </a>

                {/* Netlify */}
                <a
                  href="https://netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-white/5 backdrop-blur-sm
                    border border-white/10 hover:bg-white/[0.03] hover:border-green-400/50
                    hover:shadow-[inset_0_0_25px_rgba(34,197,94,0.2)]
                    transition-all duration-300"
                >
                  <h4 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Netlify
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">Great for static sites</p>
                  <ul className="text-xs text-gray-400 space-y-1.5">
                    <li>✓ Easy drag-and-drop deploy</li>
                    <li>✓ Form handling included</li>
                    <li>✓ Serverless functions</li>
                  </ul>
                </a>

                {/* GitHub Pages */}
                <a
                  href="https://pages.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-5 rounded-xl bg-white/5 backdrop-blur-sm
                    border border-white/10 hover:bg-white/[0.03] hover:border-purple-400/50
                    hover:shadow-[inset_0_0_25px_rgba(168,85,247,0.2)]
                    transition-all duration-300"
                >
                  <h4 className="text-white font-semibold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    GitHub Pages
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">Free hosting from GitHub</p>
                  <ul className="text-xs text-gray-400 space-y-1.5">
                    <li>✓ Completely free</li>
                    <li>✓ Custom domain support</li>
                    <li>✓ Direct from repository</li>
                  </ul>
                </a>
              </div>

              <ExpandableSection title="🚀 Step-by-Step Deployment Guide">
                <div className="space-y-4 text-sm">
                  <div>
                    <h5 className="text-cyan-300 font-bold mb-2">Deploying to Vercel:</h5>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                      <li>Go to <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">vercel.com</a> and sign up/login</li>
                      <li>Click "Add New Project"</li>
                      <li>Import your GitHub repository</li>
                      <li>Vercel auto-detects Next.js - just click "Deploy"</li>
                      <li>Your site is live in ~30 seconds!</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="text-green-300 font-bold mb-2">Deploying to Netlify:</h5>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                      <li>Go to <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="text-green-400 underline">netlify.com</a> and sign up/login</li>
                      <li>Click "Add new site" → "Import an existing project"</li>
                      <li>Connect to GitHub and select your repo</li>
                      <li>Configure build settings (usually auto-detected)</li>
                      <li>Click "Deploy site"</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="text-purple-300 font-bold mb-2">Deploying to GitHub Pages:</h5>
                    <ol className="list-decimal list-inside space-y-2 text-gray-300">
                      <li>Run <code className="bg-white/5 px-2 py-1 rounded-md text-cyan-400 font-mono text-sm border border-white/10">npm run build</code></li>
                      <li>Push your <code className="bg-white/5 px-2 py-1 rounded-md text-cyan-400 font-mono text-sm border border-white/10">out/</code> directory to <code className="bg-white/5 px-2 py-1 rounded-md text-cyan-400 font-mono text-sm border border-white/10">gh-pages</code> branch</li>
                      <li>Go to repo Settings → Pages</li>
                      <li>Select <code className="bg-white/5 px-2 py-1 rounded-md text-cyan-400 font-mono text-sm border border-white/10">gh-pages</code> branch as source</li>
                      <li>Your site will be live at <code className="bg-white/5 px-2 py-1 rounded-md text-cyan-400 font-mono text-sm border border-white/10">username.github.io/repo-name</code></li>
                    </ol>
                  </div>
                </div>
              </ExpandableSection>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default TutorialSection;
