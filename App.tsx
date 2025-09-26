
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import OrderPage from './pages/OrderPage';
import Marquee from './components/Marquee';
import AnimatedWaves from './components/AnimatedWaves'; // Import the new component

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-gray-200 antialiased">
      <AnimatedWaves /> {/* Add the animated waves component here */}
      <Header />
      <Marquee />
      <main className="relative z-10"> {/* Ensure main content is above waves */}
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
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
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Router>
  );
};

export default App;
