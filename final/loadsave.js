window.setInterval(keepTime, 16.667)
let elapsedTime = 0

function makeSave() {
    if(localStorage.getItem("save") != null) {
        if(window.confirm("You have an existing save. Would you like to override it?")) {
            localStorage.setItem(save, document.URL)
            window.alert("Save Successful!");
        } else {
            window.alert("Save cancelled");
        }
    } else {
        localStorage.setItem("save", document.URL)
            window.alert("Save Successful!");
            
    }
}

function loadSave() {
    if(!localStorage.getItem("save")) {
        window.alert("You don't have an existing save!")
    } else {
        window.location.href = localStorage.getItem("save");
    }
}

function keepTime() {
    elapsedTime++;
    let timerText = "You have been adventuring on this page for " + Math.round(elapsedTime/60) + " seconds.";
    document.getElementById("timer").innerHTML = timerText;
}