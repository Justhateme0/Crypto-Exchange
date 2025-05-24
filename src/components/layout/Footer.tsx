import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Shield } from 'lucide-react';
import { Link } from '../ui/Link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">КриптоОбмен</h3>
            <p className="text-gray-400 mb-4">
              Ваш надежный партнер для безопасного обмена криптовалюты на наличные.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Как это работает
                </Link>
              </li>
              <li>
                <Link href="/rates" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Курсы обмена
                </Link>
              </li>
              <li>
                <Link href="/create-request" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Создать заявку
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4">Поддержка</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/track-request" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Отследить заявку
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Связаться с нами
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-2 mt-1" />
                <span className="text-gray-400">ул. Криптовалютная, 1, Москва</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-2" />
                <span className="text-gray-400">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-2" />
                <span className="text-gray-400">support@cryptoexchange.ru</span>
              </li>
              <li className="flex items-center mt-4">
                <Shield size={20} className="text-green-500 mr-2" />
                <span className="text-green-500">Защищено и зашифровано</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} КриптоОбмен. Все права защищены.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/terms" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
                Условия использования
              </Link>
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
                Политика конфиденциальности
              </Link>
              <Link href="/security" className="text-gray-500 text-sm hover:text-white transition-colors duration-300">
                Безопасность
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;