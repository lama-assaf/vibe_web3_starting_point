import Head from "next/head";
import AnimatedShaderBackground from "../components/ui/animated-shader-background";
import HeroSection from "../components/hero/HeroSection";
import TutorialSection from "../components/tutorial/TutorialSection";
import CyberpunkNeonFolder from "../components/ui/cyberpunk-neon-folder";

export default function Home() {
	return (
		<>
			<Head>
				<title>Build Web3 Starting Point - Your Journey Begins Here</title>
				<meta
					name="description"
					content="A beginner-friendly tutorial to get started with Web3 development. Download your IDE, clone the repo, plan your app, and deploy!"
				/>
				<link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
			</Head>

			<main className="relative">
				{/* Animated Shader Background */}
				<AnimatedShaderBackground />

				{/* Main Content */}
				<div className="relative z-10">
					{/* Hero Section */}
					<HeroSection />

					{/* Tutorial Section */}
					<TutorialSection />
				</div>

				{/* Sticky Powered by Zilliqa Logo - Bottom Left */}
				<div className="fixed bottom-6 left-8 z-50">
					<a
						href="https://www.zilliqa.com"
						target="_blank"
						rel="noopener noreferrer"
						className="block hover:scale-105 transition-transform duration-300"
					>
						<img
							src="/logos/poweredbyzil_main.svg"
							alt="Powered by Zilliqa"
							className="h-10 w-auto"
						/>
					</a>
				</div>

				{/* Sticky Mini Folder - Bottom Right */}
				<div className="fixed bottom-6 right-6 z-50">
					<CyberpunkNeonFolder
						title="WEB3_KIT"
						href="https://github.com/lukozill/web3-app-starter-kit"
						scale={0.6}
					/>
				</div>
			</main>
		</>
	);
}
