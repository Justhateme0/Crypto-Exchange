import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  title, 
  subtitle, 
  className = '', 
  id,
  dark = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 ${dark ? 'bg-gray-900 text-white' : 'bg-white'} ${className}`}
    >
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className={`text-3xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-800'}`}>{title}</h2>}
            {subtitle && <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;