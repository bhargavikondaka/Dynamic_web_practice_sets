let wordCloud = ["Hello", "hii", "how", "what", "you", "yourself", "name", "victory", "food", "lovely", "beautiful", "written", "where", "who", "awesome"];

let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");
let addBtnEl = document.getElementById("addBtn");

addBtnEl.onclick = function() {

    let randomNumber = Math.floor(Math.random() * 100) + "px";
    let spanEl = document.createElement("span");

    let word = userInputEl.value;
    if (word === "") {
        errorMsgEl.textContent = "enter valid input";

    } else {
        spanEl.textContent = word;
        spanEl.style.fontSize = randomNumber;
        wordsContainerEl.appendChild(spanEl);
    }

};