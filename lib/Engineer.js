const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super();
        this.github = github
    }

    getGithub() {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'github',
                message: "Enter the Engineer's Github:",
            }
        ])
    }

}


module.exports = Engineer;