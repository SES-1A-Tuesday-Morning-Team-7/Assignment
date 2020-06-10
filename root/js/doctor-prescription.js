//Doctor Prescription Booking

/* Required Variable Declarations and Database Pulls */
var doctor = JSON.parse(window.localStorage.getItem("user")); 
if(window.localStorage.getItem("scripts") === null) { 
    var scripts = [];
}
else {
    var scripts = JSON.parse(window.localStorage.getItem("scripts")); 
}

/* Prescrption Constructor */
function Prescription(inputPat, inputDrug, inputDosage, inputDuration) {
    this.doc = doctor.fname;
    this.pat = inputPat;
    this.drug = inputDrug;
    this.dosage = inputDosage;
    this.duration = inputDuration;
}


function newPrescription() {
    var patName = document.getElementById("patNameField").value;
    var drugName = document.getElementById("drugNameField").value;
    var dosage = document.getElementById("dosageField").value;
    var duration = document.getElementById("durationField").value;
    //var script = new Prescription(patName, drugName, dosage, duration);
    
    if(patName == "" || drugName == "" || dosage == "" || duration == "") {
        alert("Sorry, you must fill all fields to create a prescription");
        return;
    }
    
    scripts.push(new Prescription(patName, drugName, dosage, duration));
    alert("Your prescription has been generated.");
}

function logOut() {
    localStorage.setItem("scripts", JSON.stringify(scripts));     //set the current appointments, may need to delete current entry first, TEST THIS
    window.open('../root/index.html', '_self');
}