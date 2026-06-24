let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];


function changecolor() {
    let randomcolors = Math.ceil(Math.random() * 10);
    document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[randomcolors];
}