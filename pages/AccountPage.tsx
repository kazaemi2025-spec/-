
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  return (
    <form className="space-y-6">
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-neutral-700">ایمیل</label>
        <input type="email" id="login-email" name="email" required className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-neutral-700">رمز عبور</label>
        <input type="password" id="login-password" name="password" required className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
      </div>
      <button type="submit" className="w-full bg-neutral-900 text-white font-bold py-3 rounded-md hover:bg-amber-500 hover:text-neutral-900 transition-colors">
        ورود
      </button>
    </form>
  );
};

const RegisterPage: React.FC = () => {
  return (
    <form className="space-y-6">
       <div>
        <label htmlFor="register-name" className="block text-sm font-medium text-neutral-700">نام کامل</label>
        <input type="text" id="register-name" name="name" required className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
      </div>
      <div>
        <label htmlFor="register-email" className="block text-sm font-medium text-neutral-700">ایمیل</label>
        <input type="email" id="register-email" name="email" required className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
      </div>
      <div>
        <label htmlFor="register-password" className="block text-sm font-medium text-neutral-700">رمز عبور</label>
        <input type="password" id="register-password" name="password" required className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
      </div>
      <button type="submit" className="w-full bg-neutral-900 text-white font-bold py-3 rounded-md hover:bg-amber-500 hover:text-neutral-900 transition-colors">
        ثبت‌نام
      </button>
    </form>
  );
};

const AccountPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <div className="flex border-b mb-6">
          <button 
            onClick={() => setActiveTab('login')}
            className={`flex-1 py-2 text-lg font-bold ${activeTab === 'login' ? 'border-b-2 border-amber-500 text-amber-500' : 'text-neutral-500'}`}
          >
            ورود
          </button>
          <button 
            onClick={() => setActiveTab('register')}
            className={`flex-1 py-2 text-lg font-bold ${activeTab === 'register' ? 'border-b-2 border-amber-500 text-amber-500' : 'text-neutral-500'}`}
          >
            ثبت‌نام
          </button>
        </div>
        {activeTab === 'login' ? <LoginPage /> : <RegisterPage />}
      </div>
    </div>
  );
};

export default AccountPage;
