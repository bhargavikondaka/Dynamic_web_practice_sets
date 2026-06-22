let imageel = document.getElementById("image");
let imagewidth = document.getElementById("imageWidth");
let warningMessageEl = document.getElementById("warningMessage");
let decrementl = document.getElementById("decrementButton");

let maxwidth = 300;
let minwidth = 100;
let ogwidth = 200;

imageel.style.width = ogwidth + "px";
imagewidth.textContent = ogwidth + "px";

let maxWidthWarning = "Too big. Decrease the size of the image";
let minWidthWarning = "Invisible. Icrease the size of the image";

function increment() {
    ogwidth = ogwidth + 5;
    if (ogwidth > maxwidth) {
        warningMessageEl.textContent = maxWidthWarning;
        console.log(maxWidthWarning);
    } else {

        console.log(ogwidth);

        let updatedwidth = ogwidth + "px";
        imageel.style.width = updatedwidth;
        imagewidth.textContent = updatedwidth;
        warningMessageEl.textContent = "";
    }
}

function decrement() {
    ogwidth = ogwidth - 5;
    if (ogwidth < minwidth) {
        console.log(ogwidth);
        let updatedwidth = 100 + "px";
        imagewidth.textContent = updatedwidth;
        warningMessageEl.textContent = minWidthWarning;
    } else {

        let updatedwidth = ogwidth + "px";
        imageel.style.width = updatedwidth;
        imagewidth.textContent = updatedwidth;
        warningMessageEl.textContent = "";
    }
}