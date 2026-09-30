let userInputEl = document.getElementById("userInput");
let keyCodeListEl = document.getElementById("keyCodeList");

userInputEl.addEventListener("keydown", function(event) {
    let keyCode = document.createElement('li');
    keyCode.textContent = event.keyCode;
    keyCodeListEl.appendChild(keyCode);

});