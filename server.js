const mysql = require('mysql2');
const inquirer = require('inquirer');
require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'Az770088!',
    database: 'Employee_Tracker_db'
  },
  console.log(`Connected to the Employee_Tracker_db database.`)
);

db.connect(function (err) {
  if (err) return console.log(err);
  InquirerPrompt();
})
