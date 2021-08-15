// Import the employee class which contains name, id, email, title "Employee" and these functions  getName(), getId(), getEmail(), getRole()
const Employee = require("../lib/Employee");

describe("Employee Class Test", () => {
    it("Can instantiate Employee instance", () => {
      const emp = new Employee();
      expect(emp).toBeTruthy();
    });

    it("Can set name via constructor arguments", () => {
      const name = "Mardin";
      const emp = new Employee(name);
      expect(emp.name).toBe(name);
      expect(emp.title).toBe("Employee");
      expect(emp.getId()).toBeFalsy();
      expect(emp.id).toBeFalsy();
    });

    it("Can set id via constructor argument", () => {
      const testValue = 2021;
      const elm = new Employee("Noah", testValue);
      expect(elm.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
      const email = "test@test.com";
      const elm = new Employee("Nivan", 100, email);
      expect(elm.email).toBe(email);
    });

    it("Can get name via getName()", () => {
      const name = "Alice";
      const elm = new Employee(name);
      expect(elm.getName()).toBe(name);
    });

    it("Can get id via getId()", () => {
      const id = 150;
      const elm = new Employee("Ben", id);
      expect(elm.getId()).toBe(id);
    });

    it("Can get email via getEmail()", () => {
      const email = "test@test.com";
      const elm = new Employee("Noah", 1, email);
      expect(elm.getEmail()).toBe(email);
    });

    it("getRole() should return Employee", () => {
      const role = "Employee";
      const elm = new Employee("Lee", 1, "test@test.com");
      expect(elm.getRole()).toBe(role);
    });
    it("getEmail() should return Undefined", () => {
      const email = "test@test.com";
      const elm = new Employee("Lee",email);
      expect(elm.getEmail()).toBe(undefined);
      expect(elm.getEmail()).toBeFalsy();
    });    
});
