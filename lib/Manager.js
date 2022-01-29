const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, role) {
        super(name, id, email, role);
        this.officeNumber = officeNumber
    }

    getGithub() {
        return this.github
    }

}

module.exports = Manager;