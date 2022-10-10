const Intern = require("../lib/Intern");

// Tests for verifying the behavior of Intern class.
describe('Intern' , () => {
    it('Should return an object when the class is initialised', () => {
        let intern = new Intern('Jason', 1, 'jason@mail.com');
        expect(typeof intern).toBe('object');
    });

    it('Should save and return the entered intern details', () => {
        let intern = new Intern('Jason', 1, 'jason@mail.com');
        expect(intern.getName()).toBe('Jason');
        expect(intern.getId()).toBe(1);
        expect(intern.getEmail()).toBe('jason@mail.com');
    });

    it('Should return Intern as the role', () => {
        let intern = new Intern('Jason', 1, 'jason@mail.com');
        expect(intern.getRole()).toBe('Intern');
    });

    it('Should save and  return school of Intern', () => {
        let intern = new Intern('Jason', 1, 'jason@mail.com', 'Berkeley');
        expect(intern.getSchool()).toBe('Berkeley');
    });
})