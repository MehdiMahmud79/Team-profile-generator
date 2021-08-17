//The team Engineer’s class contains the Engineer's name, employee ID, email address, and the github username

// Import the employee class which contains name, id, email, and these functions  getName(), getId(), getEmail(), getRole()
const Employee = require("./employee");

Engineer= class  extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.title = "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
