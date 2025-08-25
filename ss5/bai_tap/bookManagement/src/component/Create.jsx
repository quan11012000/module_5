import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as studentService from "../service/studentService.js";
import * as Yup from "yup";

const StudentCreate = () => {
    const [student, setStudent] = useState({
        name: "",
        phone: "",
        email: "",
        img: ""
    });

    const navigate = useNavigate();

    const validationStudent = {
        name: Yup.string()
            .required("Tên không được để trống")
            .matches(
                /^[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯÝỲỴỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưýỳỵỷỹ]+(?:\s[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠƯÝỲỴỶỸ][a-zàáâãèéêìíòóôõùúăđĩũơưýỳỵỷỹ]+)*$/,
                "Tên không hợp lệ"
            ),
        phone: Yup.string()
            .required("Số điện thoại không được để trống")
            .matches(/^(?:\+84|0)(3|5|7|8|9)[0-9]{8}$/, "Số điện thoại không hợp lệ"),
        email: Yup.string()
            .required("Email không được để trống")
            .matches(
                /^[\w.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                "Email không hợp lệ"
            ),
        img: Yup.string().required("Ảnh không được để trống")
    };

    const handleSubmit = async (value) => {
        await studentService.addStudent(value);
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Thêm mới học sinh
            </h2>
            <Formik
                initialValues={student}
                onSubmit={handleSubmit}
                enableReinitialize
                validationSchema={Yup.object(validationStudent)}
            >
                {({ isValid }) => (
                    <Form className="space-y-5">
                        {/* Name */}
                        {/* Name */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Name</label>
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="name"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Số điện thoại</label>
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="phone"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Email</label>
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="email"
                                type="text"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>

                        {/* Img */}
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="block font-semibold mb-1">Ảnh (URL)</label>
                                <ErrorMessage
                                    name="img"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <Field
                                name="img"
                                type="text"
                                placeholder="Dán link ảnh"
                                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
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

export default StudentCreate;
