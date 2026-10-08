let userInputEl = document.getElementById("userInput");
let sendDeleteRequestBtnEl = document.getElementById("sendDeleteRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let loadinEl = document.getElementById("loading");

//8340366  8343240   8340396

function httpDeleteReq() {
    let id = userInputEl.value;
    let url = "https://gorest.co.in/public-api/users/" + id;
    let options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer e4882f174cdb8599306d0a0d5d822859532b611148c20056243eaef34a8a9dda"
        }
    };


    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            //console.log(jsonData);
            let {
                code
            } = jsonData;
            requestStatusEl.textContent = code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });
}

sendDeleteRequestBtnEl.addEventListener("click", httpDeleteReq);