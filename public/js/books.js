function getBooks() {
    fetch("https://goodreads-books.p.rapidapi.com/genres/textbook/best", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "goodreads-books.p.rapidapi.com",
		"x-rapidapi-key": "94c895e35bmsha5d3d63d53d272ap14d10cjsn4a1ba9717cc5"
	}
})
.then(response => {
	return response.json()
})

.then(response => {
    response.books.forEach(element => {
        console.log(element);
        var author = element.author
        var image = element.smallImageURL
        console.log(title);
        //create a new div 
        document.querySelector("#author").textContent= author;
        document.querySelector("#image").sourceContent= image;
    });
    // console.log(response);

    // var author = response.books[0].author
    // var title = response.books[0].title
    // var pubYear = response.books[0].publicationYear
    
    // document.querySelector("#author").textContent= author
    // document.querySelector("#title").textContent= title
    // document.querySelector("#pubYear").textContent= pubYear
})
        .catch(err => {
            console.error(err);
        });
}
getBooks()