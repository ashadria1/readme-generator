# Professional README Generator

## The Task

You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on a project!  Fun!

I have created a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer). 

The application will be invoked by using the node index.js command in the console.

A link to the demo video can be found here:  https://github.com/ashadria1/readme-generator/blob/84a2ef3bb6b57b9f7e6b1813486c737e7f916e5f/ReadMe%20Gen%20Demo.wmv

## User Story

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

