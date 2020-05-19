//Index login and registration page script.
//
//


var fname, lname, email, user, pass;       //variables used in patRegistration() to hold text box values

if(window.localStorage.getItem("patients") === null) {                           //only create new appointments array if one does not already exist in cross page local storage
    var patients = [];
}
else {
    var patients = JSON.parse(window.localStorage.getItem("patients"));     //if one exists, use it instead
}
          
var doctors = [         //dummy doctors array for testing purpose. Replace later with registration.
    {
        fname: "Mark",
        lname: "Twain",
        location: "Sydney",
        username: "mark",
        password: "doc101"
    },
    {
        fname: "David",
        lname: "Pikachu",
        location: "Melbourne",
        username: "dave",
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
    
    if(fname == "" || lname == "" || email == "" || user == "" || pass == "") {
        alert("All fields must be filled before registering.");
        return;
    }
    
    for(i = 0; i < patients.length; i++) {
        if(patients[i].user == user || patients[i].email == email) {
            alert("A patient with this email/username already exists.")
            return;
        }
    }
    
    if(email.includes("@")) {
        patients.push(new Patient(fname, lname, email, user, pass));
        alert("Thankyou for registering " + patients[patients.length - 1].fname + " you may now log in.");
    }
    else {
        alert("Sorry your email is not valid.");
    }
    
}

function adminLogin() {
//    var username = document.getElementById("admin-user").value;
//    var password = document.getElementById("admin-pass").value;
//    
//    if(username=="Admin" && password =="Admin") {
//        localStorage.setItem("patients", JSON.stringify(patients));             //save before leaving
//        window.open('../root/adminDash.html', '_self');
//    }
    if(confirm("Are you sure you wish to delete all patient and appointment data?")) {
        localStorage.removeItem("patient");
        localStorage.removeItem("patients");
        localStorage.removeItem("appointments");
        localStorage.removeItem("user");
        localStorage.removeItem("chat");
        localStorage.removeItem("scripts");
        
        //Add a new statement for each table in the localStorage as the project progresses. This should be used for testing only!!!
        
        localStorage.clear();
        location.reload();
    }
}

function docLogin() {
    var username = document.getElementById("doc-log-user").value;
    var password = document.getElementById("doc-log-pass").value;
    
    for (i = 0; i < doctors.length; i++) {
        if(username == doctors[i].username && password == doctors[i].password) {
            localStorage.setItem("doctor", JSON.stringify(doctors[i]));         //to retrieve doctor info in the doctor's dashbaord
            localStorage.setItem("user", JSON.stringify(doctors[i]));
            localStorage.setItem("doctors", JSON.stringify(doctors));           //save before leaving
            localStorage.setItem("patients", JSON.stringify(patients));         //save before leaving
            window.open('../root/doctor-dash.html', '_self');
            return
        }
    }
    alert("Incorrect credentials, please try again.");
}

function patLogin() {
    var username = document.getElementById("pat-log-user").value;
    var password = document.getElementById("pat-log-pass").value;
    
    for (i = 0; i < patients.length; i++) {
        if(username == patients[i].user && password == patients[i].pass) {
            localStorage.setItem("patient", JSON.stringify(patients[i]));       //to retrive in this patients windows
            localStorage.setItem("user", JSON.stringify(patients[i]));
            localStorage.setItem("patients", JSON.stringify(patients));         //save before leaving
            window.open('../root/patient-dash.html', '_self');
            return
        }
    }
    alert("Incorrect credentials, please try again.");
}