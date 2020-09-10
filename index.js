const inquirer = require("inquirer");
const fs = require("fs");
const render = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
    {
        type: "input",
        name: "installation",
        message: "If any, what are the installation instructions? Otherwise type NONE."
    },
    {
        type: "input",
        name: "usage",
        message: "How would the user use the application?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log("generating README.md");
        writeToFile("README.md", render(answers));
    })
}

// function call to initialize program
init();
