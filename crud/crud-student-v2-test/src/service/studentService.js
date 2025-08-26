import axios from "axios";

const API_URL = "http://localhost:3000/students";
export const getAll = async (name,typeId,dateFirst,dateSencond) => {
    try{
        let query = `?_expand=class&name_like=${name}&classId_like=${typeId}&_sort=admissionDate&_order=asc`;
        if(dateFirst !== ""){
            query +=`&admissionDate_gte=${dateFirst}`
        }
        if( dateSencond !== ""){
            query +=`&admissionDate_lte=${dateSencond}`
        }
        const result = await axios.get(API_URL+query);
        return result.data;
    }catch(error){
        return [];
    }
}
export const add = async (obj) => {
    try{
        const result = await axios.post(API_URL, obj);
        if(result.status === 201){
            return true;
        }else{
            return false;
        }
    }catch(error){
        false
    }
}
export const getById = async (id) => {
    const result = await axios.get(`${API_URL}/${id}`);
    return result.data;
}
export const update = async (id,obj) => {
    await axios.put(`${API_URL}/${id}`, obj);
}
export const deleteById = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
