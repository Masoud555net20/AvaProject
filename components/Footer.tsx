
import React from 'react';
import { SOCIAL_MEDIA_URLS, CONTACT_INFO } from '../constants';
import type { SocialLink } from '../types';


const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
);

const TelegramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 2L11 13l-2 9 9-2 9-9-17-7z"></path>
    </svg>
);

const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

const socialLinks: SocialLink[] = [
    { name: 'Instagram', url: SOCIAL_MEDIA_URLS.instagram, icon: InstagramIcon },
    { name: 'Telegram', url: SOCIAL_MEDIA_URLS.telegram, icon: TelegramIcon },
    { name: 'WhatsApp', url: SOCIAL_MEDIA_URLS.whatsapp, icon: WhatsAppIcon },
];

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-slate-950 text-gray-400">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
                    <div>
                        <div className="flex justify-center md:justify-start items-center gap-4 mb-4">
                            <img src="/Ava.png" alt="آوای نهاوند لوگو" className="h-۱۲ w-auto logo-color-filter" />
                            <span className="text-lg font-semibold text-white">آوای نهاوند</span>
                        </div>
                        <p className="text-sm">راهکارهای جامع کامپیوتری و فناوری اطلاعات. همراه شما در مسیر دیجیتالی شدن.</p>
                        <div className="flex justify-center md:justify-start mt-6 space-x-reverse space-x-4">
                            {socialLinks.map(link => (
                                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                                    <link.icon className="w-6 h-6" />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">لینک‌های سریع</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#about" className="hover:text-cyan-400">درباره ما</a></li>
                            <li><a href="#services" className="hover:text-cyan-400">خدمات</a></li>
                            <li><a href="#portfolio" className="hover:text-cyan-400">نمونه کارها</a></li>
                            <li><a href="#contact" className="hover:text-cyan-400">تماس با ما</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">اطلاعات تماس</h3>
                        <div className="space-y-2 text-sm">
                            <p>{CONTACT_INFO.address}</p>
                            <p dir="ltr">{CONTACT_INFO.phone}</p>
                            <p><a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">{CONTACT_INFO.website}</a></p>
                            <p>{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-4">
                <p className="text-center text-xs text-gray-500">
                    &copy; {currentYear} مرکز خدمات کامپیوتری آوای نهاوند. تمامی حقوق محفوظ است.
                </p>
            </div>
        </footer>
    );
};

export default Footer;