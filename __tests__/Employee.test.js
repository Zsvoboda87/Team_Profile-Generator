const Employee = require('../lib/Employee.js');




test('creates an Employee Object', () => {
    const Employee = new Employee('goblin');

    expect(enemy.name).toBe('goblin');
});