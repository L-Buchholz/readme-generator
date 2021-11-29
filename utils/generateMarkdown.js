/*Full URLS for license badges:
  Apache: "https://img.shields.io/static/v1?&label=License&message=Apache-2.0&color=green.svg";
  GNU: "https://img.shields.io/static/v1?label=License&message=GNU-GPLv3&color=green";
  ISC: "https://img.shields.io/static/v1?label=License&message=ISC&color=green.svg";
  MIT: "https://img.shields.io/static/v1?label=License&message=MIT&color=green.svg";
  (Other): "https://img.shields.io/static/v1?label=License&message=(Other)&color=green.svg";
*/

//Function renders a license badge (using shields.io) by matching a badge with the user input value
function renderLicenseBadge(license) {
  const licenseOptions = {
    apache: "Apache License 2.0",
    gnu: "GNU GPLv3",
    isc: "ISC License",
    mit: "MIT",
  };
  if (license == licenseOptions.apache) {
    return "Apache-2.0";
  } else if (license == licenseOptions.gnu) {
    return "GNU-GPLv3";
  } else if (license == licenseOptions.isc) {
    return "ISC";
  } else if (license == licenseOptions.mit) {
    return "MIT";
  } else {
    return "(Other)";
  }
}
renderLicenseBadge;

//Function returns a license link (using ChooseALicense.com) by matching the license with the user input value
//No license = Return ChooseALicense.com appendix
function renderLicenseLink(license) {
  const licenseOptions = {
    apache: "Apache License 2.0",
    gnu: "GNU GPLv3",
    isc: "ISC License",
    mit: "MIT",
  };
  if (license == licenseOptions.apache) {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license == licenseOptions.gnu) {
    return "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license == licenseOptions.isc) {
    return "https://choosealicense.com/licenses/isc/";
  } else if (license == licenseOptions.mit) {
    return "https://choosealicense.com/licenses/mit/";
  } else {
    return "https://choosealicense.com/appendix/";
  }
}
renderLicenseLink;

//Function generates markdown for the README.md file (as required by the index.js)
function generateMarkdown(response) {
  return `<h1>${response.title} 
  <br>
  <img src ="https://img.shields.io/static/v1?&label=License&message=${renderLicenseBadge(
    response.license
  )}&color=green.svg"/>
  <h2>Description</h2>
  <p>${response.description}</p>
  <h2>Table of Contents</h2>
  <ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions?</a></li>
  </ul>
  <h2 id="installation">Installation</h2>
  <p>${response.installation}</p>
  <h2 id="usage">Usage</h2>
  <p>${response.usage}</p>
  <h2 id="license">License</h2>
    <p>
    This application is covered under the following license: <a href="${renderLicenseLink(
      response.license
    )}" target="blank">${response.license}</a>.
    <br><br> 
    For more information about this and other 
    licenses, please visit <a href="https://choosealicense.com/licenses/" 
    target="blank">ChooseALicense.com</a>.
    </p>
  <h2 id="contributing">Contributing</h2>
  <p>Additional contributors to this program are listed below <em>(blank if none)</em>.
  <br><br>
  ${response.contributing}</p>
  <h2 id="tests">Tests</h2>
  <p>Applicable tests for this program are listed below <em>(blank if none)</em>.
  <br><br>
  ${response.tests}</p>
  <h2 id="questions">Questions?</h2>
    <p>
    This project was created by: <a href="${response.questions2}" 
    target="blank">${response.questions1}</a></p>
  <h2>Contact Info</h2>
  <p>${response.questions3}</p><br><br>
  <a href="mailto: ${response.questions4}">Email</a>`;
}

//Function call enables exporting of generateMarkdown.js so it is accessible to the index.js file
module.exports = generateMarkdown;
