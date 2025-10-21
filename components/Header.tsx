
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { SearchIcon, UserIcon, ShoppingCartIcon, MenuIcon, XIcon } from './icons/HeroIcons';

const Header: React.FC = () => {
  const { cartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'خانه', path: '/' },
    { name: 'فروشگاه', path: '/shop' },
    { name: 'درباره ما', path: '/about' },
    { name: 'تماس با ما', path: '/contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-neutral-800">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-black text-neutral-900 tracking-wider">
              فروشگاه
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-amber-500' : 'text-neutral-600 hover:text-amber-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-x-4">
            <button className="text-neutral-600 hover:text-amber-500 transition-colors">
              <SearchIcon className="h-6 w-6" />
            </button>
            <Link to="/account" className="text-neutral-600 hover:text-amber-500 transition-colors">
              <UserIcon className="h-6 w-6" />
            </Link>
            <Link to="/cart" className="relative text-neutral-600 hover:text-amber-500 transition-colors">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -end-2 flex items-center justify-center w-5 h-5 bg-amber-500 text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <nav className="flex flex-col items-center gap-y-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium transition-colors duration-200 ${
                    isActive ? 'text-amber-500' : 'text-neutral-600 hover:text-amber-500'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
