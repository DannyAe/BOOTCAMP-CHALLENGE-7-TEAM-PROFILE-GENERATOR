const inquirer = require("inquirer")

// const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

// TODO: Create an array of questions for user input
const employees=[]

const questions = [
    {
        type: "input",
        message: "What is your employees name?",
        name: "empName",
    },
    {
        type: "input",
        message: "What is team members ID?",
        name: "empId",
    },
    {
        type: "input",
        message: "What is your team members email address?",
        name: "eMail",
    },
    
];

function askManager() {

    const manQuestions = [
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
    inquirer.prompt(manQuestions)
    .then((manAnswers)=>{
        console.log(manAnswers);

        var manager=new Manager(manAnswers.managerName, manAnswers.eMail, manAnswers.empId, manAnswers.officeNumber)
        employees.push(manager)
    createTeam()
    })
    
}

function createTeam() {

    inquirer.prompt([
        {
            type: "list",
            message: "What position are you joining?",
            choices: ["engineer", "intern", "quit"],
            name: "Position",
        }
    ])
    .then((teamAnswers)=>{
        console.log(teamAnswers);
        if (teamAnswers.Position === "engineer") {
            createEngineer()
        } else if(teamAnswers.Position === "intern") {
            createIntern()
        } else {
            // quit
            create()
        }
    })
}

function createEngineer() {
    inquirer.prompt([
        ...questions,
        { 
        type: "input",
        message: "What is your the employee's GitHub",
        name: "gitHub",
        }
    ]).then((engAnswers)=>{
        console.log(engAnswers);
        var engineer=new Engineer(engAnswers.empName, engAnswers.eMail, engAnswers.empId, engAnswers.gitHub)
        employees.push(engineer)
        createTeam()
    })
}

function createIntern() {
    inquirer.prompt([
        ...questions,
        { 
        type: "input",
        message: "What is your the employee's School",
        name: "school",
        }
    ]).then((intAnswers)=>{
        console.log(intAnswers);
        var intern=new Intern(intAnswers.empName, intAnswers.eMail, intAnswers.empId, intAnswers.school)
        employees.push(intern)
        createTeam()
    })
}
function createHtml() {
    const html= (html) =>  `<!DOCTYPE html> 
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
    <div class="container">
    ${html} 
    </div>
    </body>
    </html>`

const managerHtml=(manager) => {
    return`<div class="card" style="width: 18rem;">
    <div class="card-header">
      Manager
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${manager.name}</li>
      <li class="list-group-item">Id: ${manager.id}</li>
      <li class="list-group-item">E-Mail: ${manager.email}</li>
      <li class="list-group-item">OfficeNumber: ${manager.officenumber}</li>
    </ul>
  </div>`
}

const engineerHtml=(engineer) => {
    return`<div class="card" style="width: 18rem;">
    <div class="card-header">
      Engineer
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${engineer.name}</li>
      <li class="list-group-item">Id: ${engineer.id}</li>
      <li class="list-group-item">E-Mail: ${engineer.email}</li>
      <li class="list-group-item">Github: ${engineer.gitHub}</li>
    </ul>
  </div>`
}

const internHtml=(intern) => {
    return`<div class="card" style="width: 18rem;">
    <div class="card-header">
        intern
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${intern.name}</li>
      <li class="list-group-item">Id: ${intern.id}</li>
      <li class="list-group-item">E-Mail: ${intern.email}</li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>`
}

const htmlArr=[]
employees.forEach(employee =>{
    if (employee.role === "Engineer") {
        htmlArr.push(engineerHtml(employee))             
    } else if (employee.role === "Intern"){    
        htmlArr.push(internHtml(employee))
    } else htmlArr.push(managerHtml(employee))
})

return html(htmlArr.join(""))
}

function create() {
    fs.writeFileSync("index.html", createHtml(), "utf-8")


}


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
   askManager()
}
init()