let checkBoxWithLabelContainer = document.getElementById("checkBoxWithLabelContainer");
let inputEl = document.createElement("input");
let labelEl = document.createElement("label");



inputEl.type = "checkbox";
inputEl.id = "checkbox";
let inputElId = inputEl.id;
checkBoxWithLabelContainer.appendChild(inputEl);

labelEl.setAttribute("for", "checkbox");
labelEl.id = "checkboxLabel";
labelEl.textContent = "I am a label";
let labelElId = labelEl.id;
checkBoxWithLabelContainer.appendChild(labelEl);
console.log(inputEl.checked);

function checkedLabel(inputElId, labelElId) {
    labelEl.classList.toggle('checked', inputEl.checked);

}

labelEl.onclick = function() {
    checkedLabel(inputElId, labelElId);
};
inputEl.onclick = function() {
    checkedLabel(inputElId, labelElId);
};