const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super();
        this.officeNumber = 0
    }
}


module.exports = Manager;