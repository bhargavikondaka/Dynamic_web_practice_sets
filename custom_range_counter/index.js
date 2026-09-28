let fromValEl = document.getElementById("fromUserInput");
let toValEl = document.getElementById("toUserInput");
let startBtnEl = document.getElementById("startBtn");
let counterTextEl = document.getElementById("counterText");
let counterTextId = null;

startBtnEl.onclick = function() {
    let fromval = parseInt(fromValEl.value);
    let toval = parseInt(toValEl.value);
    counterTextEl.textContent = fromval;
    if (fromval === "" || toval === "") {
        alert("enter valid from and to");
    } else {
        counterTextId = setInterval(function() {
            counterTextEl.textContent = fromval;
            fromval = fromval + 1;

            if (fromval === toval + 1) {
                clearInterval(counterTextId);
            }
        }, 1000);

    }



};