const inquirer = require("inquirer")

// const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
// TODO: Create an array of questions for user input


function askManager() {

    const questions = [
        {
            type: "input",
            message: "What is your team manager’s name?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is team managers employee ID?",
            name: "empId",
        },
        {
            type: "input",
            message: "What is your team's manager email address?",
            name: "eMail",
        },
        {
            type: "input",
            message: "What is your team's manager office number",
            name: "officeNumber",
        },
        
    ];
    inquirer.prompt(questions)
    .then((managerAnswers)=>{
        console.log(managerAnswers);
    createTeam()
    })
    
}

function createTeam() {

    inquirer.prompt([
        {
            type: "list",
            message: "What position are you joining?",
            choices: ["engineer", "intern"],
            name: "Position",
        }
    ])
    .then((teamAnswers)=>{
        console.log(teamAnswers);
    })
}

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   askManager()
}
init()