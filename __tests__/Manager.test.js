const Manager = require("../lib/Manager");

// Tests for verifying the behavior of Manager class.
describe('Manager' , () => {
    it('Should return an object when the class is initialised', () => {
        let manager = new Manager('Taylor', 1, 'taylor@mail.com');
        expect(typeof manager).toBe('object');
    });

    it('Should save and return the entered manager details', () => {
        let manager = new Manager('Taylor', 1, 'taylor@mail.com');
        expect(manager.getName()).toBe('Taylor');
        expect(manager.getId()).toBe(1);
        expect(manager.getEmail()).toBe('taylor@mail.com');
    });

    it('Should return Manager as the role', () => {
        let manager = new Manager('Taylor', 1, 'taylor@mail.com');
        expect(manager.getRole()).toBe('Manager');
    });

})