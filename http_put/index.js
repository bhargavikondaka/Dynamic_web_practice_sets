let userInputEl = document.getElementById("userInput");
let requestBodyEl = document.getElementById("requestBody");
let sendPutRequestBtnEl = document.getElementById("sendPutRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let id = userInputEl.value;
let url = "https://gorest.co.in/public-api/users/" + id;
let loadingEl = document.getElementById("loading");


function changeInfo() {
    let user = JSON.parse(requestBodyEl.value);
    loadingEl.classList.toggle("d-none");

    let options = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 2983850a35b9e8a5e316133f7c4160f6fb027d4e2cbac305796364447b01b843"
        },
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
            //console.log(jsonData);
            loadingEl.classList.remove("d-none");
            requestStatusEl.classList.add("d-none");
            requestStatusEl.textContent = code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });


}

sendPutRequestBtnEl.addEventListener("click", changeInfo);




/*
 {
"name":"bhar",
"email":"ccb7xl@gmail.com",
"gender":"female",
"status":"active"
}

        */