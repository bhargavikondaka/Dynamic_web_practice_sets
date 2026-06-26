let aboutTab = document.getElementById("aboutTab").textContent;
let timeToVisitTab = document.getElementById("timeToVisitTab").textContent;
let attractionsTab = document.getElementById("attractionsTab").textContent;
let cont = document.getElementById("cont");


function aboutButton() {

    document.getElementById("aboutTab").classList.remove("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");

    document.getElementById("aboutButton").classList.add("selected-button");
    document.getElementById("timeToVisitButton").classList.remove("selected-button");
    document.getElementById("attractionsButton").classList.remove("selected-button");

}

function timeToVisitButton() {
    document.getElementById("aboutTab").classList.add("d-none");
    document.getElementById("timeToVisitTab").classList.remove("d-none");
    document.getElementById("attractionsTab").classList.add("d-none");

    document.getElementById("aboutButton").classList.remove("selected-button");
    document.getElementById("timeToVisitButton").classList.add("selected-button");
    document.getElementById("attractionsButton").classList.remove("selected-button");

}

function attractionsButton() {
    document.getElementById("aboutTab").classList.add("d-none");
    document.getElementById("timeToVisitTab").classList.add("d-none");
    document.getElementById("attractionsTab").classList.remove("d-none");

    document.getElementById("aboutButton").classList.remove("selected-button");
    document.getElementById("timeToVisitButton").classList.remove("selected-button");
    document.getElementById("attractionsButton").classList.add("selected-button");

}