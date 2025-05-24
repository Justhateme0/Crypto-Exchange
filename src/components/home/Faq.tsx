import React, { useState } from 'react';
import Section from '../ui/Section';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Как работает процесс обмена криптовалюты?",
    answer: "Наш процесс обмена прост: вы создаете заявку, проходите верификацию, переводите криптовалюту на наш безопасный кошелек и получаете наличные через выбранный способ. Весь процесс обычно занимает не более 24 часов."
  },
  {
    question: "Какие криптовалюты вы принимаете?",
    answer: "Мы принимаем Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC) и другие основные криптовалюты. Мы постоянно расширяем список принимаемых валют."
  },
  {
    question: "Сколько времени занимает обмен?",
    answer: "Большинство обменов обрабатываются в течение 24 часов. Точное время зависит от подтверждений сети и завершения процесса верификации."
  },
  {
    question: "Какие документы нужны для верификации?",
    answer: "Для верификации вам понадобится действующий государственный документ, удостоверяющий личность (паспорт, водительские права), подтверждение адреса (счет за коммунальные услуги или выписка из банка за последние 3 месяца) и селфи с документом."
  },
  {
    question: "Есть ли комиссия за обмен криптовалюты?",
    answer: "Наши курсы обмена включают все комиссии. Мы не взимаем скрытых комиссий или дополнительных расходов. Курс, который вы видите, - это курс, по которому вы получите наличные."
  },
  {
    question: "Где я могу получить наличные?",
    answer: "Вы можете получить наличные в одном из наших пунктов обмена в выбранном городе. У нас есть офисы в крупных городах России для вашего удобства."
  }
];

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section
      title="Часто задаваемые вопросы"
      subtitle="Ответы на популярные вопросы о нашем сервисе обмена криптовалюты"
    >
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-800">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180' : ''}`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-4 bg-gray-50' : 'max-h-0'
                }`}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Faq;