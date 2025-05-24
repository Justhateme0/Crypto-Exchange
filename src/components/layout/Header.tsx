import React, { useState, useEffect } from 'react';
import { Menu, X, Bitcoin } from 'lucide-react';
import { Link } from '../ui/Link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Bitcoin size={28} className="text-blue-600" />
              <span className={`text-xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
                КриптоОбмен
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500`}>
              Главная
            </Link>
            <Link href="/about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500`}>
              О нас
            </Link>
            <Link href="/how-it-works" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500`}>
              Как это работает
            </Link>
            <Link href="/rates" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500`}>
              Курсы обмена
            </Link>
            <Link href="/contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500`}>
              Контакты
            </Link>
            <Link 
              href="/create-request" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300"
            >
              Создать заявку
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white mt-2 rounded-lg shadow-lg overflow-hidden">
            <div className="py-2">
              <Link href="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Главная
              </Link>
              <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                О нас
              </Link>
              <Link href="/how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Как это работает
              </Link>
              <Link href="/rates" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Курсы обмена
              </Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Контакты
              </Link>
              <Link href="/create-request" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Создать заявку
              </Link>
              <Link href="/track-request" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                Отследить заявку
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;