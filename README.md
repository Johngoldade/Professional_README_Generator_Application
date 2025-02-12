 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# NODE.js Professional README Generator Application

## Description

This is a NODE.js application to generate a professional README.md for any project. THe code is open source and available for anyone to use under the MIT license. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install this application, clone the source code to your local machine from the repository, or download the zip file from the GitHub repository. 

## Usage

To use the application, open the locally stored code in VS Code. NODE.js is needed to run the application. If NODE.js is not already installed on your machine, information to install it can be found in this article: [NodeJS Installation Guide](https://coding-boot-camp.github.io/full-stack/nodejs/nodejs-installation-guide). Once NODE.js is installed, open the Integrated Terminal and navigate to the "Source_Code" folder, or in the file menu on the left side of the screen, right click on "Source_Code" and select "Open in Integrated Terminal".

![Opening intergrated terminal from the source_Code folder](./tree/main/Images/Integrated-Terminal.png)

 Next, we need to install the "Inquirer" package from NODE.js. To do this, type
 ```
 npm install 
 ```
 into the terminal and press Enter.

 Now you should be ready to run the application. To do this, type
 ```
 node index.js
 ```
  into the terminal and press Enter. 
  
The program will run a series of questions, asking for a title, a description, installation instructions, usage instructions, a license choice, instructions for contributions from others, tests to run, and information so that users with questions can reach out to you.  

![Terminal with answered questions](./tree/main/Images/Run_App.png)

Once these questions are completed, the application will construct the README.md file and will save it to the "Created_File" folder.

![Readme created by the application](./tree/main/Images/Built_Readme.png)

From there, the file can be edited or copied to better match the needs of your project. If more than one README.md is to be created, make sure to remove the readme from the folder or it will be overwritten by the next file. 

## Credits

- The license badges used in "generateMarkdown.js" were copied from the [Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) repository by lukas-h.
- The default links for the licenses used in "generateMarkdown.js" were copied from the [choosealicense.com](https://github.com/github/choosealicense.com) repository on GitHub.
- The license choices listed in "index.js" were selected from [Licensing a Repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository), a GitHub Docs article.

## License

Licensed under the [MIT](https://github.com/github/choosealicense.com/blob/gh-pages/_licenses/mit.txt) license.

## Contributing

To contribute, clone the repository onto your local machine, edit and push to a feature branch. Open a pull request so your changes can be reviewed. If they improve the app, we will merge your changes to the main branch code. 

## Tests

There are currently no tests developed for this project.

## Questions

- GitHub: [Johngoldade](https://github.com/Johngoldade)
- Email: [goldade.john@gmail.com](mailto:goldade.john@gmail.com)

Reach out to me at my email above with questions and I will get back to you as soon as I can.
