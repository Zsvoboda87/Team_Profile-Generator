const inquirer = require('inquirer');

class Employee {
    constructor(name, email) {
        this.name = name
        this.id = 0
        this.email = email
    }

    getName() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter a Name:',
            }
        ])
    }

    getId() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'ID',
                message: 'Enter a ID Number:',
            }
        ])
    }

    getEmail() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'Email',
                message: 'Enter Employee Email:',
            }
        ])
    }

    getRole() {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Enter Employee Role:',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
    }

}




module.exports = Employee;

