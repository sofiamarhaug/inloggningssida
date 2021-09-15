
// declare some constant variables
const namn="test";
const lösenord="1234";

// declare some variables for user input
const inputName = document.getElementById("inputName");
const inputPwd = document.getElementById("inputPwd");

//declare some variables for user action
const loginButton = document.getElementById("loginButton");
const logoutButton = document.getElementById("logoutButton");

// create a function that checks the user input
function checkInput(inputName, inputPwd) {
if (inputName === namn && inputPwd === lösenord) {

    // toggle visibility
    changeVisibility("successfulLoginBlock", "show");
    changeVisibility("loginBlock", "hide");

    // change content of block
    document.getElementById("successfulLoginBlockContent").textContent = "Välkommen!"

} else {
    //hide visibility of other blocks
    changeVisibility("loginBlock", "hide");

    //change and show content of unsuccessful login block
    changeVisibility("unsuccessfulLoginBlock", "show");
    document.getElementById("unsuccessfulLoginBlockContent").textContent = "Fel namn eller lösenord. Klicka på Ok och försök igen."
}
}

//create a function that toggles block visibility
function changeVisibility(blockName, visibility) {
    if (visibility === "show") {
        visibility = "block";
    } else {
        visibility = "none";
    }
    //toggle the block visibility
    document.getElementById(blockName).style.display = visibility;
}

function logOut() {
    //go back to login block
    changeVisibility("loginBlock", "show");
    changeVisibility("successfulLoginBlock", "hide");
    changeVisibility("unsuccessfulLoginBlock", "hide");

    //clear local storage
    localStorage.clear();
}

// create a function that executes when user clicks log in button
loginButton.onclick = function() {
    const namn = inputName.value;
    const lösenord = inputPwd.value;

    localStorage.setItem("name", namn);
    localStorage.setItem("password", lösenord);

    //check if input exists and is correct
    if (namn && lösenord) {
        checkInput(namn, lösenord);
    } else {
        //töm inputfält
        //varningsmeddelande; får ej vara tomt!
    }
}

// add functionality to ok button
const OKButton = document.getElementById("OKButton");
OKButton.onclick = function () {
    changeVisibility("loginBlock", "show");
    changeVisibility("unsuccessfulLoginBlock", "hide");
}

// add functionality to log out button
logoutButton.onclick = function () {
    logOut();
}