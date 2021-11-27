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
  let apacheLic = "Apache-2.0";
  let gnuGPLlic = "GNU-GPLv3";
  let iscLic = "ISC";
  let mitLic = "MIT";
  const license = [
    { apache: "Apache License 2.0" },
    { gnu: "GNU GPLv3" },
    { isc: "ISC License" },
    { mit: "MIT" },
  ];
  if (response.description == license.apache) {
    return apacheLic;
  } else if (response.description == license.gnu) {
    return gnuGPLlic;
  } else if (response.description == license.isc) {
    return iscLic;
  } else if (response.description == license.mit) {
    return mitLic;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
