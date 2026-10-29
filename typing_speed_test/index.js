let speedTypingTestEl = document.getElementById("speedTypingTest");
let timerEl = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let resultEl = document.getElementById("result");
let quoteInputEl = document.getElementById("quoteInput");
let submitBtnEl = document.getElementById("submitBtn");
let resetBtnEl = document.getElementById("resetBtn");
let spinnerEl = document.getElementById('spinner');


let counter = 0;
let quote = null;

let stopTimer = setInterval(function() {
    //console.log(counter);
    timerEl.textContent = counter;
    counter = counter + 1;
}, 1000);


let url = "https://apis.ccbp.in/random-quote";
spinnerEl.classList.add("d-none");
fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        //console.log(jsonData);
        let {
            content
        } = jsonData;
        //console.log(content);

        quoteDisplayEl.textContent = content;
        quote = quoteDisplayEl.textContent;
        console.log(quote);
    });

function typingTest() {

    //  console.log(quote);
    //   console.log(quoteInputEl.textContent);
    //console.log(quote === quoteInputEl.textContent);

    if (quoteDisplayEl.textContent !== quoteInputEl.value) {
        clearInterval(stopTimer);
        resultEl.textContent = "you typed incorrect sentence";
    } else if (quote === "") {
        resultEl.textContent = "you typed incorrect sentence";
    } else {
        spinnerEl.classList.remove("d-none");
        clearInterval(stopTimer);
        counter = counter - 1;
        resultEl.textContent = "You typed in" + counter + "seconds";

    }
}

/*quoteInputEl.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        //qip=qip+(;
        if (quote === quoteInputEl.textContent) {
            clearInterval(stopTimer);
            resultEl.textContent = "You typed in" + counter - 1 + "seconds";
        } else {
            resultEl.textContent = "please enter the correct sentence";
        }
    }
});*/
submitBtnEl.addEventListener("click", typingTest);
resetBtnEl.addEventListener("click", function() {
    quoteInputEl.textContent = '';
    counter = 0;
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            //console.log(jsonData);
            let {
                content
            } = jsonData;
            //console.log(content);
            quoteDisplayEl.textContent = content;
            quote = quoteDisplayEl.textContent;
            console.log(quote);
            stopTimer = setInterval(function() {
                //console.log(counter);
                timerEl.textContent = counter;
                counter = counter + 1;
                resultEl.textContent = "";
            }, 1000);
        });
});