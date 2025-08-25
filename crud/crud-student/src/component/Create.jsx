import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as bookService from "../service/bookService.js";
import * as Yup from "yup";
import {toast} from "react-toastify";

const BookCreate = () => {
    const [book, setBook] = useState({
        title:"",
        quantity:0
    });

    const navigate = useNavigate();

    const validationStudent = {
        title: Yup.string()
            .required("Tên không được để trống")
            .matches(
                /^[A-Za-zÀ-ỹ\s]+$/,
                "Tên không hợp lệ"
            ),
        quantity:Yup.number().integer("so nguyen").min(0,"phai lon hon 0")
    };

    const handleSubmit = async (value) => {
        await bookService.addBook(value);
        toast.success("Thêm mới thành công");
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Thêm mới sách
            </h2>
            <Formik
                initialValues={book}
                onSubmit={handleSubmit}
                enableReinitialize
                validationSchema={Yup.object(validationStudent)}
            >
                {({ isValid }) => (
                    <Form className="space-y-5">
                        {/* Title */}

                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Title</label>
                                <ErrorMessage
                                    name="title"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="title"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>

                        {/* quantity */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Số lượng</label>
                                <ErrorMessage
                                    name="quantity"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="quantity"
                                type="text"
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
                            Thêm mới
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default BookCreate;
