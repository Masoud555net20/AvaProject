import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">درباره <span className="text-cyan-400">آوای نهاوند</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">همراه شما در دنیای دیجیتال</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/600/400?random=1" 
              alt="تیم آوای نهاوند" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 text-xl text-gray-300 space-y-4">
            <p>
              مرکز خدمات کامپیوتری آوای نهاوند با سال‌ها تجربه، به عنوان یک مرجع قابل اعتماد در زمینه ارائه خدمات تخصصی کامپیوتر و فناوری اطلاعات در نهاوند شناخته می‌شود.
            </p>
            <p>
              ماموریت ما ارائه راهکارهای سریع، کارآمد و مقرون‌به‌صرفه برای تمامی نیازهای دیجیتال شما، از تعمیرات سخت‌افزاری و نرم‌افزاری گرفته تا طراحی وب‌سایت‌های مدرن و مشاوره تخصصی است.
            </p>
            <p>
              ما به کیفیت خدمات، رضایت مشتری و به‌روز بودن با آخرین تکنولوژی‌ها افتخار می‌کنیم و همواره در تلاشیم تا بهترین تجربه را برای شما به ارمغان آوریم.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;