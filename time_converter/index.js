let minutesInputEl = document.getElementById("minutesInput");
let hoursInputEl = document.getElementById("hoursInput");
let convertBtnEl = document.getElementById("convertBtn");


convertBtnEl.onclick = function() {
    let hours = hoursInputEl.value;
    let minutes = minutesInputEl.value;
    if (hours === "" || minutes === "") {
        document.getElementById("errorMsg").textContent = "please enter valid hours";
        document.getElementById("timeInSeconds").textContent = "";
    } else {
        let seconds = hours * 3600 + minutes * 60;
        document.getElementById("timeInSeconds").textContent = seconds + "s";
        document.getElementById("errorMsg").textContent = "";
        hours.textContent = "";
        minutes.textContent = "";
    }
};