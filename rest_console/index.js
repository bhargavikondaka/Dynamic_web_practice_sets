let consoleFormEl = document.getElementById("consoleForm");
let requestUrlEl = document.getElementById("requestUrl");
let responseStatusEl = document.getElementById("responseStatus");
let requestUrlErrMsgEl = document.getElementById("requestUrlErrMsg");
let requestMethodEl = document.getElementById("requestMethod");
let requestBodyEl = document.getElementById("requestBody");
let responseBodyEl = document.getElementById("responseBody");
let sendRequestBtnEl = document.getElementById("sendRequestBtn");

function requst() {

    event.preventDefault();

    let userData = requestBodyEl.value;
    if (userData === "") {
        userData = '{"name":"test","email":"test@test.com","gender":"Male","status":"Active"}';
    }

    const parsedData = JSON.parse(userData);

    let url = requestUrlEl.value;
    let options = {
        method: requestMethodEl.value,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer e4882f174cdb8599306d0a0d5d822859532b611148c20056243eaef34a8a9dda"
        },
        body: JSON.stringify(parsedData)
    };


    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let {
                code
            } = jsonData;
            responseStatusEl.value = code;
            responseBodyEl.value = JSON.stringify(jsonData);
            requestBodyEl.value = "";
        });

}

requestMethodEl.addEventListener("change", requst);
/*let user = {
    "name": "bangtan",
    "email": "remedy@gmail.com",
    "gender": "Male",
    "status": "Active"
};
*/

//8345691
sendRequestBtnEl.addEventListener("click", requst);