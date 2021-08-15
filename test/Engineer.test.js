//The team Engineer’s class contains the Engineer's name, id, title "Engineer", email address, github username and getGithub() function
// It Also gets these functions  getName(), getId(), getEmail(), getRole() from the Employee class
const Engineer = require("../lib/Engineer");

describe("Engineer Class Test", () => {
    it("Can instantiate Engineer instance", () => {
      const eng = new Engineer();
      expect(eng).toBeTruthy();
    });
    it("Can set GitHUb account via constructor", () => {
      const gitHub = "GitHubUser";
      const eng = new Engineer("John", 120, "test@test.com", gitHub);
      expect(eng.github).toBe(gitHub);
    });

    it("getRole() should return Engineer", () => {
      const role = "Engineer";
      const eng = new Engineer("Lee", 120, "test@test.com", "GitHubUser");
      expect(eng.getRole()).toBe(role);
    });

    it("Can get GitHub username via getGithub()", () => {
      const gitHub = "GitHubUser";
      const eng = new Engineer("Noah", 120, "test@test.com", gitHub);
      expect(eng.getGithub()).toBe(gitHub);
    });
})