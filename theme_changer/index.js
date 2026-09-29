let bgContainerEl = document.getElementById("bgContainer");
let headingEl = document.getElementById("heading");
let themeUserInputEl = document.getElementById("themeUserInput");



themeUserInputEl.addEventListener("keyup", function(event) {

    let ipKey = event.key;
    console.log(ipKey);
    let input = themeUserInputEl.value;
    console.log(input);
    if (ipKey === "Enter" & input === 'Dark') {
        bgContainerEl.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";
        headingEl.style.color = 'white';
    } else if (ipKey === 'Enter' & (input === 'Light')) {
        bgContainerEl.style.backgroundImage = "url('https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
        headingEl.style.color = '#014d40';
    } else if (ipKey === 'Enter' & (input !== 'Dark' || input !== 'Light')) {
        alert("enter valid theme");
    }

});