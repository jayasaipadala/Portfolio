import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
};

const initialFormErrors = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
};

const initialFormValid = {
    firstName: false,
    lastName: false,
    email: false,
    subject: false,
    message: false,
};

const lengthValidation = {
    firstName: {
        min: 3,
        max: 20,
    },
    lastName: {
        min: 3,
        max: 20,
    },
    subject: {
        min: 5,
        max: 50,
    },
    message: {
        min: 10,
        max: 500,
    },
}

const isValueEmpty = (value: string) => {
    return value === "";
}

const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const checkLength = (value: string, min: number, max: number) => {
    return value.length >= min && value.length <= max;
}

const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(' ')
}

const Contact = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [formSubmitStatus, setFormSubmitStatus] = useState<"success" | "error">("success");
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [formValid, setFormValid] = useState(initialFormValid);

    const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        switch (name) {
            case "firstName":
                handleFirstNameValidation(value);
                break;
            case "lastName":
                handleLastNameValidation(value);
                break;
            case "email":
                handleEmailValidation(value);
                break;
            case "subject":
                handleSubjectValidation(value);
                break;
            case "message":
                handleMessageValidation(value);
                break;
            default:
                break;
        }
    };

    const handleContactFormSubmit = async (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (Object.values(formValid).every(Boolean)) {
            setIsFormSubmitting(true);

            const res = await fetch("/api/contact", {
                body: JSON.stringify({
                    ...formData,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            if (!res.ok) {
                setFormSubmitStatus("error");
            } else {
                setFormSubmitStatus("success");
                setFormData(initialFormData);
            }

            setIsFormSubmitting(false);
            setIsFormSubmitted(true);
        }
    };

    const handleFirstNameValidation = (value: string) => {
        let isError = false;

        if (isValueEmpty(value)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                firstName: "First name is required",
            }));
        } else if (!checkLength(value, lengthValidation.firstName.min, lengthValidation.firstName.max)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                firstName: `First name must be between ${lengthValidation.firstName.min} and ${lengthValidation.firstName.max} characters long`,
            }));
        } else {
            setFormErrors((prev) => ({
                ...prev,
                firstName: "",
            }));
        }

        setFormValid((prev) => ({
            ...prev,
            firstName: !isError,
        }));
    };

    const handleLastNameValidation = (value: string) => {
        let isError = false;

        if (isValueEmpty(value)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                lastName: "Last name is required",
            }));
        } else if (!checkLength(value, lengthValidation.lastName.min, lengthValidation.lastName.max)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                lastName: `Last name must be between ${lengthValidation.lastName.min} and ${lengthValidation.lastName.max} characters long`,
            }));
        } else {
            setFormErrors((prev) => ({
                ...prev,
                lastName: "",
            }));
        }

        setFormValid((prev) => ({
            ...prev,
            lastName: !isError,
        }));
    };

    const handleEmailValidation = (value: string) => {
        let isError = false;

        if (isValueEmpty(value)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                email: "Email is required",
            }));
        } else if (!isEmailValid(value)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                email: "Email is not valid",
            }));
        } else {
            setFormErrors((prev) => ({
                ...prev,
                email: "",
            }));
        }

        setFormValid((prev) => ({
            ...prev,
            email: !isError,
        }));
    };

    const handleSubjectValidation = (value: string) => {
        let isError = false;

        if (isValueEmpty(value)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                subject: "Subject is required",
            }));
        } else if (!checkLength(value, lengthValidation.subject.min, lengthValidation.subject.max)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                subject: `Subject must be between ${lengthValidation.subject.min} and ${lengthValidation.subject.max} characters long`,
            }));
        } else {
            setFormErrors((prev) => ({
                ...prev,
                subject: "",
            }));
        }

        setFormValid((prev) => ({
            ...prev,
            subject: !isError,
        }));
    };

    const handleMessageValidation = (value: string) => {
        let isError = false;

        if (isValueEmpty(value)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                message: "Message is required",
            }));
        } else if (!checkLength(value, lengthValidation.message.min, lengthValidation.message.max)) {
            isError = true;
            setFormErrors((prev) => ({
                ...prev,
                message: `Message must be between ${lengthValidation.message.min} and ${lengthValidation.message.max} characters long`,
            }));
        } else {
            setFormErrors((prev) => ({
                ...prev,
                message: "",
            }));
        }

        setFormValid((prev) => ({
            ...prev,
            message: !isError,
        }));
    };

    return (
        <>
            <h3 className="uppercase tracking-[11px] text-center font-semibold text-gray-800 dark:text-gray-100 text-2xl pl-[11px] mb-9">
                Contact Me
            </h3>
            <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8">
                <form className="space-y-6" action="#">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className={classNames(
                                    !formValid.firstName && formErrors.firstName.length > 0
                                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
                                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-50",
                                    "text-sm rounded-lg block w-full p-2.5"
                                )}
                                placeholder="First Name"
                                required
                                value={formData.firstName}
                                onChange={handleContactFormChange}
                            />
                            {!formValid.firstName && formErrors.firstName.length > 0 && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.firstName}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className={classNames(
                                    !formValid.lastName && formErrors.lastName.length > 0
                                        ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
                                        : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-50",
                                    "text-sm rounded-lg block w-full p-2.5"
                                )}
                                placeholder="Last Name"
                                required
                                value={formData.lastName}
                                onChange={handleContactFormChange}
                            />
                            {!formValid.lastName && formErrors.lastName.length > 0 && (
                                <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.lastName}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className={classNames(
                                !formValid.email && formErrors.email.length > 0
                                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
                                    : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-50",
                                "text-sm rounded-lg block w-full p-2.5"
                            )}
                            placeholder="Email Address"
                            required
                            value={formData.email}
                            onChange={handleContactFormChange}
                        />
                        {!formValid.email && formErrors.email.length > 0 && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.email}</p>
                        )}
                    </div>
                    <div>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className={classNames(
                                !formValid.subject && formErrors.subject.length > 0
                                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
                                    : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-50",
                                "text-sm rounded-lg block w-full p-2.5"
                            )}
                            placeholder="Subject"
                            required
                            value={formData.subject}
                            onChange={handleContactFormChange}
                        />
                        {!formValid.subject && formErrors.subject.length > 0 && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.subject}</p>
                        )}
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className={classNames(
                                !formValid.message && formErrors.message.length > 0
                                    ? "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:bg-red-100 dark:border-red-400"
                                    : "bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:text-gray-50",
                                "text-sm rounded-lg block w-full p-2.5"
                            )}
                            placeholder="Please type your message..."
                            required
                            value={formData.message}
                            onChange={handleContactFormChange}
                        />
                        {!formValid.message && formErrors.message.length > 0 && (
                            <p className="mt-2 text-sm text-red-600 dark:text-red-500">{formErrors.message}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={classNames(
                            !formValid.firstName || !formValid.lastName || !formValid.email || !formValid.subject || !formValid.message
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300",
                            "text-white font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                        )}
                        disabled={!formValid.firstName || !formValid.lastName || !formValid.email || !formValid.subject || !formValid.message}
                        onClick={handleContactFormSubmit}
                    >
                        {isFormSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>

                {isFormSubmitted && !isFormSubmitting && (formSubmitStatus === "success" ? (
                    <p className="mt-4 text-sm text-green-600 dark:text-green-500">
                        Thank you for contacting me. I will get back to you as soon as possible.
                    </p>
                ) : (
                    <div className="mt-4 flex flex-row justify-center items-center mx-auto gap-2 text-sm text-red-600 dark:text-red-500">
                        <span>Oops! Something went wrong. Please try again or send an email.</span>
                        <a href="mailto:jaisaipadala@gmail.com" className="inline-block">
                            <IoMdMail className="h-6 w-6 text-white cursor-pointer hover:scale-125 hover:animate-pulse transition duration-100" />
                        </a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Contact;