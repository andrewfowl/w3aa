import React, { useState } from 'react';
import { X } from 'lucide-react';

interface SignupFormProps {
  onClose: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interests: [] as string[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="bg-[#f5f5dc] p-8 rounded-lg max-w-md w-full relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-black/60 hover:text-black transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
      
      <h2 className="text-2xl font-bold text-black mb-6">Join the Forum</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4" name="signup" method="POST" data-netlify="true">
        <div>
          <label className="block text-sm font-medium text-black mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-3 py-2 border border-black/20 rounded bg-[#f5f5dc] focus:outline-none focus:border-black"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-black/20 rounded bg-[#f5f5dc] focus:outline-none focus:border-black"
            value={formData.email}
            onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Company</label>
          <input
            type="text"
            name="company"
            required
            className="w-full px-3 py-2 border border-black/20 rounded bg-[#f5f5dc] focus:outline-none focus:border-black"
            value={formData.company}
            onChange={e => setFormData(prev => ({ ...prev, company: e.target.value }))}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-1">Role</label>
          <select
            required
            name="role[]"
            className="w-full px-3 py-2 border border-black/20 rounded bg-[#f5f5dc] focus:outline-none focus:border-black"
            value={formData.role}
            onChange={e => setFormData(prev => ({ ...prev, role: e.target.value }))}
          >
            <option value="">Select role</option>
            <option value="accountant">Accountant</option>
            <option value="auditor">Auditor</option>
            <option value="blockchain-expert">Blockchain Expert</option>
            <option value="financial-analyst">Financial Analyst</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-black mb-2">Areas of Interest</label>
          <div className="space-y-2">
            {['Digital Asset Standards', 'Regulatory Compliance', 'Token Classification', 'Fair Value Accounting'].map(interest => (
              <label key={interest} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="interest"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="rounded border-black/20 text-black focus:ring-black"
                />
                <span className="text-sm text-black">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-black text-[#f5f5dc] py-2 rounded hover:bg-black/90 transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default SignupForm;
