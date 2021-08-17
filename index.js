const { creatTeam, renderTeam } = require("./src/functions");
const fs = require("fs");

var TeamHtml = require("./src/htmTamplate");

// console.log(htmTamplate)
async function init() {
  let Team = await creatTeam();
let finalHtml = TeamHtml(Team);

// console.log("got this html ", finalHtml)
fs.writeFile('./dist/index.html', finalHtml, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
//   renderTeam(TeamHtml(finalHtml));
}

init();
