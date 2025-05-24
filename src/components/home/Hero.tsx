import React from 'react';
import Button from '../ui/Button';
import { Bitcoin, DollarSign, Shield, Clock } from 'lucide-react';
import { Link } from '../ui/Link';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-700 to-blue-900 min-h-screen flex items-center text-white overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-500 opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute left-20 bottom-20 w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute right-1/3 bottom-1/4 w-80 h-80 rounded-full bg-indigo-500 opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Безопасный обмен криптовалюты на наличные
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Быстрый, безопасный и удобный сервис для обмена криптовалюты на наличные по лучшему курсу без скрытых комиссий.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => window.location.href = '/create-request'}
              >
                Создать заявку на обмен
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-blue-800"
                onClick={() => window.location.href = '/how-it-works'}
              >
                Как это работает
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Shield className="mr-2 text-green-400" size={20} />
                <span className="text-blue-100">Безопасные транзакции</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 text-green-400" size={20} />
                <span className="text-blue-100">Быстрая обработка</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 text-green-400" size={20} />
                <span className="text-blue-100">Выгодный курс</span>
              </div>
              <div className="flex items-center">
                <Bitcoin className="mr-2 text-green-400" size={20} />
                <span className="text-blue-100">Разные криптовалюты</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl">
            <h3 className="text-xl font-bold mb-4 text-center">Текущие курсы обмена</h3>
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <Bitcoin size={24} className="mr-2 text-yellow-400" />
                  <div>
                    <p className="font-medium">Bitcoin (BTC)</p>
                    <p className="text-sm text-blue-100">Обновлено 5 мин. назад</p>
                  </div>
                </div>
                <p className="font-bold">4 150 000 ₽</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="mr-2 w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  <div>
                    <p className="font-medium">Ethereum (ETH)</p>
                    <p className="text-sm text-blue-100">Обновлено 5 мин. назад</p>
                  </div>
                </div>
                <p className="font-bold">290 000 ₽</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="mr-2 w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  <div>
                    <p className="font-medium">Tether (USDT)</p>
                    <p className="text-sm text-blue-100">Обновлено 5 мин. назад</p>
                  </div>
                </div>
                <p className="font-bold">92 ₽</p>
              </div>
              
              <div className="mt-4">
                <Link 
                  href="/rates" 
                  className="block text-center py-2 rounded-lg border border-white/30 hover:bg-white/10 transition-colors duration-300"
                >
                  Посмотреть все курсы
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;