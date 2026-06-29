let row = document.getElementById("row");
let cont = document.getElementById("cont");

function additem() {
    let input = document.getElementById("cartItemTextInput");
    let inputValue = input.value;

    let list = document.createElement('li');
    list.textContent = inputValue;
    input.value = "";
    cont.appendChild(list);
}