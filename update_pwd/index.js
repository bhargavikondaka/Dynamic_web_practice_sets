let updatePasswordFormEl = document.getElementById("updatePasswordForm");
let newPasswordEl = document.getElementById("newPassword");
let confirmPasswordEl = document.getElementById("confirmPassword");
let newPasswordErrMsgEl = document.getElementById("newPasswordErrMsg");
let confirmPasswordErrMsgEl = document.getElementById("confirmPasswordErrMsg");
let updateBtnEl = document.getElementById("updateBtn");

updateBtnEl.addEventListener("click", function(event) {
    event.preventDefault();

    //new password validation
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }

    //confirm password validation
    if (confirmPasswordEl.value !== newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }

});

newPasswordEl.addEventListener("blur", function() {
    if (newPasswordEl.value === "") {
        newPasswordErrMsgEl.textContent = "Required*";
    } else {
        newPasswordErrMsgEl.textContent = "";
    }
});

confirmPasswordEl.addEventListener("blur", function() {
    if (confirmPasswordEl.value !== newPasswordEl.value) {
        confirmPasswordErrMsgEl.textContent = "Password must be same";
    } else {
        confirmPasswordErrMsgEl.textContent = "";
    }
});