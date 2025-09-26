import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { servicesList, UploadIcon } from '@/components/data';
import { CONTACT_INFO, SOCIAL_MEDIA_URLS } from '@/constants';

const initialFormData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    description: '',
    urgency: 'normal',
    address: '',
    file: null as File | null,
    contactMethod: 'phone',
    captcha: '',
};

const OrderPage: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialFormData);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });

    const generateCaptcha = () => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10) + 1,
            num2: Math.floor(Math.random() * 10) + 1,
        });
    };

    useEffect(() => {
        generateCaptcha();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData({ ...formData, file: e.target.files[0] });
        }
    };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (parseInt(formData.captcha, 10) !== captcha.num1 + captcha.num2) {
        alert('کد امنیتی وارد شده صحیح نیست. لطفاً دوباره تلاش کنید.');
        generateCaptcha();
        setFormData({ ...formData, captcha: '' });
        return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('service', formData.service);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('urgency', formData.urgency);
    formDataToSend.append('address', formData.address);
    formDataToSend.append('contactMethod', formData.contactMethod);
    if (formData.file) {
        formDataToSend.append('file', formData.file);
    }

    try {
        const response = await fetch('/api/send-order', {
            method: 'POST',
            body: formDataToSend
        });
        const data = await response.json();

        if (data.success) {
            setIsSubmitted(true);
            setFormData(initialFormData);
            generateCaptcha();
            
            setTimeout(() => {
                setIsSubmitted(false);
                navigate('/');
            }, 5000);
        } else {
            alert('خطا در ارسال سفارش. لطفاً دوباره تلاش کنید.');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('خطا در ارتباط با سرور. لطفاً دوباره تلاش کنید.');
    }
};

    const inputClass = "w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300";
    const selectClass = "w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300";
    const textareaClass = "w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 resize-none";
    const fileLabelClass = "w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-700";
    const captchaInputClass = "w-full md:w-32 bg-gray-900 border border-gray-700 rounded-lg py-2 px-3 text-gray-200 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300 text-center";
    const buttonClass = "flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30";
    const cancelButtonClass = "flex-1 bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105";

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-gray-200">
            {/* Header */}
            <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <button 
                        onClick={() => navigate('/')} 
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                        <img src="./Ava.png?v=2" alt="آوای نهاوند لوگو" className="h-12 w-auto logo-color-filter" />
                        <span className="text-xl font-bold text-white tracking-wider">آوای نهاوند</span>
                    </button>
                    <button 
                        onClick={() => navigate('/')}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                        بازگشت به صفحه اصلی
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg leading-tight">
                            <span className="text-cyan-500 font-black">ثبت سفارش آنلاین</span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            برای دریافت مشاوره یا ثبت سفارش، فرم زیر را تکمیل کنید. کارشناسان ما به زودی با شما تماس خواهند گرفت.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {isSubmitted ? (
                            <div className="bg-green-500/20 border border-green-500/30 text-green-300 p-8 rounded-xl text-center">
                                <div className="text-5xl mb-4">✅</div>
                                <h2 className="text-2xl font-bold mb-4">سفارش شما با موفقیت ثبت شد!</h2>
                                <p className="text-base mb-4">
                                    کارشناسان ما به زودی از طریق روش ارتباطی انتخابی شما، با شما تماس خواهند گرفت.
                                </p>
                                <p className="text-sm text-gray-400">
                                    در حال بازگشت به صفحه اصلی...
                                </p>
                            </div>
                        ) : (
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl shadow-blue-500/10 border border-slate-700 p-10">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                                                نام و نام خانوادگی <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                id="name" 
                                                required 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                className={inputClass}
                                                placeholder="نام و نام خانوادگی"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-3">
                                                شماره تماس <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="tel" 
                                                name="phone" 
                                                id="phone" 
                                                required 
                                                value={formData.phone} 
                                                onChange={handleChange} 
                                                className={inputClass}
                                                placeholder="09123456789"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                                            ایمیل (اختیاری)
                                        </label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            id="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            className={inputClass}
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-3">
                                            نوع خدمت مورد نیاز <span className="text-red-500">*</span>
                                        </label>
                                        <select 
                                            name="service" 
                                            id="service" 
                                            required 
                                            value={formData.service} 
                                            onChange={handleChange} 
                                            className={selectClass}
                                        >
                                            <option value="">انتخاب کنید...</option>
                                            {servicesList.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                                            <option value="other">سایر خدمات</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-3">
                                            توضیحات کامل درباره نیاز یا سفارش
                                        </label>
                                        <textarea 
                                            name="description" 
                                            id="description" 
                                            rows={5} 
                                            value={formData.description} 
                                            onChange={handleChange} 
                                            className={textareaClass}
                                            placeholder="توضیحات کامل درباره نیاز یا سفارش خود را اینجا بنویسید..."
                                        ></textarea>
                                    </div>

                                    <div>
                                        <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-3">
                                            آدرس دقیق (برای خدمات حضوری یا ارسال)
                                        </label>
                                        <input 
                                            type="text" 
                                            name="address" 
                                            id="address" 
                                            value={formData.address} 
                                            onChange={handleChange} 
                                            className={inputClass}
                                            placeholder="آدرس کامل خود را وارد کنید"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-3">زمان مورد نظر</label>
                                            <div className="flex gap-4 bg-slate-700 border border-slate-600 rounded-lg p-4">
                                                <label className="flex items-center gap-2 text-white cursor-pointer">
                                                    <input 
                                                        type="radio" 
                                                        name="urgency" 
                                                        value="normal" 
                                                        checked={formData.urgency === 'normal'} 
                                                        onChange={handleChange} 
                                                        className="form-radio bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                                                    />
                                                    عادی
                                                </label>
                                                <label className="flex items-center gap-2 text-white cursor-pointer">
                                                    <input 
                                                        type="radio" 
                                                        name="urgency" 
                                                        value="urgent" 
                                                        checked={formData.urgency === 'urgent'} 
                                                        onChange={handleChange} 
                                                        className="form-radio bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                                                    />
                                                    فوری
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="contactMethod" className="block text-sm font-medium text-gray-300 mb-3">
                                                روش تماس ترجیحی
                                            </label>
                                            <select 
                                                name="contactMethod" 
                                                id="contactMethod" 
                                                value={formData.contactMethod} 
                                                onChange={handleChange} 
                                                className={selectClass}
                                            >
                                                <option value="phone">تلفن</option>
                                                <option value="sms">پیامک</option>
                                                <option value="whatsapp">واتساپ</option>
                                                <option value="telegram">تلگرام</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">
                                            بارگذاری فایل (اختیاری)
                                        </label>
                                        <label 
                                            htmlFor="file" 
                                            className={fileLabelClass}
                                        >
                                            <UploadIcon className="w-5 h-5" />
                                            <span>{formData.file ? formData.file.name : "یک فایل را انتخاب کنید..."}</span>
                                        </label>
                                        <input 
                                            type="file" 
                                            name="file" 
                                            id="file" 
                                            onChange={handleFileChange} 
                                            className="hidden"
                                        />
                                    </div>

                                    <div className="bg-slate-700/50 p-5 rounded-lg flex flex-col md:flex-row items-center justify-between gap-4">
                                        <label htmlFor="captcha" className="block text-sm font-medium text-gray-300">
                                            کد امنیتی: حاصل {captcha.num1} + {captcha.num2} چند می‌شود؟ <span className="text-red-500">*</span>
                                        </label>
                                        <input 
                                            type="number" 
                                            name="captcha" 
                                            id="captcha" 
                                            required 
                                            value={formData.captcha} 
                                            onChange={handleChange} 
                                            className={captchaInputClass}
                                        />
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-6 pt-4">
                                        <button 
                                            type="submit" 
                                            className={buttonClass}
                                        >
                                            ثبت سفارش
                                        </button>
                                        <button 
                                            type="button" 
                                            onClick={() => navigate('/')}
                                            className={cancelButtonClass}
                                        >
                                            انصراف
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>

                    {/* Contact Info Section */}
                    <div className="max-w-lg mx-auto mt-6">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-2xl shadow-cyan-500/10 border border-slate-700 p-4 transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/20 hover:border-cyan-500/50">
                            <h3 className="text-xl font-bold text-white mb-4 text-center animate-pulse">
                                اطلاعات تماس
                            </h3>
                            <div className="space-y-3">
                                {/* Phone */}
                                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                                    <div className="text-right">
                                        <div className="text-cyan-400 text-xs font-medium mb-1">تلفن ({CONTACT_INFO.phoneOwner}):</div>
                                        <div className="text-white text-sm">{CONTACT_INFO.phone}</div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Website */}
                                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                                    <div className="text-right">
                                        <div className="text-cyan-400 text-xs font-medium mb-1">وب‌سایت:</div>
                                        <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-cyan-400 transition-colors">
                                            avayenahavand.ir
                                        </a>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Telegram */}
                                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                                    <div className="text-right">
                                        <div className="text-cyan-400 text-xs font-medium mb-1">تلگرام:</div>
                                        <a href={SOCIAL_MEDIA_URLS.telegram} target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-cyan-400 transition-colors">
                                            @AVAYE_NAHAVAND
                                        </a>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                                        </svg>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                                    <div className="text-right">
                                        <div className="text-cyan-400 text-xs font-medium mb-1">ایمیل:</div>
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-white text-sm hover:text-cyan-400 transition-colors">
                                            {CONTACT_INFO.email}
                                        </a>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
                                    <div className="text-right flex-1">
                                        <div className="text-cyan-400 text-xs font-medium mb-1">آدرس:</div>
                                        <div className="text-white text-sm leading-relaxed">{CONTACT_INFO.address}</div>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <svg className="w-6 h-6 text-cyan-400 transition-transform duration-300 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Map Section */}
                            <div className="mt-4">
                                <h4 className="text-cyan-400 text-sm font-semibold mb-2 text-center animate-pulse">موقعیت مکانی</h4>
                                <div className="rounded-lg overflow-hidden shadow-lg border border-slate-600 transform transition-all duration-300 hover:scale-105">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3297.508959151826!2d48.37682531522082!3d34.19504508055028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fee471df42f1d97%3A0x6b24de81de98e3b!2sNahavand%2C%20Hamedan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1628882000000"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="موقعیت مکانی آوای نهاوند"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default OrderPage;
