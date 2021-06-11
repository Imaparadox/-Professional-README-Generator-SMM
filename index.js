// TODO: Include packages needed for this application
// require inquirer
const inquirer = require('inquirer');
// require generateMarkdown
const generateMarkdown = require('./utils/generateMarkdown')
const path = require("path");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "gitHub",
    message: "What is your gitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"

  },
  {
    type: "input",
    name: "project",
    message: "What is your project name?"

  },
  // Fix later
  {
    type: "input",
    name: "e",
    message: "What is your email address?"
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

 }

// TODO: Create a function to initialize app
function init() {
  // use inquirer to ask questions (activity 2 from Monday)
  // call generateMarkdown function which will return a string
  // call writeToFile function pass to it a file name and the string returned by the generateMarkdown function
  
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!
      console.log(answers);
      writeToFile("README.md", generateMarkdown({...answers}))
    // }) 
    // .catch((error) => {
    //   if (error.isTtyError) {
    //     // Prompt couldn't be rendered in the current environment
    //   } else {
    //     // Something else went wrong
    //   }
    });
}

// Function call to initialize app
init();

// username
// email address
// Project name
// Description
//Short description
// What kind of license 
