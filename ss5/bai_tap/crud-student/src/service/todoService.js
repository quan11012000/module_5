import axios from "axios";

const API_URL = "http://localhost:3005/todo-lists";
export const getAllTodoList = async () => {
    try{
        const result = await axios.get(API_URL);
        return result.data;

    }catch(error){
        return [];
    }
}
export const addTodoList = async (todo) => {
    try{
        const result = await axios.post(API_URL, todo);
        if(result.status === 201){
            return result.data;
        }else{
            return null;
        }
    }catch(error){
        return null
    }
}
