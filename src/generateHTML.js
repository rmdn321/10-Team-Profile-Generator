function generateEmployeeProfile(a,b,c,d,e) {
  return ` 
  <div class="card text-bg-secondary m-3 " style="min-width: 30%;">
    <div class="card-header">${a}</div>
    <div class="card-body">
      <h5 class="card-title">${b}</h5>
      <p class="card-text">${c}</p>
      <p class="card-text">${d}</p>
      <p class="card-text">${e}</p>
    </div>     
  </div>

    `
}

function generateHTML(manager, engineers, interns) {
  let teamProfileStr = ""
  managerProfileStr = generateEmployeeProfile(manager.name, 'Manager', manager.id, manager.email, manager.officeNumber)
  teamProfileStr = teamProfileStr.concat(managerProfileStr)

  engineers.map((engineer) => {
    engineerProfileStr = generateEmployeeProfile(engineer.name, 'Engineer', engineer.id, engineer.email, engineer.github)
    teamProfileStr = teamProfileStr.concat(engineerProfileStr)
  })

  interns.map((intern) => {
    internProfileStr = generateEmployeeProfile(intern.name, 'Intern', intern.id, intern.email, intern.school)
    teamProfileStr = teamProfileStr.concat(internProfileStr)
  })

  
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <title>My Team</title>
  </head>
  <body>
   
  <h1 class="text-center mt-5 ">My Team</h1>

  <div class="d-flex flex-row flex-wrap p-5">

    ${teamProfileStr}

  </div>
    
  </body>
  </html>
  
`;
}

module.exports = generateHTML;
