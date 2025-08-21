import { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

function FormLH() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const validationform = {
        name: Yup.string().required("Name is required"),
        email: Yup.string()
            .required("Email is required")
            .matches(/^[A-Za-z0-9]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/, "Invalid email format"),
        phone: Yup.string().required("Phone is required"),
        message: Yup.string().required("Message is required"),
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Contact Form
                </h1>

                <Formik
                    initialValues={form}
                    validationSchema={Yup.object(validationform)}
                    onSubmit={(values) => {
                        console.log("Form data:", values);
                        alert("Form submitted!");
                    }}
                >
                    {({ isValid, isSubmitting }) => (
                        <Form className="space-y-4">
                            {/* Name */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="name"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Email */}
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

                            {/* Phone */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                                        Phone
                                    </label>
                                    <ErrorMessage
                                        name="phone"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    name="phone"
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                        Message
                                    </label>
                                    <ErrorMessage
                                        name="message"
                                        component="div"
                                        className="text-red-500 text-sm"
                                    />
                                </div>
                                <Field
                                    as="textarea"
                                    name="message"
                                    rows="3"
                                    className="mt-1 block w-full border border-gray-300 px-3 py-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                />
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
    );
}

export default FormLH;
