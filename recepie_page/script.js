let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://www.yummytummyaarthi.com/wp-content/uploads/2022/11/red-sauce-pasta-1.jpg",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};


let title = recipeObj.title;
let heading = document.getElementById("heading");
heading.textContent = title;
heading.classList.add("recipe-title");

let imageSrc = recipeObj.imageSrc;
let image = document.getElementById("image");
image.setAttribute("src", imageSrc);
image.classList.add("image-dimensions");


let ingredients = recipeObj.ingredients;

let ingredientsListContainer = document.createElement('div');
ingredientsListContainer.classList.add("p-2");
for (let ingredient of ingredients) {
    let item = document.createElement('li');
    item.textContent = ingredient;
    ingredientsListContainer.appendChild(item);
}
let ingredientsContainer = document.getElementById("ingredients");
ingredientsContainer.appendChild(ingredientsListContainer);