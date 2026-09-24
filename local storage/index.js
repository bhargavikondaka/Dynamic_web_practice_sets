let textareael = document.getElementById("msg");

let message;

let savebtn = document.getElementById("saveBtn");
let clearbtn = document.getElementById("clearBtn");

savebtn.onclick = function() {
    let msg = textareael.value;
    localStorage.setItem("userInput", msg);

};
clearbtn.onclick = function() {
    textareael.value = "";
    localStorage.removeItem("userInput");
};
// let data = localStorage.getItem("userInput");
// textareael.value = data;
// console.log(textareael.value);/
let storedipVal = localStorage.getItem("userInput");
if (storedipVal !== null) {
    textareael.value = storedipVal;
} else {
    storedipVal.value = "";
}