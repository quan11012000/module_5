import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import * as orderService from "../service/orderService.js";
import * as tableService from "../service/tableService.js";

const Detail = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);
    const [tableName, setTableName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const data = await orderService.getById(id);
            setOrder(data);

            if (data.tableId) {
                const tables = await tableService.getAllType();
                const table = tables.find((t) => t.id === data.tableId);
                setTableName(table ? table.name : "Không rõ");
            }
        };
        fetchData();
    }, [id]);

    if (!order) {
        return <div className="text-center mt-10">Đang tải dữ liệu...</div>;
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Chi tiết Order #{order.id}
            </h2>

            <div className="space-y-4">
                <div>
                    <span className="font-semibold">Bàn:</span> {tableName}
                </div>
                <div>
                    <span className="font-semibold">Món:</span> {order.item}
                </div>
                <div>
                    <span className="font-semibold">Số lượng:</span> {order.quantity}
                </div>
                <div>
                    <span className="font-semibold">Giá:</span> {order.price} VND
                </div>
                <div>
                    <span className="font-semibold">Ghi chú:</span> {order.note || "Không có"}
                </div>
                <div>
                    <span className="font-semibold">Trạng thái:</span> {order.status}
                </div>
                <div>
                    <span className="font-semibold">Thời gian Order:</span>{" "}
                    {new Date(order.orderTime).toLocaleDateString()}
                </div>
            </div>

            <div className="mt-6 flex justify-between">
                <Link
                    to="/"
                    className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                    Quay lại
                </Link>
                <Link
                    to={`/edit/${order.id}`}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    Chỉnh sửa
                </Link>
            </div>
        </div>
    );
};

export default Detail;
