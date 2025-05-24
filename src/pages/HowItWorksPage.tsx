import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { FileEdit, Search, DollarSign, CheckCircle, Shield, Clock, AlertCircle } from 'lucide-react';

const steps = [
  {
    icon: <FileEdit size={40} className="text-blue-600" />,
    title: 'Создание заявки',
    description: 'Заполните простую форму с указанием суммы и типа криптовалюты, которую хотите обменять.',
    details: [
      'Выберите криптовалюту для обмена',
      'Укажите сумму',
      'Выберите способ получения наличных',
      'Заполните контактные данные'
    ]
  },
  {
    icon: <Search size={40} className="text-blue-600" />,
    title: 'Верификация',
    description: 'Пройдите быструю процедуру верификации для обеспечения безопасности транзакции.',
    details: [
      'Загрузите документ, удостоверяющий личность',
      'Подтвердите адрес проживания',
      'Сделайте селфи с документом',
      'Дождитесь подтверждения верификации (обычно 15-30 минут)'
    ]
  },
  {
    icon: <DollarSign size={40} className="text-blue-600" />,
    title: 'Перевод криптовалюты',
    description: 'Отправьте криптовалюту на наш защищенный кошелек.',
    details: [
      'Получите адрес кошелька для перевода',
      'Отправьте указанную сумму',
      'Дождитесь подтверждений в сети',
      'Получите уведомление о успешном получении средств'
    ]
  },
  {
    icon: <CheckCircle size={40} className="text-blue-600" />,
    title: 'Получение наличных',
    description: 'Получите наличные выбранным способом после подтверждения транзакции.',
    details: [
      'Выберите удобный пункт выдачи',
      'Предъявите документ, удостоверяющий личность',
      'Получите наличные',
      'Подтвердите получение средств'
    ]
  }
];

const HowItWorksPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Как работает обмен</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Простой и безопасный процесс обмена криптовалюты на наличные в четыре простых шага
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 relative">
                <div className="absolute -left-4 top-6 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">{step.icon}</div>
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 rounded-lg p-6">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Безопасность</h3>
              <p className="text-gray-600">
                Все транзакции защищены и проходят через безопасные каналы с использованием современных протоколов шифрования.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <Clock className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Скорость</h3>
              <p className="text-gray-600">
                Большинство обменов завершается в течение 24 часов с момента создания заявки.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <AlertCircle className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Поддержка</h3>
              <p className="text-gray-600">
                Наша служба поддержки доступна 24/7 и готова помочь на каждом этапе обмена.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы обменять криптовалюту?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Создайте заявку прямо сейчас и получите наличные уже сегодня!
            </p>
            <button 
              onClick={() => window.location.href = '/create-request'}
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
            >
              Создать заявку на обмен
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorksPage;