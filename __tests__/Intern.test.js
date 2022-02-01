const Intern = require('../lib/Intern');


test('Intern has school', () => {
    const intern = new Intern('Charley', 1, 'Charley@Gmail.com', 'Case');

    expect(intern.school).toEqual('Case');
});
