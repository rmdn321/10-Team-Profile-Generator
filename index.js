// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// TODO: Create an array of questions for user input
const employee_questions = [
  {
    type: 'input',
    name: 'name',
    message: 'Name: ',
  },
  {
    type: 'input',
    name: 'id',
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
    name: 'github',
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
    name: 'menu',
    message: 'Select an option: ',
    choices: ['1. Add an engineer', '2. Add an intern', '3. Finish'],
  }, 
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(__dirname, fileName), data);
}

const getUserInputs = async (questions) => {
  return await inquirer
    .prompt(questions)
    .then((userAnswers) => {
      return userAnswers;
    })
    .catch( err => {
      console.log(err);
    });
}

// TODO: Create a function to initialize app
const init = async () => {
  let engineers = []
  let interns = []
  console.log("Add manager details");
  // Ask  manager questions
  response = await getUserInputs(employee_questions)
  // console.log(response);
  managerResponse = await getUserInputs(manager_questions)
  // Init manager
  const manager = new Manager(response.name, response.id, response.email, managerResponse.officeNumber)

  while(1) {
    // Menu with 1. Add engineer, 2. Add Intern, 3. Finish
    response = await getUserInputs(menu_questions)
  
    // Based on user selection, ask corresponding questions
    if (response.menu === "1. Add an engineer") {
      response = await getUserInputs(employee_questions)
      engineerResponse = await getUserInputs(engineer_questions)
      // Init engineer
      const engineer = new Engineer(response.name, response.id, response.email, engineerResponse.github)
      engineers.push(engineer)
    } else if (response.menu === "2. Add an intern") {
      response = await getUserInputs(employee_questions)
      internResponse = await getUserInputs(intern_questions)
      // Init intern
      const intern = new Intern(response.name, response.id, response.email, internResponse.school)
      interns.push(intern)
    } else {
      console.log("Thank you for answering. Building your team now!");
      break
    }
  }

  // //////////////////////////
  // // SEED
  // //////////////////////////
  // manager = new Manager('m', 'm', 'm', '1',);
  // engineer1 = new Engineer('e', 'e','e', 'e',);
  // engineer2 = new Engineer('e','e','e','e',);
  // engineers.push(engineer1, engineer2)
  // intern = new Intern('e','e','e','e',)
  // interns.push(intern)

  // console.log(manager);
  // console.log(engineers);
  // console.log(interns);

  // Generate HTML
  console.log('Generating the HTML file...');
  writeToFile('index.html', generateHTML(manager, engineers, interns));
}

// Function call to initialize app
init();
