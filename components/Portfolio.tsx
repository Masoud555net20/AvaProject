
import React, { useState } from 'react';
import type { PortfolioItem } from '../types';

const portfolioItems: PortfolioItem[] = [
  { image: "https://picsum.photos/500/400?random=10", title: "وب‌سایت فروشگاهی مدرن", category: "طراحی وب" },
  { image: "https://picsum.photos/500/400?random=11", title: "پروژه تحلیل داده دانشجویی", category: "پروژه دانشجویی" },
  { image: "https://picsum.photos/500/400?random=12", title: "سیستم اسمبل شده گیمینگ", category: "سخت‌افزار" },
  { image: "https://picsum.photos/500/400?random=13", title: "وب‌سایت شرکتی", category: "طراحی وب" },
  { image: "https://picsum.photos/500/400?random=14", title: "کمپین تبلیغاتی اینستاگرام", category: "تولید محتوا" },
  { image: "https://picsum.photos/500/400?random=15", title: "نرم‌افزار مدیریت انبار", category: "برنامه‌نویسی" },
];

const Portfolio: React.FC = () => {
    // In a real app, this state would be used to filter items.
    const [filter, setFilter] = useState('همه');

    return (
        <section id="portfolio" className="py-20 bg-slate-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">نمونه کارها</h2>
                    <p className="text-gray-400 mt-4">نگاهی به برخی از پروژه‌های موفق ما</p>
                </div>
                {/* Filter buttons could be added here if needed */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                            <img src={item.image} alt={item.title} loading="lazy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <span className="text-sm text-cyan-400 font-semibold">{item.category}</span>
                                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
