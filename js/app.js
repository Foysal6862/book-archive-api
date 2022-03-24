const searchBook = () => {
    const searchField = document.getElementById('input-field');
    const searchText = searchField.value;
    searchField.value = '';
    // load search book
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}

const displayBook = books => {
    // number of search result
    const searchResult = document.getElementById('number-of-search-result');
    searchResult.innerText = `Search Result : ${books.length !== 0 ? books.length : "No result found"}`;
    // search result
    const booksContainer = document.getElementById('books');
    booksContainer.textContent = '';
    books.forEach(book => {
        const url = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
        console.log(url);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Book Name : ${book.title}</h5>
            <p class="card-text">Author Name : ${book.author_name}</p>
            <p class="card-text">First Copy Published : ${book.first_publish_year}</p>
            <p class="card-text">
            Image Url :  <a href="${book.cover_i !==undefined ? url : ''}" target="_blank">${book.cover_i !==undefined ?   url : ''}</a>
            </p>
            
        </div>
    </div>
        `;
        booksContainer.appendChild(div);
    })
}