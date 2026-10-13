let userInputEl = document.getElementById("userInput");
let factEl = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");
let url = "https://apis.ccbp.in/numbers-fact?number=";


function numberFacts(event) {

    if (event.key === 'Enter') {
        spinnerEl.classList.remove("d-none");
        let number = userInputEl.value;
        let numurl = url + number;
        fetch(numurl)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let {
                    fact
                } = jsonData;
                spinnerEl.classList.add("d-none");
                factEl.textContent = fact;
            });
    }
}


userInputEl.addEventListener("keydown", numberFacts);