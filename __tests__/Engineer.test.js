const Engineer = require('../lib/Engineer.js');


test('engineers github', () => {
    const engineer = new Engineer('Charley');

    expect(engineer.github).toBe('Charley');
});
