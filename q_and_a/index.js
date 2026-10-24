let questionsFormEl = document.getElementById("questionsForm");
let cityHyderabadEl = document.getElementById("cityHyderabad");
let cityChennaiEl = document.getElementById("cityChennai");
let cityDelhiEl = document.getElementById("cityDelhi");
let cityMumbaimEl = document.getElementById("cityMumbai");
let submitBtnEl = document.getElementById("submitBtn");
let resultMsgEl = document.getElementById("resultMsg");

let capitalCity = "Delhi";
let selectCity = null;

cityHyderabadEl.addEventListener("change", function(event) {
    selectCity = event.target.value;
});
cityChennaiEl.addEventListener("change", function(event) {
    selectCity = event.target.value;
});
cityDelhiEl.addEventListener("change", function(event) {
    selectCity = event.target.value;
});
cityMumbaimEl.addEventListener("change", function(event) {
    selectCity = event.target.value;
});


submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();


    if (selectCity === capitalCity) {
        resultMsgEl.textContent = "Correct Answer!";
        resultMsgEl.style.color = "green";
        resultMsgEl.style.fontWeight = "bold";
        resultMsgEl.style.fontFamily = "Bree Serief";
    } else if (selectCity === null) {
        resultMsgEl.textContent = "Please select the answer!";
        resultMsgEl.style.color = "red";
        resultMsgEl.style.fontWeight = "bold";
        resultMsgEl.style.fontFamily = "Bree Serief";
    } else {
        resultMsgEl.textContent = "Wrong Answer!";
        resultMsgEl.style.color = "red";
        resultMsgEl.style.fontWeight = "bold";
        resultMsgEl.style.fontFamily = "Bree Serief";
    }

});