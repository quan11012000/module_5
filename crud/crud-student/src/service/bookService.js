import axios from "axios";

const API_URL = "http://localhost:3000/books";
export const getAllBookByTitle = async (title) => {
    console.log(title);
    try{
        const result = await axios.get(API_URL+`?title_like=${title}`);
        return result.data;

    }catch(error){
        return [];
    }
}
export const addBook = async (book) => {
    try{
        const result = await axios.post(API_URL, book);
        if(result.status === 201){
            return true;
        }else{
            return false;
        }
    }catch(error){
        false
    }
}
export const getBookById = async (id) => {
    const result = await axios.get(`${API_URL}/${id}`);
    return result.data;
}
export const updateBook = async (id,book) => {
    await axios.put(`${API_URL}/${id}`, book);
}
export const deleteBook = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
