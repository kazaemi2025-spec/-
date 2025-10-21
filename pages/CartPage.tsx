
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { TrashIcon } from '../components/icons/HeroIcons';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">سبد خرید شما خالی است</h2>
        <p className="text-neutral-500 mt-2">به نظر می‌رسد هنوز محصولی به سبد خرید خود اضافه نکرده‌اید.</p>
        <Link to="/shop" className="mt-6 inline-block bg-amber-500 text-neutral-900 font-bold px-8 py-3 rounded-md hover:bg-amber-400 transition-colors">
          شروع خرید
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        <h1 className="text-3xl font-bold mb-6">سبد خرید شما</h1>
        {cartItems.map(item => (
          <div key={item.id} className="flex items-center gap-x-4 p-4 border border-neutral-200 rounded-lg">
            <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
            <div className="flex-grow">
              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-sm text-neutral-500">رنگ: {item.selectedColor}, سایز: {item.selectedSize}</p>
              <p className="font-semibold mt-1">{formatPrice(item.price)} تومان</p>
            </div>
            <div className="flex items-center border border-neutral-300 rounded-md">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 text-lg font-bold">-</button>
              <span className="px-4 py-1">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 text-lg font-bold">+</button>
            </div>
            <p className="font-bold text-lg w-32 text-center">{formatPrice(item.price * item.quantity)} تومان</p>
            <button onClick={() => removeFromCart(item.id)} className="text-neutral-500 hover:text-red-500">
              <TrashIcon className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <div className="bg-neutral-50 p-6 rounded-lg sticky top-24">
          <h2 className="text-2xl font-bold mb-4">خلاصه سفارش</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>جمع کل محصولات:</span>
              <span>{formatPrice(totalPrice)} تومان</span>
            </div>
            <div className="flex justify-between">
              <span>هزینه ارسال:</span>
              <span>رایگان</span>
            </div>
            <div className="border-t border-neutral-200 my-2"></div>
            <div className="flex justify-between font-bold text-xl">
              <span>مبلغ قابل پرداخت:</span>
              <span>{formatPrice(totalPrice)} تومان</span>
            </div>
          </div>
          <Link to="/checkout" className="mt-6 w-full text-center block bg-neutral-900 text-white font-bold py-3 rounded-md hover:bg-amber-500 hover:text-neutral-900 transition-colors">
            ادامه فرآیند خرید
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
