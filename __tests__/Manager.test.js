const Manager = require('../lib/Manager.js');


test('Manager has office Number', () => {
    const manager = new Manager('Charley', 1, 'Charley@Gmail.com', '001');

    expect(manager.officeNumber).toEqual('001');
});
