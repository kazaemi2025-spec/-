
import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramIcon, TelegramIcon, WhatsappIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">فروشگاه ما</h3>
            <p className="text-neutral-400">
              ما بهترین محصولات را با بالاترین کیفیت و مناسب‌ترین قیمت برای شما فراهم می‌کنیم. رضایت شما اولویت ماست.
            </p>
            <div className="flex gap-x-4 mt-4">
              <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><InstagramIcon /></a>
              <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><TelegramIcon /></a>
              <a href="#" className="text-neutral-400 hover:text-amber-500 transition-colors"><WhatsappIcon /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">لینک‌های سریع</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-neutral-400 hover:text-amber-500 transition-colors">درباره ما</Link></li>
              <li><Link to="/contact" className="text-neutral-400 hover:text-amber-500 transition-colors">تماس با ما</Link></li>
              <li><Link to="/shop" className="text-neutral-400 hover:text-amber-500 transition-colors">فروشگاه</Link></li>
              <li><Link to="/terms" className="text-neutral-400 hover:text-amber-500 transition-colors">قوانین و مقررات</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">اطلاعات تماس</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>آدرس: تهران، خیابان اصلی، پلاک ۱۲۳</li>
              <li>تلفن: ۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li>ایمیل: info@example.com</li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">عضویت در خبرنامه</h3>
            <p className="text-neutral-400 mb-4">از آخرین تخفیف‌ها و محصولات جدید ما باخبر شوید.</p>
            <form className="flex">
              <input type="email" placeholder="ایمیل شما" className="w-full bg-neutral-800 text-white px-4 py-2 rounded-s-md focus:outline-none focus:ring-2 focus:ring-amber-500" />
              <button type="submit" className="bg-amber-500 text-neutral-900 font-bold px-4 py-2 rounded-e-md hover:bg-amber-600 transition-colors">
                ثبت
              </button>
            </form>
          </div>

        </div>
        <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500">
          <p>&copy; ۱۴۰۳ تمام حقوق برای فروشگاه ما محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
