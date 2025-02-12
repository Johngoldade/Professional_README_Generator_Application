// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export const renderLicenseBadge = (license) => {
  if (license === "Apache-2.0") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "Artistic-2.0") {
    return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'
  } else if (license === "BSD-2-Clause") {
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else if (license === "BSD-3-Clause") {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license === "CC0-1.0") {
    return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === "CC-BY-4.0") {
    return '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
  } else if (license ==="CC-BY-SA-4.0") {
    return '[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'
  } else if (license === "EPL-1.0") {
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
  } else if (license === "AGPL-3.0") {
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  } else if (license === "GPL-2.0") {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  } else if (license === "GPL-3.0") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license === "LGPL-3.0") {
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
  } else if (license === "IPL-1.0") {
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  } else if (license === "MIT") {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === "MPL-2.0") {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === "Unlicense") {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if (license === "Zlib") {
    return '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'
  } else {
    return ''
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
export const renderLicenseLink = (license) => {
  if (license === "Apache-2.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/apache-2.0.txt'
  } else if (license === "Artistic-2.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/artistic-2.0.txt'
  } else if (license === "BSD-2-Clause") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/bsd-2-clause.txt'
  } else if (license === "BSD-3-Clause") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/bsd-3-clause.txt'
  } else if (license === "CC0-1.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/cc0-1.0.txt'
  } else if (license === "CC-BY-4.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/cc-by-4.0.txt'
  } else if (license ==="CC-BY-SA-4.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/cc-by-sa-4.0.txt'
  } else if (license === "EPL-1.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/epl-1.0.txt'
  } else if (license === "AGPL-3.0") {
    return 'https://github.com/teamdigitale/licenses/blob/master/AGPL-3.0-or-later'
  } else if (license === "GPL-2.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/gpl-2.0.txt'
  } else if (license === "GPL-3.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/gpl-3.0.txt'
  } else if (license === "LGPL-3.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/lgpl-3.0.txt'
  } else if (license === "IPL-1.0") {
    return 'https://github.com/spdx/license-list/blob/master/IPL-1.0.txt'
  } else if (license === "MIT") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt'
  } else if (license === "MPL-2.0") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mpl-2.0.txt'
  } else if (license === "Unlicense") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/unlicense.txt'
  } else if (license === "Zlib") {
    return 'https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/zlib.txt'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export const renderLicenseSection = (license) => {
  const link = renderLicenseLink(license)
  return `Licensed under the [${license}](${link}) license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license)
  const licenseMsg = renderLicenseSection(data.license)
  return ` 
${badge}

# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${licenseMsg}

## Contributing

${data.contributions} 

## Tests

${data.test}

## Questions

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

${data.questions}
`;
}

export default generateMarkdown;
