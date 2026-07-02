let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];
let jsonContainer = document.getElementById("jsonContainer");

let stringifyBikes = JSON.stringify(bikes);
let stringifyPerson = JSON.stringify(person);
let stringifyTodos = JSON.stringify(todos);

let bikeselement = document.createElement("p");
bikeselement.textContent = stringifyBikes;
bikeselement.classList.add("jsonvals");
jsonContainer.appendChild(bikeselement);

let personelement = document.createElement("p");
personelement.textContent = stringifyPerson;
personelement.classList.add("jsonvals");
jsonContainer.appendChild(personelement);

let todoselement = document.createElement("p");
todoselement.textContent = stringifyTodos;
todoselement.classList.add("jsonvals");
jsonContainer.appendChild(todoselement);