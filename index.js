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

        ]).then(projectData => {
            employeeData.officeNumber = projectData;
            return employeeData;
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

        ]).then(projectData => {
            employeeData.github = projectData;
            return employeeData;

        });
    }
    if (employeeData.role === 'Intern') {
        if (!employeeData.college) {
            employeeData.college = '';
        }

        return inquirer.prompt([
            {
                type: 'input',
                name: 'college',
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

        ]).then(projectData => {
            employeeData.college = projectData;

            return employeeData;
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

        ]).then(projectData => {
            employeeData.confirmAdd = projectData;
            return employeeData;
        });
    }
let dataArray = []

const compiler = data => {
    dataArray.push(data);
    console.log(dataArray);
    if(data.confirmAdd.confirmAdd) {
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
