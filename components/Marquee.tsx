import React from 'react';
import { ComputerIcon, CodeIcon, AcademicCapIcon } from './data';

const Marquee: React.FC = () => {
  const marqueeItems = (
    <>
      <span className="flex-shrink-0 flex items-center mx-8 group-hover:text-white transition-colors duration-300">
        <ComputerIcon className="w-5 h-5 ml-3 text-cyan-400 group-hover:animate-glow" aria-hidden="true" />
        مرکز خدمات کامپیوتری آوای نهاوند - ارائه دهنده کلیه خدمات نرم افزاری و سخت افزاری
      </span>
      <span className="flex-shrink-0 flex items-center mx-8 group-hover:text-white transition-colors duration-300">
        <CodeIcon className="w-5 h-5 ml-3 text-cyan-400 group-hover:animate-glow" aria-hidden="true" />
        طراحی وب سایت های فروشگاهی، شرکتی و شخصی
      </span>
      <span className="flex-shrink-0 flex items-center mx-8 group-hover:text-white transition-colors duration-300">
        <AcademicCapIcon className="w-5 h-5 ml-3 text-cyan-400 group-hover:animate-glow" aria-hidden="true" />
        انجام کلیه پروژه های دانشجویی
      </span>
    </>
  );
  
  return (
    <div className="bg-slate-900/80 backdrop-blur-sm text-cyan-400 py-2 overflow-hidden border-y border-slate-700/50">
      <div className="group flex flex-nowrap animate-marquee whitespace-nowrap font-yekan">
        {marqueeItems}
        {marqueeItems}
      </div>
    </div>
  );
};

export default Marquee;