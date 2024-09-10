const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[indexgit].toggleRead();
    render();
}

function render() {
    let container = document.querySelector('.container')
    container.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let card = document.createElement('div');
        card.className = "card";
        card.innerHTML = `
            <p>${book.title}</p>
            <p>by</p>
            <p>${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not Read Yet"}</p>
            <div class="card-btns">
                <button class="read-btn" onClick="toggleRead(${i})">Toggle read</button>
                <button class="remove-btn" onClick="removeCard(${i})">Remove</button>
            </div>
        `;
        container.appendChild(card);
    }
}

function removeCard(index) {
    myLibrary.splice(index, 1);
    render();
}

const addIcon = document.querySelector('.add-icon');
const dialog = document.querySelector('.dialog');
let titleInput = document.querySelector('.title-input');
let authorInput = document.querySelector('.author-input');
let pagesInput = document.querySelector('.pages-input');
let readInput = document.querySelector('#read');
addIcon.addEventListener('click', () => {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;
    dialog.show();
});

const closeDialog = document.querySelector('.close-dialog');
closeDialog.addEventListener('click', () => {
    dialog.close();
});

function addBookToLibrary() {
    let newBook = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.checked);
    myLibrary.push(newBook);
    render();
}

const submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
    addBookToLibrary();
});