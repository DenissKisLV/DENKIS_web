import React, { useState } from 'react';
import { DenkisLogo } from './DenkisLogo';
import { PRACTICE_INFO } from '../data/practiceData';
import { Download, Mail, Phone, MapPin, QrCode, Copy, Check, X, RotateCw, ShieldCheck } from 'lucide-react';

interface BusinessCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BusinessCardModal: React.FC<BusinessCardModalProps> = ({ isOpen, onClose }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
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
      'NOTE:Specialist in Water & Wastewater, Road & Highways, and Electrical Infrastructure Design.',
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-slate-200 rounded-lg text-slate-800">
              <QrCode className="w-4 h-4" />
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-700">
              Digital Business Card • DENKIS
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg transition-colors shadow-xs"
            >
              <RotateCw className="w-3.5 h-3.5" />
              Flip Card
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tactile 3D Card Stage */}
        <div className="p-6 md:p-8 bg-slate-100/60 flex flex-col items-center justify-center">
          <div className="w-full max-w-lg perspective-1000">
            <div
              className={`relative w-full min-h-[280px] rounded-2xl transition-transform duration-700 preserve-3d cursor-pointer shadow-xl ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Card Front */}
              <div className="absolute inset-0 backface-hidden bg-slate-900 text-white rounded-2xl p-7 flex flex-col justify-between border border-slate-800 bg-cad-grid-dark">
                {/* Top bar with Logo */}
                <div className="flex items-start justify-between">
                  <DenkisLogo size="md" variant="dark" showSubtitle={false} />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                    Infrastructure Design
                  </span>
                </div>

                {/* Middle details */}
                <div className="space-y-1 my-3">
                  <h3 className="text-xl font-bold text-white font-mono tracking-wide">
                    {PRACTICE_INFO.founder}
                  </h3>
                  <p className="text-xs text-sky-400 font-mono tracking-wider uppercase">
                    Principal Infrastructure Design Engineer
                  </p>
                  <p className="text-[11px] text-slate-400 pt-1 font-sans">
                    Water Supply &amp; Drainage • Road Alignments • Power Grid Distribution
                  </p>
                </div>

                {/* Bottom Card Footer */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Mail className="w-3.5 h-3.5 text-sky-400" />
                    {PRACTICE_INFO.email}
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase">
                    Click to flip
                  </span>
                </div>
              </div>

              {/* Card Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white text-slate-900 rounded-2xl p-7 flex flex-col justify-between border border-slate-300 shadow-md bg-cad-grid">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-mono font-bold uppercase text-slate-800">
                      Technical Practice Specs
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    Est. 2014
                  </span>
                </div>

                {/* Disciplines tags on card back */}
                <div className="space-y-2.5 my-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                    <span className="font-semibold text-slate-800">Water:</span>
                    <span className="text-slate-600 text-[11px]">Hydraulic networks, sewage mains &amp; retention</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-800">Road:</span>
                    <span className="text-slate-600 text-[11px]">Geometric alignment, pavement &amp; roundabouts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                    <span className="font-semibold text-slate-800">Electrical:</span>
                    <span className="text-slate-600 text-[11px]">MV/LV underground grid &amp; smart lighting</span>
                  </div>
                </div>

                {/* Card back contact bar */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span className="flex items-center gap-1 text-slate-700">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {PRACTICE_INFO.location}
                  </span>
                  <span className="text-sky-600 font-semibold">
                    DENKIS Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500 flex items-center gap-1.5">
            <RotateCw className="w-3.5 h-3.5" />
            Click on the card to flip between front credentials and practice disciplines
          </p>
        </div>

        {/* Quick Actions Footer */}
        <div className="p-6 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleCopy(PRACTICE_INFO.email, 'email')}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              {copiedField === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              {copiedField === 'email' ? 'Copied Email!' : 'Copy Email'}
            </button>
            <a
              href={`mailto:${PRACTICE_INFO.email}?subject=Project Inquiry - DENKIS Infrastructure Design`}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              Direct Mail
            </a>
          </div>

          <button
            onClick={handleDownloadVCard}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-sm transition-all"
          >
            <Download className="w-4 h-4" />
            Save Contact (vCard .VCF)
          </button>
        </div>
      </div>
    </div>
  );
};
