import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as studentService from "../service/studentService.js";
import * as Yup from "yup";
import {toast} from "react-toastify";
import * as classesService from "../service/classService.js";

const Create = () => {
    const [student, setStudent] = useState({
        name:"",
        classId:"",
        dob:"",
        gender:"",
        email:"",
        admissionDate:"",
        status:""
    });
    const [classes, setClasses] = useState([]);
    useEffect(() =>{
        const getAll = async () => {
            const temp = await classesService.getAllType();
            setClasses(temp);
        }
        getAll();
    },[])
    const navigate = useNavigate();

    const validation= {
        name: Yup.string()
            .required("Tên không được để trống")
            .matches(
                /^[A-Za-zÀ-ỹ\s]+$/,
                "Tên không hợp lệ"),
        dob:Yup.string().required("khong duoc de trong"),
        email:Yup.string().email("khong hop le").required("khong duoc de trong"),
        admissionDate:Yup.string().required("khong duoc de trong"),
        status:Yup.string().required("khong duoc de trong")
    };

    const handleSubmit = async (value) => {
        await studentService.add(value);
        toast.success("Thêm mới thành công");
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Thêm mới
            </h2>
            <Formik
                initialValues={student}
                onSubmit={handleSubmit}
                enableReinitialize
                validationSchema={Yup.object(validation)}
            >
                {({ isValid }) => (
                    <Form className="space-y-5">
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
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Class</label>
                                <ErrorMessage
                                    name="classId"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                as="select"
                                name="classId"
                                className="w-full border px-3 py-2 rounded mt-1"
                            >
                                {classes.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.name}
                                    </option>
                                ))}
                            </Field>
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Ngay sinh</label>
                                <ErrorMessage
                                    name="dob"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="dob"
                                type="date"
                                className="w-full border px-3 py-2 rounded mt-1"
                            />
                        </div>
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Giới tính</label>
                                <ErrorMessage
                                    name="gender"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="gender"
                                as="select"
                                className="w-full border px-3 py-2 rounded mt-1"
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </Field>
                        </div>
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
                        <div>
                            <div className="flex justify-between items-center">
                                <label className="font-medium">Ngày nhập học</label>
                                <ErrorMessage
                                    name="admissionDate"
                                    component="div"
                                    className="text-red-500 text-sm"
                                />
                            </div>
                            <Field
                                name="admissionDate"
                                type="date"
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

export default Create;
