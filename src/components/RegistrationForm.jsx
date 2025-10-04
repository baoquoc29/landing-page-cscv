import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../translations/translations";

const RegistrationForm = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-black via-red-950 to-black py-12 px-4">
            <div className="max-w-4xl mx-auto bg-gray-900 border border-red-700 rounded-xl shadow-2xl p-6 md:p-10">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
                    {t.registration.title}
                </h2>
                <p className="text-center text-sm text-gray-400 mb-8">
                    {t.registration.subtitle}
                </p>

                {/* Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Prefix */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.prefix} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            placeholder={t.registration.form.prefixPlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.fullName} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            placeholder={t.registration.form.fullNamePlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Mobile */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.mobile} {t.registration.form.required}
                        </label>
                        <input
                            type="tel"
                            placeholder={t.registration.form.mobilePlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.email} {t.registration.form.required}
                        </label>
                        <input
                            type="email"
                            placeholder={t.registration.form.emailPlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Organization */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.organization} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            placeholder={t.registration.form.organizationPlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Job Title */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.jobTitle} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            placeholder={t.registration.form.jobTitlePlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Department */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.department} {t.registration.form.required}
                        </label>
                        <input
                            type="text"
                            placeholder={t.registration.form.departmentPlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block text-sm font-medium text-red-400 mb-1">
                            {t.registration.form.website} {t.registration.form.required}
                        </label>
                        <input
                            type="url"
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
                            placeholder={t.registration.form.industryPlaceholder}
                            className="w-full p-2 rounded-lg bg-black border border-red-600 text-white focus:ring-2 focus:ring-red-500"
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="md:col-span-2 flex items-start gap-2 mt-2">
                        <input type="checkbox" className="mt-1 accent-red-600" />
                        <p className="text-gray-300 text-sm">
                            {t.registration.form.consent}
                        </p>
                    </div>

                    {/* Submit */}
                    <div className="md:col-span-2 flex justify-center mt-6">
                        <button
                            type="submit"
                            className="px-6 py-3 bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white font-semibold rounded-xl shadow-lg shadow-red-600/50 hover:scale-105 transition-all animate-glow"
                        >
                            {t.registration.form.submit}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegistrationForm;
