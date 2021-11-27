// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

//POTENTIAL HW CODE BELOW:

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where are you based?",
      name: "location",
    },
    {
      type: "input",
      message: "Tell us a bit about yourself:",
      name: "bio",
    },
    {
      type: "input",
      message: "What is your LinkedIn page?",
      name: "linkedIn",
    },
    {
      type: "input",
      message: "What is your GitHub profile?",
      name: "gitHub",
    },
  ])
  .then((response) => {
    fs.writeFile("responses.txt", JSON.stringify(response), (err) => {
      err
        ? console.error(err)
        : console.log("Responses saved to new .txt file!");
    });
  });

/*
Once we've prompted the user for input, the response comes back as an object

fs.writeFile("index.html", data we want to write, callback)

function createHtml(response) {
    return `<h1>${response.name}</h1>`
}

Values for HTML: 
{response.name} -- Put in header: `<h1>${response.name}</h1>` [example]
{response.location} -- Put as sub-header: `<h2>${response.location}</h2>`
{response.bio} -- Put in paragraph: `<p>${response.bio}</p>`
{response.linkedIn} -- Put as URL 1: `<url1>${response.linkedIn}</url1>`
{response.gitHub} -- Put as URL 2: `<url2>${response.gitHub}</url2>`
*/

//Create HTML function that accepts a template string of your entire HTML document
//THEN use temporal literals to enter the neccessary values
