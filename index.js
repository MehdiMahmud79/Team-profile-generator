const inquirer = require("inquirer");
const fs = require("fs");
const {creatTeam, Team} = require("./lib/functions");

let teamMembers=[];

creatTeam()
// console.log(Team)