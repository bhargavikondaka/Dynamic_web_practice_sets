let bgColorInput = document.getElementById("bgColorInput");
let fontColorInput = document.getElementById("fontColorInput");
let fontSizeInput = document.getElementById("fontSizeInput");
let fontWeightInput = document.getElementById("fontWeightInput");
let paddingInput = document.getElementById("paddingInput");
let borderRadiusInput = document.getElementById("borderRadiusInput");
let customButton = document.getElementById("customButton");

function applyButton() {
    let bgColorInput1 = bgColorInput.value;
    let fontColorInput1 = fontColorInput.value;
    let fontSizeInput1 = fontSizeInput.value;
    let fontWeightInput1 = fontWeightInput.value;
    let paddingInput1 = paddingInput.value;
    let borderRadiusInput1 = borderRadiusInput.value;

    customButton.style.backgroundColor = bgColorInput1;
    customButton.style.color = fontColorInput1;
    customButton.style.fontSize = fontSizeInput1;
    customButton.style.fontWeight = fontWeightInput1;
    customButton.style.padding = paddingInput1;
    customButton.style.borderRadius = borderRadiusInput1;
}