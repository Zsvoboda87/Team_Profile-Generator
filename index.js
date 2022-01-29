const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const {generateHTML} = require('./src/generateHTML')

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the Employees's Name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Employee's Id:",
        },
        {
            type: 'input',
            name: 'email',
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

const promptRole = employeeData => {
    if (employeeData.role === 'Manager') {
        if (!employeeData.officeNumber) {
            employeeData.officeNumber = '';
        }

        return inquirer.prompt([
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter an office number',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter an office number!');
                        return false;
                    }
                }

            },

        ]).then(({officeNumber}) => {
            const engineer = new Engineer (employeeData.name, employeeData.id, employeeData.email, officeNumber)
            return engineer;
        
       
        });
    }
    if (employeeData.role === 'Engineer') {
        if (!employeeData.github) {
            employeeData.github = '';
        }
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: "Enter the Engineer's GitHub:",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please Enter the employees gitHub');
                        return false;
                    }
                }

            },

        ]).then(({github}) => {
            const engineer = new Engineer (employeeData.name, employeeData.id, employeeData.email, github)
            return engineer;

        });

    }
    if (employeeData.role === 'Intern') {
        if (!employeeData.college) {
            employeeData.college = '';
        }

        return inquirer.prompt([
            {
                type: 'input',
                name: 'school',
                message: "Please Enter the Intern's College",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a College');
                        return false;
                    }
                }
            },

        ]).then(({school}) => {
            const intern = new Intern (employeeData.name, employeeData.id, employeeData.email, school)
            return intern;
           
        });
    }


};

const promptAddEmployee = employeeData => {
    
        if (!employeeData.confirmAdd) {
            employeeData.confirmAdd = '';
        }

        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add another Employee?',
                default: false

            },

        ]).then(({confirmAdd}) => {
            employeeData.confirmAdd = confirmAdd;
            return employeeData;
        });
    }
let dataArray = []

const compiler = data => {
    dataArray.push(data);
    if(data.confirmAdd) {
        employeeLoop();   
    } else {
        generateHTML(dataArray)
    }

};

const employeeLoop = () => {
    promptEmployee()
        .then(promptRole)
        .then(promptAddEmployee)
        .then(compiler)
}
employeeLoop();







