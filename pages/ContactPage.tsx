
import React from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '../components/icons/HeroIcons';

const ContactPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-black text-center mb-8">تماس با ما</h1>
      <p className="text-center text-lg text-neutral-600 max-w-2xl mx-auto mb-12">
        ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. از طریق راه‌های زیر می‌توانید با ما در ارتباط باشید.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-neutral-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700">نام شما</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700">ایمیل</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700">پیام شما</label>
              <textarea id="message" name="message" rows={5} className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-neutral-900 text-white font-bold py-3 rounded-md hover:bg-amber-500 hover:text-neutral-900 transition-colors">
              ارسال
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">اطلاعات تماس</h2>
            <div className="space-y-3 text-lg">
              <div className="flex items-center gap-x-3">
                <LocationMarkerIcon className="w-6 h-6 text-amber-500" />
                <span>تهران، خیابان اصلی، پلاک ۱۲۳</span>
              </div>
              <div className="flex items-center gap-x-3">
                <PhoneIcon className="w-6 h-6 text-amber-500" />
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </div>
              <div className="flex items-center gap-x-3">
                <MailIcon className="w-6 h-6 text-amber-500" />
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">موقعیت ما روی نقشه</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.245844815254!2d51.42260681563604!3d35.70014298019019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0116b36a1b2d%3A0x8f7a6b7a5a5a5a5a!2sTehran%2C%20Iran!5e0!3m2!1sen!2s!4v1672522500000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
