
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Marquee from './components/Marquee';
import AnimatedWaves from './components/AnimatedWaves'; // Import the new component

const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-gray-200 antialiased">
      <AnimatedWaves /> {/* Add the animated waves component here */}
      <Header />
      <Marquee />
      <main className="relative z-10"> {/* Ensure main content is above waves */}
        <Hero />
        <Suspense fallback={<div className="py-20 text-center">Loading sections...</div>}>
          <About />
          <Services />
          <Portfolio />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/order" element={
          <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
            <OrderPage />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
};

export default App;
