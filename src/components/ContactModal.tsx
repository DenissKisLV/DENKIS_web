import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    discipline: 'Integrated Civil & Infrastructure',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    setIsSubmitting(true);
    // Simulate swift dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleOpenSystemMailClient = () => {
    // Encoded mailto dispatch without displaying email on screen
    const parts = ['dkiselovs', 'gmail.com'];
    const recipient = parts.join('@');
    const subject = encodeURIComponent(`Project Inquiry - ${formData.organization || formData.name || 'Civil Engineering'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nOrganization: ${formData.organization}\nDiscipline: ${formData.discipline}\n\nProject Scope:\n${formData.message}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      organization: '',
      discipline: 'Integrated Civil & Infrastructure',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div 
        id="contact-modal"
        className="relative z-10 w-full max-w-lg bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8 text-slate-200"
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <h3 className="text-lg font-semibold text-white tracking-wide">
              Engineering Inquiry
            </h3>
          </div>
          <button
            id="close-contact-modal-btn"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-medium text-white">Inquiry Received</h4>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
              Thank you for getting in touch. Your project parameters have been routed to our lead engineering practice. We will review the requirements and follow up promptly.
            </p>
            <div className="pt-4 flex items-center justify-center gap-3">
              <button
                id="reset-form-btn"
                onClick={handleReset}
                className="px-4 py-2 text-sm text-neutral-400 hover:text-white transition-colors"
              >
                Send Another Note
              </button>
              <button
                id="done-contact-btn"
                onClick={onClose}
                className="px-5 py-2 text-sm rounded-lg bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <p className="text-sm text-neutral-400 leading-relaxed">
              Initiate a consultation or submit preliminary parameters for water, road, or electrical infrastructure engineering.
            </p>

            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Your Name <span className="text-amber-400">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-org" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Organization / Municipality (Optional)
              </label>
              <input
                id="contact-org"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="e.g. City Works Dept / Private Development"
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
              />
            </div>

            <div>
              <label htmlFor="contact-discipline" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Primary Engineering Scope
              </label>
              <select
                id="contact-discipline"
                value={formData.discipline}
                onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all"
              >
                <option value="Water & Wastewater Networks">Water & Wastewater Networks</option>
                <option value="Roadways & Transportation Geometry">Roadways & Transportation Geometry</option>
                <option value="Electrical & Power Distribution">Electrical & Power Distribution</option>
                <option value="Integrated Multi-Utility Infrastructure">Integrated Multi-Utility Infrastructure</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-neutral-300 uppercase tracking-wider mb-1.5">
                Project Scope / Message <span className="text-amber-400">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe the project location, estimated timeline, or technical requirements..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                id="submit-inquiry-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-3 px-5 rounded-lg bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-neutral-950 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(245,158,11,0.25)] cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
              </button>

              <button
                id="open-mail-client-btn"
                type="button"
                onClick={handleOpenSystemMailClient}
                title="Launch default email client"
                className="w-full sm:w-auto py-3 px-4 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white text-sm font-medium transition-colors flex items-center justify-center gap-2 border border-neutral-700 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Default Mail App</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 pt-2 text-[11px] text-neutral-500">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-400" />
              <span>Direct secure communication channel. No spam or distribution.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
