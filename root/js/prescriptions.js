var patient = JSON.parse(window.localStorage.getItem("user")); 

if(window.localStorage.getItem("scripts") === null) { 
    var scripts = [];
}
else {
    var scripts = JSON.parse(window.localStorage.getItem("scripts")); 
}

/*
var doctors = [         //dummy prescriptions array for testing purpose. Replace later with registration.
    {
        doc: "27/04/20 - David",
        pat: "James",
        drug: "Benzodiazepine",
	dosage: "2ml a day",
        duration: "2 weeks"
    },
    {
        doc: "28/04/20 - David",
        pat: "James",
        drug: "Hydromorphone",
	dosage: "3ml a day",
        duration: "1 week"
    }
];
*/

function backBtn() {
    window.open('patient-dash.html', '_self');
}

function viewPrescriptions() {
	for (i = 0; i < scripts.length; i++) {
		//DISPLAY NAME
		var h2 = document.createElement("h2");
		h2.className = "sub-text";
  		var h2Text = document.createTextNode(scripts[i].pat);
   		h2.appendChild(h2Text);

		//DISPLAY DETAILS
		var p = document.createElement("p");
		p.className = "sub-text";
  		var pText = document.createTextNode("Rx: " + scripts[i].drug
							+ "\nDosage: " + scripts[i].dosage
							+ "\nDuration: " + scripts[i].duration);
   		p.appendChild(pText);

		//ADD TO HTML

		var div = document.createElement("div");
		div.className = "prescription";
		div.appendChild(h2);
		div.appendChild(p);
		
   		var element = document.getElementById("prescriptionList");
   		element.appendChild(div);
	}
}