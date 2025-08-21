import * as Yup from "yup";
import {Formik, Form, Field, ErrorMessage, useFormik} from "formik";
import { useState } from "react";
import FormLH from "./FormLH.jsx";
function FormKhaiBaoYTe() {
    const [form, setForm] = useState({
        hoTen: "",
        cccd:"",
        namSinh:"",
        gioiTinh:"",
        quocTich:"",
        cTy:"",
        baoHiem:"",
        boPhanLamViec:"",
        tinhThanh:"",
        quanHuyen:"",
        phuongXa:"",
        diaChi:"",
        dienThoai:"",
        email:"",
        xuatCanh:"",
        trieuChung:"",
        canBenh:""
    });
    const validateForm={
        hoTen: Yup.string().required(),
        cccd: Yup.string().required(),
        namSinh: Yup.date().required().min(1900),
        quocTich: Yup.string().required(),
        tinhThanh: Yup.string().required(),
        quanHuyen: Yup.string().required(),
        phuongXa: Yup.string().required(),
        diaChi: Yup.string().required(),
        dienThoai: Yup.string().required(),
        email: Yup.string()
            .required("Email is required")
            .matches(/^[A-Za-z0-9]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/, "email phai dung dinh dang"),
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Tờ khai báo y tế
                </h1>

                <Formik
                    initialValues={form}
                    validationSchema={Yup.object(validateForm)}
                    onSubmit={(values) => {
                        console.log("Form data:", values);
                        alert("Form submitted!");
                    }}
                >
                    {({ isValid, isSubmitting }) => (
                        <Form className="space-y-4">
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="hoTen" className="text-sm font-medium text-gray-700">
                                        Họ và tên
                                    </label>
                                    <ErrorMessage
                                        name="hoTen"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="hoTen"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="cccd" className="text-sm font-medium text-gray-700">
                                        cccd
                                    </label>
                                    <ErrorMessage
                                        name="cccd"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="cccd"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="namSinh" className="text-sm font-medium text-gray-700">
                                        Năm sinh
                                    </label>
                                    <ErrorMessage
                                        name="namSinh"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="namSinh"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="gioiTinh" className="text-sm font-medium text-gray-700">
                                        Giới tính
                                    </label>
                                    <ErrorMessage
                                        name="gioiTinh"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                <div className="mt-2 flex space-x-6">
                                    <label className="flex items-center space-x-2">
                                        <Field type="radio" name="gioiTinh" value="Nam" className="h-4 w-4 text-blue-600" />
                                        <span>Nam</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="radio" name="gioiTinh" value="Nữ" className="h-4 w-4 text-pink-600" />
                                        <span>Nữ</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="radio" name="gioiTinh" value="Khác" className="h-4 w-4 text-gray-600" />
                                        <span>Khác</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="quocTich" className="text-sm font-medium text-gray-700">
                                        Quốc tịch
                                    </label>
                                    <ErrorMessage
                                        name="quocTich"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="quocTich"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="cTy" className="text-sm font-medium text-gray-700">
                                        Công ty làm việc
                                    </label>
                                    <ErrorMessage
                                        name="cTy"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="cTy"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="boPhanLamViec" className="text-sm font-medium text-gray-700">
                                        Bộ phận làm việc
                                    </label>
                                    <ErrorMessage
                                        name="boPhanLamViec"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="boPhanLamViec"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label className="flex items-center space-x-2">Có thẻ bảo hiểm y tế</label>
                                <Field
                                type="checkbox"
                                name="baoHiem"
                                />
                            </div>
                            <h2> Địa chỉ liên lac tại Việt Nam</h2>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="tinhThanh" className="text-sm font-medium text-gray-700">
                                        Tỉnh thành
                                    </label>
                                    <ErrorMessage
                                        name="tinhThanh"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="tinhThanh"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="quanHuyen" className="text-sm font-medium text-gray-700">
                                        Quâ/Huyện
                                    </label>
                                    <ErrorMessage
                                        name="quanHuyen"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="quanHuyen"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="phuongXa" className="text-sm font-medium text-gray-700">
                                        Phường/Xã
                                    </label>
                                    <ErrorMessage
                                        name="phuongXa"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="phuongXa"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="diaChi" className="text-sm font-medium text-gray-700">
                                        Địa chỉ
                                    </label>
                                    <ErrorMessage
                                        name="diaChi"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="diaChi"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="dienThoai" className="text-sm font-medium text-gray-700">
                                        Điện thoại
                                    </label>
                                    <ErrorMessage
                                        name="dienThoai"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="dienThoai"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="email"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="xuatCanh" className="text-sm font-medium text-gray-700">
                                        Xuất cảnh
                                    </label>
                                    <ErrorMessage
                                        name="xuatCanh"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="xuatCanh"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="trieuChung" className="text-sm font-medium text-gray-700">
                                        Triệu chứng
                                    </label>
                                    <ErrorMessage
                                        name="trieuChung"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                <div className="mt-2 grid grid-cols-2 gap-3">
                                    <label className="flex items-center space-x-2">
                                        <Field type="checkbox" name="trieuChung" value="Sốt" className="h-4 w-4 text-blue-600" />
                                        <span>Sốt</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="checkbox" name="trieuChung" value="Ho" className="h-4 w-4 text-blue-600" />
                                        <span>Ho</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="checkbox" name="trieuChung" value="Khó thở" className="h-4 w-4 text-blue-600" />
                                        <span>Khó thở</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="checkbox" name="trieuChung" value="Viêm phổi" className="h-4 w-4 text-blue-600" />
                                        <span>Viêm phổi</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="checkbox" name="trieuChung" value="Đau họng" className="h-4 w-4 text-blue-600" />
                                        <span>Đau họng</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field type="checkbox" name="trieuChung" value="Mệt mỏi" className="h-4 w-4 text-blue-600" />
                                        <span>Mệt mỏi</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="canBenh" className="text-sm font-medium text-gray-700">
                                        Trong vòng 14 ngày qua, Anh/Chị có tiếp xúc với?
                                    </label>
                                    <ErrorMessage
                                        name="canBenh"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>

                                <div className="mt-2 flex flex-col space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <Field
                                            type="checkbox"
                                            name="canBenh"
                                            value="Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19"
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field
                                            type="checkbox"
                                            name="canBenh"
                                            value="Người từ nước có bệnh COVID-19"
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>Người từ nước có bệnh COVID-19</span>
                                    </label>

                                    <label className="flex items-center space-x-2">
                                        <Field
                                            type="checkbox"
                                            name="canBenh"
                                            value="Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)"
                                            className="h-4 w-4 text-blue-600"
                                        />
                                        <span>Người có biểu hiện (Sốt, ho, khó thở, viêm phổi)</span>
                                    </label>
                                </div>
                            </div>


                            {/* Submit */}
                            {isValid?
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Submit
                                    </button>
                                </div>
                                : <div>
                                    <button
                                        type="submit"
                                        className="hidden w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                                    >
                                        Submit
                                    </button>
                                </div>}

                        </Form>

                    )}
                </Formik>
            </div>
        </div>

    )



}
export default FormKhaiBaoYTe;