let twentySecondsBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondsBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondsBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");
let timeoutId;
let timeout = null;

twentySecondsBtnEl.onclick = function() {

    timeout = 20;
    timerTextEl.textContent = timeout + " seconds left";
    clearInterval(timeoutId);
    timeoutId = setInterval(function() {
        timerTextEl.textContent = timeout + " seconds left";
        timeout = timeout - 1;
        console.log(timeout);
        if (timeout === 0) {
            clearInterval(timeoutId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);

};
thirtySecondsBtnEl.onclick = function() {

    timeout = 30;
    timerTextEl.textContent = timeout + " seconds left";
    clearInterval(timeoutId);
    timeoutId = setInterval(function() {
        timerTextEl.textContent = timeout + " seconds left";
        timeout = timeout - 1;
        console.log(timeout);
        if (timeout === 0) {
            clearInterval(timeoutId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);

};
fortySecondsBtnEl.onclick = function() {

    timeout = 40;
    timerTextEl.textContent = timeout + " seconds left";
    clearInterval(timeoutId);
    timeoutId = setInterval(function() {
        timerTextEl.textContent = timeout + " seconds left";
        timeout = timeout - 1;
        console.log(timeout);
        if (timeout === 0) {
            clearInterval(timeoutId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);

};
oneMinuteBtnEl.onclick = function() {

    timeout = 60;
    timerTextEl.textContent = timeout + " seconds left";
    clearInterval(timeoutId);
    timeoutId = setInterval(function() {
        timerTextEl.textContent = timeout + " seconds left";
        timeout = timeout - 1;
        console.log(timeout);
        if (timeout === 0) {
            clearInterval(timeoutId);
            timerTextEl.textContent = "Your moment is complete";
        }
    }, 1000);

};