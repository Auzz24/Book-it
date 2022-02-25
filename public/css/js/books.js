
function getBooks() {

    fetch("api/books/getbooks", {
        "method": "GET",
    })
        .then(response => {
            return response.json()
        })
        .then(response => {
            console.log(response);
            var title = response[0].title
            var author = response[0].author
            var smallImageURL = response[0].smallImageURL
            var publicationYear = response[0].publicationYear


            document.querySelector("#title").textContent = title
            document.querySelector("#author").textContent = author
            document.querySelector("#smallImageURL").textContent = smallImageURL
            document.querySelector("#publicationYear").textContent = publicationYear
        })
        .catch(err => {
            console.error(err);
        })
}

getBooks()