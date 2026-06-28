/* Follow the instructions found in the description to complete the JavaScript functionality.*/

let todoList = [{
        text: "Learn HTML"
    },
    {
        text: "Learn CSS"
    },
    {
        text: "Learn JavaScript"
    }
];

function todolist(todo) {
    let todoContainer = document.getElementById("todoItemsContainer");
    let todol = document.createElement('li');
    todol.classList.add("d-flex", "flex-row", "todo-item-container");
    todoContainer.appendChild(todol);

    let taskinput = document.createElement('input');
    taskinput.classList.add("checkbox-input");
    taskinput.type = "checkbox";
    taskinput.id = "taskinput";
    todol.appendChild(taskinput);

    let labelContainer = document.createElement('div');
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todol.appendChild(labelContainer);

    let label = document.createElement('label');
    label.classList.add("checkbox-label");
    label.setAttribute("for", taskinput);
    label.textContent = todo.text;
    labelContainer.appendChild(label);

    let deleteContainer = document.createElement('div');
    deleteContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteContainer);

    let deleteIcon = document.createElement("i");
    //deleteIcon.classList.add("delete-icon","far","fa-trash-alt","trash-icon");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteContainer.appendChild(deleteIcon);

}

for (let task in todoList) {
    todolist(todoList[task]);
}