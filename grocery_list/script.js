let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let groceryListContainer = document.getElementById("groceryListContainer");
groceryListContainer.classList.add("groceryListContainer", "d-flex", "flex-column", "justify-content-center");


let heading = document.createElement('h1');
heading.textContent = "Grocery List";
heading.classList.add("heading");
groceryListContainer.appendChild(heading);

let groceries = document.createElement("div");
groceries.classList.add("card", "items-card-styles");
groceryListContainer.appendChild(groceries);

let ul = document.createElement('ul');
groceries.appendChild(ul);

for (let item of groceryList) {
    let li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
}