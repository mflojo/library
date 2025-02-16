const showButton = document.querySelector("#addBook");
const dialog = document.querySelector("#userInput");
const userTitle = document.querySelector("#bookTitle");
const userAuthor = document.querySelector("#bookAuthor");
const userPages = document.querySelector("#bookPages");
const userRead = document.querySelector("#bookRead");
const confirmBtn = document.querySelector("#confirmBtn");

showButton.addEventListener("click", () => {
    dialog.showModal();
});



const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const bookShelf = document.querySelector("#bookShelf");
    bookShelf.innerHTML = "";

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("card");

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.read ? "Read" : "Not Read Yet"}</p>
            <button onclick="myLibrary[${index}].toggleRead(); displayBooks()">Toggle Read</button>
            <button onclick="removeBook(${index})">Remove</button>
        `;

        bookShelf.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}





//dummy books

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 299, false);
addBookToLibrary("The Shining", "Stephen King", 447, false);

displayBooks();