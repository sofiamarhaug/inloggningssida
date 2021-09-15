//write to the log
function log (logmessage) {
    console.log(logmessage);
}

// declare some constant variables
const namnConstant="test";
const lösenordConstant="1234";

// declare some constants to fetch user input
const inputName = document.getElementById("inputName");
const inputPwd = document.getElementById("inputPwd");
const loginButton = document.getElementById("loginButton");


// create a function that checks the input
function checkInput(namn, lösenord) {
if (namn === namnConstant && lösenord === lösenordConstant) {

    log("funkar");
    // toggle visibility
    document.getElementById("successfulLoginBlock").style.display = "block"

    // change content of block
    document.getElementById("successfulLoginBlockContent").textContent = "Välkommen!"
} else {
    log("funkar inte")
    //toggle visibility
    document.getElementById("unsuccessfulLoginBlock").style.display = "block"

    //change content of block
    document.getElementById("unsuccessfulLoginBlockContent").textContent = "Fel namn eller lösenord. Klicka på Ok och försök igen."
}
}

function toggleLoginBlock(){
    document.getElementById("loginBlock").style.display = "none"
    log("login-rutan har blivit togglad")
}

function logOut(params) {
    //clear local storage
    localStorage.clear()


}

// create a function that executes when user clicks button
loginButton.onclick = function() {
    const namn = inputName.value;
    const lösenord = inputPwd.value;

    localStorage.setItem("name", namn);
    localStorage.setItem("password", lösenord);

    //check if input exists and is correct
    if (namn && lösenord) {
        checkInput(namn, lösenord);
        //show in log
        console.log(localStorage);
    } else {
        console.log("Input cannot be empty!")
    }
}
