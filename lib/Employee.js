class Employee {
  constructor(name, id, email) {
    this.name =  name;
    this.id = id;
    this.email = email;
  }
  
  getName() {
    return this.name;
  }
  
  getId() {
    return this.id;
  }
  
  getEmail() {
    return this.email;
  }
  
  getRole() {
    return "Employee";
  }
}

module.exports = Employee

class Engineer extends Employee {

}

class Intern extends Employee {

}