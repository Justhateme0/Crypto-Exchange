import React from 'react';
import HomePage from './pages/HomePage';
import CreateRequestPage from './pages/CreateRequestPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import RatesPage from './pages/RatesPage';
import ContactPage from './pages/ContactPage';
import OrdersPage from './pages/OrdersPage';

function App() {
  const path = window.location.pathname;
  
  const renderPage = () => {
    switch (path) {
      case '/create-request':
        return <CreateRequestPage />;
      case '/about':
        return <AboutPage />;
      case '/how-it-works':
        return <HowItWorksPage />;
      case '/rates':
        return <RatesPage />;
      case '/contact':
        return <ContactPage />;
      case '/1337lol':
        return <OrdersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;