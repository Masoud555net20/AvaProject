
import React from 'react';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
    {
        quote: "خدمات تعمیر لپ‌تاپ فوق‌العاده سریع و حرفه‌ای بود. سیستم من مثل روز اول کار می‌کنه. واقعا ممنونم!",
        author: "علی رضایی",
        title: "دانشجو",
        image: "https://picsum.photos/100/100?random=20"
    },
    {
        quote: "برای کسب‌و‌کارم یک وب‌سایت فروشگاهی طراحی کردند که هم زیباست و هم کاربری آسانی داره. فروشم چند برابر شده.",
        author: "مریم احمدی",
        title: "مدیر فروشگاه آنلاین",
        image: "https://picsum.photos/100/100?random=21"
    },
    {
        quote: "مشاوره خرید سیستم‌شون عالی بود. با بودجه‌ای که داشتم بهترین قطعات رو بهم پیشنهاد دادن. بسیار راضی هستم.",
        author: "رضا محمدی",
        title: "گرافیست",
        image: "https://picsum.photos/100/100?random=22"
    },
    {
        quote: "پروژه دانشجویی برنامه‌نویسی رو به موقع و با کیفیت بالا تحویل دادن. نمره عالی گرفتم!",
        author: "سارا کریمی",
        title: "دانشجوی کارشناسی ارشد",
        image: "https://picsum.photos/100/100?random=23"
    },
    {
        quote: "تعمیرات سخت‌افزاری کامپیوترم رو با گارانتی انجام دادن. قیمت مناسب و خدمات عالی.",
        author: "حسن نوری",
        title: "کارمند",
        image: "https://picsum.photos/100/100?random=24"
    },
    {
        quote: "طراحی سایت شرکتی ما رو با تمرکز بر سئو و موبایل انجام دادن. ترافیک سایت افزایش پیدا کرد.",
        author: "فاطمه رضوی",
        title: "مدیر IT",
        image: "https://picsum.photos/100/100?random=25"
    },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-slate-800 p-8 rounded-lg shadow-lg flex flex-col items-center text-center">
        <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 rounded-full mb-6 border-4 border-cyan-500" />
        <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
        <div className="mt-auto">
            <h4 className="font-bold text-white text-lg">{testimonial.author}</h4>
            <p className="text-cyan-400 text-sm">{testimonial.title}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white">نظرات مشتریان</h2>
                    <p className="text-gray-400 mt-4">اعتماد شما، بزرگترین سرمایه ماست</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.author} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
