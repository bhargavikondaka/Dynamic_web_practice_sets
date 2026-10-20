let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let subscribeBtnEl = document.getElementById("subscribeBtn");
let warning1El = document.getElementById("nameErrMsg");
let warning2El = document.getElementById("emailErrMsg");

subscribeBtnEl.addEventListener("subit", function(event) {
    event.preventDefault();
});

nameEl.addEventListener("blur", function() {
    if (event.target.value === "") {
        warning1El.textContent = "Required*";
    } else {
        warning1El.textContent = "";
    }
});

emailEl.addEventListener("blur", function() {
    if (event.target.value === "") {

        warning2El.textContent = "Required*";
    } else {
        warning2El.textContent = "";
    }
});