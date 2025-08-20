import React, { useState } from "react";

function List() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const handleAdd = () => {
        if (!newTask.trim()) return;
        setTasks([...tasks, { id: Date.now(), title: newTask }]);
        setNewTask("");
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="p-6 max-w-lg mx-auto">
            <h1 className="text-2xl font-bold mb-4">Quản lý công việc</h1>
            <hr className="mb-4"/>

            <div className="flex space-x-2 mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-lg"
                    placeholder="Nhập công việc..."
                />
                <button
                    onClick={handleAdd}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg"
                >
                    + Add
                </button>
            </div>
            {tasks.length === 0 ? (
                <p className="text-gray-500 italic text-center">
                     Bạn đã hoàn thành hết công việc!
                </p>
            ) : (
                <ul className="space-y-2">
                    {tasks.map((task, index) => (
                        <li
                            key={task.id}
                            className="px-4 py-2 border rounded-lg bg-gray-50 flex justify-between items-center"
                        >
                            <span>
                                <strong>{index + 1}.</strong> {task.title}
                            </span>
                            <button
                                onClick={() => handleDelete(task.id)}
                                className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm"
                            >
                                Xóa
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default List;
