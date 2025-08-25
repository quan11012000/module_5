import axios from "axios";

export const deleteUser = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};