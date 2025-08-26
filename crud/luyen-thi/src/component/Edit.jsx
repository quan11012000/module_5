import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as orderService from "../service/orderService.js";
import * as Yup from "yup";
import {toast} from "react-toastify";
import * as tableService from "../service/tableService.js";

const Edit = () => {
    const [type, setType] = useState([]);
    useEffect(() =>{
        const getAllType = async () => {
            const temp = await tableService.getAllType();
            setType(temp);
        }
        getAllType();
    },[])

    const [order, setOrder] = useState({
        tableId:"",
        item: "",
        quantity: 0,
        price: 0,
        status: "",
        orderTime:""
    });
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetch = async () => {
            const data = await orderService.getById(id);
            setOrder(data);
        };
        fetch();
    },[id])
    const validation= {
        item:Yup.string().required("Khong duoc de  trong"),
        quantity:Yup.number().required("khong duoc de trong").min(0,"phai lon hon 0"),
        price:Yup.number().required("khong duoc de trong").min(0,"phai lon hon 0"),
        status:Yup.string().required("khong duoc de trong"),
        orderTime:Yup.date().required("khong duoc de trong")
    };

    const handleSubmit = async (value) => {
        await orderService.update(id,value);
        toast.success("Cập nhật thành công")
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Chỉnh sửa
            </h2>
            <Formik
                initialValues={order}
                onSubmit={handleSubmit}
                enableReinitialize
                validationSchema={Yup.object(validation)}
            >
                {({ isValid }) => (
                    <Form className="space-y-5">
                        {/* Name */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Table</label>
                                <ErrorMessage
                                    name="tableId"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                as="select"
                                name="tableId"
                                className="w-full border px-3 py-2 rounded mt-1"
                            >
                                {type.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Item</label>
                                <ErrorMessage
                                    name="item"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="item"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Quantity</label>
                                <ErrorMessage
                                    name="quantity"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="quantity"
                                type="number"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">price</label>
                                <ErrorMessage
                                    name="price"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="price"
                                type="number"
                                className="w-full border px-3 py-2 rounded mt-1"
                            >
                            </Field>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Note</label>
                                <ErrorMessage
                                    name="note"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="note"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Status</label>
                                <ErrorMessage
                                    name="status"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="status"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">OrderTime</label>
                                <ErrorMessage
                                    name="orderTime"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="orderTime"
                                type="date"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>
                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={!isValid}
                            className={`w-full py-2 rounded-lg font-semibold transition ${
                                isValid
                                    ? "bg-blue-500 text-white hover:bg-blue-600"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                            }`}
                        >
                            Cập nhật
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Edit;
