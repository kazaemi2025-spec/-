
import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
  const { cartItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">سبد خرید شما خالی است</h2>
        <p className="text-neutral-500 mt-2">برای ادامه به صفحه پرداخت، ابتدا محصولی به سبد خرید اضافه کنید.</p>
        <Link to="/shop" className="mt-6 inline-block bg-amber-500 text-neutral-900 font-bold px-8 py-3 rounded-md hover:bg-amber-400 transition-colors">
          بازگشت به فروشگاه
        </Link>
      </div>
    );
  }

  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Checkout Form */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold mb-6">تکمیل اطلاعات و پرداخت</h1>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700">نام</label>
              <input type="text" id="firstName" name="firstName" className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700">نام خانوادگی</label>
              <input type="text" id="lastName" name="lastName" className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-neutral-700">آدرس کامل</label>
            <textarea id="address" name="address" rows={3} className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500"></textarea>
          </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-neutral-700">شماره تماس</label>
              <input type="tel" id="phone" name="phone" className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-neutral-700">کد پستی</label>
              <input type="text" id="postalCode" name="postalCode" className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500" />
            </div>
          </div>

          {/* Shipping Method */}
          <div className="space-y-3">
              <h2 className="text-xl font-semibold">روش ارسال</h2>
              <div className="p-4 border rounded-md flex items-center gap-x-3">
                  <input type="radio" id="shipping-normal" name="shipping" className="accent-amber-500" defaultChecked/>
                  <label htmlFor="shipping-normal" className="flex-grow">ارسال عادی (۳ تا ۵ روز کاری) - رایگان</label>
              </div>
              <div className="p-4 border rounded-md flex items-center gap-x-3">
                  <input type="radio" id="shipping-express" name="shipping" className="accent-amber-500"/>
                  <label htmlFor="shipping-express" className="flex-grow">ارسال اکسپرس (۱ تا ۲ روز کاری) - ۳۰,۰۰۰ تومان</label>
              </div>
          </div>

        </form>
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-neutral-50 p-6 rounded-lg sticky top-24">
          <h2 className="text-2xl font-bold mb-4">سفارش شما</h2>
          <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
            {cartItems.map(item => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="truncate max-w-[150px]">{item.name} (x{item.quantity})</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                </div>
            ))}
          </div>
          <div className="border-t border-neutral-200 my-4"></div>
          <div className="space-y-3">
             <div className="flex justify-between">
              <span>جمع کل:</span>
              <span>{formatPrice(totalPrice)} تومان</span>
            </div>
            <div className="flex justify-between font-bold text-xl">
              <span>مبلغ نهایی:</span>
              <span>{formatPrice(totalPrice)} تومان</span>
            </div>
          </div>
           <button type="submit" className="mt-6 w-full text-center block bg-neutral-900 text-white font-bold py-3 rounded-md hover:bg-green-600 transition-colors">
            پرداخت و ثبت نهایی سفارش
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
