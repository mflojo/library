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

confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let newTitle = userTitle.value.trim();
    let newAuthor = userAuthor.value.trim();
    let newPages = parseInt(userPages.value, 10);
    let newRead = userRead.value === "true";

    if (!newTitle || !newAuthor || isNaN(newPages)) {
        alert("Please enter valid book details.");
        return;
    }

    addBookToLibrary(newTitle, newAuthor, newPages, newRead);

    userTitle.value = "";
    userAuthor.value = "";
    userPages.value = "";
    userRead.value = "false";

    dialog.close();
});

class Library {
    library;

    constructor() {
        this.library = [];
        console.log("library created");
    }

    addBook(book) {
        this.library.push(book);
        console.log("book added to library");
        this.displayBooks();
    }
    
    removeBook(index) {
        this.library.splice(index, 1);
        this.displayBooks();
    }

    displayBooks() {
        const display = document.querySelector("#bookShelf");
        display.innerHTML = "";

        this.library.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("card");

            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Pages: ${book.pages}</p>
                <p>Status: ${book.read ? "Read" : "Not Read Yet"}</p>
                <button onclick="library[${index}].switchRead(); displayBooks()">Toggle Read</button>
                <button onclick="removeBook(${index})">Remove</button>
            `;
            display.appendChild(bookCard);
        });
    }
}

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        console.log("book successfully created");
    }

    switchRead() {
        this.read = !this.read;
        this.displayBooks();
    }

}

const library = new Library();

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 299, false);
const book2 = new Book("The Shining", "Stephen King", 447, false)
const book3 = new Book("1984", "George Orwell", 328, false);
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", 281, false);
const book5 = new Book("Dune", "Frank Herbert", 412, false);
const book6 = new Book("Pride and Prejudice", "Jane Austen", 279, false);
const book7 = new Book("The Catcher in the Rye", "J.D. Salinger", 277, false);
const book8 = new Book("Moby-Dick", "Herman Melville", 635, false);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.addBook(book6);
library.addBook(book7);
library.addBook(book8);
console.log(library.library);
