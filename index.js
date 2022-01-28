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

const promptManager = (data) => {
    data.officenumber = 
     inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's Office Number:",
        },
    ])
    console.log(data)
}

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: "Enter the Engineer's GitHub:",
        },
    ])
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'college',
            message: "Enter the Interns College:",
        },

    ])
}

     


promptEmployee()
// .then(employeeData => {
//     if(employeeData.role === 'Manager') {
//         promptManager(employeeData)
//     }   
//     if(employeeData.role === 'Engineer') {
//         promptEngineer()
//     }
//     if(employeeData.role === 'Intern') {
//         promptIntern()
//     }  
// })

    




// .then(data => {
//     console.log(data)
    //return generateHTML(data)





