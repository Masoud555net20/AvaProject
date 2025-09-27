import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white animate-glow-text">درباره ما</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">همراه شما در دنیای دیجیتال</p>
        </div>
        <div className="bg-slate-900 rounded-xl p-8 shadow-2xl border border-cyan-400/20 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-sm text-white space-y-4 text-center">
              <p className="animate-fade-in-up delay-0 animate-cyan-glow-text">
                من مسعود باباعلی؛ محقق و عاشق یادگیری در دنیای نرم‌افزار، هوش مصنوعی و ارتباطات، و عضوی از تیم آوای نهاوند هستم، باور دارم پیشرفت واقعی وقتی معنا پیدا می‌کنه که دست به دست هم بدیم، از هم یاد بگیریم، هوای هم رو داشته باشیم و با هم به قله‌های موفقیت برسیم.
              </p>
              <p className="animate-fade-in-up delay-100 animate-cyan-glow-text">
                در این مسیر تنها نیستم؛ ما یک تیمیم؛ تیمی با یک دل مشترک که با عشق و انرژی، یادگیری و رفاقت را به کار و خدمت تبدیل می‌کنه. ما در آوای نهاوند فراتر از پروژه‌های نرم‌افزاری و طراحی سایت عمل می‌کنیم.
              </p>
              <p className="animate-fade-in-up delay-200 animate-cyan-glow-text">
                اصل داستان ما رشد مشترک، تجربه‌های نو، حمایت از هم و ساختن آینده‌ای روشنه، که همه‌مون بهش افتخار کنیم. دوست داریم در این مسیر کنار هم باشیم، به هم دلگرمی بدیم و با هم به سوی آینده‌ای روشن حرکت کنیم.
              </p>
              <p className="font-semibold text-white mt-4 animate-fade-in-up delay-300 animate-cyan-glow-text">
                و مهم‌تر از همه: هر کسی که به این مسیر علاقه داره، برای ما حکم یه رفیق تازه رو داره. ما با آغوش باز و دلگرمی ازش استقبال می‌کنیم، چون باور داریم هر آدمی که به این مسیر میاد، خودش یه چراغ روشنه برای تیم و برای آینده‌ای روشن‌تر.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/Pic.png" 
                alt="تیم آوای نهاوند" 
                className="rounded-full shadow-xl w-48 h-48 object-cover brightness-110 contrast-110 saturate-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
