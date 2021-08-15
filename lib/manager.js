//The team manager’s class contains the manager's name, employee ID, email address, and office number

// Import the employee class which contains name, id, email, and these functions  getName(), getId(), getEmail(), getRole()
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.title = "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}
module.exports = Manager;
