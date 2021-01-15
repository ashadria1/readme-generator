
function generateReadme(userResponses) {
  return `

  <h1 align="center">${userResponses.projectTitle} 👋</h1>
  
  ![badge](https://img.shields.io/badge/license-${userResponses.projectLicense}-brightgreen)<br />
  ## Description
  🔍 ${userResponses.projectDescription}
  ## Table of Contents
  - [Description](#projectDescription)
  - [Installation](#projectInstallation)
  - [Usage](#projectUsage)
  - [License](#projectLicense)
  - [Contributing](#projectContributors)
  - [Tests](#projectTests)
  - [Questions](#projectIssues)
  ## Installation
  💾 ${userResponses.projectInstallation}
  ## Usage
  💻 ${userResponses.projectUsage}
  ## License
  ![badge](https://img.shields.io/badge/license-${userResponses.projectLicense}-brightgreen)
  <br />
  This application is covered by the ${userResponses.projectLicense} license. 
  ## Contributing
  👪 ${userResponses.projectContributors}
  ## Tests
  ✏️ ${userResponses.projectTests}
  ## Questions
  ✋ ${userResponses.projectIssues}<br />
  <br />
  Find me on GitHub: [${userResponses.userName}](https://github.com/${userResponses.githubUserName})<br />
  <br />
  ✉️ Email me with any questions: ${userResponses.userEmail}<br /><br />
    `;
}

module.exports=generateReadme;
