import React from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { Shield, Users, Globe, Award, TrendingUp, HeartHandshake } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">О нашей компании</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Мы - ведущий сервис по обмену криптовалюты на наличные, предоставляющий безопасные и удобные услуги с 2020 года.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы стремимся сделать обмен криптовалюты максимально простым, безопасным и доступным для всех. 
              Наша цель - построить мост между цифровыми активами и традиционными финансами.
            </p>
            <p className="text-lg text-gray-600">
              Мы верим в прозрачность, безопасность и клиентоориентированность, предоставляя лучший сервис 
              обмена криптовалюты на рынке.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50K+</h3>
              <p className="text-gray-600">Довольных клиентов</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-green-600 mb-2">₽2B+</h3>
              <p className="text-gray-600">Объем обменов</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">15+</h3>
              <p className="text-gray-600">Городов присутствия</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg">
              <h3 className="text-3xl font-bold text-orange-600 mb-2">24/7</h3>
              <p className="text-gray-600">Поддержка клиентов</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Безопасность</h3>
            <p className="text-gray-600">
              Все транзакции защищены современными протоколами шифрования и проходят многоуровневую проверку.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <Users className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Команда экспертов</h3>
            <p className="text-gray-600">
              Наши специалисты имеют многолетний опыт работы в сфере криптовалют и финансов.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <Globe className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-3">Широкая сеть</h3>
            <p className="text-gray-600">
              Пункты обмена в крупнейших городах России для вашего удобства.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <Award className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Качество сервиса</h3>
                <p className="text-gray-600">
                  Мы постоянно совершенствуем наши услуги для обеспечения максимального удобства клиентов.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <TrendingUp className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Инновации</h3>
                <p className="text-gray-600">
                  Внедряем передовые технологии для улучшения процесса обмена.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <HeartHandshake className="w-8 h-8 text-blue-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Доверие</h3>
                <p className="text-gray-600">
                  Строим долгосрочные отношения с клиентами на основе прозрачности и надежности.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам довольных клиентов, которые уже оценили удобство нашего сервиса обмена криптовалюты.
          </p>
          <button 
            onClick={() => window.location.href = '/create-request'}
            className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Создать заявку на обмен
          </button>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;