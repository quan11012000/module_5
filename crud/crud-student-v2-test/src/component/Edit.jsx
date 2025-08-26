import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as studentService from "../service/studentService.js";
import * as Yup from "yup";
import {toast} from "react-toastify";
import * as classService from "../service/classService.js";

const Edit = () => {
    const [type, setType] = useState([]);
    useEffect(() =>{
        const getAllType = async () => {
            const temp = await classService.getAllType();
            setType(temp);
        }
        getAllType();
    },[])

    const [student, setStudent] = useState({
        name:"",
        classId:"",
        dob:"",
        gender:"",
        email:"",
        admissionDate:"",
        status:"đang học"
    });
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fetch = async () => {
            const data = await studentService.getById(id);
            setStudent(data);
        };
        fetch();
    },[id])
    const validation = {
        name: Yup.string()
            .required("Tên không được để trống")
            .matches(
                /^[A-Za-zÀ-ỹ\s]+$/,
                "Tên không hợp lệ"),
        classId:Yup.number()
            .required("Tên không được để trống"),
        dob:Yup.string().required("khong duoc de trong"),
        gender:Yup.string().required("khong duoc de trong"),
        email:Yup.string().email("khong hop le").required("khong duoc de trong"),
        admissionDate:Yup.string().required("khong duoc de trong")
    };

    const handleSubmit = async (value) => {
        await studentService.update(id,value);
        toast.success("Cập nhật thành công")
        navigate("/");
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Chỉnh sửa
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
                                {type.map((s) => (
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
                            Cập nhật
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Edit;
