import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Layout>
      <div className="pt-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Свяжитесь с нами</h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            У вас есть вопросы? Мы всегда готовы помочь!
          </p>
        </div>
      </div>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Выберите тему</option>
                    <option value="general">Общий вопрос</option>
                    <option value="exchange">Вопрос по обмену</option>
                    <option value="verification">Вопрос по верификации</option>
                    <option value="support">Техническая поддержка</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Введите ваше сообщение"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Отправить сообщение
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Телефон</h3>
                      <p className="text-gray-600">+7 (800) 123-45-67</p>
                      <p className="text-sm text-gray-500 mt-1">Звонок бесплатный по России</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-600">support@cryptoexchange.ru</p>
                      <p className="text-sm text-gray-500 mt-1">Ответ в течение 24 часов</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Адрес</h3>
                      <p className="text-gray-600">ул. Криптовалютная, 1</p>
                      <p className="text-gray-600">Москва, Россия</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Часы работы</h3>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 20:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                      <p className="text-sm text-gray-500 mt-1">Онлайн поддержка 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-800 mb-2">Срочная помощь</h3>
                <p className="text-blue-600 mb-4">
                  Если у вас возникла срочная проблема с обменом, воспользуйтесь горячей линией:
                </p>
                <a 
                  href="tel:+78001234567" 
                  className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-800"
                >
                  <Phone size={18} className="mr-2" />
                  8 800 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;