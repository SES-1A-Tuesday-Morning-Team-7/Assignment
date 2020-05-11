//Booking Page Behaviours

var appointments = [         //dummy doctors array for testing purpose. Replace later with registration.
    {
        doc: "Mark",
        time: "11:30am",
        apptDate: "May 3rd"
    },
    {
        doc: "Alex",
        time: "12:00pm",
        apptDate: "May 14th"
    }
];


//DECLARATIONS
var selectedDate, selectedTime, selectedDoctor;

//if(window.localStorage.getItem("appointments") === null) {                           //only create new appointments array if one does not already exist in cross page local storage
    //var appointments = [];
//}
//else {
    //var appointments = JSON.parse(window.localStorage.getItem("appointments"));     //if one exists, use it instead
//}


//INITIALISE
//Retrieve patient object from localstorage.
var patient = JSON.parse(window.localStorage.getItem("patient"));
//Custom Greeting //document.getElementById("patGreeting").innerHTML = "This appointment will be made for ";
//Prefill Name //document.getElementById("input-name").innerHTML = patient.fname ;


//CONSTRUCTOR FOR AN APPOINTMENT
function Appointment(inputDate, inputTime, inputDoctor) {
    this.apptDate = inputDate;
    this.time = inputTime;
    this.doctor = inputDoctor;
    this.pat = patient.fname;
}


//ONLICK FOR BOOK BUTTON
function book() {
    selectedDate = document.getElementById("date").value;
    selectedTime = document.getElementById("appt").value;
    selectedDoctor = document.getElementById("docs").value;

    if((selectedTime.charAt(3) != '3' || selectedTime.charAt(3) != '0') && selectedTime.charAt(4) != '0') {
        alert("Sorry, times must be in half hour intervals.")
        return;
    }
    if (appointments.length != null) {
        for(i = 0; i < appointments.length; i++) {
            if(appointments[i].doc == selectedDoctor && appointments[i].time == selectedTime && appointments[i].apptDate == selectedDate) {
                alert("Sorry, this time slot is already filled")
                return
            }
        }
    }
    
    appointments.push(new Appointment(selectedDate, selectedTime, selectedDoctor));
    alert("Your appointment has been booked.");
}

//APPOINTMENTS DISPLAY
function loadAppointments() {
	for(i = 0; i < appointments.length; i++) {
		//DISPLAY DETAILS
		var a = document.createElement("a");

		//a.href = ""; 				ADD LINK TO CHAT WINDOW

   		a.appendChild(document.createTextNode(appointments[i].time + " " + appointments[i].apptDate + " with " + appointments[i].doc + "."));

		//ADD DETAILS TO HTML
		var element = document.getElementById("appointments");
   		element.appendChild(a);
		element.appendChild(document.createElement("br"));
	}
}

//ONLICK FOR LOGOUT BUTTON
function logOut() {
    localStorage.setItem("appointments", JSON.stringify(appointments));     //set the current appointments, may need to delete current entry first, TEST THIS
    window.open('../root/index.html', '_self');
}