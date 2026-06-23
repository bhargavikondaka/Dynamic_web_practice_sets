let firstNumber = Math.ceil(Math.random() * 100);
let num1 = document.getElementById("firstNumber");
num1.textContent = firstNumber;
let secondNumber = Math.ceil(Math.random() * 100);
let num2 = document.getElementById("secondNumber");
num2.textContent = secondNumber;
let sum = parseInt(firstNumber) + parseInt(secondNumber);
console.log(sum);

let gameResult = document.getElementById("gameResult");

let userInput = document.getElementById("userInput");

function check() {
    let guess = userInput.value;


    if (guess == sum) {
        gameResult.textContent = "Congratualtions! You got it right";
        gameResult.style.backgroundColor = "#028a0f";
    } else {
        gameResult.textContent = "Please try again";
        gameResult.style.backgroundColor = "#1e217c";
    }
}

function restart() {
    
   
    firstNumber = Math.ceil(Math.random() * 100);
    num1.textContent = firstNumber;
    secondNumber = Math.ceil(Math.random() * 100);
    num2.textContent = secondNumber;
    sum = parseInt(firstNumber) + parseInt(secondNumber);
    document.getElementById("userInput").value = "";
    gameResult.textContent = "";
}
restart();