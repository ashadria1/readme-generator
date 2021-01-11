// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
<h1 align="center">${answers.projectTitle} 👋</h1>

![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
🔍 ${answers.description}
## Table of Contents
- [Description](#projectDescription)
- [Installation](#projectInstallation)
- [Usage](#projectUsage)
- [License](#projectLicense)
- [Contributing](#projectContributors)
- [Tests](#projectTests)
- [Questions](#projectQuestions)
## Installation
💾 ${answers.projectInstallation}
## Usage
💻 ${answers.projectUsage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.projectLicense} license. 
## Contributing
👪 ${answers.projectContributors}
## Tests
✏️ ${answers.projectTests}
## Questions
✋ ${answers.projectQuestions}<br />
<br />
:octocat: Find me on GitHub: [${answers.userName}](https://github.com/${answers.username})<br />
<br />
✉️ Email me with any questions: ${answers.userEmail}<br /><br />
_This README was generated with ❤️ by [README-generator](https://github.com/ashadria1/README-generator) 🔥🔥🔥_
  `;
}
