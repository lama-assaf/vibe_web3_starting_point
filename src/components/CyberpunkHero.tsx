import React from "react";
import { FaGithub, FaDownload, FaCode, FaRocket, FaChevronDown, FaChevronUp } from "react-icons/fa";
import InteractiveNeuralVortex from "@/components/ui/interactive-neural-vortex-background";
import CyberpunkNeonFolder from "@/components/ui/cyberpunk-neon-folder";

const CyberpunkHero: React.FC = () => {
	return (
		<>
		<div className="cyberpunk-container">
			<InteractiveNeuralVortex />
			<div className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-6 lg:p-8">
				<div className="w-full max-w-2xl">
					{/* Hero Header with Animated Folder */}
					<div className="flex flex-col items-center mb-8 md:mb-12">
						<div className="mb-8">
							<CyberpunkNeonFolder
								title="VIBE_WEB3"
								href="https://github.com/lukozill/web3-app-starter-kit"
							/>
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

					{/* Single Column Cards */}
					<div className="grid gap-6 md:gap-8 md:grid-cols-1 lg:grid-cols-1">
						{/* Card 1 */}
						<div className="w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 md:p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50">
									<FaGithub className="w-5 h-5 md:w-7 md:h-7 text-white" />
								</div>
								<div className="flex-1">
									<h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3"
										style={{
											fontFamily: 'Orbitron, sans-serif',
											textShadow: '0 0 8px rgba(0, 255, 255, 0.6)'
										}}>
										1. Get your own copy of the starter kit
									</h3>
									<div className="text-gray-200 text-sm leading-relaxed" >
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
									</div>
								</div>
							</div>
						</div>

						{/* Card 2 */}
						<div className="w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 md:p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
									<FaDownload className="w-5 h-5 md:w-7 md:h-7 text-white" />
								</div>
								<div className="flex-1">
									<h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3"
										style={{
											fontFamily: 'Orbitron, sans-serif',
											textShadow: '0 0 8px rgba(255, 0, 255, 0.6)'
										}}>
										2. Get your starter kit copy on your machine
									</h3>
									<div className="text-gray-200 text-sm leading-relaxed" >
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
									</div>
								</div>
							</div>
						</div>

						{/* Card 3 */}
						<div className="w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 md:p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/50">
									<FaCode className="w-5 h-5 md:w-7 md:h-7 text-white" />
								</div>
								<div className="flex-1">
									<h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3"
										style={{
											fontFamily: 'Orbitron, sans-serif',
											textShadow: '0 0 8px rgba(0, 255, 0, 0.6)'
										}}>
										3. Select the IDE that suits you
									</h3>
									<div className="text-gray-200 text-sm leading-relaxed" >
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
									</div>
								</div>
							</div>
						</div>

						{/* Card 4 */}
						<div className="w-full backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-4 md:p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
							<div className="flex items-start gap-3 md:gap-4">
								<div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-lg shadow-orange-500/50">
									<FaRocket className="w-5 h-5 md:w-7 md:h-7 text-white" />
								</div>
								<div className="flex-1">
									<h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3"
										style={{
											fontFamily: 'Orbitron, sans-serif',
											textShadow: '0 0 8px rgba(167, 139, 250, 0.6)'
										}}>
										4. Start doing the work
									</h3>
									<div className="text-gray-200 text-sm leading-relaxed" >
										From idea to implementation using agents
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Sticky Mini Folder - Bottom Right (60% scale) */}
	<div className="fixed bottom-6 right-6 z-50">
		<CyberpunkNeonFolder
			title="VIBE_WEB3"
			href="https://github.com/lukozill/web3-app-starter-kit"
			scale={0.6}
		/>
	</div>
		</>
	);
};

export default CyberpunkHero;
