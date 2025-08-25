import React, {useEffect, useState} from "react";
import * as studentService from "../service/todoService.js";


const StudentList = () => {
    const [todo,setTodo]=useState("");
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        const getAllTodoList = async () => {
            const temp = await studentService.getAllTodoList();
            setTodoList(temp);
        }
        getAllTodoList();
    },[]);
    const handleSubmit = async () => {
        try{
            const newTodo= await studentService.addTodoList({name:todo});
            setTodoList(prevState => [...prevState,newTodo])
        }catch (error){

        }

    };
    return (
        <div className="p-6 ">
            <div className="flex">
                <div className="flex justify-between mb-4">
                    <input name="name" className="bg-gray-400"
                           value={todo} onChange={(e)=> setTodo(e.target.value)}
                    />
                </div>
                <div className="flex justify-between mb-4">
                    <button
                        onClick={() => handleSubmit()}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                        submit
                    </button>
                </div>
            </div>

                {todoList.map((s) => (
                    <ul key={s.id} className="hover:bg-gray-50 text-center">
                        <li className="hidden border p-2 ">{s.id}</li>
                        <li className="border p-2">{s.name}</li>
                    </ul>
                ))}
        </div>
    );
};




export default StudentList;
