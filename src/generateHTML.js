function generateHTML(answers) {
  return `
  ${answers.license}
  ${answers.name}
  Email: ${answers.email }
  GitHub: [https://github.com/${answers.username}](https://github.com/${answers.username}/)
`;
}

module.exports = generateHTML;
