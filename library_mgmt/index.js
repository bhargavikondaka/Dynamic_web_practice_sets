let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

let searchheadingEl = document.getElementById("searchheading");
spinnerEl.classList.add("d-none");
let bookStoreUrl = "https://apis.ccbp.in/book-store?title=India";

function createAndAppendBook(book) {
    let {
        author,
        imageLink
    } = book;
    // console.log(author);


    let bookContainer = document.createElement("div");
    bookContainer.classList.add("col-5", "m-2");

    //book image
    let bookImg = document.createElement("img");
    bookImg.src = imageLink;
    bookImg.classList.add("w-100");
    bookContainer.appendChild(bookImg);

    //author Name
    let authorName = document.createElement("p");
    authorName.textContent = author;
    authorName.classList.add("author-name");
    bookContainer.appendChild(authorName);
    searchResultsEl.appendChild(bookContainer);
}

function resultbooks(searchResults) {
    //createAndAppendBook(search_results[10]);
    for (let book of searchResults) {
        let bookname = searchInputEl.value.toLowerCase();
        console.log(book);
        createAndAppendBook(searchResults[0]);

        /* if (book.title.toLowerCase().includes(bookname)) {
             spinnerEl.classList.add("d-none");
             searchheadingEl.textContent = "Popular Books";
             createAndAppendBook(book);
         } else {
             spinnerEl.classList.add("d-none");
             searchheadingEl.textContent = "NO Result Found";
         }*/
    }
}

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let title = searchInputEl.value;
        let bookStoreUrl = "https://apis.ccbp.in/book-store?title=" + title;
        spinnerEl.classList.remove("d-none");
        fetch(bookStoreUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                console.log(jsonData);
                let {
                    search_results
                } = jsonData;

                //resultbooks(search_results);
                // console.log(search_results);
            });
    }
});
/*fetch(bookStoreUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        //console.log(jsonData.search_results);
        let {
            search_results
        } = jsonData;
       
       //resultbooks(search_results); 
    });*/