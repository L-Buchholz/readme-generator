/*Packages required for README application*/
const markdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

const fs = require("fs");

/*Array of user input questions*/
const questions = [
  {
    type: "input",
    message: "What is your project title?",
    name: "title",
  },
  {
    type: "input",
    message: "Please write a brief description of your project:",
    name: "description",
  },
  {
    type: "input",
    message: "Share the steps required to install your project:",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions on how to use your project, with examples:",
    name: "usage",
  },
  {
    type: "list",
    message:
      "Which license will this project fall under? (Visit ChooseALicense.com for help)",
    name: "license",
    choices: ["Apache License 2.0", "GNU GPLv3", "ISC License", "MIT", "Other"],
  },
  {
    type: "input",
    message:
      "Please list any additional collaborators and include their GitHub profile links (leave blank if none):",
    name: "contributing",
  },
  {
    type: "input",
    message:
      "List any applicable tests for your program here (leave blank if none):",
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username:",
    name: "questions1",
  },
  {
    type: "input",
    message: "Please enter the link to your GitHub profile:",
    name: "questions2",
  },
  {
    type: "input",
    message:
      "What is the best way for users of this project to contact you (including an email address, if applicable)?",
    name: "questions3",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

function createReadMe(response) {
  return `<h1>${response.title}</h1> 
  <h2>Description</h2>
  <p>${response.description}</p>
  <h2>Table of Contents</h2>
  <p>*LICENSE AS A FUNCTION GOES HERE*</p>
  <ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions?</a></li>
  </ul>
  <h2 id="installation">Installation</h2>
  <p>${response.installation}</p>
  <h2 id="usage">Usage</h2>
  <p>${response.usage}</p>
  <h2 id="license">License</h2>
    <p>
    This application is covered under the following license: 
    ${response.license}. <br><br> For more information about this and other 
    licenses, please visit <a href="https://choosealicense.com/licenses/" 
    target="blank">ChooseALicense.com</a>.
    </p>
  <h2 id="contributing">Contributing</h2>
  <p>Additional contributors to this program are listed below <em>(blank if none)</em>.
  ${response.contributing}</p>
  <h2 id="tests">Tests</h2>
  <p>Applicable tests for this program are listed below <em>(blank if none)</em>.
  ${response.tests}</p>
  <h2 id="questions">Questions?</h2>
    <p>
    This project was created by: <a href="${response.questions2}" 
    target="blank">${response.questions1}</a>.</p>
  <h2>Contact Info</h2>
  <p>${response.questions3}</p>`;
}

inquirer.prompt(questions).then((response) => {
  fs.writeFile("userREADME.md", createReadMe(response), (err) => {
    err
      ? console.error(err)
      : console.log("Responses saved to new README file!");
  });
});
