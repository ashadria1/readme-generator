const fs = require("fs");
const inquirer = require("inquirer");
const generateREADME = require("./utils/generateREADME");

const arrayOfQuestions = [{
    type: "input",
    message: "What is your name?",
    name: "userName",
},{
    type: "input",
    message: "What is the project title?",
    name: "projectTitle",
},{
    type: "input",
    message: "How would you briefly describe your project?",
    name: "projectDescription",
},{
    type: "input",
    message: "What are the installation instructions?",
    name: "installationInstructions",
},{
    type: "input",
    message: "What is the project usage?",
    name: "projectUsage",
},{
    type: "list",
    message: "Select the appropriate license for this project: ",
    choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"
    ],
    name: "projectLicense",
},{
    type: "input",
    message: "Who are the contributors to this project?",
    name: "projectContributors",
},{
    type: "input",
    message: "Is there a test included?",
    name: "projectTests",
},{
    type: "input",
    message: "What should users do if they have questions or issues?",
    name: "projectIssues",
},{
    type: "input",
    message: "Please enter your GitHub username: ",
    name: "githubUserName",
},{
    type: "input",
    message: "Please enter your email: ",
    name: "userEmail",
}];

function init() {
  console.log("The function has run.");
  inquirer.prompt(arrayOfQuestions).then((response) => {
    console.log(response);
    const dynamicString = generateREADME(response);

    fs.writeFile("generated.md", dynamicString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully generated README file!");
      }
    });
  });
}

async function init() {
    try {
        const userReponses = await promptUser();
        const generateContent = generateREADME(userReponses);
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
init();
