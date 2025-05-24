import React from 'react';
import Section from '../ui/Section';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "Я сомневался насчет обмена биткоина на наличные, но этот сервис сделал процесс невероятно простым и безопасным. Курсы были лучше, чем у других обменников.",
    author: "Михаил Иванов",
    role: "Программист",
    rating: 5
  },
  {
    id: 2,
    content: "Скорость транзакции впечатлила. Я создал заявку утром и получил наличные уже днем. Очень рекомендую!",
    author: "Анна Петрова",
    role: "Маркетолог",
    rating: 5
  },
  {
    id: 3,
    content: "Служба поддержки была отличной. Они провели меня через весь процесс и быстро ответили на все вопросы. Обязательно воспользуюсь снова.",
    author: "Дмитрий Смирнов",
    role: "Предприниматель",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <Section
      title="Что говорят наши клиенты"
      subtitle="Не верьте нам на слово. Вот что думают люди о нашем сервисе обмена"
      className="bg-gray-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={18} 
                  className={i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-semibold mr-3">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;