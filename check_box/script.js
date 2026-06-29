let checkboxWithLabelContainer = document.getElementById("checkboxWithLabelContainer");
checkboxWithLabelContainer.classList.add("text-center", "p-5");

let inputl = document.createElement('input');
inputl.id = "checkbox";
inputl.type = "checkbox";
checkboxWithLabelContainer.appendChild(inputl);

let inputLabel = document.createElement('label');
inputLabel.setAttribute("for", "checkbox");
inputLabel.id = "checkboxLabel";
inputLabel.textContent = "Click Me!";

checkboxWithLabelContainer.appendChild(inputLabel);