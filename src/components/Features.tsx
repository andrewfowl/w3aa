import React from 'react';
import { BookOpen, Calendar, Users } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Unified Standards",
      description: "Establishing comprehensive accounting standards for tokenized financial instruments aligned with U.S. GAAP and IFRS."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Industry Collaboration",
      description: "Bringing together professionals, companies, and institutions across accounting, finance, and blockchain sectors."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Regular Forums",
      description: "Join our regular forums addressing pressing challenges in digital asset accounting."
    }
  ];

  return (
    <div className="py-16 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">Why Join the Alliance?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border-2 border-black hover:border-black/70 transition-colors"
            >
              <div className="mb-4 text-black">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-black">{feature.title}</h3>
              <p className="text-black/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;