// TODO: Include packages needed for this application
import inquirer from 'inquirer'
import fs from 'fs'
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: "Enter the title of your project.",
        name: "title"
    },
    {
        message: "Please write a description for your project.",
        name: "description"
    },
    {
        message: "Please write installation instructions for your project.",
        name: "installation"
    },
    {
        message: "Please write usage information for your project.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose a license for your project.",
        name: "license",
        choices: ["Apache-2.0", "Artistic-2.0", "BSD-2-Clause", "BSD-3-Clause", "CC0-1.0", "CC-BY-4.0", "CC-BY-SA-4.0", "EPL-1.0", "AGPL-3.0", "GPL-2.0", "GPL-3.0", "LGPL-3.0", "IPL-1.0", "MIT", "MPL-2.0", "Unlicense", "Zlib"]
    },
    {
        message: "Please write some contribution guidelines for your project.",
        name: "contributions"
    },
    {
        message: "Write test instructions for your project.",
        name: "test"
    },
    {
        message: "Please enter your GitHub username.",
        name: "github"
    },
    {
        message: "Please enter your email.",
        name: "email"
    },
    {
        message: "Please enter instructions on how you can be reached if a user has further questions about your project.",
        name: "questions"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, `${data}`, (err) =>
        err ? console.error(err) : console.log('Success!')
      )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const file = generateMarkdown(answers)
        writeToFile('../Created_File/README.md', file)
    })
}

// Function call to initialize app
init();


