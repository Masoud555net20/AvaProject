import React from 'react';
import { ComputerIcon, CodeIcon, AcademicCapIcon } from './data';

const Marquee: React.FC = () => {
  const marqueeItems = (
    <>
      <span className="flex-shrink-0 flex items-center mx-8 group-hover:text-white transition-colors duration-300">
        <ComputerIcon className="w-5 h-5 ml-3 text-white group-hover:animate-glow" aria-hidden="true" />
        خدمات کامپیوتری نوین آوای نهاوند - نرم‌افزار، سخت‌افزار، امنیت سایبری و کلاد
      </span>
      <span className="flex-shrink-0 flex items-center mx-8 group-hover:text-white transition-colors duration-300">
        <CodeIcon className="w-5 h-5 ml-3 text-white group-hover:animate-glow" aria-hidden="true" />
        طراحی وب‌سایت‌های پیشرفته فروشگاهی، شرکتی و شخصی - ریسپانسیو، سئو و تجربه کاربری برتر
      </span>
      <span className="flex-shrink-0 flex items-center mx-8 group-hover:text-white transition-colors duration-300">
        <AcademicCapIcon className="w-5 h-5 ml-3 text-white group-hover:animate-glow" aria-hidden="true" />
        پروژه‌های دانشجویی تخصصی: برنامه‌نویسی، یادگیری ماشین، داده‌کاوی و اپ‌های موبایل
      </span>
    </>
  );
  
  return (
    <div className="bg-gray-900/80 backdrop-blur-sm text-white py-2 overflow-hidden border-y border-gray-700/50">
      <div className="group flex flex-nowrap animate-marquee-reverse whitespace-nowrap font-yekan">
        {marqueeItems}
        {marqueeItems}
      </div>
    </div>
  );
};

export default Marquee;
