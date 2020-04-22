const sqlite3 = require('sqlite3').verbose();

//let patients = new sqlite3.Database('.databases/patients.db', sqlite3.OPEN_CREATE);
//let patients = new sqlite3.Database('users');

let patients = new sqlite3.Database('');

patients.serialize(function () {
    db.run("CREATE TABLE patients (id INT, fname VARCHAR(25), lname VARCHAR(25), email VARCHAR(50), username VARCHAR(25), password VARCHAR(25))");

})
