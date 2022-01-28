const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const inquirer = require('inquirer');
// const generateHTML = require('');


const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the Employees's Name:",
        },
        {
            type: 'input',
            name: 'ID',
            message: "Enter the Employee's Id:",
        },
        {
            type: 'input',
            name: 'Email',
            message: "Enter the Employees's Email:",
        },
        {
            type: 'list',
            name: 'role',
            message: 'Enter Employee Role:',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    
    ])
}

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's Office Number:",
        },
    ])
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'GitHub',
            message: "Enter the Engineer's GitHub:",
        },
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'GitHub',
            message: "Enter the Engineer's GitHub:",
        },
    ])
}

     


promptEmployee()
.then()
.then(data => {
    return generateHTML(data)

})




