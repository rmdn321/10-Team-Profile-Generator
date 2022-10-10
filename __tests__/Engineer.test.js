const Engineer = require('../lib/Engineer');

// Tests for verifying the behavior of Engineer class.
describe('Engineer', () => {
    it('Should return an object when the class is initialised',() => {
        let engineer = new Engineer('Allison', 1, 'allison@mail.com');
        expect(typeof engineer).toBe('object');

    });

    it('Should save and return the entered engineer details', () => {
        let engineer = new Engineer('Allison', 1, 'allison@mail.com');
        expect(engineer.getName()).toBe('Allison');
        expect(engineer.getId()).toBe(1);
        expect(engineer.getEmail()).toBe('allison@mail.com');
    });

    it('should return Engineer as the role' , () => {
        let engineer = new Engineer('Allison', 1, 'allison@mail.com');
        expect(engineer.getRole()).toBe('Engineer');
    });

    it('should save and return GitHub user details', () => {
        let engineer = new Engineer('Allison', 1, 'allison@mail.com','allison@github.com');
        expect(engineer.getGithub()).toBe('allison@github.com');
    });
})