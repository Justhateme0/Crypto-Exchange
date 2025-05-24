import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { Bitcoin, TrendingUp, TrendingDown, RefreshCw, AlertCircle } from 'lucide-react';

const currencies = [
  {
    name: 'Bitcoin',
    code: 'BTC',
    icon: <Bitcoin className="w-8 h-8 text-yellow-500" />,
    price: 4150000,
    change: 2.5,
    volume: '₽12.5M'
  },
  {
    name: 'Ethereum',
    code: 'ETH',
    icon: <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>,
    price: 290000,
    change: -1.2,
    volume: '₽8.3M'
  },
  {
    name: 'Tether',
    code: 'USDT',
    icon: <svg className="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>,
    price: 92,
    change: 0.1,
    volume: '₽15.2M'
  },
  {
    name: 'USD Coin',
    code: 'USDC',
    icon: <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>,
    price: 91.5,
    change: -0.2,
    volume: '₽9.8M'
  }
];

const RatesPage: React.FC = () => {
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'change' | 'volume'>('price');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (key: 'name' | 'price' | 'change' | 'volume') => {
    if (sortBy === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(key);
      setSortOrder('desc');
    }
  };

  const sortedCurrencies = [...currencies].sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'change':
        comparison = a.change - b.change;
        break;
      case 'volume':
        comparison = parseFloat(a.volume.replace('₽', '').replace('M', '')) - 
                    parseFloat(b.volume.replace('₽', '').replace('M', ''));
        break;
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  return (
    <Layout>
      <div className="pt-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Курсы обмена</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Актуальные курсы обмена криптовалют на наличные рубли
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 flex items-start">
            <AlertCircle className="text-blue-600 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-800 mb-1">Информация об обновлении курсов</h3>
              <p className="text-blue-600">
                Курсы обновляются каждые 5 минут. Последнее обновление: {new Date().toLocaleTimeString()}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600 cursor-pointer" onClick={() => handleSort('name')}>
                      Криптовалюта
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600 cursor-pointer" onClick={() => handleSort('price')}>
                      Курс (₽)
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600 cursor-pointer" onClick={() => handleSort('change')}>
                      Изменение (24ч)
                    </th>
                    <th className="px-6 py-3 text-right text-sm font-semibold text-gray-600 cursor-pointer" onClick={() => handleSort('volume')}>
                      Объем (24ч)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sortedCurrencies.map((currency, index) => (
                    <tr key={currency.code} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          {currency.icon}
                          <div className="ml-3">
                            <div className="font-medium text-gray-900">{currency.name}</div>
                            <div className="text-sm text-gray-500">{currency.code}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right font-medium text-gray-900">
                        {currency.price.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className={`flex items-center justify-end ${
                          currency.change >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {currency.change >= 0 ? (
                            <TrendingUp size={16} className="mr-1" />
                          ) : (
                            <TrendingDown size={16} className="mr-1" />
                          )}
                          {currency.change > 0 ? '+' : ''}{currency.change}%
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right text-gray-500">
                        {currency.volume}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center text-gray-600">
              <RefreshCw size={20} className="mr-2" />
              <span>Автоматическое обновление каждые 5 минут</span>
            </div>
            <button 
              onClick={() => window.location.href = '/create-request'}
              className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Создать заявку
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default RatesPage;