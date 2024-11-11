import React from 'react';
import { Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t-2 border-black py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6" />
              <span className="font-semibold">w3aa.xyz</span>
            </div>
            <p className="text-sm text-black/80">
              Establishing unified accounting standards for tokenized financial instruments.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="#features" className="hover:text-black">Features</a></li>
              <li><a href="#events" className="hover:text-black">Events</a></li>
              <li><a href="#questions" className="hover:text-black">Questions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-black/80">
              <li><a href="#" className="hover:text-black">Documentation</a></li>
              <li><a href="#" className="hover:text-black">Standards</a></li>
              <li><a href="#" className="hover:text-black">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-black/80">
              <li>San Francisco, CA</li>
              <li>contact@w3aa.xyz</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t-2 border-black text-center text-sm text-black/60">
          <p>© 2024 Web3 Accounting Alliance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;