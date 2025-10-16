import Head from "next/head";
import NyanBackground from "../components/NyanBackground";
import Card from "../components/Card";

// Sample data for our cards
const cardData = [
	{
		title: "1. Get your own copy of the starter kit",
		content: <>Fork the starter repository using this <a href="https://github.com/lukozill/web3-app-starter-kit/fork" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">link</a>.<br/><br/><strong>Note:</strong> To do that you need a GitHub account, you can create it for <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">free here</a>.</>,
	},
	{
		title: "2. Get your starter kit copy on your machine",
		content: <>If you don't know where to start, you first need a <a href="https://desktop.github.com/download/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">GitHub desktop application</a>.<br/>After logging to it with your GitHub account, follow <a href="https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">this instructions</a>.</>,
	},
	{
		title: "3. Select the IDE that suits you",
		content: <>The starter kit is optimized for the following IDEs:<br/>* <a href="https://cursor.com/docs/get-started/quickstart" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Cursor</a><br/>* <a href="https://code.visualstudio.com/docs/copilot/setup" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">VS Code with Github Copilot</a><br/>If you don't know which to choose, go with <code>Cursor</code>.</>,
	},
	{
		title: "4. Start doing the work",
		content: "From idea to implementation using agents",
	},
];

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

			<NyanBackground />

			<main className="relative flex min-h-screen items-center justify-center p-4">
				<div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
					{cardData.map((card, index) => (
						<Card key={index} title={card.title}>
							{card.content}
						</Card>
					))}
				</div>
			</main>
		</>
	);
}
