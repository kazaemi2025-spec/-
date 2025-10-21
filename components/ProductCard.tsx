
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { StarIcon } from './icons/HeroIcons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  return (
    <div className="group relative border border-neutral-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-neutral-100">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        {product.originalPrice && (
          <div className="absolute top-3 end-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            تخفیف
          </div>
        )}
        <div className="p-4 bg-white">
          <h3 className="text-lg font-semibold text-neutral-800 truncate">{product.name}</h3>
          <p className="text-sm text-neutral-500 mt-1">{product.category}</p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex flex-col items-start">
              <p className="text-lg font-bold text-amber-600">{formatPrice(product.price)} تومان</p>
              {product.originalPrice && (
                <p className="text-sm text-neutral-400 line-through">
                  {formatPrice(product.originalPrice)}
                </p>
              )}
            </div>
            <div className="flex items-center gap-x-1">
              <span className="text-neutral-600">{product.rating}</span>
              <StarIcon className="w-5 h-5 text-yellow-400" />
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-0 right-0 left-0 p-4 bg-white/90 backdrop-blur-sm translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <button className="w-full bg-neutral-900 text-white font-bold py-2 rounded-md hover:bg-amber-500 hover:text-neutral-900 transition-colors">
          مشاهده محصول
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
