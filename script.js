class BookList {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    //update inputs 
    updateInputs() {
        if (this.title === '') {
            this.title = document.getElementById('title').value;
            return true;
        }

        if (this.author === '') {
            this.author = document.getElementById('author').value;
            return true;
        }

        if (typeof this.isbn !== 'number') {
            this.isbn = document.getElementById('isbn').value;
            return true;
        }

        return false;
    }
}

const bookList = new BookList('Book title', 'Author Name', '1234567890');

// Event listener for form submission
document.getElementById('form-group').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Update the bookList instance with the form values
    bookList.title = document.getElementById('title').value;
    bookList.author = document.getElementById('author').value;
    bookList.isbn = document.getElementById('isbn').value;

    // Call the updateInputs method to validate and update the inputs
    const inputsUpdated = bookList.updateInputs();

    // Clear the form inputs
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

    // Display the book in the table if inputs were updated
    if (inputsUpdated) {
        const tableBody = document.getElementById('book-list');
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${bookList.title}</td>
            <td>${bookList.author}</td>
            <td>${bookList.isbn}</td>
        `;
    }
});
