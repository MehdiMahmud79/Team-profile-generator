
//The team manager’s class contains the manager's name, employee ID, email address, office number and getOfficeNumber() function

// Import the employee class which contains name, id, email, and these functions  getName(), getId(), getEmail(), getRole()
const Manager = require("../lib/Manager");

describe("Manager Class Test", () => {
    it("Can instantiate Manager instance", () => {
      const man = new Manager();
      expect(man).toBeTruthy();
    });
    it("Can set office number via constructor argument", () => {
      const ofiice = 20;
      const man = new Manager("Lee", 1000, "test@test.com", ofiice);
      expect(man.officeNumber).toBe(ofiice);
    });

    it("getRole() should return \"Manager\"", () => {
      const role = "Manager";
      const man = new Manager("Foo", 1, "test@test.com", 100);
      expect(man.getRole()).toBe(role);
    });

    it("Can get office number via getOffice()", () => {
      const ofiice = 20;
      const man = new Manager("Foo", 1, "test@test.com", ofiice);
      expect(man.getOfficeNumber()).toBe(ofiice);
    });
})