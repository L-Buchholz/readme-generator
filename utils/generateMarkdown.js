// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

/*URLS:
  Apache: "https://img.shields.io/static/v1?&label=License&message=Apache-2.0&color=green.svg";
  GNU: "https://img.shields.io/static/v1?label=License&message=GNU-GPLv3&color=green";
  ISC: "https://img.shields.io/static/v1?label=License&message=ISC&color=green.svg";
  MIT: "https://img.shields.io/static/v1?label=License&message=MIT&color=green.svg";
  (Other): "https://img.shields.io/static/v1?label=License&message=(Other)&color=green.svg";
*/

/*
apache: "Apache-2.0",
gnuGPL: "GNU-GPLv3",
isc: "ISC",
mit: "MIT",
//var other: "(Other)" -- RETURN EMPTY STRING,
*/

function renderLicenseBadge(license) {
  /*
  const apacheLic = "Apache-2.0";
  const gnuGPLlic = "GNU-GPLv3";
  const iscLic = "ISC";
  const mitLic = "MIT";
  const otherLic = "(Other)";
  */
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
console.log(renderLicenseBadge);

/*
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
