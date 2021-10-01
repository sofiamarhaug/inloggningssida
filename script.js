
// declare some constants
const namn = "test";
const lösenord = "1234";

// declare some constants
const loginPage = document.getElementById("loginPage");

//check if user is already logged in
if (localStorage.getItem("name") !== null) {
    console.log(localStorage);
    createSuccessfulLoginPage();
} else {
    createLoginPage();
}


//create the login page
function createLoginPage() {

    //clear page first
    loginPage.innerHTML = "";

    loginPage.insertAdjacentHTML('afterbegin', '<label for="namn">Namn:</label><br>');
    loginPage.insertAdjacentHTML('beforeend', '<input type="text" id="inputName" placeholder="Skriv namn" autocomplete="off"></input>');
    loginPage.insertAdjacentHTML('beforeend', '<br><label for="lösenord">Lösenord:</label><br>');
    loginPage.insertAdjacentHTML('beforeend', '<input type="password" id="inputPwd" placeholder="Skriv lösenord" autocomplete="off"</input>');
    loginPage.insertAdjacentHTML('beforeend', '<button id="loginButton">Logga in</button>');

    loginButton.onclick = function () {

        inputName = document.getElementById("inputName").value;
        inputPwd = document.getElementById("inputPwd").value;
    
        //check if input exists and is correct
        if (inputName && inputPwd) {
            checkInput(inputName, inputPwd);
        } else {
            alert("Namn och/eller lösenord får ej vara tomt. Försök igen.");
        }
    }
}


//create the welcome page
function createSuccessfulLoginPage() {

    //clear page
    loginPage.innerHTML = "";

    loginPage.insertAdjacentHTML('beforeend', '<p>Du är inloggad. Välkommen!');
    loginPage.insertAdjacentHTML('beforeend', '<button id="logoutButton">Logga ut</button>');

    // add functionality to log out button
    logoutButton.onclick = function () {
        logOut();
    }
}

//create the unsuccessful login page
function createUnsuccessfulLoginPage() {
    loginPage.innerHTML = "";

    loginPage.insertAdjacentHTML('beforeend', '<p>Fel namn eller lösenord. Klicka på Ok och försök igen.</p>');
    loginPage.insertAdjacentHTML('beforeend', '<button id="okButton">Ok</button>');

    //add functionality to ok button
    okButton.onclick = function () {
        createLoginPage();
    }
}

// create a function that checks the user input
function checkInput(inputName, inputPwd) {


    if (inputName == namn && inputPwd == lösenord) {
        localStorage.setItem("name", namn);
        createSuccessfulLoginPage();
    } else {
        createUnsuccessfulLoginPage();
    }
}

//create a function for when user logs out
function logOut() {

    //clear local storage
    localStorage.removeItem("name");
    createLoginPage();
}
