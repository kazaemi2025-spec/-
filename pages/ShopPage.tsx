
import React, { useState, useMemo } from 'react';
import { mockProducts } from '../data/products';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

const ShopPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    price: 5000000,
    color: 'all',
    size: 'all',
  });
  const [sort, setSort] = useState('newest');

  const categories = useMemo(() => ['all', ...Array.from(new Set(mockProducts.map(p => p.category)))], []);
  const brands = useMemo(() => ['all', ...Array.from(new Set(mockProducts.map(p => p.brand)))], []);
  const colors = useMemo(() => ['all', ...Array.from(new Set(mockProducts.flatMap(p => p.colors)))], []);
  const sizes = useMemo(() => ['all', ...Array.from(new Set(mockProducts.flatMap(p => p.sizes)))], []);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilters(prev => ({...prev, price: Number(e.target.value)}))
  }

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...mockProducts];

    result = result.filter(p => {
      if (filters.category !== 'all' && p.category !== filters.category) return false;
      if (filters.brand !== 'all' && p.brand !== filters.brand) return false;
      if (p.price > filters.price) return false;
      if (filters.color !== 'all' && !p.colors.includes(filters.color)) return false;
      if (filters.size !== 'all' && !p.sizes.includes(filters.size)) return false;
      return true;
    });

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
      default:
        result.sort((a, b) => b.id - a.id);
        break;
    }
    
    return result;
  }, [filters, sort]);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Filters Sidebar */}
      <aside className="md:w-1/4 lg:w-1/5 space-y-6">
        <h2 className="text-2xl font-bold">فیلترها</h2>
        
        {/* Category Filter */}
        <div>
          <label htmlFor="category" className="block text-lg font-medium text-neutral-700">دسته‌بندی</label>
          <select id="category" name="category" value={filters.category} onChange={handleFilterChange} className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
            {categories.map(cat => <option key={cat} value={cat}>{cat === 'all' ? 'همه' : cat}</option>)}
          </select>
        </div>

        {/* Brand Filter */}
        <div>
          <label htmlFor="brand" className="block text-lg font-medium text-neutral-700">برند</label>
          <select id="brand" name="brand" value={filters.brand} onChange={handleFilterChange} className="mt-1 block w-full p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
            {brands.map(br => <option key={br} value={br}>{br === 'all' ? 'همه' : br}</option>)}
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label htmlFor="price" className="block text-lg font-medium text-neutral-700">
            قیمت تا: {new Intl.NumberFormat('fa-IR').format(filters.price)} تومان
          </label>
          <input type="range" id="price" name="price" min="100000" max="5000000" step="100000" value={filters.price} onChange={handlePriceChange} className="mt-1 block w-full accent-amber-500"/>
        </div>

        {/* Color Filter */}
        <div>
          <h3 className="text-lg font-medium text-neutral-700">رنگ</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {colors.map(color => (
              <button key={color} onClick={() => setFilters(prev => ({ ...prev, color }))} className={`w-8 h-8 rounded-full border-2 ${filters.color === color ? 'border-amber-500' : 'border-neutral-300'}`} style={{ backgroundColor: color === 'all' ? '#e5e5e5' : color }}>
                {color === 'all' && <span className="text-xs">همه</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Size Filter */}
        <div>
          <h3 className="text-lg font-medium text-neutral-700">سایز</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {sizes.map(size => (
              <button key={size} onClick={() => setFilters(prev => ({ ...prev, size }))} className={`px-3 py-1 border rounded-md ${filters.size === size ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700'}`}>
                {size === 'all' ? 'همه' : size}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="flex-1">
        <div className="flex items-center justify-between mb-6">
          <p className="text-neutral-600">{filteredAndSortedProducts.length} محصول یافت شد</p>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="p-2 border border-neutral-300 rounded-md focus:ring-amber-500 focus:border-amber-500">
            <option value="newest">جدیدترین</option>
            <option value="price-asc">ارزان‌ترین</option>
            <option value="price-desc">گران‌ترین</option>
          </select>
        </div>

        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold">محصولی یافت نشد!</h3>
            <p className="text-neutral-500 mt-2">لطفاً فیلترهای خود را تغییر دهید و دوباره تلاش کنید.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default ShopPage;
