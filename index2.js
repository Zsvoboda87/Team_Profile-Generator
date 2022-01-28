const inquirer = require('inquirer');


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

const promptRole = employeeData => {
    if (employeeData.role === 'Manager') {
        if (!employeeData.officeNumber) {
            employeeData.officeNumber = [];
        }
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter your Project name!');
                        return false;
                    }
                }
            },

        ]).then(projectData => {
            employeeData.officeNumber.push(projectData);

            return employeeData;
        });
    }
    if (employeeData.role === 'Engineer') {
        if (!employeeData.officeNumber) {
            employeeData.officeNumber = [];
        }
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of your project?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please Enter the employees gitHub');
                        return false;
                    }
                }
            },

        ]).then(projectData => {
            employeeData.officeNumber.push(projectData);

            return employeeData;
        });
    }

};




promptEmployee()
    .then(promptRole)
    .then(data => {
        console.log(data)
    })