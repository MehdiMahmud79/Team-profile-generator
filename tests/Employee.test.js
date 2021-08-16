// Import the employee class which contains name, id, email, title "Employee" and these functions  getName(), getId(), getEmail(), getRole()
const Employee = require("../lib/Employee");
const EmailValidator = require("email-validator");
const { v4: uuidv4 } = require('uuid');
const IdValidator = require('uuid-validate');

describe("Employee Class Test", () => {
    it("Can instantiate Employee instance", () => {
      const emp = new Employee();
      expect(emp).toBeTruthy();
    });
    it("check functions getName(), getId(), getEmail(), and getRole() for their functionality", () => {
      const id=uuidv4()
      const emp = new Employee("Lee", id, "test@test.com");
      expect(emp.getName()).toBeTruthy();
      expect(emp.getRole()).toBeTruthy();
      expect(emp.getId()).toBeTruthy();
      expect(emp.getEmail()).toBeTruthy();
    });

    describe("Employee test for the first argument \"name\"", () => {
      it("Can set name via constructor arguments and the other are falsy except the title ", () => {
        const name = "Mardin";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
        expect(emp.title).toBe("Employee");
        expect(emp.id).toBeFalsy();
        expect(emp.email).toBeFalsy();
      });
      it("check the name format to be string", () => {
        const name = "mehdi";
        const emp = new Employee(name);
        expect(typeof emp.getName()).toBe("string");
      });  
      it("Can get name via getName()", () => {
        const name = "Alice";
        const emp = new Employee(name);
        expect(emp.getName()).toBe(name);
      });
    });

    describe("Employee test for the second argument \"id\"", () => {

      it("Can set id via constructor argument", () => {
        const id = uuidv4();
        const emp = new Employee("Noah", id);
        expect(emp.id).toBe(id);
        expect(emp.title).toBe("Employee");
        expect(emp.getEmail()).toBeFalsy();
      });
      it("Can get id via getId()", () => {
        const id = uuidv4();
        const emp = new Employee("Ben", id);
        expect(emp.getId()).toBe(id);
      });
      it("check the id format to be uuidv4", () => {
        const id = uuidv4();
        const emp = new Employee('Noah',id,"test@test");
        expect(IdValidator(emp.getId())).toBeTruthy();
      });  
    });

    describe("Employee test for the third argument \"email\"", () => {

      it("Can set email via constructor argument", () => {
        const email = "test@test.com";
        const emp = new Employee("Nivan", uuidv4(), email);
        expect(emp.email).toBe(email);
      });
      it("Can get email via getEmail()", () => {
        const email = "test@test.com";
        const emp = new Employee("Noah", uuidv4(), email);
        expect(emp.getEmail()).toBe(email);
      });
      it("getEmail() should return Undefined", () => {
        const email = "test@test.com";
        const emp = new Employee("Lee",email);
        expect(emp.getEmail()).toBe(undefined);
        expect(emp.getEmail()).toBeFalsy();
      }); 
      it("check the email format to be string and contain @ using email validator ", () => {
        const email = "test@test.com";
        const emp = new Employee('Noah',uuidv4(),email);
        expect(typeof  emp.getEmail()).toBe("string");
        expect(EmailValidator.validate(email)).toBeTruthy();
      });            
    });      
});
