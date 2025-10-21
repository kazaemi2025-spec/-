
import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import { ChevronLeftIcon } from '../components/icons/HeroIcons';

const HomePage: React.FC = () => {
  const bestSellers = mockProducts.slice(0, 4);
  const specialOffer = mockProducts[6];

  const categories = [
    { name: 'پوشاک مردانه', image: 'https://picsum.photos/seed/cat1/400/400' },
    { name: 'پوشاک زنانه', image: 'https://picsum.photos/seed/cat2/400/400' },
    { name: 'لوازم جانبی', image: 'https://picsum.photos/seed/cat3/400/400' },
    { name: 'لوازم خانگی', image: 'https://picsum.photos/seed/cat4/400/400' },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-neutral-800 rounded-lg overflow-hidden text-white h-[500px] flex items-center">
        <img src="https://picsum.photos/seed/hero/1600/500" alt="Banner" className="absolute inset-0 w-full h-full object-cover opacity-40"/>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">کالکشن جدید تابستان</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            با جدیدترین محصولات ما، استایل خود را به‌روز کنید. کیفیت و زیبایی را همزمان تجربه کنید.
          </p>
          <Link to="/shop" className="bg-amber-500 text-neutral-900 font-bold text-lg px-8 py-3 rounded-md hover:bg-amber-400 transition-transform hover:scale-105 inline-block">
            خرید کنید
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <h2 className="text-3xl font-extrabold text-center mb-8 text-neutral-900">دسته‌بندی‌ها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link key={cat.name} to="/shop" className="group relative block overflow-hidden rounded-lg">
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-xl font-bold">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-extrabold text-neutral-900">پرفروش‌ترین‌ها</h2>
            <Link to="/shop" className="flex items-center gap-x-1 text-amber-600 hover:text-amber-700 font-semibold">
                <span>مشاهده همه</span>
                <ChevronLeftIcon className="w-5 h-5"/>
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="bg-neutral-100 rounded-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img src={specialOffer.images[0]} alt={specialOffer.name} className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="md:w-1/2 text-center md:text-right">
            <span className="text-amber-600 font-bold">پیشنهاد ویژه امروز</span>
            <h2 className="text-4xl font-black text-neutral-900 my-4">{specialOffer.name}</h2>
            <p className="text-neutral-600 mb-6">{specialOffer.description}</p>
            <div className="flex items-center justify-center md:justify-start gap-x-4 mb-6">
                <span className="text-3xl font-bold text-red-600">{new Intl.NumberFormat('fa-IR').format(specialOffer.price)} تومان</span>
                <span className="text-xl text-neutral-400 line-through">{new Intl.NumberFormat('fa-IR').format(specialOffer.originalPrice || 0)} تومان</span>
            </div>
            <Link to={`/product/${specialOffer.id}`} className="bg-neutral-900 text-white font-bold text-lg px-10 py-3 rounded-md hover:bg-neutral-700 transition-colors inline-block">
              همین حالا بخرید
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
