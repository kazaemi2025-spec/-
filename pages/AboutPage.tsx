
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black text-center mb-8">درباره ما</h1>
      <img src="https://picsum.photos/seed/aboutus/1000/400" alt="درباره ما" className="w-full h-64 object-cover rounded-lg mb-8" />
      
      <div className="space-y-6 text-lg leading-relaxed text-neutral-700">
        <p>
          به فروشگاه ما خوش آمدید! ما با هدف ارائه محصولات باکیفیت و مدرن، فعالیت خود را آغاز کردیم. باور ما این است که خرید آنلاین باید تجربه‌ای لذت‌بخش، آسان و مطمئن باشد. به همین دلیل، تمام تلاش خود را به کار گرفته‌ایم تا بهترین‌ها را برای شما فراهم کنیم.
        </p>
        
        <h2 className="text-2xl font-bold pt-4">مأموریت ما</h2>
        <p>
          مأموریت ما، ارتقای سبک زندگی شما با ارائه محصولاتی است که ترکیبی از زیبایی، کیفیت و کارایی هستند. ما به دقت محصولات خود را از میان بهترین برندها و تولیدکنندگان انتخاب می‌کنیم تا اطمینان حاصل کنیم که هر خریدی که انجام می‌دهید، ارزشمند و رضایت‌بخش باشد.
        </p>
        
        <h2 className="text-2xl font-bold pt-4">چرا ما را انتخاب کنید؟</h2>
        <ul className="list-disc list-inside space-y-2">
          <li><span className="font-bold">تضمین کیفیت:</span> تمامی محصولات ما دارای ضمانت اصالت و کیفیت هستند.</li>
          <li><span className="font-bold">ارسال سریع و رایگان:</span> سفارشات شما در سریع‌ترین زمان ممکن و به صورت رایگان به دستتان می‌رسد.</li>
          <li><span className="font-bold">پشتیبانی مشتریان:</span> تیم پشتیبانی ما همیشه آماده پاسخگویی به سوالات شماست.</li>
          <li><span className="font-bold">تجربه خرید امن:</span> با استفاده از درگاه‌های پرداخت امن، خریدی با خیال راحت را تجربه کنید.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
