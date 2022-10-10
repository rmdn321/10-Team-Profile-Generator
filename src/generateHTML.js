function generateHTML(manager, engineers, interns) {
  let x = `<h1>My Team</h1>`
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
  </head>
  <body>
    ${x}
    Manager:
    Name: ${manager.name}
    Email: ${manager.email}
    
  </body>
  </html>
  ${answers.name}
  Email: ${answers.email }
  GitHub: [https://github.com/${answers.username}](https://github.com/${answers.username}/)
`;
}

module.exports = generateHTML;
