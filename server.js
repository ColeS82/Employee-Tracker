const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // MySQL Password
    password: 'Az770088!',
    database: 'Employee_Tracker_db'
  },
  console.log(`Connected to the Employee_Tracker_db database.`)
);
// initiates program after it loads.
db.connect(function (err) {
  if (err) return console.log(err);
  prompt();
})


const prompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choices',
      message: 'Please select an option',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update employee role',
        'Exit and quit'
      ]
    }
  ])

    .then((answers) => {
      const { choices } = answers;
      switch (choices) {
        case "View all departments": ;
          break;


        case "View all roles": ;
          break;

        case "View all employees": ;
          break;

        case "Add a department": ;
          break;

        case "Add a role": ;
          break;

        case "Add an employee": ;
          break;

        case "Update employee role": ;
          break;

        case "Exit and quit": console.log("Good Bye!");
        process.exit()

        default: console.log("There was nothing selected");

      }
    })

}





