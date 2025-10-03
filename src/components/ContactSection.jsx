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
    const [notice, setNotice] = useState(null); // { type: 'success'|'error', message: string }

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
            className="w-full bg-gradient-to-b from-black via-red-950 to-black pt-24 md:pt-28 pb-12 px-4"
        >
            <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${animationClass}`}>
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-red-500 text-glow">
                    {t.contact.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left: info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">{t.contact.organizers}</h3>

                        <div className="space-y-6 text-gray-300">
                            <div>
                                <p className="font-bold text-red-400">Hiệp hội An ninh mạng Quốc Gia</p>
                                <p>38 Phan Đình Phùng, Quán Thánh, Ba Đình, Hà Nội</p>
                                <p>024 626 00 626</p>
                                <p>
                                    <a href="mailto:info@nca.org.vn" className="text-red-500 hover:text-red-400 hover:underline">
                                        info@nca.org.vn
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://www.nca.org.vn"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        www.nca.org.vn
                                    </a>
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-red-400">IEC Consulting</p>
                                <p>66 Trần Đại Nghĩa, Đồng Tâm, Hai Bà Trưng, Hà Nội</p>
                                <p>0344334880</p>
                                <p>
                                    <a
                                        href="mailto:info@iecconsulting.com.vn"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        info@iecconsulting.com.vn
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="https://iecconsulting.com.vn"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-red-500 hover:text-red-400 hover:underline"
                                    >
                                        iecconsulting.com.vn
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-red-500">{t.contact.sendInfo}</h3>

                        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                            {/* honeypot chống bot (ẩn) */}
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

                            <button
                                type="submit"
                                disabled={submitting}
                                className={`px-6 py-3 rounded-lg text-white shadow-lg transition-all duration-300
                  ${submitting ? "bg-red-800 cursor-not-allowed" : "bg-red-600 hover:bg-red-700 hover:scale-105"}`}
                            >
                                {submitting ? "Đang gửi..." : t.contact.form.submit}
                            </button>

                            {notice && (
                                <div
                                    className={`mt-3 text-sm ${
                                        notice.type === "success" ? "text-green-400" : "text-red-400"
                                    }`}
                                >
                                    {notice.message}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
