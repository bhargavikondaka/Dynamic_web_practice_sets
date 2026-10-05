let requestBodyEl = document.getElementById("requestBody");
let sendPostRequestBtnEl = document.getElementById("sendPostRequestBtn");
let httpResponseEl = document.getElementById("httpResponse");
let requestStatusEl = document.getElementById("requestStatus");
let url = "https://gorest.co.in/public-api/users";

function searchCredentials() {
    //console.log(requestBodyEl.value);
    let user = JSON.parse(requestBodyEl.value);
    //console.log(user);
    let options = {
        method: "POST",
        body: JSON.stringify(user)
    };
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                code
            } = jsonData;
            requestStatusEl.textContent = code;
            httpResponseEl.textContent = JSON.stringify(jsonData);

        });
}


sendPostRequestBtnEl.addEventListener("click", searchCredentials);


// {
// "name":"Bhargavi",
// "age":"20"
// }