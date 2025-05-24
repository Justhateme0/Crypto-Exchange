import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import Faq from '../components/home/Faq';
import CtaSection from '../components/home/CtaSection';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <CtaSection />
    </Layout>
  );
};

export default HomePage;