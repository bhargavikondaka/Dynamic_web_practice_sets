let timerEl = document.getElementById("timer");
let defuserEl = document.getElementById("defuser");
let time = 10;

let timeout = setInterval(function(event) {
    timerEl.textContent = time;
    time = time - 1;
    if (timerEl.textContent === "0") {
        timerEl.textContent = "BOOM";
        clearInterval(timeout);
    }

}, 1000);

function diffuse(event) {
    if (time >= 0 & event.key === 'Enter' & defuserEl.value === 'defuse') {
        timerEl.textContent = "You did it";
        clearInterval(timeout);
    }
}

defuserEl.addEventListener("keydown", diffuse);