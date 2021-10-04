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
          type: 'input',
          message: data[7],
          name: 'GitUser',
        },
        {
          type: 'input',
          message: data[8],
          name: 'email',
        }
      ]);
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", questions);
}

// Function call to initialize app
init();
