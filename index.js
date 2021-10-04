// TODO: Include packages needed for this application
const fs = require("fs");
const {prompt} = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",                   //0
    "Type a description for you porject.",                  //1
    "What are the installation instructions?",              //2
    "What are the uses for this project?",                  //3
    "How may other developers contribute to your project?", //4
    "How can you test your project?",                       //5
    "License?",                                             //6
    "GitHub username: ",                                    //7
    "Email Address: ",                                      //8
    "URL to Git Repository: ",                              //9
    "URL to Deployed page",                                 //10
    "Image to include: ",                                   //11
    "Credits To: "                                          //12
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    prompt([
        {
          type: 'input',
          message: data[0],
          name: 'title',
        },
        {
          type: 'input',
          message: data[1],
          name: 'description',
        },
        {
          type: 'input',
          message: data[2],
          name: 'install',
        },
        {
          type: 'input',
          message: data[3],
          name: 'uses',
        },
        {
          type: "input",
          message: data[11],
          name: "image",
        },
        {
          type: 'input',
          message: data[4],
          name: 'contributions',
        },
        {
          type: 'input',
          message: data[5],
          name: 'testing',
        },
        {
          type: 'list',
          message: data[6],
          name: 'license',
          choices:[
              "MIT License",
              "Apache License",
              "GPL License",
            ],
        },
        {
          type: "input",
          message: data[12],
          name: "credits",
        },
        {
          type: 'input',
          message: data[7],
          name: 'GitUser',
        },
        {
          type: 'input',
          message: data[8],
          name: 'email',
        },
        {
          type: "input",
          message: data[9],
          name: "urlGit",
        },
        {
          type: "input",
          message: data[10],
          name: "urlDeploy",
        },

    ])
    .then((answers) => {
        const {title, description, install, uses, contributions, testing, license, GitUser, email, urlGit, urlDeploy, image, credits} = answers;
        var liType;
        if(license === "MIT License") {
            liType = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        };
        if(license === "Apache License") {
            liType = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        };
        if(license === "GPL License") {
            liType = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
        };
        const readme =
`
# ${title} ${liType}  

## Table of Contents  

* [Installation](#installation)
* [Description](#description)
* [URLs](#urls)
* [Usage](#usage)
* [Images](#images)
* [Credits](#credits)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation  

${install}  

## Description  

${description}  

## URLs  

GitHub repository: ${urlGit}  

Webpage: ${urlDeploy}  

## Usage  

${uses}  

## Images  

![alt website](${image})  

## Credits  

${credits}  

## License  

${license}  

## Contributions  

${contributions}  

## Tests  

${testing}  

## Questions  

${GitUser}
${email}`;
        fs.writeFile(fileName, readme, (err) =>
        err ? console.error(err) : console.log('Successfully created an README file!')
        );
    });
};

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", questions);
}

// Function call to initialize app
init();
