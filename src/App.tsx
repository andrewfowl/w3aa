import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import QuestionForm from './components/QuestionForm';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5dc]">
      <Navbar onSignup={() => setIsModalOpen(true)} />
      <Hero onSignup={() => setIsModalOpen(true)} />
      <Features />
      <Events />
      <QuestionForm />
      <Footer />
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <SignupForm onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
}

export default App;