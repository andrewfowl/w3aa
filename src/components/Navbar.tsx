import React from 'react';
import { Building2 } from 'lucide-react';

interface NavbarProps {
  onSignup: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignup }) => {
  return (
    <nav className="bg-[#f5f5dc] border-b-2 border-black py-4 px-6 fixed w-full top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2 text-black">
          <Building2 className="h-6 w-6" />
          <span className="font-semibold text-lg">w3aa.xyz</span>
        </a>
        <div className="flex items-center space-x-8">
          <a href="#features" className="text-black hover:text-black/70 transition-colors">Features</a>
          <a href="#events" className="text-black hover:text-black/70 transition-colors">Events</a>
          <a href="#questions" className="text-black hover:text-black/70 transition-colors">Questions</a>
          <button
            onClick={onSignup}
            className="border-2 border-black px-4 py-2 rounded hover:bg-black hover:text-[#f5f5dc] transition-colors"
          >
            Join Alliance
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
