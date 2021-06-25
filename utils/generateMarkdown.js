// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return '';
};

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return ` ## License
   This project is licensed under the ${license} license.`
  } return '';
}

//Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  ${renderLicenseLink(data.license)}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ## Tests
  ${data.test}
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  Find more of my work at: ![${data.gitHub}](https://github.com/${data.gitHub})
`;
};

module.exports = generateMarkdown;