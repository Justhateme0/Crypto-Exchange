import React from 'react';
import { Shield, Clock, DollarSign, Smartphone, HeartHandshake, MapPin } from 'lucide-react';
import Section from '../ui/Section';

const features = [
  {
    icon: <Shield size={40} className="text-blue-600" />,
    title: 'Безопасные транзакции',
    description: 'Ваша безопасность - наш приоритет. Все транзакции защищены современными протоколами шифрования.'
  },
  {
    icon: <Clock size={40} className="text-blue-600" />,
    title: 'Быстрая обработка',
    description: 'Получите наличные быстро благодаря нашей системе ускоренной обработки. Большинство обменов выполняется в течение 24 часов.'
  },
  {
    icon: <DollarSign size={40} className="text-blue-600" />,
    title: 'Выгодные курсы',
    description: 'Мы предлагаем одни из лучших курсов обмена на рынке, обновляемые в реальном времени.'
  },
  {
    icon: <Smartphone size={40} className="text-blue-600" />,
    title: 'Простой интерфейс',
    description: 'Наша платформа делает обмен криптовалюты простым как для новичков, так и для опытных пользователей.'
  },
  {
    icon: <HeartHandshake size={40} className="text-blue-600" />,
    title: 'Поддержка 24/7',
    description: 'Круглосуточная поддержка клиентов для помощи с любыми вопросами во время процесса обмена.'
  },
  {
    icon: <MapPin size={40} className="text-blue-600" />,
    title: 'Множество локаций',
    description: 'Пункты обмена в разных городах позволяют удобно получить наличные рядом с вами.'
  }
];

const Features: React.FC = () => {
  return (
    <Section 
      title="Почему выбирают наш сервис" 
      subtitle="Мы предлагаем комплексный сервис обмена криптовалюты на наличные с множеством преимуществ"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
          >
            <div className="mb-4 text-blue-600">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Features;