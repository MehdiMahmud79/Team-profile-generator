
//The team manager’s class contains the manager's name, employee ID, email address, office number and getOfficeNumber() function

// Import the employee class which contains name, id, email, and these functions  getName(), getId(), getEmail(), getRole()
const Manager = require("../lib/Manager");
const { v4: uuidv4 } = require('uuid');

describe("Manager Class Test", () => {
    it("Can instantiate Manager instance", () => {
      const man = new Manager();
      expect(man).toBeTruthy();
    });
    it("Can set office number via constructor argument", () => {
      const ofiice = 2;
      const man = new Manager("Lee", uuidv4(), "test@test.com", ofiice);
      expect(man.officeNumber).toBe(ofiice);
    });

    it("getRole() should return \"Manager\"", () => {
      const man = new Manager("Noah");
      expect(man.getRole()).toBe("Manager");
    });

    it("Can get office number via getOffice()", () => {
      const ofiice = 2;
      const man = new Manager("Noah", uuidv4(), "test@test.com", ofiice);
      expect(man.getOfficeNumber()).toBe(ofiice);
    });
})