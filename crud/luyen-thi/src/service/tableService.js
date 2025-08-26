import axios from "axios";

const API_URL = "http://localhost:3000/tables";
export const getAllType = async () => {
    try{
        const result = await axios.get(API_URL);
        return result.data;
    }catch(error){
        return [];
    }
}
// export const addType = async (typeBook) => {
//     try{
//         const result = await axios.post(API_URL, typeBook);
//         if(result.status === 201){
//             return true;
//         }else{
//             return false;
//         }
//     }catch(error){
//         false
//     }
// }
// export const getTypeById = async (id) => {
//     const result = await axios.get(`${API_URL}/${id}`);
//     return result.data;
// }
// export const updateType = async (id,typeBook) => {
//     await axios.put(`${API_URL}/${id}`, typeBook);
// }
// export const deleteType = async (id) => {
//     return await axios.delete(`${API_URL}/${id}`);
// };
