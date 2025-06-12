const myLibrary = [];
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');
let button = document.querySelector('.add');
let catalog = document.querySelector('.catalog');

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// };
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

button.addEventListener('click', function(event) {
    let book = new Book(title.value, author.value, pages.value, read.checked)
    myLibrary.push(book);
    event.preventDefault();  // Prevent form submission

    // Manual validation for required fields
    if (!title.value || !author.value || !pages.value || pages.value <= 0) {
        alert('Please fill in all fields and enter a valid number for pages.');
        return;  // Don't proceed if any field is missing or pages is invalid
    }

    console.log('Add');
    let newCard = document.createElement('div');
    newCard.classList.add('card');
    catalog.appendChild(newCard);

    let newTitleLabel = document.createElement('h3');
    newTitleLabel.textContent = 'Title:'
    newCard.appendChild(newTitleLabel);
    let newTitle = document.createElement('h3');
    newTitle.textContent = book.title;
    newCard.appendChild(newTitle);
    
    let newAuthorLabel = document.createElement('h3');
    newAuthorLabel.textContent = 'Author:'
    newCard.appendChild(newAuthorLabel);
    let newAuthor = document.createElement('h3');
    newAuthor.textContent = book.author;
    newCard.appendChild(newAuthor);

    let newPagesLabel = document.createElement('h3');
    newPagesLabel.textContent = 'Pages:'
    newCard.appendChild(newPagesLabel);
    let newPages = document.createElement('h3');
    newPages.textContent = book.pages;
    newCard.appendChild(newPages);

    let newReadLabel = document.createElement('h3');
    newReadLabel.textContent = 'Read:'
    newCard.appendChild(newReadLabel);
    let newRead = document.createElement('h3');
    newRead.classList.add('cardRead');
    if(book.read === true) newRead.textContent = 'Yes';
    else newRead.textContent = 'No';
    newCard.appendChild(newRead);

    newCard.innerHTML += '<h3 class="actions"><button class="toggle">Toggle Read</button><button class="delete">Delete</button></h3>';
    newCard.id = crypto.randomUUID();

    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
});

catalog.addEventListener('click', function(event) {
    // Check if the clicked element is a delete button
    if (event.target.classList.contains('delete')) {
        console.log('delete');
        let card = event.target.parentElement.parentElement; // Access the parent card
        card.remove(); // Remove the card
    }
    else if (event.target.classList.contains('toggle')) {
        console.log('toggle');
        let toggleElement = event.target.parentElement.parentElement.querySelector('.cardRead');
        if(toggleElement.textContent === 'Yes') toggleElement.textContent = 'No';
        else toggleElement.textContent = 'Yes';
    }
});
