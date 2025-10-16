import React, { useState } from "react";
import { FaGithub, FaDownload, FaCode, FaRocket, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface StepData {
	id: number;
	title: string;
	icon: React.ReactNode;
	gradient: string;
	shadowColor: string;
	glowColor: string;
	content: React.ReactNode;
	detailedContent?: React.ReactNode;
}

const CyberpunkHero: React.FC = () => {
	const [expandedStep, setExpandedStep] = useState<number | null>(null);

	const toggleStep = (stepId: number) => {
		setExpandedStep(expandedStep === stepId ? null : stepId);
	};

	const steps: StepData[] = [
		{
			id: 1,
			title: "Get your own copy of the starter kit",
			icon: <FaGithub className="w-5 h-5 md:w-7 md:h-7 text-white" />,
			gradient: "from-cyan-500 to-blue-600",
			shadowColor: "shadow-cyan-500/50",
			glowColor: "rgba(0, 255, 255, 0.6)",
			content: (
				<>
					Fork the starter repository using this{" "}
					<a
						href="https://github.com/lukozill/web3-app-starter-kit/fork"
						target="_blank"
						rel="noopener noreferrer"
						className="text-cyan-400 hover:text-cyan-300 underline transition-colors inline-flex items-center gap-1"
					>
						link <FaGithub className="inline w-4 h-4" />
					</a>
					.<br />
					<br />
					<strong>Note:</strong> To do that you need a GitHub account, you can create it for{" "}
					<a
						href="https://github.com/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
					>
						free here
					</a>
					.
				</>
			),
			detailedContent: (
				<div className="mt-3 space-y-2 text-sm">
					<p><strong>What is forking?</strong></p>
					<p>Forking creates your own copy of the repository, allowing you to modify it without affecting the original project.</p>
					<p className="mt-2"><strong>Steps:</strong></p>
					<ol className="list-decimal list-inside space-y-1 ml-2">
						<li>Visit the repository link above</li>
						<li>Click the "Fork" button in the top-right corner</li>
						<li>GitHub creates a copy under your account</li>
					</ol>
				</div>
			),
		},
		{
			id: 2,
			title: "Get your starter kit copy on your machine",
			icon: <FaDownload className="w-5 h-5 md:w-7 md:h-7 text-white" />,
			gradient: "from-purple-500 to-pink-600",
			shadowColor: "shadow-purple-500/50",
			glowColor: "rgba(255, 0, 255, 0.6)",
			content: (
				<>
					If you don't know where to start, you first need a{" "}
					<a
						href="https://desktop.github.com/download/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-magenta-400 hover:text-magenta-300 underline transition-colors inline-flex items-center gap-1"
					>
						GitHub desktop application <FaDownload className="inline w-3 h-3" />
					</a>
					.<br />
					After logging to it with your GitHub account, follow{" "}
					<a
						href="https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop"
						target="_blank"
						rel="noopener noreferrer"
						className="text-magenta-400 hover:text-magenta-300 underline transition-colors"
					>
						this instructions
					</a>
					.
				</>
			),
			detailedContent: (
				<div className="mt-3 space-y-2 text-sm">
					<p><strong>Alternative: Command Line</strong></p>
					<pre className="bg-black/40 p-3 rounded-lg overflow-x-auto mt-2 scrollbar-thin scrollbar-thumb-cyan-400/50 scrollbar-track-transparent">
						<code className="text-green-400 text-xs md:text-sm break-all whitespace-pre-wrap">git clone https://github.com/YOUR-USERNAME/web3-app-starter-kit.git</code>
					</pre>
					<p className="mt-2"><strong>Why clone?</strong></p>
					<p>Cloning downloads all project files to your computer so you can edit and run the code locally.</p>
				</div>
			),
		},
		{
			id: 3,
			title: "Select the IDE that suits you",
			icon: <FaCode className="w-5 h-5 md:w-7 md:h-7 text-white" />,
			gradient: "from-green-500 to-emerald-600",
			shadowColor: "shadow-green-500/50",
			glowColor: "rgba(0, 255, 0, 0.6)",
			content: (
				<>
					The starter kit is optimized for the following IDEs:
					<div className="mt-3 space-y-2">
						<a
							href="https://cursor.com/docs/get-started/quickstart"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group"
						>
							<div className="w-8 h-8 rounded bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.5l7 3.5v7l-7-3.5v-7zm16 0v7l-7 3.5v-7l7-3.5z"/>
								</svg>
							</div>
							<span className="underline">Cursor</span>
						</a>
						<a
							href="https://code.visualstudio.com/docs/copilot/setup"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group"
						>
							<div className="w-8 h-8 rounded bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
								<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
									<path d="M17.5 0h-12L0 5.5v13L5.5 24h13l5.5-5.5v-13L17.5 0zm-2.9 6.8L9.4 12l5.2 5.2-2.6 2.6L4.2 12 12 4.2l2.6 2.6z"/>
								</svg>
							</div>
							<span className="underline">VS Code with Github Copilot</span>
						</a>
					</div>
					<p className="mt-3">
						If you don't know which to choose, go with <code className="bg-black/30 px-2 py-1 rounded text-green-300">Cursor</code>.
					</p>
				</>
			),
			detailedContent: (
				<div className="mt-3 space-y-2 text-sm">
					<p><strong>Why AI-powered IDEs?</strong></p>
					<p>Modern AI-powered editors help you write code faster by:</p>
					<ul className="list-disc list-inside space-y-1 ml-2 mt-2">
						<li>Auto-completing code as you type</li>
						<li>Explaining complex code sections</li>
						<li>Catching errors before they happen</li>
						<li>Suggesting best practices</li>
					</ul>
				</div>
			),
		},
		{
			id: 4,
			title: "Start doing the work",
			icon: <FaRocket className="w-5 h-5 md:w-7 md:h-7 text-white" />,
			gradient: "from-orange-500 to-red-600",
			shadowColor: "shadow-orange-500/50",
			glowColor: "rgba(167, 139, 250, 0.6)",
			content: (
				<>
					From idea to implementation using agents
				</>
			),
			detailedContent: (
				<div className="mt-3 space-y-2 text-sm">
					<p><strong>Quick Start Commands:</strong></p>
					<pre className="bg-black/40 p-3 rounded-lg overflow-x-auto mt-2">
						<code className="text-cyan-400">
							npm install{"\n"}
							npm run dev
						</code>
					</pre>
					<p className="mt-2"><strong>Next Steps:</strong></p>
					<ul className="list-disc list-inside space-y-1 ml-2">
						<li>Open <code className="bg-black/30 px-1 rounded text-xs">localhost:3000</code> in your browser</li>
						<li>Explore the code in <code className="bg-black/30 px-1 rounded text-xs">src/components/</code></li>
						<li>Follow the detailed tutorial in <code className="bg-black/30 px-1 rounded text-xs">instructions.md</code></li>
					</ul>
				</div>
			),
		},
	];

	return (
		<div className="cyberpunk-container">
			<div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6 lg:p-8">
				<div className="w-full max-w-3xl">
					{/* Hero Header with Animated Folder */}
					<div className="flex flex-col items-center mb-8 md:mb-12">
						<div className="folder-container-neon mb-8">
							<div className="doc-sheet sheet-1"></div>
							<div className="doc-sheet sheet-2"></div>
							<div className="doc-sheet sheet-3"></div>

							<div className="folder-card-neon">
								<div className="flex justify-center items-center h-full">
									<div className="flex items-center space-x-4">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-8 w-8 folder-icon-neon"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth="1.5"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
											/>
										</svg>
										<h2 className="text-xl font-semibold folder-title-neon">
											VIBE_WEB3
										</h2>
									</div>
								</div>
							</div>
						</div>

						<h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4"
							style={{
								fontFamily: 'Orbitron, sans-serif',
								color: '#e0e0e0',
								textShadow: '0 0 10px rgba(0, 255, 255, 0.5), 0 0 20px rgba(255, 0, 255, 0.3)'
							}}>
							Vibe Web3 Starting Point
						</h1>
					</div>

					{/* Progress Indicator */}
					<div className="mb-6 flex justify-center gap-2">
						{steps.map((step) => (
							<div
								key={step.id}
								className={`h-2 rounded-full transition-all duration-300 ${
									expandedStep === step.id ? 'w-12 bg-cyan-400' : 'w-2 bg-white/30'
								}`}
							/>
						))}
					</div>

					{/* Interactive Step Cards */}
					<div className="grid gap-6 md:gap-8 md:grid-cols-1 lg:grid-cols-1">
						{steps.map((step) => (
							<div
								key={step.id}
								className="w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 md:p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-white/30"
							>
								<div className="flex items-start gap-3 md:gap-4">
									{/* Icon */}
									<div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg ${step.shadowColor}`}>
										{step.icon}
									</div>

									{/* Content */}
									<div className="flex-1">
										<h3
											className="text-base md:text-lg font-bold text-white mb-2 md:mb-3"
											style={{
												fontFamily: 'Orbitron, sans-serif',
												textShadow: `0 0 8px ${step.glowColor}`
											}}
										>
											{step.id}. {step.title}
										</h3>

										<div className="text-gray-200 text-sm leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
											{step.content}
										</div>

										{/* Expandable Detailed Content */}
										{step.detailedContent && (
											<>
												<button
													onClick={() => toggleStep(step.id)}
													className="mt-3 md:mt-4 px-4 py-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm flex items-center gap-2 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 text-xs md:text-sm font-medium shadow-lg hover:shadow-cyan-400/20"
													style={{
														fontFamily: 'Orbitron, sans-serif',
														textShadow: '0 0 4px rgba(0, 255, 255, 0.5)'
													}}
												>
													{expandedStep === step.id ? (
														<>
															<FaChevronUp className="w-3 h-3 md:w-4 md:h-4" />
															<span className="uppercase tracking-wider">Show Less</span>
														</>
													) : (
														<>
															<FaChevronDown className="w-3 h-3 md:w-4 md:h-4" />
															<span className="uppercase tracking-wider">Learn More</span>
														</>
													)}
												</button>

												{/* Expanded Content */}
												<div
													className={`overflow-hidden transition-all duration-500 ${
														expandedStep === step.id ? 'max-h-[500px] opacity-100 mt-3 md:mt-4' : 'max-h-0 opacity-0'
													}`}
												>
													<div className="pt-3 md:pt-4 border-t border-cyan-400/20 text-xs md:text-sm text-gray-200" style={{ fontFamily: 'Poppins, sans-serif' }}>
														{step.detailedContent}
													</div>
												</div>
											</>
										)}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CyberpunkHero;
