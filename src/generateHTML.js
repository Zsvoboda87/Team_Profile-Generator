
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
            <div class="card">
                <div class= "card-header">
                    <h3>Name</h3>
                    <h4>Role</h4>
                </div>
                <div class= "card-main">
                    <div>ID</div>
                    <div>Email</div>
                    <div>role specific</div>
                </div>
            </div>

        </div>
    </main>
</body>`
}

const generateManger = dataArray => {
    let template = ''
    for(i =0; i < dataArray.length; i++) {
        if (dataArray[i].role == 'Manager') {
            template += `html`
        }
    }
    return template
}

// let mockArray =
//     [
//         {
//             name: 'Zac',
//             ID: '8',
//             Email: 'jjj',
//             role: 'Engineer',
//             github: { github: 'github' },
//             confirmAdd: { confirmAdd: true }
//         },
//         {
//             name: 'bill',
//             ID: '7',
//             Email: 'email',
//             role: 'Intern',
//             college: { college: 'college' },
//             confirmAdd: { confirmAdd: true }
//         },
//         {
//             name: 'manager',
//             ID: '66',
//             Email: 'manager',
//             role: 'Manager',
//             officeNumber: { officeNumber: '7' },
//             confirmAdd: { confirmAdd: false }
//         }
//     ]





module.exports = { generateHTML }