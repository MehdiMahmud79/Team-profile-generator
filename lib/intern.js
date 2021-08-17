//The team Intern’s class contains the Intern's name, employee ID, email address, and school

// Import the employee class which contains name, id, email, and these functions  getName(), getId(), getEmail(), getRole()
const Employee = require("./employee");

Intern =class  extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
