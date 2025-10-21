
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import { StarIcon, CheckCircleIcon } from '../components/icons/HeroIcons';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
        <div className="text-center py-20">
            <h2 className="text-3xl font-bold">محصول مورد نظر یافت نشد</h2>
            <Link to="/shop" className="mt-4 inline-block bg-amber-500 text-neutral-900 font-bold px-6 py-2 rounded-md">
                بازگشت به فروشگاه
            </Link>
        </div>
    );
  }

  const formatPrice = (price: number) => new Intl.NumberFormat('fa-IR').format(price);

  const handleAddToCart = () => {
    if(product) {
        addToCart(product, quantity, selectedColor || '', selectedSize || '');
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Image Gallery */}
      <div className="space-y-4">
        <div className="aspect-w-1 aspect-h-1 bg-neutral-100 rounded-lg overflow-hidden">
          <img src={mainImage} alt={product.name} className="w-full h-full object-cover"/>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {product.images.map((img, idx) => (
            <button key={idx} onClick={() => setMainImage(img)} className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden border-2 ${mainImage === img ? 'border-amber-500' : 'border-transparent'}`}>
              <img src={img} alt={`${product.name} thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-black text-neutral-900">{product.name}</h1>
          <div className="flex items-center gap-x-4 mt-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-neutral-300'}`} />
              ))}
            </div>
            <span className="text-neutral-500">({product.reviewCount} نظر)</span>
          </div>
        </div>
        
        <p className="text-lg text-neutral-600 leading-relaxed">{product.description}</p>
        
        <div className="flex items-baseline gap-x-3">
          <span className="text-3xl font-bold text-amber-600">{formatPrice(product.price)} تومان</span>
          {product.originalPrice && (
            <span className="text-xl text-neutral-400 line-through">{formatPrice(product.originalPrice)} تومان</span>
          )}
        </div>

        {/* Colors */}
        <div>
            <h3 className="text-lg font-medium">رنگ:</h3>
            <div className="flex gap-x-2 mt-2">
                {product.colors.map(color => (
                    <button key={color} onClick={() => setSelectedColor(color)} className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-amber-500 ring-2 ring-amber-500 ring-offset-2' : 'border-neutral-300'}`} style={{backgroundColor: color}}></button>
                ))}
            </div>
        </div>
        
        {/* Sizes */}
         <div>
            <h3 className="text-lg font-medium">سایز:</h3>
            <div className="flex gap-x-2 mt-2">
                {product.sizes.map(size => (
                    <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white'}`}>
                        {size}
                    </button>
                ))}
            </div>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex items-center gap-x-4">
          <div className="flex items-center border border-neutral-300 rounded-md">
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-2 text-xl font-bold">-</button>
            <span className="px-4 py-2 text-lg">{quantity}</span>
            <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-2 text-xl font-bold">+</button>
          </div>
          <button onClick={handleAddToCart} className="flex-1 bg-neutral-900 text-white font-bold py-3 rounded-md hover:bg-amber-500 hover:text-neutral-900 transition-colors duration-300">
            افزودن به سبد خرید
          </button>
        </div>

        {addedToCart && (
            <div className="flex items-center gap-x-2 text-green-600 bg-green-50 p-3 rounded-md">
                <CheckCircleIcon className="w-6 h-6"/>
                <span>محصول با موفقیت به سبد خرید اضافه شد!</span>
            </div>
        )}

        {/* Details */}
        <div>
            <h3 className="text-xl font-bold mb-2">جزئیات محصول:</h3>
            <ul className="list-disc list-inside space-y-1 text-neutral-600">
                {product.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
