let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");
let url = "https://apis.ccbp.in/countries-data";

function createAndAppendCountryCard(country) {
    let {
        name,
        flag,
        population
    } = country;
    //create mainContainer  --  result-countries
    let mainContainer = document.createElement("div");
    mainContainer.classList.add("result-countries", "col-md-6", "col-12");
    resultCountriesEl.appendChild(mainContainer);

    //create countryCard --  country-card
    let countryCardEl = document.createElement("div");
    countryCardEl.classList.add("country-card", "d-flex", "flex-row", "justify-content-left", "card");
    mainContainer.appendChild(countryCardEl);

    //create image container
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("d-flex", "flex-column", "justify-content-center");
    countryCardEl.appendChild(imgContainer);

    //country image  --  country-flag
    let flagImageEl = document.createElement("img");
    flagImageEl.src = flag;
    flagImageEl.classList.add("country-flag");
    imgContainer.appendChild(flagImageEl);

    //create information container
    let infoContainer = document.createElement("div");
    countryCardEl.appendChild(infoContainer);

    // countryname --   country-name 
    let countryNameEl = document.createElement("p");
    countryNameEl.classList.add("country-name");
    countryNameEl.textContent = name;
    infoContainer.appendChild(countryNameEl);


    // polupation  --   country-population
    let populationEl = document.createElement("p");
    populationEl.classList.add("country-population");
    populationEl.textContent = population;
    infoContainer.appendChild(populationEl);

}

function eachCountry(array) {
    resultCountriesEl.textContent = "";
    let countryName = searchInputEl.value.toLowerCase();
    for (let country of array) {
        let name = country.name;
        if (country.name.toLowerCase().includes(countryName)) {
            createAndAppendCountryCard(country);
        } else {
            //createAndAppendCountryCard(country);
        }
    }
}

function countriesSearch(event) {

    resultCountriesEl.textContent = searchInputEl.value;


    //spinnerEl.classList.toggle("d-none");
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            //console.log(jsonData);
            eachCountry(jsonData);

        });
}

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        //console.log(jsonData);
        eachCountry(jsonData);

    });

countriesSearch();
//spinnerEl.classList.add("d-none");
searchInputEl.addEventListener("keyup", countriesSearch);