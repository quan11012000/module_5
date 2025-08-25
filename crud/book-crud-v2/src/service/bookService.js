const STORAGE_KEY = 'books';

export const getBooks = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};
export const addBook = (book) => {
    const books = getBooks();
    book.id = Date.now();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};
export const updateBook = (id,book) => {
    const books = getBooks().map(b=> b.id===book.id)?
        {...b,...updateBook}:b;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));

};
export const deleteBook = (id) => {
    const books = getBooks().filter(b=> b.id !==id);
    localStorage.removeItem(STORAGE_KEY,JSON.stringify(books));
};
export const getBookById = (id) => {
    return getBooks().find(b=>b.id===id);
};