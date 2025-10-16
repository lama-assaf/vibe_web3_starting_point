import Head from "next/head";
import CyberpunkHero from "../components/CyberpunkHero";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
	return (
		<>
			<Head>
				<title>Vibe Web3 Starting Point</title>
				<meta
					name="description"
					content="Follow the steps to get started with the Vibe Web3 starter kit."
				/>
				<link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
			</Head>

			<AnimatedBackground />

			<main>
				<CyberpunkHero />
			</main>
		</>
	);
}
