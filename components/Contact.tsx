
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';
import { 
    PhoneIcon,
    WebsiteIcon,
    EmailIcon,
    AddressIcon
} from './data';

const Contact: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="contact" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">تماس با ما</h2>
                    <p className="text-gray-400 mt-4">برای دریافت مشاوره یا ثبت سفارش، با ما در تماس باشید.</p>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* CONTACT INFO */}
                        <div className="bg-slate-700/50 p-8 rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700">
                            <h3 className="text-2xl font-semibold text-white mb-6">اطلاعات تماس</h3>
                            <ul className="space-y-5 text-gray-300">
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-600/50 transition-colors duration-300">
                                    <PhoneIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">تلفن (سعید بتویی):</span>
                                        <span className="block tracking-wider" dir="ltr">{CONTACT_INFO.phone}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-600/50 transition-colors duration-300">
                                    <WebsiteIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">وب‌سایت:</span>
                                        <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition-colors">{CONTACT_INFO.website}</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-600/50 transition-colors duration-300">
                                    <EmailIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">ایمیل:</span>
                                        <span className="block">{CONTACT_INFO.email}</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-600/50 transition-colors duration-300">
                                    <AddressIcon className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-white">آدرس:</span>
                                        <span className="block">{CONTACT_INFO.address}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        
                        {/* ORDER BUTTON AND MAP */}
                        <div className="space-y-6">
                            <div className="bg-slate-700/50 p-8 rounded-2xl shadow-2xl shadow-cyan-500/10 border border-slate-700 text-center">
                                <h3 className="text-2xl font-semibold text-white mb-4">ثبت سفارش آنلاین</h3>
                                <p className="text-gray-300 mb-6">برای ثبت سفارش خود، روی دکمه زیر کلیک کنید و فرم سفارش را تکمیل کنید.</p>
                                <button 
                                    onClick={() => navigate('/order')}
                                    className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                                >
                                    ثبت سفارش آنلاین
                                </button>
                            </div>
                            
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52945.72898926956!2d48.34789886301382!3d34.19504501758652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fee471df42f1d97%3A0x6b24de81de98e3b!2sNahavand%2C%20Hamadan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1685000000000!5m2!1sen!2s"
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
        </section>
    );
};

export default Contact;
