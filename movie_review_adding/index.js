let movieReviewsContainer = document.getElementById("movieReviewsContainer");
let buttonElement = document.getElementById("addBtn");

let inputElement = document.getElementById("titleInput");
let reviewMessage = document.getElementById("reviewTextarea");

function buttonOnclick() {

    if (inputElement.value === "") {
        alert("enter the movie title");
        return;
    } else {
        localStorage.setItem("reviewMessage", reviewMessage.vaue);
        let reviewsContainerEl = document.getElementById("reviewsContainer");

        reviewsContainerEl.classList.add("p-2");
        let addedMovieName = document.createElement('p');
        addedMovieName.textContent = "Movie Title : " + inputElement.value;
        addedMovieName.classList.add("added-review-title", "mb-1");
        reviewsContainerEl.appendChild(addedMovieName);
        let movieReview = document.createElement('p');
        movieReview.textContent = "Review : " + reviewMessage.value;
        movieReview.classList.add("added-review");
        reviewsContainerEl.appendChild(movieReview);
        movieReviewsContainer.appendChild(reviewsContainerEl);
        inputElement.value = "";
        reviewMessage.value = "";
    }
}
buttonElement.onclick = function() {
    buttonOnclick();
}