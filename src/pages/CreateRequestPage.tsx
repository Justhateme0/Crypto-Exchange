import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Bitcoin, DollarSign, ChevronRight, CreditCard, Info } from 'lucide-react';
import { saveOrder } from '../types/order';

const CRYPTO_OPTIONS = [
  { value: 'btc', label: 'Bitcoin (BTC)', rate: 4150000, icon: <Bitcoin size={20} className="text-yellow-500" /> },
  { value: 'eth', label: 'Ethereum (ETH)', rate: 290000, icon: <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> },
  { value: 'usdt', label: 'Tether (USDT)', rate: 92, icon: <svg className="w-5 h-5 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg> },
];

const PICKUP_OPTIONS = [
  { value: 'office', label: 'Получение в офисе', description: 'Получите наличные в одном из наших офисов обмена' },
  { value: 'bank', label: 'Банковский перевод', description: 'Получите средства напрямую на ваш банковский счет' },
  { value: 'delivery', label: 'Доставка наличных', description: 'Получите наличные с доставкой (может взиматься дополнительная плата)' },
];

const CreateRequestPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    cryptoType: 'btc',
    cryptoAmount: 0.5,
    cashAmount: 2075000,
    pickupMethod: 'office',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    agreeToTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    });

    if (name === 'cryptoAmount' || name === 'cryptoType') {
      const selectedCrypto = CRYPTO_OPTIONS.find(c => c.value === (name === 'cryptoType' ? value : formData.cryptoType));
      if (selectedCrypto) {
        const cryptoAmount = name === 'cryptoAmount' ? parseFloat(value) : formData.cryptoAmount;
        const newCashAmount = cryptoAmount * selectedCrypto.rate;
        setFormData(prev => ({
          ...prev,
          cashAmount: newCashAmount,
        }));
      }
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedCrypto = CRYPTO_OPTIONS.find(c => c.value === formData.cryptoType);
    const pickupMethodLabel = PICKUP_OPTIONS.find(p => p.value === formData.pickupMethod)?.label || formData.pickupMethod;
    
    const order = {
      fromCurrency: selectedCrypto?.label.split(' ')[0] || formData.cryptoType.toUpperCase(),
      toCurrency: 'RUB',
      amount: formData.cryptoAmount,
      cashAmount: formData.cashAmount,
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      pickupMethod: pickupMethodLabel,
      address: formData.address
    };

    saveOrder(order);
    alert('Заявка на обмен успешно отправлена! Вы получите подтверждение в ближайшее время.');

    setFormData({
      cryptoType: 'btc',
      cryptoAmount: 0.5,
      cashAmount: 2075000,
      pickupMethod: 'office',
      fullName: '',
      email: '',
      phone: '',
      address: '',
      agreeToTerms: false,
    });
    setStep(1);
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
            1
          </div>
          <div className={`h-1 w-16 ${step >= 2 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
          <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
            2
          </div>
          <div className={`h-1 w-16 ${step >= 3 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
          <div className={`rounded-full h-8 w-8 flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
            3
          </div>
        </div>
      </div>
    );
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Детали обмена</h3>
            
            <div className="grid grid-cols-1 gap-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Криптовалюта
                </label>
                <select
                  name="cryptoType"
                  value={formData.cryptoType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {CRYPTO_OPTIONS.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="my-8">
              <label className="block text-gray-700 font-medium mb-2">
                Сумма к обмену
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <input
                    type="number"
                    name="cryptoAmount"
                    value={formData.cryptoAmount}
                    onChange={handleChange}
                    min="0.001"
                    step="0.001"
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Bitcoin size={18} className="text-gray-500" />
                  </div>
                </div>
                
                <div className="relative">
                  <input
                    type="number"
                    name="cashAmount"
                    value={formData.cashAmount.toFixed(2)}
                    readOnly
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md bg-gray-50"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <span className="text-gray-500">₽</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-4 flex items-start">
                <Info size={20} className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Текущий курс обмена: 1 {CRYPTO_OPTIONS.find(c => c.value === formData.cryptoType)?.label.split(' ')[0]} = 
                  {' '}₽{CRYPTO_OPTIONS.find(c => c.value === formData.cryptoType)?.rate.toLocaleString()}. 
                  Курсы обновляются каждые 5 минут.
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-gray-700 font-medium mb-2">
                Способ получения
              </label>
              <div className="grid grid-cols-1 gap-3">
                {PICKUP_OPTIONS.map(option => (
                  <label 
                    key={option.value} 
                    className={`border rounded-md p-4 flex items-start cursor-pointer transition-all ${
                      formData.pickupMethod === option.value 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="pickupMethod"
                      value={option.value}
                      checked={formData.pickupMethod === option.value}
                      onChange={handleChange}
                      className="mt-1 mr-3"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{option.label}</p>
                      <p className="text-sm text-gray-600">{option.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex justify-end">
              <Button 
                onClick={nextStep}
                variant="primary"
                className="flex items-center"
              >
                Продолжить
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        );
      
      case 2:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Личные данные</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  ФИО
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите ваше полное имя"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email адрес
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите ваш email адрес"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Номер телефона
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите ваш номер телефона"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Адрес
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Введите ваш адрес"
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>
            
            <div className="flex justify-between">
              <Button 
                onClick={prevStep}
                variant="outline"
              >
                Назад
              </Button>
              <Button 
                onClick={nextStep}
                variant="primary"
                className="flex items-center"
              >
                Продолжить
                <ChevronRight size={16} className="ml-1" />
              </Button>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div>
            <h3 className="text-xl font-semibold mb-6">Проверка и подтверждение</h3>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-medium text-gray-700 mb-4">Детали обмена</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Вы отправляете</p>
                  <div className="flex items-center">
                    {CRYPTO_OPTIONS.find(c => c.value === formData.cryptoType)?.icon}
                    <p className="ml-2 font-medium">
                      {formData.cryptoAmount} {CRYPTO_OPTIONS.find(c => c.value === formData.cryptoType)?.label.split(' ')[0]}
                    </p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Вы получаете</p>
                  <p className="font-medium">
                    ₽{formData.cashAmount.toLocaleString()}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Способ получения</p>
                  <p className="font-medium">
                    {PICKUP_OPTIONS.find(p => p.value === formData.pickupMethod)?.label}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Время обработки</p>
                  <p className="font-medium">24 часа или меньше</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h4 className="font-medium text-gray-700 mb-4">Личные данные</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">ФИО</p>
                  <p className="font-medium">{formData.fullName || 'Не указано'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Email адрес</p>
                  <p className="font-medium">{formData.email || 'Не указано'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Номер телефона</p>
                  <p className="font-medium">{formData.phone || 'Не указано'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Адрес</p>
                  <p className="font-medium">{formData.address || 'Не указано'}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="flex items-start cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                  required
                />
                <div className="text-sm text-gray-700">
                  Я согласен с <a href="/terms" className="text-blue-600 hover:underline">Условиями использования</a> и <a href="/privacy" className="text-blue-600 hover:underline">Политикой конфиденциальности</a>. Я понимаю, что мне необходимо пройти верификацию личности перед обработкой обмена.
                </div>
              </label>
            </div>
            
            <div className="flex justify-between">
              <Button 
                onClick={prevStep}
                variant="outline"
              >
                Назад
              </Button>
              <Button 
                onClick={handleSubmit}
                variant="primary"
                disabled={!formData.agreeToTerms}
                className={!formData.agreeToTerms ? 'opacity-60 cursor-not-allowed' : ''}
              >
                Отправить заявку на обмен
              </Button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="pt-20 bg-gradient-to-b from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Создать заявку на обмен</h1>
          <p className="text-xl text-blue-100 text-center max-w-2xl mx-auto">
            Заполните форму ниже, чтобы начать обмен криптовалюты на наличные.
          </p>
        </div>
      </div>
      
      <Section>
        <Card className="max-w-3xl mx-auto">
          {renderStepIndicator()}
          {renderStepContent()}
        </Card>
      </Section>
    </Layout>
  );
};

export default CreateRequestPage;