
// declare some constants
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

    //append successful login block
    successfulLoginBlock.insertAdjacentHTML('afterbegin', '<p>Välkommen!</p><br>');

} else {
    //hide visibility of main block
    changeVisibility("loginBlock", "hide");

    //append to and show content of unsuccessful login block
    changeVisibility("unsuccessfulLoginBlock", "show");
    unsuccessfulLoginBlock.insertAdjacentHTML('afterbegin', '<p>Fel namn eller lösenord. Klicka på Ok och försök igen.');
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

//add functionality to login button
loginButton.onclick = function() {
    const namn = inputName.value;
    const lösenord = inputPwd.value;

    localStorage.setItem("name", namn);

    //check if input exists and is correct
    if (namn && lösenord) {
        checkInput(namn, lösenord);
    } else {
        alert("Namn och/eller lösenord får ej vara tomt!");
    }
    
    //clear input fields
    inputName.value = "";
    inputPwd.value = "";
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