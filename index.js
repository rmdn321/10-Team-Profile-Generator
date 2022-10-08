// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// TODO: Create an array of questions for user input
const employee_questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Name: ',
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'Employee ID: ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email address: ',  
  },
 
];

const manager_questions = [
  {
    type: 'input',
    name: 'officeNumber',
    message: 'Office Number: ',
  }
];

const engineer_questions = [
  {
    type: 'input',
    name: 'githubUserName',
    message: 'Github Username: ',
  }
];

const intern_questions = [
  {
    type: 'input',
    name: 'school',
    message: 'School Name: ',
  }
];

const menu_questions = [
  {
    type: 'list',
    name: 'Menu',
    message: 'Select an option: ',
    choices: ['1. Add an engineer', '2. Add an intern', '3. Finish'],
  }, 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname, 'generatedREADME', fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  // Ask  manager questions
  // Menu with 1. Add engineer, 2. Add Intern, 3. Finish
  // Based on user selection, ask corresponding questions
  inquirer
    .prompt(questions)
    .then((userAnswers) => {
    console.log('Generating the HTML file...');
    writeToFile('index.html', generateHTML({ ...userAnswers }));
    })
    .catch( err => {
      console.log(err);
    });
}

// Function call to initialize app
init();
