const creatTeam = require("./src");
const fs = require("fs");

var TeamHtml = require("./src/htmTamplate.js");
var cssStyle = require("./src/style.js");

// console.log(htmTamplate)
async function init() {
  let Team = await creatTeam();
  let finalHtml = TeamHtml(Team);

  fs.writeFile("./dist/style.css", cssStyle, function (err) {
    if (err) throw err;
    console.log("css style Saved in to dist/style.css!");
  });
  // console.log("got this html ", finalHtml)
  fs.writeFile(`./dist/${Team.teamName}.html`, finalHtml, function (err) {
    if (err) throw err;
    console.log("HTML file is Saved in to dist/index.html!");
  });
}

init();
