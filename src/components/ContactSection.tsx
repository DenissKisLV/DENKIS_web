import React, { useState } from 'react';
import { PRACTICE_INFO } from '../data/practiceData';
import { Mail, Phone, MapPin, Send, Check, Copy, Clock, Download, ArrowRight, ShieldCheck } from 'lucide-react';

interface ContactSectionProps {
  onOpenBusinessCard: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBusinessCard }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    disciplines: {
      water: false,
      road: false,
      electrical: false,
    },
    message: '',
    timeline: 'Standard (1–3 Months)',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PRACTICE_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleDownloadVCard = () => {
    const vCardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:D. Kiselovs',
      'N:Kiselovs;D.;;;M.Sc. Eng.',
      'ORG:DENKIS Engineering;Infrastructure Design',
      'TITLE:Principal Infrastructure Design Engineer',
      `EMAIL;TYPE=INTERNET,PREF:${PRACTICE_INFO.email}`,
      `TEL;TYPE=WORK,VOICE:${PRACTICE_INFO.phone}`,
      `ADR;TYPE=WORK:;;${PRACTICE_INFO.location}`,
      'NOTE:Water, Road & Electrical Infrastructure Design Practice.',
      'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'denkis-engineering-contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedDisc = Object.entries(formData.disciplines)
      .filter(([_, val]) => val)
      .map(([key]) => key.toUpperCase())
      .join(', ') || 'GENERAL INQUIRY';

    const subject = encodeURIComponent(`[DENKIS RFP] ${selectedDisc} - ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Hello DENKIS Engineering,\n\n` +
      `Name: ${formData.name}\n` +
      `Organization: ${formData.organization || 'Individual'}\n` +
      `Email: ${formData.email}\n` +
      `Disciplines: ${selectedDisc}\n` +
      `Estimated Timeline: ${formData.timeline}\n\n` +
      `Project Description:\n${formData.message}\n\n` +
      `Sent via DENKIS Practice Portal`
    );

    // Open user's email client with pre-filled content
    window.location.href = `mailto:${PRACTICE_INFO.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Engineering Inquiries &amp; Consultations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Initiate an Infrastructure Project
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Discuss your upcoming water, road, or electrical engineering assignment directly with the principal design engineer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Business Card Portal */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6 shadow-xs">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Engineering Practice
                </span>
                <h3 className="text-xl font-bold font-mono text-slate-900 mt-1">
                  {PRACTICE_INFO.companyName} Engineering
                </h3>
                <p className="text-xs text-sky-600 font-mono mt-0.5">
                  {PRACTICE_INFO.founder}
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start justify-between gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <span className="p-2 rounded-xl bg-sky-50 text-sky-600">
                      <Mail className="w-4 h-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        Direct Email
                      </span>
                      <a
                        href={`mailto:${PRACTICE_INFO.email}`}
                        className="text-sm font-semibold font-mono text-slate-900 hover:text-sky-600 transition-colors"
                      >
                        {PRACTICE_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Geographic Base &amp; Scope
                    </span>
                    <span className="text-xs font-medium text-slate-800">
                      {PRACTICE_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Turnaround */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200/80">
                  <span className="p-2 rounded-xl bg-amber-50 text-amber-600">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-slate-400 block">
                      Initial Response Window
                    </span>
                    <span className="text-xs font-medium text-slate-800">
                      Within 24 Business Hours
                    </span>
                  </div>
                </div>
              </div>

              {/* Digital Business Card Shortcuts */}
              <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={onOpenBusinessCard}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
                >
                  <span>Open 3D Business Card</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleDownloadVCard}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  .VCF Card
                </button>
              </div>
            </div>

            {/* Certifications Badge */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-sky-400 uppercase">
                <ShieldCheck className="w-4 h-4" />
                Professional Assurances
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                {PRACTICE_INFO.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive RFP / Project Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <h3 className="text-xl font-bold text-slate-900">
              Project Specification &amp; Inquiry Form
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Submit your project parameters. A direct email draft will be initiated to {PRACTICE_INFO.email}.
            </p>

            {formSubmitted && (
              <div className="my-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center justify-between">
                <span>Inquiry opened in your mail client. We will respond promptly.</span>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-emerald-700 underline font-semibold ml-2"
                >
                  Edit Again
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              {/* Name & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                    Your Name / Contact *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe, Project Lead"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                    Organization / Municipality
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. City Council / Developer Ltd."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="contact@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all"
                />
              </div>

              {/* Disciplines Checkboxes */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-2">
                  Required Disciplines (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <label
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      formData.disciplines.water
                        ? 'bg-sky-50 border-sky-300 text-sky-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.disciplines.water}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          disciplines: { ...formData.disciplines, water: e.target.checked },
                        })
                      }
                      className="rounded text-sky-600 focus:ring-sky-500"
                    />
                    <span>Water / Wastewater</span>
                  </label>

                  <label
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      formData.disciplines.road
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.disciplines.road}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          disciplines: { ...formData.disciplines, road: e.target.checked },
                        })
                      }
                      className="rounded text-emerald-600 focus:ring-emerald-500"
                    />
                    <span>Road &amp; Transit</span>
                  </label>

                  <label
                    className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all ${
                      formData.disciplines.electrical
                        ? 'bg-amber-50 border-amber-300 text-amber-900'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={formData.disciplines.electrical}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          disciplines: { ...formData.disciplines, electrical: e.target.checked },
                        })
                      }
                      className="rounded text-amber-600 focus:ring-amber-500"
                    />
                    <span>Electrical Grid</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono font-semibold uppercase text-slate-700 mb-1">
                  Project Scope / Technical Requirements *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the site context, estimated corridor length, flow requirements, or design stage..."
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-slate-900 transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm tracking-wide shadow-md transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Transmit Project Inquiry to Principal Engineer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
