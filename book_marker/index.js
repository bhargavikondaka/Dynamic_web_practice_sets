// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let bookmarkFormEl = document.getElementById("bookmarkForm");
let siteNameInputEl = document.getElementById("siteNameInput");
let siteUrlInputEl = document.getElementById("siteUrlInput");
let submitBtnEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let bookmarksListEl = document.getElementById("bookmarksList");


function createAndAppendSite() {
    let sitesCont = document.createElement("div");
    sitesCont.classList.add("p-2", "m-2", "form", "w-90");
    let sitename = document.createElement("p");
    sitename.textContent = siteNameInputEl.value;
    sitename.classList.add("site-name");
    sitesCont.appendChild(sitename);

    let siteurl = document.createElement("a");
    siteurl.textContent = siteUrlInputEl.value;
    siteurl.href = siteUrlInputEl.value;
    siteurl.target = "_blank";
    siteurl.classList.add("site-name", "text-primary");
    sitesCont.appendChild(siteurl);

    bookmarksListEl.appendChild(sitesCont);

}

siteNameInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
});

siteUrlInputEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
});


submitBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    siteNameInputEl.addEventListener("blur", function() {
        if (siteNameInputEl.value === "") {
            siteNameErrMsgEl.textContent = "Required*";
        } else {
            siteNameErrMsgEl.textContent = "";
        }
    });
    siteUrlInputEl.addEventListener("blur", function(event) {
        if (event.target.value === "") {
            siteUrlErrMsgEl.textContent = "Required*";
        } else {
            siteUrlErrMsgEl.textContent = "";
        }
    });

    if (siteUrlInputEl.value === "" || siteUrlInputEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        createAndAppendSite();
    }

});