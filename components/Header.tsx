import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', text: 'درباره ما' },
        { href: '#services', text: 'خدمات' },
        { href: '#portfolio', text: 'نمونه کارها' },
        { href: '#testimonials', text: 'نظرات مشتریان' },
        { href: '#contact', text: 'تماس با ما' },
    ];

    return (
        <header className="bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-cyan-500/10">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#home" className="flex items-center gap-2">
                   <img src="/Ava.png" alt="آوای نهاوند لوگو" className="h-12 md:h-20 w-auto logo-color-filter" />
                    <span className="text-[4px] font-bold text-white tracking-wider animate-cyan-glow-text">کنار هم یاد می‌گیریم، می‌سازیم و پیشرفت می‌کنیم</span>
                </a>
                <nav className="hidden md:flex items-center space-x-reverse space-x-6">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">{link.text}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-800">
                    <nav className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">{link.text}</a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
