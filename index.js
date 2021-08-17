const { creatTeam, renderTeam } = require("./src/functions");

var TeamHtml = require("./src/htmTamplate");

// console.log(htmTamplate)
async function init() {
  let Team = await creatTeam();
let finalHtml = TeamHtml(Team);
console.log("got this html ", finalHtml)

//   renderTeam(TeamHtml(finalHtml));
}

init();
