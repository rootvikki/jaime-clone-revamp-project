
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Batteries from '../components/Batteries';
import { AIVideoGenerator } from '../components/AIVideoGenerator';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Batteries />
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Create Custom Solar Videos with AI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Generate professional solar energy videos for your marketing, presentations, or social media using advanced AI technology.
            </p>
          </div>
          <AIVideoGenerator />
        </div>
      </section>
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
