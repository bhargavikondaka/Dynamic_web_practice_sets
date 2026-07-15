let greeting = '{"greetText":"Wishing that the new year will bring joy, love, peace, and happiness to you.","from":"Rahul","to":"Varakumar"}';
let parsedgreeting = JSON.parse(greeting);

let from = parsedgreeting.from;
let to = parsedgreeting.to;
let msg = parsedgreeting.greetText;

let greetText = document.getElementById("greetText");
greetText.textContent = msg;

let fromel = document.getElementById("from");
fromel.textContent = "From: " + from;

let toel = document.getElementById("to");
toel.textContent = "To: " + to;