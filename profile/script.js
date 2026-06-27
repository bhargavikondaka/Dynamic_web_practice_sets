let profileDetails = {
    imgSrc: "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "RAHUL ATTULURI",
    age: 25
};

let profileContainer = document.getElementById("profileContainer");

let image = document.createElement('img');
image.src = profileDetails.imgSrc;
profileContainer.appendChild(image);

let imgContainer = document.getElementById("imgContainer");
imgContainer.classList.add("d-flex", "flex-col", "justify-content-center");
profileContainer.appendChild(imgContainer);

let pname = profileDetails.name;
console.log(pname);
let heading = document.createElement('p');
heading.textContent = pname;
profileContainer.appendChild(heading);

let prage = profileDetails.age;
let p = document.createElement('p');
p.textContent = "Age : " + prage;
profileContainer.appendChild(p);