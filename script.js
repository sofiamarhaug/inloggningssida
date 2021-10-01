
// declare some constants
const namn = "test";
const lösenord = "1234";

// declare some variables for user input
const inputName = document.getElementById("inputName");
const inputPwd = document.getElementById("inputPwd");

//declare some variables for user action
const loginButton = document.getElementById("loginButton");


// create a function that checks the user input
function checkInput(inputName, inputPwd) {
    if (inputName === namn && inputPwd === lösenord) {

        //hide visibility of main block
        changeVisibility("loginBlock", "hide");
        //create and show the welcome block
        createSuccessfulLoginBlock();

    } else {
        //hide visibility of main block
        changeVisibility("loginBlock", "hide");

        //create and show the unsuccessful login block
        createUnsuccessfulLoginBlock();
    }
}

//add functionality to login button
loginButton.onclick = function () {
    const namn = inputName.value;
    const lösenord = inputPwd.value;

    localStorage.setItem("name", namn);

    //check if input exists and is correct
    if (namn && lösenord) {
        checkInput(namn, lösenord);
    } else {
        alert("Namn och/eller lösenord får ej vara tomt. Försök igen.");
    }

    //clear input fields
    inputName.value = "";
    inputPwd.value = "";
}


//create a function that builds the welcome page

function createSuccessfulLoginBlock() {

    //create the paragraph for the welcome text
    const welcomeParagraph = document.createElement("p");
    welcomeParagraph.innerText = "Du är inloggad. Välkommen!";


    //create the log out button
    const logoutButton = document.createElement("button");
    logoutButton.innerText = "Logga ut";

    //create a div to enclose it all
    const successfulLoginBlock = document.createElement("div");
    successfulLoginBlock.id = "successfulLoginBlock";
    successfulLoginBlock.appendChild(welcomeParagraph);
    successfulLoginBlock.appendChild(logoutButton);

    //add the new div element to the doc body
    document.body.appendChild(successfulLoginBlock);

    // add functionality to log out button
    logoutButton.onclick = function () {
        logOut();
    }

}

function createUnsuccessfulLoginBlock() {

    //create the paragraph for the warning text
    const UnsuccessfulLoginParagraph = document.createElement("p");
    UnsuccessfulLoginParagraph.innerText = "Fel namn eller lösenord. Klicka på Ok och försök igen.";

    //create and add functionality to ok button
    const okButton = document.createElement("button");
    okButton.innerText = "Ok";

    //create a div to enclose it all
    const unsuccessfulLoginBlock = document.createElement("div");
    unsuccessfulLoginBlock.id = "unsuccessfulLoginBlock";
    unsuccessfulLoginBlock.appendChild(UnsuccessfulLoginParagraph);
    unsuccessfulLoginBlock.appendChild(okButton);

    //add the div to the doc body
    document.body.appendChild(unsuccessfulLoginBlock);

    //add functionality to ok button
    okButton.onclick = function () {
        changeVisibility("loginBlock", "show");
        changeVisibility("unsuccessfulLoginBlock", "hide");

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

//create a function for when user logs out
function logOut() {
    //go back to login block
    changeVisibility("loginBlock", "show");
    changeVisibility("successfulLoginBlock", "hide");

    //clear local storage
    localStorage.removeItem("name");
}
