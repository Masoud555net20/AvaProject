import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
            <div className="absolute inset-0 bg-blue-950 opacity-80"></div>
            <div className="relative z-10 p-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
                    <span className="text-cyan-400">آوای نهاوند:</span> راهکارهای جامع کامپیوتری
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                    متخصص در خدمات سخت‌افزار، نرم‌افزار، طراحی وب و مشاوره فناوری برای کسب‌و‌کار و افراد
                </p>
                <div className="flex justify-center gap-4">
                    {/* Primary CTA button, now animated */}
                    <button onClick={() => navigate('/order')} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-cyan-500/30 cta-animate">
                        ثبت سفارش آنلاین
                    </button>
                    {/* Secondary button */}
                    <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300">
                        مشاهده خدمات
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;