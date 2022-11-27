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
        case "View all departments":
          db.query('SELECT * FROM department', function (err, results) {
            if (err) {
              console.log(err);
            }
            console.table(results);
            prompt();
          }
          );
          break;


        case "View all roles":
          const roles = `SELECT roles.id, roles.title, department.name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id`;

          db.query(roles, (err, rows) => {
            console.table(rows);
            prompt();
          })
          break;

        case "View all employees":
          let employees = `SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.name AS department, roles.salary, CONCAT(mgr.first_name, mgr.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee mgr ON employee.manager_id = mgr.id`;

          db.query(employees, (err, rows) => {
            if (err) return console.log(err);
            console.table(rows);
            prompt();
          });
          break;

        case "Add a department":
          inquirer.prompt([
            {
              type: 'input',
              name: 'department',
              message: 'What department do you want to add?',
            }
          ])
            .then(answer => {
              const mysql = `INSERT INTO department (name) VALUES (?)`;
              db.query(mysql, answer.department, (err, results) => {
                if (err) return console.log(err);
                console.log('Added ' + answer.department + " to departments");
                const mysql = `SELECT department.id AS id, department.name AS department FROM department`;

                db.query(mysql, (err, rows) => {
                  if (err) return console.log(err);
                  console.table(rows);
                  prompt();
                });
              });
            });
          break;

        case "Add a role":
          inquirer.prompt([
            {
              type: 'input',
              name: 'roles',
              message: "What role do you want to add?",

            },
            {
              type: 'input',
              name: 'salary',
              message: 'What is your yearly salary?',
            }

          ])
            .then(answer => {
              const parameters = [answer.roles, answer.salary];
              const roles_var = `SELECT name, id FROM department`;

              db.query(roles_var, (err, data) => {
                if (err) return console.log(err);
                const department_var = data.map(({ name, id }) => ({ name: name, value: id }));

                inquirer.prompt([
                  {
                    type: 'list',
                    name: 'department_var',
                    message: "What department is this role in?",
                    choices: department_var
                  }
                ])
                  .then(department_varChoice => {
                    const department_var = department_varChoice.department_var;
                    parameters.push(department_var);
                    const mysql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;

                    db.query(mysql, parameters, (err, result) => {
                      if (err) return console.log(err);
                      console.log('Added' + answer.roles + "to roles");
                      prompt();
                    });
                  });
              });
            });
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





