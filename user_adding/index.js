let addUserFormEl = document.getElementById("addUserForm");
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let statusEl = document.getElementById("status");
let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");
let url = "https://gorest.co.in/public-api/users/8345355";
let submitBtnEl = document.getElementById("submitBtn");

addUserFormEl.addEventListener("click", function(event) {
    event.preventDefault();
});


nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";

    } else {
        nameErrMsgEl.textContent = "";
    }
});
emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";

    } else {
        emailErrMsgEl.textContent = "";
    }
});

submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    nameEl.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            nameErrMsgEl.textContent = "Required*";

        } else {
            nameErrMsgEl.textContent = "";
        }
    });
    emailEl.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            emailErrMsgEl.textContent = "Required*";

        } else {
            emailErrMsgEl.textContent = "";
        }
    });

    let userdata = {
        name: nameEl.value,
        email: emailEl.value,
        status: "active", //status.value,
        gender: "female" //genderFemaleEl.value|| genderMaleEl.value
    };

    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer e4882f174cdb8599306d0a0d5d822859532b611148c20056243eaef34a8a9dda"
        },
        body: JSON.stringify(userdata)
    };

    let url = "https://gorest.co.in/public-api/users";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            //console.log(jsondata);
            let {
                code
            } = jsondata;
            if (code === 422) {
                emailErrMsgEl.textContent = "email alredy existed";
            }

        });


});