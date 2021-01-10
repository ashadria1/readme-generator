const fs = require("fs");
const inquirer = require("inquirer");
const generatehtml = require("./utils/generatehtml");

const arrayOfQuestions = [{
    type: "input",
    message: "What is your name?",
    name: "name",
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
    name: "installation",
},{
    type: "input",
    message: "What is the project usage?",
    name: "usage",
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
    name: "license",
},{
    type: "input",
    message: "Who are the contributors to this project?",
    name: "contributors",
},{
    type: "input",
    message: "Is there a test included?",
    name: "tests",
},{
    type: "input",
    message: "What should users do if they have questions?",
    name: "questions",
},{
    type: "input",
    message: "Please enter your GitHub username: ",
    name: "githubUsername",
},{
    type: "input",
    message: "Please enter your email: ",
    name: "email",
}];



function init() {
  console.log("The function has run.");
  inquirer.prompt(arrayOfQuestions).then((response) => {
    console.log(response);
    const dynamicString = generatehtml(response);

    fs.writeFile("generated.html", dynamicString, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Successfully generated HTML file!");
      }
    });
  });
}

init();
