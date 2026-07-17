let numbers = [17, 31, 77, 20, 63];

let userInput = document.getElementById("userInput");
let findBtn = document.getElementById("findBtn");
let indexOfNumber = document.getElementById("indexOfNumber");
indexOfNumber.textContent = "";

function findIndexOfNumber() {
    let number = parseInt(userInput.value);
    let index = numbers.findIndex(function(eachval) {
        if (number === eachval) {
            return true;
        } else {
            return false;
        }

    });
    indexOfNumber.textContent = index;
    return indexOfNumber.textContent;
}