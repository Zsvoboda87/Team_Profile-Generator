const Employee = require('../lib/Employee.js');


test('creates an Employee Object', () => {
    const employee = new Employee('Charley');

    expect(employee.name).toBe('Charley');
});