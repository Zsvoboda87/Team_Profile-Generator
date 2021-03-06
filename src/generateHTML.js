
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
                <div>ID: ` + `${dataArray[i].getId()}</div>
                <a href="mailto:${dataArray[i].getEmail()}">Email: `+`${dataArray[i].getEmail()}</a>
                <div>OfficeNumber: `+`${dataArray[i].getOfficeNumber()}</div>
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
                <a href="mailto:${dataArray[i].getEmail()}">Email: `+`${dataArray[i].getEmail()}</a>
                <div><a href="https://github.com/${dataArray[i].getGithub()}">Github: `+`${dataArray[i].getGithub()}</a></div>
                
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
                <a href="mailto:${dataArray[i].getEmail()}">Email: `+`${dataArray[i].getEmail()}</a>
                <div>College:` + `${dataArray[i].getSchool()}</div>
            </div>
            </div>`
        }
    } 
    return template
}

const generateHTML = dataArray => {
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