// Inquirer
const inquirer = require('inquirer');
// Generates mark down for README
const generateMarkdown = require('./utils/generateMarkdown')
const path = require('path');
const fs = require('fs');
//Question array that collects user inputs
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project name?',
    validate: function (answers) {
      if (answers.length < 1) {
        return console.log('Please enter your project name.')
      } else {
        return true;
      };
    }
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'What is your gitHub username?',
    validate: function (answers) {
      if (answers.length < 1) {
        return console.log('Please enter your GitHub username.')
      } else {
        return true;
      };
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: function (answers) {
      if (answers.length < 1) {
        return console.log('Please enter your email address.')
      } else {
        return true;
      };
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please give a full description of your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions for your project.'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information for your project.'
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Please provide contribution information for your project.'
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide test instructions for your project.'
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a licensing agreement",
    choices: ["MIT", "Apache License 2.0", "None"]
  }
];

//Writes README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

//Initializes app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      //writeToFile function passes to it a file name and the string returns by the generateMarkdown function
      writeToFile("README.md", generateMarkdown({ ...answers }))
    });
};

// Function call to initialize app
init();



