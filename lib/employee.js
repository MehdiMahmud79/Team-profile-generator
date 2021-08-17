// Employee class constructor which contains name, id, email, and these functions  getName(), getId(), getEmail(), getRole()

Employee=class  {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.title = "Employee";
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
    return this.title;
  }
}
module.exports = Employee;
