import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import LoadingSpinner from "./LoadingSpinner";

const RegistrationForm = () => {
    const { language } = useLanguage();
    const t = translations[language];

    // Form state
    const [formData, setFormData] = useState({
        title: "",
        fullName: "",
        phone: "",
        email: "",
        organization: "",
        position: "",
        department: "",
        website: "",
        fieldOfActivity: "",
        consent: false
    });

    // Loading and message states
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.title.trim()) {
            newErrors.title = language === "vi" ? "Danh xưng không được để trống" : "Title is required";
        }
        if (!formData.fullName.trim()) {
            newErrors.fullName = language === "vi" ? "Họ và tên không được để trống" : "Full name is required";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = language === "vi" ? "Số điện thoại không được để trống" : "Phone number is required";
        }
        if (!formData.email.trim()) {
            newErrors.email = language === "vi" ? "Email không được để trống" : "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = language === "vi" ? "Email không hợp lệ" : "Invalid email format";
        }
        if (!formData.organization.trim()) {
            newErrors.organization = language === "vi" ? "Tên tổ chức không được để trống" : "Organization is required";
        }
        if (!formData.position.trim()) {
            newErrors.position = language === "vi" ? "Chức vụ không được để trống" : "Position is required";
        }
        if (!formData.department.trim()) {
            newErrors.department = language === "vi" ? "Phòng ban không được để trống" : "Department is required";
        }
        if (!formData.fieldOfActivity.trim()) {
            newErrors.fieldOfActivity = language === "vi" ? "Lĩnh vực hoạt động không được để trống" : "Field of activity is required";
        }
        if (!formData.consent) {
            newErrors.consent = language === "vi" ? "Vui lòng đồng ý với điều khoản" : "Please agree to the terms";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage({ type: "", text: "" });

        // Validate form
        if (!validateForm()) {
            setMessage({ 
                type: "error", 
                text: language === "vi" 
                    ? "Vui lòng điền đầy đủ thông tin bắt buộc" 
                    : "Please fill in all required fields" 
            });
            return;
        }

        setIsLoading(true);

        try {
            const apiUrl = import.meta.env.VITE_API_URL;
            
            if (!apiUrl) {
                throw new Error("API URL is not configured");
            }

            // Prepare request data matching backend DTO
            const requestData = {
                title: formData.title,
                fullName: formData.fullName,
                phone: formData.phone,
                email: formData.email,
                organization: formData.organization,
                position: formData.position,
                department: formData.department,
                website: formData.website || "",
                fieldOfActivity: formData.fieldOfActivity
            };

            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData)
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(
                    errorData?.message || 
                    `Registration failed: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();

            // Success
            setMessage({ 
                type: "success", 
                text: language === "vi" 
                    ? "Đăng ký thành công! Email xác nhận đã được gửi đến hộp thư của bạn." 
                    : "Registration successful! A confirmation email has been sent to your inbox." 
            });

            // Reset form
            setFormData({
                title: "",
                fullName: "",
                phone: "",
                email: "",
                organization: "",
                position: "",
                department: "",
                website: "",
                fieldOfActivity: "",
                consent: false
            });

            // Scroll to top to show success message
            window.scrollTo({ top: 0, behavior: "smooth" });

        } catch (error) {
            console.error("Registration error:", error);
            setMessage({ 
                type: "error", 
                text: language === "vi" 
                    ? `Đăng ký thất bại: ${error.message}. Vui lòng thử lại sau.` 
                    : `Registration failed: ${error.message}. Please try again later.` 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Loading Spinner Overlay */}
            {isLoading && <LoadingSpinner />}
            
            <section className="w-full min-h-screen bg-gradient-to-b from-black via-red-950 to-black py-12 px-4">
                <div className="max-w-4xl mx-auto bg-gray-900 border border-red-700 rounded-xl shadow-2xl p-6 md:p-10">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                    {t.registration.title}
                </h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    {t.registration.subtitle}
                </p>

                {/* Success/Error Message */}
                {message.text && (
                    <div className={`mb-6 p-4 rounded-lg ${
                        message.type === "success" 
                            ? "bg-green-900/50 border border-green-600 text-green-200" 
                            : "bg-red-900/50 border border-red-600 text-red-200"
                    }`}>
                        <p className="text-sm text-center">{message.text}</p>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Prefix */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.prefix} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder={t.registration.form.prefixPlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.title ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.title && (
                            <p className="text-red-400 text-xs mt-1">{errors.title}</p>
                        )}
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.fullName} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder={t.registration.form.fullNamePlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.fullName ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.fullName && (
                            <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                        )}
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.mobile} {t.registration.form.required}
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t.registration.form.mobilePlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.phone ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.phone && (
                            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.email} {t.registration.form.required}
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.registration.form.emailPlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.email ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.email && (
                            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                    </div>

                    {/* Organization */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.organization} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            name="organization"
                            value={formData.organization}
                            onChange={handleChange}
                            placeholder={t.registration.form.organizationPlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.organization ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.organization && (
                            <p className="text-red-400 text-xs mt-1">{errors.organization}</p>
                        )}
                    </div>

                    {/* Job Title */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.jobTitle} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            placeholder={t.registration.form.jobTitlePlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.position ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.position && (
                            <p className="text-red-400 text-xs mt-1">{errors.position}</p>
                        )}
                    </div>

                    {/* Department */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.department} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            name="department"
                            value={formData.department}
                            onChange={handleChange}
                            placeholder={t.registration.form.departmentPlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.department ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.department && (
                            <p className="text-red-400 text-xs mt-1">{errors.department}</p>
                        )}
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.website}
                        </label>
                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            placeholder={t.registration.form.websitePlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Industry */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.industry} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            name="fieldOfActivity"
                            value={formData.fieldOfActivity}
                            onChange={handleChange}
                            placeholder={t.registration.form.industryPlaceholder}
                            className={`w-full p-2 rounded-lg bg-black border ${
                                errors.fieldOfActivity ? "border-red-500" : "border-red-600"
                            } text-white focus:ring-2 focus:ring-red-500`}
                        />
                        {errors.fieldOfActivity && (
                            <p className="text-red-400 text-xs mt-1">{errors.fieldOfActivity}</p>
                        )}
                    </div>

                    {/* Checkbox */}
                    <div className="md:col-span-2 flex items-start gap-2 mt-2">
                        <input 
                            type="checkbox" 
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="mt-1 accent-red-600" 
                        />
                        <p className="text-gray-300 text-sm">
                            {t.registration.form.consent}
                        </p>
                    </div>
                    {errors.consent && (
                        <p className="md:col-span-2 text-red-400 text-xs -mt-4">{errors.consent}</p>
                    )}

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/50 transition-all ${
                                isLoading 
                                    ? "opacity-50 cursor-not-allowed" 
                                    : "hover:scale-105 animate-glow"
                            }`}
                        >
                            {isLoading 
                                ? (language === "vi" ? "Đang gửi..." : "Submitting...") 
                                : t.registration.form.submit
                            }
                        </button>
                    </div>
                </form>
            </div>
            </section>
        </>
    );
};

export default RegistrationForm;
