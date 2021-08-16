const inquirer = require("inquirer");
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");
const EmailValidator = require("email-validator");

const { v4: uuidv4 } = require('uuid');

    
 creatTeam=()=> {
    inquirer.prompt([
        {
            type: "input",
            message: "Welcome to Team Generator. To start, please write your team name:",
            name: "teamName",
            validate: function (teamName) {
                if (teamName) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid Team Name")
                    return false;
                }
            }
        }
    ])
        .then(data=>{
            var team = {teamName:data.teamName};
            console.log(" team until now is \n", team)

            addManager(team);
        })
};


addManager=(team)=> {

    inquirer.prompt([
        {
            type: "input",
            message: "What is the team manager's name?",
            name: "name",
            validate: function (name) {
                if (name) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid name")
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "What is the team manager's email address?",
            name: "email",
            validate: function (email) {
                let valid=EmailValidator.validate(email);
                if (valid) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid email")
                    return false;
                }
            }
            
        },

        {
            type: "input",
            message: "What is your team manager's office number?",
            name: "officeNumber",
            validate: function (officeNumber) {
                if (!officeNumber ){
                    console.log(" invalid input");
                    return false;
                  } else {
                    return true;
                  }
                }
        },
    ])

        .then(function (data) {
            team.members=[];

            const name = data.name;
            const id = uuidv4();
            const email = data.email;
            const officeNumber = data.officeNumber;
            const teamMember = new Manager(name, id, email, officeNumber);
            team.members.push(teamMember);
            console.log(" team until now is \n", team)

            addTeamMembers(team);
        });

}

addTeamMembers= (team)=> {
    console.log(" adding a team member data")

    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["✓ Yes. Add an engineer", "✓ Yes. Add an intern", "✗ No. I ahve a complete team now."],
            name: "addMember",
            validate: function (name) {
                if (name) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid Team Name")
                    return false;
                }
            }
            
        }
    ])

        .then(function (data) {
            switch (data.addMember) {
                case "✓ Yes. Add an engineer":
                    console.log("✓ engineer")
                    addEngineer(team);
                    break;

                case "✓ Yes. Add an intern":
                    console.log("✓ Intern")
                    addIntern(team);
                    break;

                case "✗ No. I ahve a complete team now.":
                    console.log("✓ compile the team data")
                    compileTeam(team);
                    break;
            }
        });
};


addEngineer=(team)=> {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name",
            validate: function (name) {
                if (name) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid Team Name")
                    return false;
                }
            }
        },
        {
            message: "What is this engineer's email address?",
            name: "email",
            validate: function (email) {
                let valid=EmailValidator.validate(email);
                if (valid) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid email")
                    return false;
                }
            }
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github",
            validate: function (name) {
                if (name) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid user Name")
                    return false;
                }
            }
            
        }
    ])

        .then(function (data) {
            const name = data.name;
            const id = uuidv4();
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            team.members.push(teamMember);
            console.log(" team until now is \n", team);
            // console.log(" team member \n", team.members[0]);
            // console.log(" team member name is ", team.members[0].getName());

            addTeamMembers(team)
        });

};

addIntern=(team)=> {

    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name",
            validate: function (name) {
                if (name) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid  Name")
                    return false;
                }
            }
        },
        {
            message: "What is this intern's email address?",
            name: "email",
            validate: function (email) {
                let valid=EmailValidator.validate(email);
                if (valid) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid email")
                    return false;
                }
            }
        },
        {
            message: "What is this intern's school?",
            name: "school",
            validate: function (name) {
                if (name) {
                    return true;
                } else {
                    console.log(" ⚠ Please enter a valid school Name")
                    return false;
                }
                }
            }
    ])

        .then(function (data) {
            const name = data.name;
            const id = uuidv4();
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            team.members.push(teamMember);
            console.log(" team until now is \n", team)

            addTeamMembers(team)
        });

};

compileTeam=(team) =>{
    console.log(" team until now is \n", team)

};
module.exports ={creatTeam};