import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const SERVICE_ID = "service_7c62rwa";
const TEMPLATE_ID = "template_1o4k47j";
const PUBLIC_KEY = "iRtuUK5yqKPzJtjTT";

const ContactSection = () => {
    const { language } = useLanguage();
    const t = translations[language];
    const [ref, isVisible, animationClass] = useScrollAnimation(0.2, "down");

    const formRef = useRef(null);
    const [submitting, setSubmitting] = useState(false);
    const [notice, setNotice] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!formRef.current) return;

        setSubmitting(true);
        setNotice(null);

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
            setNotice({ type: "success", message: "✅ Gửi thông tin thành công. Chúng tôi sẽ liên hệ sớm nhất!" });
            formRef.current.reset();
        } catch (err) {
            setNotice({ type: "error", message: "❌ Gửi thất bại. Vui lòng thử lại sau!" });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="w-full bg-gradient-to-b from-black via-red-950 to-black pt-24 md:pt-28 pb-16 px-6"
        >
            <div ref={ref} className={`max-w-3xl mx-auto transition-all duration-1000 ${animationClass}`}>
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-red-500 text-glow">
                    {t.contact.title}
                </h2>

                {/* Form 1 cột cân giữa */}
                <div className="bg-gray-900/40 p-6 md:p-8 rounded-xl shadow-lg border border-red-800">
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
                        <input type="text" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="user_name"
                                placeholder={t.contact.form.fullName}
                                className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                                required
                            />
                            <input
                                type="text"
                                name="user_position"
                                placeholder={t.contact.form.position}
                                className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                            />
                            <input
                                type="text"
                                name="user_org"
                                placeholder={t.contact.form.organization}
                                className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                            />
                            <input
                                type="tel"
                                name="user_phone"
                                placeholder={t.contact.form.phone}
                                className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                            />
                            <input
                                type="email"
                                name="user_email"
                                placeholder={t.contact.form.email}
                                className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 md:col-span-2 focus:outline-none focus:border-red-500 transition"
                                required
                            />
                        </div>

                        <textarea
                            rows="5"
                            name="message"
                            placeholder={t.contact.form.content}
                            className="w-full border border-red-800 bg-gray-900 text-white rounded-lg px-4 py-2 focus:outline-none focus:border-red-500 transition"
                            required
                        ></textarea>

                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`px-8 py-3 rounded-lg text-white shadow-lg transition-all duration-300
                                    ${submitting ? "bg-red-800 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 hover:scale-105"}`}
                            >
                                {submitting ? "Đang gửi..." : t.contact.form.submit}
                            </button>
                        </div>

                        {notice && (
                            <div
                                className={`mt-4 text-center text-sm ${
                                    notice.type === "success" ? "text-green-400" : "text-red-400"
                                }`}
                            >
                                {notice.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
