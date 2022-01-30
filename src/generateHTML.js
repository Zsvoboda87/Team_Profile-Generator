// const Employee = require("./lib/Employee");
// const Engineer = require('./lib/Engineer')
// const Manager = require('./lib/Engineer')
// const Intern = require('./lib/Intern')

const generateManger = dataArray => {
    let template = ''
    for(i =0; i < dataArray.length; i++) {
        if (dataArray[i].getRole() == 'Manager') {
            template += 
            `
            <div class="card">
            <div class= "card-header">
                <h3>${dataArray[i].getName()}</h3>
                <h4>Manager</h4>
            </div>
            <div class= "card-main">
                <div>ID: ${dataArray[i].getId()}</div>
                <div>Email:${dataArray[i].getEmail()}</div>
                <div>OfficeNumber:${dataArray[i].getOfficeNumber()}</div>
            </div>
            </div>`
        }
    } 
    return template
}

const generateEngineer = dataArray => {
    let template = ''
    for(i =0; i < dataArray.length; i++) {
        if (dataArray[i].getRole() == 'Engineer') {
            template += 
            `
            <div class="card">
            <div class= "card-header">
                <h3>${dataArray[i].getName()}</h3>
                <h4>Engineer</h4>
            </div>
            <div class= "card-main">
                <div>ID: ${dataArray[i].getId()}</div>
                <div>Email:${dataArray[i].getEmail()}</div>
                <div>OfficeNumber:${dataArray[i].getGithub()}</div>
            </div>
            </div>`
        }
    } 
    return template
}

const generateIntern = dataArray => {
    let template = ''
    for(i =0; i < dataArray.length; i++) {
        if (dataArray[i].getRole() == 'Intern') {
            template += 
            `
            <div class="card">
            <div class= "card-header">
                <h3>${dataArray[i].getName()}</h3>
                <h4>Intern</h4>
            </div>
            <div class= "card-main">
                <div>ID: ${dataArray[i].getId()}</div>
                <div>Email:${dataArray[i].getEmail()}</div>
                <div>OfficeNumber:${dataArray[i].getSchool()}</div>
            </div>
            </div>`
        }
    } 
    return template
}





const generateHTML = dataArray => {
    console.log(dataArray)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
</head>
<body>
    <header>
        <h1>MY TEAM:</h1>
    </header>
    <main>
        <div id='card-parent' class="flex-evenly">
            ${generateManger(dataArray)}
            ${generateEngineer(dataArray)}
            ${generateIntern(dataArray)}
        </div>
    </main>
</body>`
}





module.exports = { generateHTML }