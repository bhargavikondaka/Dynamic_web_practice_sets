let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let submitBtnEl = document.getElementById("submitBtn");

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    nameEl.addEventListener("blur", function() {
        if (nameEl.value === "") {
            nameErrMsgEl.textContent = "Required*";
        } else {
            nameErrMsgEl.textContent = "";
        }
    });
    emailEl.addEventListener("blur", function() {
        if (emailEl.value === "") {
            emailErrMsgEl.textContent = "Required*";
        } else {
            emailErrMsgEl.textContent = "";
        }
    });
});

nameEl.addEventListener("blur", function() {
    if (nameEl.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }
});
emailEl.addEventListener("blur", function() {
    if (emailEl.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }
});