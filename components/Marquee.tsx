import React from 'react';
import { ComputerIcon } from './data';

const Marquee: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900/80 via-gray-900/80 to-blue-900/80 backdrop-blur-sm text-white py-3 border-y border-gray-700/50">
      <div className="flex flex-row justify-center items-center gap-12 font-yekan text-sm md:text-base whitespace-nowrap">
        <ComputerIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
        <span>ارائه انواع خدمات نرم افزاری-طراحی سایت-پروژه های دانشجویی و سازمانی-طراحی و ساخت اپلیکیشن</span>
        <ComputerIcon className="w-5 h-5 text-cyan-400 animate-pulse" />
      </div>
    </div>
  );
};

export default Marquee;
