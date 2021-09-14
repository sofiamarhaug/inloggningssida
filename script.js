//write to the log
function log (logmessage) {
    console.log(logmessage);
}

// declare some constants
const namn="test"
const password="1234"

// create a function that executes when user clicks button
//const btn = button.onclick()

// create a function that checks the input

function checkInput() {
//plocka in input och checka mot consts
if (namn === "test") {
    log("funkar");
    document.getElementById("successfulLoginPage").textContent = "Välkommen!"
} else {
    log("funkar inte")
    document.getElementById("unsuccessfulLoginPage").textContent = "Nu gick något snett, klicka på knappen och försök att logga in igen."
    //<input type="button" value="Ok"> <!--gå tillbaka till login page. ta bort!--></input>
}
}
checkInput()
