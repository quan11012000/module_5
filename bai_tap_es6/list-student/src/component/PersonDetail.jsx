import React from "react";

const PersonDetail = ({ person, onBack }) => {
    if (!person) return <p>Không có dữ liệu</p>;

    return (
        <div className="p-6">
            <button onClick={onBack} className="mb-4 bg-gray-400 text-white px-3 py-1 rounded">
                ← Quay lại
            </button>
            <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
                <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="text-xl font-bold text-center">{person.name}</h2>
                <p className="text-gray-600 text-center">{person.email}</p>
                <p className="text-gray-600 text-center">{person.phone}</p>
            </div>
        </div>
    );
};

export default PersonDetail;
