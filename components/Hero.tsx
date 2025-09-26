import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
    'https://plus.unsplash.com/premium_photo-1667121492625-c5355b5fbdbd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmFoYXZhbmQlMjBpcmFuJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1644342374363-955bdf67ffa4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFoYXZhbmQlMjBpcmFuJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1566053502955-6c64db01b20e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFoYXZhbmQlMjBpcmFuJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1723550578607-8f7ff733f8b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmFoYXZhbmQlMjBpcmFuJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2070&q=80',
    'https://plus.unsplash.com/premium_photo-1692455906498-bdb5c5439ec4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmFoYXZhbmQlMjBpcmFuJTIwbmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=2070&q=80',
];

const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative h-screen flex items-start justify-center text-center bg-cover bg-center bg-fixed overflow-hidden pt-24 md:pt-32">
            {/* Background Image Slideshow */}
            {images.map((image, index) => (
                <div
                    key={index}
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${image})`,
                        opacity: index === currentImage ? 0.9 : 0,
                    }}
                />
            ))}
            {/* Modern multi-layer gradient with animation */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-purple-900/30 animate-gradient-flow"></div>
            {/* Particle overlay for modern effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div 
                    className="absolute top-0 left-0 w-full h-full animate-particles"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                    }}
                ></div>
            </div>
            <div className="relative z-10 p-6">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-2xl">
                    <span className="text-cyan-400 font-black">آوای نهاوند:</span> راهکارهای جامع کامپیوتری
                </h1>
                <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-6 drop-shadow-xl font-medium">
                    متخصص در خدمات سخت‌افزار، نرم‌افزار، طراحی وب و مشاوره فناوری برای کسب‌و‌کار و افراد
                </p>
                <div className="flex justify-center gap-4">
                    <button onClick={() => navigate('/order')} className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-cyan-500/50 ring-4 ring-cyan-500/30 hover:ring-teal-500/30 relative z-20 animate-pulse-glow">
                        ثبت سفارش آنلاین
                    </button>
                    <a href="#services" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 relative z-20">
                        مشاهده خدمات
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
