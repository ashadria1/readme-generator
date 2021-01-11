
function generateREADME({
    userName,
    projectTitle,
    projectDescription,
    installationInstructions,
    projectUsage,
    projectLicense,
    projectContributors,
    projectTests,
    projectIssues,
    githubUserName,
    userEmail,
    
}) {
    const READMEStringToWriteToFile =function generateReadme(userReponses) {
    return `

  <h1 align="center">${userReponses.projectTitle} 👋</h1>
  
  ![badge](https://img.shields.io/badge/license-${userReponses.license}-brightgreen)<br />
  ## Description
  🔍 ${userReponses.description}
  ## Table of Contents
  - [Description](#projectDescription)
  - [Installation](#projectInstallation)
  - [Usage](#projectUsage)
  - [License](#projectLicense)
  - [Contributing](#projectContributors)
  - [Tests](#projectTests)
  - [Questions](#projectIssues)
  ## Installation
  💾 ${userReponses.projectInstallation}
  ## Usage
  💻 ${userReponses.projectUsage}
  ## License
  ![badge](https://img.shields.io/badge/license-${userReponses.license}-brightgreen)
  <br />
  This application is covered by the ${userReponses.projectLicense} license. 
  ## Contributing
  👪 ${userReponses.projectContributors}
  ## Tests
  ✏️ ${userReponses.projectTests}
  ## Questions
  ✋ ${userReponses.projectIssues}<br />
  <br />
  :octocat: Find me on GitHub: [${userReponses.userName}](https://github.com/${userReponses.username})<br />
  <br />
  ✉️ Email me with any questions: ${userReponses.userEmail}<br /><br />
  _This README was generated with ❤️ by [README-generator](https://github.com/ashadria1/README-generator) 🔥🔥🔥_
    `;
  }
  