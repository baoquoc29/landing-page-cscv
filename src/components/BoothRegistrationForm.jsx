import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LoadingSpinner from './LoadingSpinner';

const BoothRegistrationForm = () => {
    const { language } = useLanguage();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
    const [logoPreview, setLogoPreview] = useState(null);
    const [formData, setFormData] = useState({
        // 1. Thông tin đơn vị
        organizationName: '',
        website: '',
        
        // 2. Thông tin người đại diện
        representativeName: '',
        position: '',
        phone: '',
        email: '',
        
        // 3. Nội dung tham gia
        boothTheme: '',
        activities: {
            training: false,
            exhibition: false,
            games: false,
            materials: false,
            other: false,
            otherDetail: ''
        },
        participantCount: '',
        supportNeeds: '',
        
        // 4. Tài liệu
        logoFile: null,
        
        // 5. Xác nhận
        confirmAccuracy: false,
        confirmMediaUsage: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (name.startsWith('activities.')) {
            const activityName = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                activities: {
                    ...prev.activities,
                    [activityName]: type === 'checkbox' ? checked : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: type === 'checkbox' ? checked : value
            }));
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const file = files[0];
            const maxSize = 5 * 1024 * 1024; // 5MB in bytes
            
            // Kiểm tra kích thước file
            if (file.size > maxSize) {
                setSubmitStatus({
                    type: 'error',
                    message: language === 'VN'
                        ? `Kích thước file logo vượt quá giới hạn cho phép (5MB). File của bạn: ${(file.size / (1024 * 1024)).toFixed(2)}MB`
                        : `Logo file size exceeds the limit (5MB). Your file: ${(file.size / (1024 * 1024)).toFixed(2)}MB`
                });
                
                // Reset input file
                e.target.value = '';
                
                // Scroll to top để hiển thị error message
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            
            setFormData(prev => ({ ...prev, [name]: file }));
            
            // Tạo preview URL cho logo
            if (name === 'logoFile') {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setLogoPreview(reader.result);
                };
                reader.readAsDataURL(file);
            }
            
            // Clear any previous error messages
            setSubmitStatus({ type: '', message: '' });
        }
    };

    const handleRemoveLogo = () => {
        setFormData(prev => ({ ...prev, logoFile: null }));
        setLogoPreview(null);
        // Reset input file
        const fileInput = document.querySelector('input[name="logoFile"]');
        if (fileInput) {
            fileInput.value = '';
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            // Chuẩn bị data để gửi
            const formDataToSend = new FormData();
            
            // Thêm các field thông tin cơ bản
            formDataToSend.append('organizationName', formData.organizationName);
            formDataToSend.append('website', formData.website);
            formDataToSend.append('representativeName', formData.representativeName);
            formDataToSend.append('representativePosition', formData.position);
            formDataToSend.append('representativePhone', formData.phone);
            formDataToSend.append('representativeEmail', formData.email);
            formDataToSend.append('boothTopic', formData.boothTheme);
            formDataToSend.append('participantCount', formData.participantCount);
            formDataToSend.append('supportNeeds', formData.supportNeeds || '');
            
            // Chuẩn bị mảng activities
            const selectedActivities = [];
            if (formData.activities.training) {
                selectedActivities.push(language === 'VN' 
                    ? 'Giới thiệu chương trình đào tạo / hoạt động chuyên môn / sản phẩm dịch vụ'
                    : 'Introduce training programs / professional activities / products and services');
            }
            if (formData.activities.exhibition) {
                selectedActivities.push(language === 'VN' 
                    ? 'Trưng bày dự án, sản phẩm' 
                    : 'Display projects and products');
            }
            if (formData.activities.games) {
                selectedActivities.push(language === 'VN' 
                    ? 'Trò chơi tương tác, mini game' 
                    : 'Interactive games, mini games');
            }
            if (formData.activities.materials) {
                selectedActivities.push(language === 'VN' 
                    ? 'Phát tài liệu / brochure / quà lưu niệm' 
                    : 'Distribute materials / brochures / souvenirs');
            }
            if (formData.activities.other && formData.activities.otherDetail) {
                selectedActivities.push(formData.activities.otherDetail);
            }
            
            // Thêm activities vào FormData
            selectedActivities.forEach(activity => {
                formDataToSend.append('boothActivities', activity);
            });
            
            // Thêm file logo nếu có
            if (formData.logoFile) {
                formDataToSend.append('logoFile', formData.logoFile);
            }

            // Gọi API
             const apiUrl = import.meta.env.VITE_API_URL + "/api/booth-registrations";

            const response = await fetch(`${apiUrl}`, {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: language === 'VN' 
                        ? 'Đăng ký gian hàng của bạn đã được gửi thành công! Ban tổ chức sẽ liên hệ lại sớm.'
                        : 'Your booth registration has been submitted successfully! The organizing committee will contact you soon.'
                });
                
                // Reset form
                setFormData({
                    organizationName: '',
                    website: '',
                    representativeName: '',
                    position: '',
                    phone: '',
                    email: '',
                    boothTheme: '',
                    activities: {
                        training: false,
                        exhibition: false,
                        games: false,
                        materials: false,
                        other: false,
                        otherDetail: ''
                    },
                    participantCount: '',
                    supportNeeds: '',
                    logoFile: null,
                    confirmAccuracy: false,
                    confirmMediaUsage: false
                });
                
                // Reset logo preview
                setLogoPreview(null);
                
                // Scroll to top để hiển thị success message
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                throw new Error(result.message || 'Failed to submit registration');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: language === 'VN'
                    ? `Có lỗi xảy ra khi gửi đăng ký: ${error.message}. Vui lòng thử lại sau.`
                    : `An error occurred while submitting the registration: ${error.message}. Please try again later.`
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Loading Spinner Overlay */}
            {isSubmitting && <LoadingSpinner />}
            
            <div className="min-h-screen bg-gradient-to-b from-black via-red-950 to-black py-12 px-4">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-heading font-bold text-red-500 mb-4 text-glow">
                        {language === 'VN' 
                            ? 'BIỂU MẪU ĐĂNG KÝ THAM GIA TRƯNG BÀY GIAN HÀNG'
                            : 'BOOTH EXHIBITION REGISTRATION FORM'}
                    </h1>
                    <p className="text-xl md:text-2xl text-red-400 mb-6">
                        {language === 'VN'
                            ? 'Tại sự kiện Chung kết Cuộc thi "Sinh viên An ninh mạng 2025"'
                            : 'At the Final Event of "Cybersecurity Student Competition 2025"'}
                    </p>
                    
                    <div className="bg-gradient-to-r from-red-900/40 via-red-800/50 to-red-900/40 border-2 border-red-500 rounded-xl p-6 text-left">
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed mb-4">
                            {language === 'VN' 
                                ? 'Ban Tổ chức Cuộc thi Sinh viên An ninh mạng 2025 trân trọng kính mời các Đơn vị, tổ chức, doanh nghiệp đăng ký tham gia trưng bày gian hàng (booth) tại khu vực triển lãm trong khuôn khổ Vòng Chung kết toàn quốc Cuộc thi Sinh viên An ninh mạng 2025.'
                                : 'The Organizing Committee of Cybersecurity Student Competition 2025 cordially invites organizations and enterprises to register for booth exhibitions at the Final Round of the competition.'}
                        </p>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                            {language === 'VN'
                                ? 'Mục tiêu nhằm giới thiệu các hoạt động đào tạo, nghiên cứu, câu lạc bộ, dự án sinh viên; đồng thời tạo không khí giao lưu sôi nổi và thúc đẩy kết nối giữa sinh viên, nhà trường và doanh nghiệp trong lĩnh vực an ninh mạng.'
                                : 'The goal is to introduce training activities, research, clubs, student projects; while creating a vibrant networking atmosphere and promoting connections between students, universities, and enterprises in the cybersecurity field.'}
                        </p>
                    </div>
                </div>

                {/* Status Message */}
                {submitStatus.message && (
                    <div className={`rounded-xl p-4 border-2 mb-6 ${
                        submitStatus.type === 'success' 
                            ? 'bg-green-900/40 border-green-500 text-green-200' 
                            : 'bg-red-900/40 border-red-500 text-red-200'
                    }`}>
                        <div className="flex items-center gap-3">
                            {submitStatus.type === 'success' ? (
                                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            <p className="font-semibold">{submitStatus.message}</p>
                        </div>
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* 1. Thông tin đơn vị */}
                    <div className="bg-gradient-to-r from-dark-900/90 via-dark-800/90 to-dark-900/90 border-2 border-red-500/50 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="text-red-500">1.</span>
                            {language === 'VN' ? 'Thông tin đơn vị đăng ký' : 'Organization Information'}
                        </h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Tên đơn vị' : 'Organization Name'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="organizationName"
                                    value={formData.organizationName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder={language === 'VN' ? 'Nhập tên đơn vị' : 'Enter organization name'}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Website hoặc fanpage chính thức' : 'Official Website or Fanpage'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="https://example.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. Thông tin người đại diện */}
                    <div className="bg-gradient-to-r from-dark-900/90 via-dark-800/90 to-dark-900/90 border-2 border-red-500/50 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="text-red-500">2.</span>
                            {language === 'VN' ? 'Thông tin người liên hệ' : 'Contact Information'}
                        </h2>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Họ và tên' : 'Full Name'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="representativeName"
                                    value={formData.representativeName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder={language === 'VN' ? 'Nhập họ và tên' : 'Enter full name'}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Chức vụ' : 'Position'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder={language === 'VN' ? 'Nhập chức vụ' : 'Enter position'}
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Số điện thoại' : 'Phone Number'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="0973719939"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Email công vụ' : 'Official Email'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="example@company.com"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 3. Nội dung tham gia */}
                    <div className="bg-gradient-to-r from-dark-900/90 via-dark-800/90 to-dark-900/90 border-2 border-red-500/50 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="text-red-500">3.</span>
                            {language === 'VN' ? 'Nội dung tham gia gian hàng' : 'Booth Content'}
                        </h2>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Chủ đề hoặc thông điệp chính của gian hàng' : 'Main Theme or Message'} <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="boothTheme"
                                    value={formData.boothTheme}
                                    onChange={handleInputChange}
                                    required
                                    rows="3"
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                                    placeholder={language === 'VN' ? 'Mô tả chủ đề hoặc thông điệp chính' : 'Describe main theme or message'}
                                ></textarea>
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-3">
                                    {language === 'VN' ? 'Các hoạt động dự kiến tại booth' : 'Expected Activities at Booth'} <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-3">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="activities.training"
                                            checked={formData.activities.training}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                        />
                                        <span className="text-gray-200 group-hover:text-white transition-colors">
                                            {language === 'VN' 
                                                ? 'Giới thiệu chương trình đào tạo / hoạt động chuyên môn / sản phẩm dịch vụ'
                                                : 'Introduce training programs / professional activities / products and services'}
                                        </span>
                                    </label>
                                    
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="activities.exhibition"
                                            checked={formData.activities.exhibition}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                        />
                                        <span className="text-gray-200 group-hover:text-white transition-colors">
                                            {language === 'VN' ? 'Trưng bày dự án, sản phẩm' : 'Display projects and products'}
                                        </span>
                                    </label>
                                    
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="activities.games"
                                            checked={formData.activities.games}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                        />
                                        <span className="text-gray-200 group-hover:text-white transition-colors">
                                            {language === 'VN' ? 'Trò chơi tương tác, mini game' : 'Interactive games, mini games'}
                                        </span>
                                    </label>
                                    
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            name="activities.materials"
                                            checked={formData.activities.materials}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                        />
                                        <span className="text-gray-200 group-hover:text-white transition-colors">
                                            {language === 'VN' ? 'Phát tài liệu / brochure / quà lưu niệm' : 'Distribute materials / brochures / souvenirs'}
                                        </span>
                                    </label>
                                    
                                    <div>
                                        <label className="flex items-start gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                name="activities.other"
                                                checked={formData.activities.other}
                                                onChange={handleInputChange}
                                                className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                            />
                                            <span className="text-gray-200 group-hover:text-white transition-colors">
                                                {language === 'VN' ? 'Khác (vui lòng ghi rõ)' : 'Other (please specify)'}
                                            </span>
                                        </label>
                                        
                                        {formData.activities.other && (
                                            <div className="mt-2 pl-8">
                                                <input
                                                    type="text"
                                                    name="activities.otherDetail"
                                                    value={formData.activities.otherDetail}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                                    placeholder={language === 'VN' ? 'Chi tiết hoạt động khác' : 'Other activity details'}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Số lượng người tham gia trực tiếp tại gian hàng' : 'Number of Direct Participants'} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="number"
                                    name="participantCount"
                                    value={formData.participantCount}
                                    onChange={handleInputChange}
                                    required
                                    min="1"
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
                                    placeholder="5"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Nhu cầu hỗ trợ thêm từ Ban Tổ chức (nếu có)' : 'Additional Support Needs (if any)'}
                                </label>
                                <textarea
                                    name="supportNeeds"
                                    value={formData.supportNeeds}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                                    placeholder={language === 'VN' ? 'Ví dụ: nguồn điện, bàn ghế, wifi, v.v.' : 'Example: power, tables, chairs, wifi, etc.'}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* 4. Tài liệu */}
                    <div className="bg-gradient-to-r from-dark-900/90 via-dark-800/90 to-dark-900/90 border-2 border-red-500/50 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-4 flex items-center gap-2">
                            <span className="text-red-500">4.</span>
                            {language === 'VN' ? 'Hình ảnh' : 'Images'}
                        </h2>
                        <p className="text-gray-300 text-sm mb-6">
                            {language === 'VN'
                                ? 'Để phục vụ công tác truyền thông và bố trí thiết kế khu vực gian hàng, Quý Đơn vị vui lòng đính kèm các tệp sau:'
                                : 'To support communication and booth area design, please attach the following files:'}
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-200 font-semibold mb-2">
                                    {language === 'VN' ? 'Logo chính thức của đơn vị' : 'Official Organization Logo'} <span className="text-red-500">*</span>
                                </label>
                                <p className="text-gray-400 text-sm mb-1">
                                    {language === 'VN' ? '(Định dạng .PNG hoặc .AI, nền trong suốt nếu có)' : '(Format: .PNG or .AI, transparent background if available)'}
                                </p>
                                <p className="text-yellow-400 text-xs mb-2 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                    {language === 'VN' ? 'Kích thước file tối đa: 5MB' : 'Maximum file size: 5MB'}
                                </p>
                                
                                {/* Preview Image */}
                                {logoPreview && (
                                    <div className="mb-4 relative inline-block">
                                        <div className="bg-dark-800 border-2 border-red-500/30 rounded-lg p-4">
                                            <img 
                                                src={logoPreview} 
                                                alt="Logo Preview" 
                                                className="max-w-xs max-h-48 object-contain"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleRemoveLogo}
                                            className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                                            title={language === 'VN' ? 'Xóa ảnh' : 'Remove image'}
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                                
                                {/* File Input */}
                                {!logoPreview && (
                                    <input
                                        type="file"
                                        name="logoFile"
                                        onChange={handleFileChange}
                                        accept=".png,.ai,image/png"
                                        required
                                        className="w-full px-4 py-3 bg-dark-700 border border-red-500/30 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-red-500 file:text-white hover:file:bg-red-600 cursor-pointer"
                                    />
                                )}
                                
                                {/* Change Button */}
                                {logoPreview && (
                                    <div className="mt-2">
                                        <label className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg cursor-pointer transition-colors">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            {language === 'VN' ? 'Thay đổi logo' : 'Change logo'}
                                            <input
                                                type="file"
                                                name="logoFile"
                                                onChange={handleFileChange}
                                                accept=".png,.ai,image/png"
                                                className="hidden"
                                            />
                                        </label>
                                    </div>
                                )}
                            </div>
                            
                            
                            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                                <p className="text-gray-300 text-sm flex items-start gap-2">
                                    <span className="text-red-400 text-lg">📎</span>
                                    <span>
                                        {language === 'VN'
                                            ? 'Các file có thể tải trực tiếp lên form hoặc gửi bổ sung qua email: '
                                            : 'Files can be uploaded directly or sent via email: '}
                                        <a href="mailto:bantochuc@cscv.vn" className="text-red-400 hover:text-red-300 underline">
                                            bantochuc@cscv.vn
                                        </a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Xác nhận */}
                    <div className="bg-gradient-to-r from-dark-900/90 via-dark-800/90 to-dark-900/90 border-2 border-red-500/50 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="text-red-500">5.</span>
                            {language === 'VN' ? 'Xác nhận và cam kết tham gia' : 'Confirmation and Commitment'}
                        </h2>
                        
                        <div className="space-y-4">
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="confirmAccuracy"
                                    checked={formData.confirmAccuracy}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                />
                                <span className="text-gray-200 group-hover:text-white transition-colors">
                                    {language === 'VN'
                                        ? 'Đơn vị đăng ký, cam kết cung cấp thông tin chính xác và phối hợp cùng Ban Tổ chức để triển khai hoạt động trưng bày đúng quy định.'
                                        : 'The organization commits to providing accurate information and cooperating with the Organizing Committee to implement exhibition activities according to regulations.'}
                                    <span className="text-red-500 ml-1">*</span>
                                </span>
                            </label>
                            
                            <label className="flex items-start gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    name="confirmMediaUsage"
                                    checked={formData.confirmMediaUsage}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 w-5 h-5 text-red-500 bg-dark-700 border-red-500/30 rounded focus:ring-red-500"
                                />
                                <span className="text-gray-200 group-hover:text-white transition-colors">
                                    {language === 'VN'
                                        ? 'Đơn vị đồng ý để Ban Tổ chức sử dụng hình ảnh, logo, thông tin gian hàng cho mục đích truyền thông của Cuộc thi Sinh viên An ninh mạng 2025.'
                                        : 'The organization agrees to allow the Organizing Committee to use images, logos, and booth information for communication purposes of the Cybersecurity Student Competition 2025.'}
                                    <span className="text-red-500 ml-1">*</span>
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* 6. Thời hạn đăng ký */}
                    <div className="bg-gradient-to-r from-red-900/40 via-red-800/50 to-red-900/40 border-2 border-red-500 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-4 flex items-center gap-2">
                            <span className="text-red-500">6.</span>
                            {language === 'VN' ? 'Thời hạn đăng ký' : 'Registration Deadline'}
                        </h2>
                        <ul className="space-y-2 text-gray-200">
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 font-bold">•</span>
                                <span>
                                    <strong className="text-white">{language === 'VN' ? 'Hạn chót gửi đăng ký:' : 'Registration Deadline:'}</strong> 
                                    <span className="text-red-400 font-bold ml-2">31/10/2025</span>
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-red-400 font-bold">•</span>
                                <span>
                                    {language === 'VN'
                                        ? 'Ban Tổ chức sẽ phản hồi xác nhận và gửi hướng dẫn kỹ thuật chi tiết sau khi nhận được đăng ký hợp lệ.'
                                        : 'The Organizing Committee will respond with confirmation and detailed technical instructions after receiving a valid registration.'}
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* 7. Thông tin liên hệ */}
                    <div className="bg-gradient-to-r from-dark-900/90 via-dark-800/90 to-dark-900/90 border-2 border-red-500/50 rounded-xl p-6 shadow-xl">
                        <h2 className="text-xl md:text-2xl font-heading font-bold text-red-400 mb-4 flex items-center gap-2">
                            <span className="text-red-500">7.</span>
                            {language === 'VN' ? 'Thông tin liên hệ Ban Tổ chức' : 'Organizing Committee Contact'}
                        </h2>
                        <div className="space-y-3 text-gray-200">
                            <p className="flex items-center gap-2">
                                <span className="text-red-400">👤</span>
                                <strong className="text-white">Ms Khánh Vân</strong>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-red-400">📞</span>
                                <strong className="text-white">{language === 'VN' ? 'Điện thoại:' : 'Phone:'}</strong>
                                <a href="tel:0973719939" className="text-red-400 hover:text-red-300">0973719939</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-red-400">📧</span>
                                <strong className="text-white">Email:</strong>
                                <a href="mailto:bantochuc@cscv.vn" className="text-red-400 hover:text-red-300 underline">bantochuc@cscv.vn</a>
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-red-400">🌐</span>
                                <strong className="text-white">Website:</strong>
                                <a href="http://cscv.vn" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 underline">
                                    http://cscv.vn
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`group relative px-12 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-heading font-bold text-lg rounded-xl overflow-hidden transition-all duration-300 min-w-[250px] ${
                                isSubmitting 
                                    ? 'opacity-70 cursor-not-allowed' 
                                    : 'hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50'
                            }`}
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        {language === 'VN' ? 'ĐANG GỬI...' : 'SUBMITTING...'}
                                    </>
                                ) : (
                                    <>
                                        {language === 'VN' ? 'GỬI ĐĂNG KÝ' : 'SUBMIT REGISTRATION'}
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </>
                                )}
                            </span>
                            {!isSubmitting && (
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
};

export default BoothRegistrationForm;
