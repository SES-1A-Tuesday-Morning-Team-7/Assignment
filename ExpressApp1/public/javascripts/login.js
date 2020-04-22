//Index login and registration page script. V0.1
//
//


var fname, lname, email, user, pass;       //variables used in patRegistration() to hold text box values

var patients = [];    //declaration of patients array of objects created on registration window.

var doctors = [         //dummy doctors array for testing purpose. Replace later with registration.
    {
        username: "mark",
        password: "doc101"
    },
    {
        username: "john",
        password: "doc202"
    }
];

function Patient(fname, lname, email, user, pass) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
    this.user = user;
    this.pass = pass;
}

function patRegistration() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    email = document.getElementById("email").value;
    user = document.getElementById("reg-user").value;
    pass = document.getElementById("reg-pass").value;
    patients.push(new Patient(fname, lname, email, user, pass));
    alert("Thankyou for registering " + patients[patients.length - 1].fname + " you may now log in.");
}

function docLogin() {
    var username = document.getElementById("doc-log-user").value;
    var password = document.getElementById("doc-log-pass").value;

    for (i = 0; i < doctors.length; i++) {
        if (username == doctors[i].username && password == doctors[i].password) {
            console.log(doctors[i].username);
            //
            //
            // Insert open new window and parameter passing here.
            //
            //
            return
        }
    }
    alert("Incorrect credentials, please try again.");
}

function patLogin() {
    var username = document.getElementById("pat-log-user").value;
    var password = document.getElementById("pat-log-pass").value;

    for (i = 0; i < patients.length; i++) {
        if (username == patients[i].user && password == patients[i].pass) {
            console.log(patients[i].user);
            //
            //
            // Insert open new window and parameter passing here.
            //
            //
            return
        }
    }
    alert("Incorrect credentials, please try again.");
}