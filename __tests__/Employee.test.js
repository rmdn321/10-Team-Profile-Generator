const Employee = require("../lib/Employee");

// Tests for verifying the behavior of Employee class.
describe('Employee' , () => {
    it('Should return an object when the class is initialised', () => {
        let employee = new Employee('Emily', 1, 'emily@mail.com');
        expect(typeof employee).toBe('object');
    });

    it('Should save and return the entered employee details', () => {
        let employee = new Employee('Emily', 1, 'emily@mail.com');
        expect(employee.getName()).toBe('Emily');
        expect(employee.getId()).toBe(1);
        expect(employee.getEmail()).toBe('emily@mail.com');
    });

    it('Should return employee as the role', () => {
        let employee = new Employee('Emily', 1, 'emily@mail.com');
        expect(employee.getRole()).toBe('Employee');
    });
})