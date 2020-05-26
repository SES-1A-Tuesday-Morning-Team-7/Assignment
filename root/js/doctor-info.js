var doctors = [         //dummy doctors array for testing purpose. Replace later with registration.
    {
        fname: "Mark",
        lname: "Twain",
        username: "mark",
	    location: "Sydney",
        hours: "9am-5pm",
        password: "doc101"
    },
    {
        fname: "David",
        lname: "Pikachu",
        username: "dave",
	    location: "Melbourne",
        hours: "5pm-12am",
        password: "doc202"
    }
];

function backBtn() {
    window.open('patient-dash.html', '_self');
}

function viewDoctors() {
	for (i = 0; i < doctors.length; i++) {
		//DISPLAY NAME
		var h2 = document.createElement("h2");
		h2.className = "sub-text";
  		var h2Text = document.createTextNode(doctors[i].fname + " " + doctors[i].lname);
   		h2.appendChild(h2Text);

		//DISPLAY DETAILS
		var p = document.createElement("p");
		p.className = "sub-text";
  		var pText = document.createTextNode("Username: " + doctors[i].username
							+ "\nLocation: " + doctors[i].location
                            + "\nHours: " + doctors[i].hours);
   		p.appendChild(pText);

		//ADD TO HTML
   		var element = document.getElementById("doctorList");
   		element.appendChild(h2);
		element.appendChild(p);
	}
}