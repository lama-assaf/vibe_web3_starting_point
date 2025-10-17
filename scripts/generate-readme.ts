import { heroContent, tutorialSteps } from '../src/data/tutorialContent';
import * as fs from 'fs';
import * as path from 'path';

function generateReadme(): string {
  let markdown = `# ${heroContent.title.line1} ${heroContent.title.line2}

${heroContent.description}

## Quick Start

\`\`\`bash
${heroContent.cloneCommand}
cd web3-app-starter-kit
npm install
npm run dev
\`\`\`

---

## Tutorial Steps

`;

  tutorialSteps.forEach((step) => {
    // Step header
    markdown += `\n## ${step.stepNumber}. ${step.title}\n\n`;
    markdown += `${step.description}\n\n`;

    // Process each section
    step.sections.forEach((section) => {
      if (section.title) {
        markdown += `### ${section.title}\n\n`;
      }

      // Handle different section types
      switch (section.type) {
        case 'paragraph':
          section.content.forEach((para) => {
            markdown += `${para}\n\n`;
          });
          break;

        case 'list':
          section.content.forEach((item) => {
            markdown += `- ${item}\n`;
          });
          markdown += '\n';
          break;

        case 'code':
          if (section.items && section.items[0]?.code) {
            const lang = section.items[0].language || 'bash';
            markdown += `\`\`\`${lang}\n${section.items[0].code}\n\`\`\`\n\n`;
          }
          break;

        case 'link-card':
          if (section.items) {
            section.items.forEach((item) => {
              markdown += `#### ${item.icon || '🔗'} [${item.title}](${item.url})\n\n`;
              if (item.description) {
                markdown += `${item.description}\n\n`;
              }
              if (item.features) {
                item.features.forEach((feature) => {
                  markdown += `- ${feature}\n`;
                });
                markdown += '\n';
              }
            });
          }
          break;

        case 'expandable':
          if (section.items) {
            section.items.forEach((item) => {
              if (item.title) {
                markdown += `**${item.title}**\n\n`;
              }
              if (item.description) {
                markdown += `${item.description}\n\n`;
              }
              if (item.code) {
                const lang = item.language || 'bash';
                markdown += `\`\`\`${lang}\n${item.code}\n\`\`\`\n\n`;
              }
            });
          }
          break;
      }
    });

    markdown += '---\n';
  });

  // Footer
  markdown += `\n## Resources

- [Zilliqa Documentation](https://dev.zilliqa.com/)
- [Zilliqa GitHub](https://github.com/Zilliqa)
- [Web3.js Documentation](https://web3js.readthedocs.io/)

## License

MIT

---

**Powered by Zilliqa** 🚀
`;

  return markdown;
}

// Generate and save README
const readme = generateReadme();
const outputPath = path.join(__dirname, '..', 'TUTORIAL.md');
fs.writeFileSync(outputPath, readme, 'utf-8');

console.log('✅ TUTORIAL.md generated successfully!');
console.log(`📄 File location: ${outputPath}`);
