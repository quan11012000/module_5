import axios from "axios";

const API_URL = "http://localhost:3000/orders";
export const getAll = async (item,tableId,dateFirst,dateSencond,page = 1, limit = 2) => {
    try{
        let query = `?_expand=table&item_like=${item}&tableId_like=${tableId}&_sort=price&_order=desc`;
        if(dateFirst !== ""){
            query +=`&orderTime_gte=${dateFirst}`
        }
        if( dateSencond !== ""){
            query +=`&orderTime_lte=${dateSencond}`
        }
        query += `&_page=${page}&_limit=${limit}`
        const result = await axios.get(API_URL+query);
        return {
            data: result.data,
            total: Number(result.headers["x-total-count"]), // json-server có header này
            page,
            limit,
        };
    }catch(error){
        return { data: [], total: 0, page, limit };
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
