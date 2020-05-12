/* Chat window javascript
This code will control the many instances of chats by writing to HTML templates from an array of messages stored in database.
*/

//TESTING ONLY DUMMY ARRAY
var currChat = [
    {
        author: "John",
        msg: "Hello doctor, I need help"
    },
    {
        author: "Mark",
        msg: "What can I do for you"
    }
];


//First pull required data from local database.
var userData = JSON.parse(window.localStorage.getItem("user"));                  
var apptData = JSON.parse(window.localStorage.getItem("appt"));                     
//var chats = JSON.parse(window.localStorage.getItem("chats"));
if(window.localStorage.getItem("chat") === null) {
    var chat = [];
}
else {
    var chat = JSON.parse(window.localStorage.getItem("chat"));
}

//Locally required data - FILL WHEN APPOINTMENT VIEW COMPLETE
//var chatRef = ;                                                           //Pull pointer from URL 
//var currChat = chats[]                                                    //Use pointer from URL to find this chat   

//Constructor for message object
function Message(msg) {
    this.author = userData.fname;
    this.msg = msg;
}

//Initialisation function for onload. Fill past messages.
function pastMessages() {
    if(chat.length > 0) {
        for(i = 0; i < chat.length; i++) {
            var temp = document.getElementsByTagName("template")[0];
            var from = temp.content.querySelector("h3");
            var msg = temp.content.querySelector("p");
            var x = document.importNode(from, true);
            var y = document.importNode(msg, true);
            x.textContent = chat[i].author;
            y.textContent = chat[i].msg;
            document.getElementById("messagePanel").appendChild(x);
            document.getElementById("messagePanel").appendChild(y);
            
            //Listener for sending with enter/return keypress
            document.getElementById("messageBox").addEventListener("keypress", function(event) {
                if(event.keyCode === 13 && document.getElementById("messageBox").value!="") {
                    event.preventDefault();
                    document.getElementById("send").click();
                }
            });
        } 
    }
}



//onclick for send button.
function sendBtn() {
    //Define and Pull HTML elements from template, temp is the whole template, from is the byline of each message (h2) and msg is the content (p).
    var message = document.getElementById("messageBox").value;
    var name = userData.fname;
    var temp = document.getElementsByTagName("template")[0];
    var from = temp.content.querySelector("h3");
    var msg = temp.content.querySelector("p");
    
    //Create a new node for the from and msg
    var x = document.importNode(from, true);
    var y = document.importNode(msg, true);
    
    //Fill nodes with data
    x.textContent = name;
    y.textContent = message;
    
    //Append created nodes to message panel
    document.getElementById("messagePanel").appendChild(x);
    document.getElementById("messagePanel").appendChild(y);
    
    //Store message
    chat.push(new Message(message));
    
    //Clear input field
    document.getElementById("messageBox").value = "";
    return;
}

//onclick for back button.
function backBtn() {
    //chats[chatRef] = currChat;                                //update this session's chat log to array
    //localStorage.setItem("chats", JSON.stringify(chats));     //save chats array before leaving
    localStorage.setItem("chat", JSON.stringify(chat));
    window.open('patient-dash.html', '_self');
}

//onlcick for logout button.
function logBtn() {
    //chats[chatRef] = currChat;                                //update this session's chat log to array
    //localStorage.setItem("chats", JSON.stringify(chats));     //save chats array before leaving
    localStorage.setItem("chat", JSON.stringify(chat));
    window.open('index.html', '_self');
}