import React, { useState } from 'react';
import type { Question } from '../types';

const QuestionForm: React.FC = () => {
  const [formData, setFormData] = useState<Question>({
    name: '',
    email: '',
    topic: '',
    question: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()})
    console.log('Question submitted:', formData);
    setFormData({ name: '', email: '', topic: '', question: '' });
  };

  return (
    <div className="py-16 px-6 bg-[#f5f5dc]" id="questions">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Submit a Question</h2>
        <form onSubmit={handleSubmit} name="QuestionForm" method="POST" className="space-y-6" netlify>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border-2 border-black rounded-lg bg-[#f5f5dc] focus:outline-none focus:border-black/70"
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
              className="w-full px-3 py-2 border-2 border-black rounded-lg bg-[#f5f5dc] focus:outline-none focus:border-black/70"
              value={formData.email}
              onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Topic</label>
            <select
              required
              name="topic[]"
              className="w-full px-3 py-2 border-2 border-black rounded-lg bg-[#f5f5dc] focus:outline-none focus:border-black/70"
              value={formData.topic}
              onChange={e => setFormData(prev => ({ ...prev, topic: e.target.value }))}
            >
              <option value="">Select topic</option>
              <option value="standards">Accounting Standards</option>
              <option value="compliance">Regulatory Compliance</option>
              <option value="technical">Technical Implementation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Question</label>
            <textarea
              required
              name="question"
              rows={4}
              className="w-full px-3 py-2 border-2 border-black rounded-lg bg-[#f5f5dc] focus:outline-none focus:border-black/70"
              value={formData.question}
              onChange={e => setFormData(prev => ({ ...prev, question: e.target.value }))}
            />
          </div>

          <button
            type="submit"
            className="w-full border-2 border-black py-2 rounded-lg hover:bg-black hover:text-[#f5f5dc] transition-colors"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}

export default QuestionForm;
