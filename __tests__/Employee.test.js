const Employee = require('../lib/Employee.js');


test('creates an Employee Object', () => {
    const employee = new Employee('Charley', 'Charley@Gmail.com');

    expect(employee.name).toBe('Charley');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('Charley@Gmail.com')
});


// test for methods as well get
