import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CurrencyCardProps {
  name: string;
  code: string;
  icon: React.ReactNode;
  price: number;
  change: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({ name, code, icon, price, change }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="mr-3 text-blue-600">{icon}</div>
          <div>
            <h3 className="font-medium text-gray-800">{name}</h3>
            <p className="text-sm text-gray-500">{code}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-end">
        <div>
          <p className="text-sm text-gray-500">Price</p>
          <p className="text-xl font-bold text-gray-900">${price.toLocaleString()}</p>
        </div>
        
        <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
          <span className="font-medium">{isPositive ? '+' : ''}{change}%</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;