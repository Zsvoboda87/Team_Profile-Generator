const Manager = require('../lib/Manager.js');


test('Manager has office Number', () => {
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(Number));
});
