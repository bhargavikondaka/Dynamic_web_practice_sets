let sendGetRequestBtnEl = document.getElementById("sendGetRequestBtn");
let requestStatusEl = document.getElementById("requestStatus");
let httpResponseEl = document.getElementById("httpResponse");
let url = "https://gorest.co.in/public-api/users";
let options = {
    method: "GET"
}
sendGetRequestBtnEl.onclick = function() {

    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            //console.log(response);
            let {
                code
            } = jsonData;
            // console.log(jsonData);
            // console.log(code);
            requestStatusEl.textContent = code;
            httpResponseEl.textContent = JSON.stringify(jsonData);
        });

};

let object = fetch(url, options);
console.log(JSON.stringify(object));