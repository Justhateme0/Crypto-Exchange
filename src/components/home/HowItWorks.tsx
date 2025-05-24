import React from 'react';
import Section from '../ui/Section';
import { FileEdit, Search, DollarSign, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

const steps = [
  {
    icon: <FileEdit size={40} className="text-white" />,
    title: 'Создайте заявку',
    description: 'Заполните простую форму обмена с вашими данными и суммой, которую хотите обменять.'
  },
  {
    icon: <Search size={40} className="text-white" />,
    title: 'Пройдите верификацию',
    description: 'Завершите безопасный процесс верификации для обеспечения безопасности вашей транзакции.'
  },
  {
    icon: <DollarSign size={40} className="text-white" />,
    title: 'Сделайте депозит',
    description: 'Отправьте криптовалюту на наш безопасный кошелек, предоставленный после верификации.'
  },
  {
    icon: <CheckCircle size={40} className="text-white" />,
    title: 'Получите наличные',
    description: 'После подтверждения депозита получите наличные в выбранном пункте обмена.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <Section
      title="Как работает процесс обмена"
      subtitle="Мы упростили процесс обмена, чтобы сделать его быстрым и удобным для вас"
      dark={true}
      className="bg-gradient-to-br from-blue-800 to-blue-900"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-600 rounded-full p-5 mb-4 shadow-lg">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-blue-100">{step.description}</p>
            </div>
            
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-full w-full h-1 transform -translate-x-1/2">
                <div className="h-1 bg-blue-600 w-full"></div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Button 
          variant="primary" 
          size="lg" 
          className="bg-blue-500 text-white hover:bg-blue-600"
          onClick={() => window.location.href = '/create-request'}
        >
          Начать обмен сейчас
        </Button>
      </div>
    </Section>
  );
};

export default HowItWorks;