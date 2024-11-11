import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onSignup: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignup }) => {
  return (
    <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight mb-6">
            Shaping the Future of Digital Asset Accounting
          </h1>
          <p className="text-lg text-black/80 max-w-2xl mb-8">
            Join Ripple and TechAccountingPro in establishing unified accounting standards 
            for tokenized financial instruments. Be part of the revolution in Web3 accounting.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={onSignup}
              className="group border-2 border-black px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-black hover:text-[#f5f5dc] transition-colors"
            >
              <span>Join the Forum</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#events"
              className="text-black hover:text-black/70 transition-colors"
            >
              View Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;