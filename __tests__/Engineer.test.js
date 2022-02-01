const Engineer = require('../lib/Engineer.js');


test('engineers github', () => {
    const engineer = new Engineer('Charley', 1, 'Charley@Gmail.com', 'github');

    expect(engineer.github).toBe('github');
});
