import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <Section
      className="bg-gradient-to-r from-blue-700 to-blue-900 text-white"
      dark={true}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы обменять криптовалюту?</h2>
        <p className="text-lg text-blue-100 mb-8">
          Начните прямо сейчас и оцените наш быстрый, безопасный и удобный сервис обмена. 
          Создание первой заявки на обмен займет всего несколько минут.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="primary" 
            size="lg" 
            className="bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => window.location.href = '/create-request'}
          >
            Создать заявку на обмен
            <ArrowRight size={18} className="ml-2" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-blue-800"
            onClick={() => window.location.href = '/contact'}
          >
            Связаться с нами
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;