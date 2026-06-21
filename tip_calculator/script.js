let tipAmount;
let totalAmount;

function calculateTotal() {

    let errorMessage = document.getElementById("errorMessage");
    let billAmount = (document.getElementById("billAmount").value);
    let percentageTip = (document.getElementById("percentageTip").value);

    if (billAmount === "" || percentageTip === "") {
        errorMessage.textContent = "please enter valid input";
        return;

    }
    tipAmount = (percentageTip / 100) * billAmount;
    document.getElementById("tipAmount").value = tipAmount;
    totalAmount = parseInt(billAmount) + parseInt(tipAmount);
    document.getElementById("totalAmount").value = totalAmount;
    errorMessage.textContent = "";
}