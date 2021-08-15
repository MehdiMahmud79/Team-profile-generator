//The team Intern’s class contains the Intern's name, id ,title "Intern", email address, school and getSchool() function
// It Also gets these functions  getName(), getId(), getEmail(), getRole() from the Employee class
const Intern = require("../lib/Intern");

describe("Intern Class Test", () => {
    it("Can instantiate Intern instance", () => {
      const int = new Intern();
      expect(int).toBeTruthy();
    });
    it("Can set school via constructor", () => {
      const school = "UCLA";
      const Int = new Intern("Noah", 120, "test@test.com", school);
      expect(Int.school).toBe(school);
    });

    it("getRole() should return \"Intern\"", () => {
      const role = "Intern";
      const Int = new Intern("Lee", 120, "test@test.com", "UCLA");
      expect(Int.getRole()).toBe(role);
    });

    it("Can get school via getSchool()", () => {
      const school = "UCLA";
      const Int = new Intern("John", 120, "test@test.com", school);
      expect(Int.getSchool()).toBe(school);
    });
})