TeamHtml = (Team) => {
  let htmlHeader = `<!DOCTYPE html>
    <html lang="en">

    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

    <link rel="stylesheet" href="./css/style.css" />
    <title>Team Profile</title>
    </head>

    <body>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
        <a class="
                navbar-brand
                fs-2
                text-warning
                border-info border-bottom border-4
                py-0
            " id="teamName" href="#">${Team.teamName}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link " href="#manager">Manager</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#teamMembers">Members</a>
                </li>

                </ul>

            </div>

        </div>

    </nav>

    <!-- Team manager section -->
    <h1 class="fs-3 bg-light m-0 my-4 text-primary text-center" id="manager">
        <i class="fas fa-chalkboard-teacher p-2"></i>
        Team Manager
    </h1>
    <div class="container  col-sm-6 col-lg-4  m-4  mx-auto">
        <div class="card l-bg-cherry">
            <div class="cardLogo p-4  ">
                <div class="card-icon card-icon-large  display-1"><i class="fas fa-users"></i></div>
                <div class="mb-4">
                    <h5 class="card-title mb-0"><i class="fas fa-id-card"></i> Manager</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                <h4 class="card-title text-info">${Team.members[0].getName()}</h4>
                <h6><span class="text-dark"><i class="far fa-id-badge"></i> ID: </span> ${Team.members[0].getId()}</h6>
                <h6><span class="text-dark"><i class="fa fa-envelope"></i> Email:</span> ${Team.members[0].getEmail()}</h6>
                <h6><span class="text-dark"><i class="fa fa-suitcase"></i> Office No.:</span> ${Team.members[0].getOfficeNumber()} </h6>
                </div>

            </div>
        </div>
    </div>

    <h1 class="fs-3 bg-light m-0 my-4 text-primary text-center" id="teamMembers">
    <i class="fa fa-users p-2"></i>
    Team Members
    </h1>
    <!-- end of part one -->

    <div class="container">
    <div class="row ">

    <div class="col mx-1">
    <h1 class="fs-5 fs-sm-3 bg-dark m-0 my-2 text-primary text-center" id="enginears">
        <i class="fas fa-drafting-compass p-1 text-warning"></i> Enginear members 
    </h1>
    <div class="col card  l-bg-green-dark">`;

  let Enginears = enginearCard(Team);
  let Interns = internCard(Team);
  return htmlHeader + Enginears + Interns;
};

enginearCard = (Team) => {
  let Enginears = Team.members.filter((member) => {
    member.constructor.name === "Engineer";
  });
  Enginears.forEach((eng) => {
    let engCards = "";
    engCards += `
            <div class="cardLogo p-4 ">
                <div class="card-icon card-icon-large  display-1"><i class="fas fa-users"></i></div>
                <div class="mb-4">
                    <h5 class="card-title mb-0"><i class="fas fa-user"></i> Engineer</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                <h4 class="card-title text-info"> ${eng.getName()}</h4>
                <h6><span class="text-dark"><i class="far fa-id-badge"></i> ID: </span> ${eng.getId()}</h6>
                <h6><span class="text-dark"><i class="fa fa-envelope"></i> Email: </span> ${eng.getEmail()}</h6>
                <h6 ><span class="text-dark text-decoration-non eactive"><i class="fab fa-github"></i> GitHub: </span> <a class=" text-decoration-none text-warning" target = "_blank" href="https://github.com/${eng.getGithub()}/">${eng.getGithub()}</a></h6>
            
                </div>
            </div>
           `;
  });

  let htmlMiddle = `
            </div>   
              </div>
              <div class="col mx-1">
                <h1 class="fs-5 fs-sm-3 bg-dark m-0 my-2 text-primary text-center" " id="projects">
                <i class="fas fa-book-reader p-1 text-warning"></i> Intern members 
                </h1>
                <div class="col card  l-bg-orange-dark">
                `;
  return engCards + htmlMiddle;
};

internCard = (Team) => {
  let Interns = Team.members.filter((member) => {
    member.constructor.name === "Intern";
  });
  Interns.forEach((Intern) => {
    let InternCards = "";
    InternCards += `
            <div class="cardLogo p-4  ">
                <div class="card-icon card-icon-large display-1"><i class="fas fa-users"></i></div>
                <div class="mb-4">
                    <h5 class="card-title mb-0"><i class="fas fa-user"></i> Intern</h5>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                    <h4 class="card-title text-info">${Intern.getName()}</h4>
                    <h6><span class="text-dark"><i class="far fa-id-badge"></i> ID: </span> ${Intern.getId()}</h6>
                    <h6><span class="text-dark"><i class="fa fa-envelope"></i> Email:</span> ${Intern.getEmail()}</h6>
                    <h6><span class="text-dark"><i class="fas fa-school"></i> School:</span> ${Intern.getSchool()}</h6>
            
                </div>
            </div>
            `;
  });
  let htmlFooter = `
            </div>
        </div>   

    </div>
    
    </div>
    script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj"
        crossorigin="anonymous"></script>


    </body>

    </html>`;
  return InternCards + htmlFooter;
};

module.exports = TeamHtml;
