const fs = require("fs");
const inquirer = require("inquirer");

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

const generatehtml = ({ name, projectTitle, projectDescription, installation, usage, license, contributors, tests, questions, githubUsername, email }) => {
  const htmlStringToWriteToFile = `
<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <title>README Generator</title>
    <!-- Bootstrap CSS link -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h1>Name:  ${name}</h1>
                <h5>Project Title:  ${projectTitle}</h5>
                <p>Project Description:  ${projectDescription}</p>
                <p></p>
                <a href="http://github.com">Github.com</a>
                <a href="http://linkedin.com">LinkedIn.com</a>
            </div>    
        </div>   
    </div>
</body>

</html>`;
  return htmlStringToWriteToFile;
};

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
