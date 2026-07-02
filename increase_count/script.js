let incrementBtn = document.getElementById("incrementBtn");
let counterValue = document.getElementById("counterValue");

function incrementcount() {
    let count = parseInt(counterValue.textContent);
    counterValue.textContent = count + 1;
    localStorage.setItem("clickCount", counterValue.textContent);
}

incrementBtn.onclick = function() {
    incrementcount();
};