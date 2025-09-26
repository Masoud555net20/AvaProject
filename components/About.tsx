import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white animate-glow-text">درباره <span className="text-cyan-400">آوای نهاوند</span></h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">همراه شما در دنیای دیجیتال</p>
        </div>
        <div className="bg-slate-900 rounded-xl p-8 shadow-2xl border border-cyan-400/20 animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-slate-800 rounded-xl p-6 shadow-xl border border-cyan-400/30 ring-2 ring-cyan-400/20 animate-fade-in-up hover:shadow-cyan-500/20 transition-shadow duration-300">
                <div className="text-sm text-white space-y-4 text-center">
                  <p className="animate-fade-in-up delay-0 animate-cyan-glow-text">
                    من مسعود باباعلی هستم، محقق و عاشق یادگیری در دنیای نرم‌افزار، هوش مصنوعی و ارتباطات. بزرگ‌ترین افتخارم اینه که در کنار شما و با شما باشم، و بخشی از تیم آوای نهاوند. باور دارم پیشرفت واقعی وقتی معنا پیدا می‌کنه که دست به دست هم بدیم، از هم یاد بگیریم، هوای یکدیگر رو داشته باشیم و با هم به قله‌های موفقیت برسیم.
                  </p>
                  <p className="animate-fade-in-up delay-100 animate-cyan-glow-text">
                    من تنها نیستم؛ تیم ما با یک دل مشترک کنار هم جمع شده – تیمی از دوستان که می‌خواهن با عشق و انرژی، یادگیری و رفاقت را به کار و خدمت تبدیل کنند. ما در آوای نهاوند، فراتر از پروژه‌های نرم‌افزاری، طراحی سایت و خدمات کامپیوتری عمل می‌کنیم.
                  </p>
                  <p className="animate-fade-in-up delay-200 animate-cyan-glow-text">
                    اصل داستان ما رشد مشترک، تجربه‌های نو، حمایت از یکدیگه و ساختن یک شهر الکترونیک و هوشمنده، که همه‌ مون به اون افتخار کنیم. دوست داریم در این مسیر کنار هم باشیم، به یکدیگه دلگرمی بدیم و با هم به سوی آینده‌ای روشن حرکت کنیم.
                  </p>
                  <p className="font-semibold text-white mt-4 animate-fade-in-up delay-300 animate-cyan-glow-text">
                    و مهم‌تر از همه اینه که: هر کسی که به دنیای نرم‌افزار، هوش مصنوعی، طراحی و یادگیری علاقه داره، برای ما حکم یه رفیق تازه رو داره. ما با آغوش باز و کلی دلگرمی ازش استقبال می‌کنیم، چون باور داریم هر آدمی که به این مسیر میاد، خودش یه چراغ روشنه برای تیم و برای آینده‌ی روشنتر
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/About.JPG" 
                alt="تیم آوای نهاوند" 
                loading="lazy"
                className="rounded-full shadow-xl w-48 h-48 object-cover border-4 border-cyan-400 ring-4 ring-cyan-400/20 brightness-110 contrast-110 saturate-110 hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
