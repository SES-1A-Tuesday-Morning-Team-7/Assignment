function logBtn() {
    window.open('index.html', '_self');
}

function chatBtn() {
    if(window.localStorage.getItem("appointments") === null) {
        alert("You have no scheduled appointments.");
        return;
    }
    var consults = JSON.parse(window.localStorage.getItem("appointments"));
    var doctor = JSON.parse(window.localStorage.getItem("doctor"));
    for(i = 0; i < consults.length; i++) {
        if(consults[i].doctor == doctor.fname) {
            //
            //
            //ADD LINK TO OPEN SPECIFIC APPOINTMENT CHAT WINDOW HERE WHEN CHATS CREATED
            //
            //
        }
    }
}
function scriptBtn() {
    window.open('', '_self');                   //ADD LINK WHEN PAGE MADE - Prescription - Sprint 3
}