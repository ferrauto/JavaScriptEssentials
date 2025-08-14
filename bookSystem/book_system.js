const   bookName = document.getElementById("bookName"),
        authorName = document.getElementById("authorName"),
        bookDescription = document.getElementById("description"),
        numberPages = document.getElementById("pages"),
        booksCont = document.getElementById("books");

let books = [];
function addBook(){
    const   vName = bookName.value,
            vAuthor = authorName.value,
            vDescription = bookDescription.value,
            vPages = numberPages.value;
    if(vName && vAuthor && vDescription && !isNaN(vPages)){
        const newBook = {
            name:vName,
            author:vAuthor,
            description:vDescription,
            pages:vPages
        };
        books.push(newBook);
        clearInputs();
        showBooks();
    }
    else {
        alert("Please fill all fields");
    }
}
function clearInputs(){
    bookName.value ="";
    authorName.value = "";
    bookDescription.value = "";
    numberPages.value = null;
}
function showBooks(){
    const booksDiv = books.map((book,index)=>
        "<h1>Book #"+(index+1)+"</h1><p><strong>Book Name:</strong> "+book.name+"</p><p><strong>Book Author:</strong> "+book.author+"</p><p><strong>Book Description:</strong> "+book.description+"</p><p><strong>Number of pages:</strong> "+book.pages+" page(s)</p><button onclick='editBook("+index+")'>Edit</button><button onclick='deleteBook("+index+")'>Delete</button>"
    );
    console.log(booksDiv);
    booksCont.innerHTML = booksDiv.join("");
}
function editBook(index){
    const book = books[index];
    bookName.value = book.name;
    authorName.value = book.author;
    bookDescription.value = book.description;
    numberPages.value = book.pages;

    deleteBook(index);
}

function deleteBook(index){
    books.splice(index,1);
    showBooks();
}