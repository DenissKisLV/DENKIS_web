import React from 'react';
import { DenkisLogo } from './DenkisLogo';
import { PRACTICE_INFO } from '../data/practiceData';
import { Mail, Compass, QrCode, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenLogoModal: () => void;
  onOpenBusinessCard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLogoModal, onOpenBusinessCard }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 bg-cad-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Practice Info */}
          <div className="md:col-span-5 space-y-4">
            <DenkisLogo size="md" variant="dark" showSubtitle={true} />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Specialized engineering practice providing unified civil design, hydraulic network modeling, road alignments, and electrical infrastructure for public utilities and private development.
            </p>
            <div className="text-xs font-mono text-slate-400">
              Principal: <span className="text-white font-medium">{PRACTICE_INFO.founder}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-slate-200 font-bold uppercase tracking-wider block">
              Disciplines
            </span>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#disciplines" className="hover:text-sky-400 transition-colors">
                  Water &amp; Wastewater Systems
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-emerald-400 transition-colors">
                  Road &amp; Geometric Design
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-amber-400 transition-colors">
                  Electrical Grid Infrastructure
                </a>
              </li>
              <li>
                <a href="#works" className="hover:text-white transition-colors">
                  Project Works Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions & Brand Resources */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-slate-200 font-bold uppercase tracking-wider block">
              Practice Assets
            </span>
            <div className="space-y-2">
              <button
                onClick={onOpenLogoModal}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-3.5 h-3.5 text-sky-400" />
                  <span>Proposed DENKIS Logo Specs &amp; SVG</span>
                </span>
                <span className="text-[10px] text-slate-500">View</span>
              </button>

              <button
                onClick={onOpenBusinessCard}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <QrCode className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Digital Business Card &amp; .VCF</span>
                </span>
                <span className="text-[10px] text-slate-500">Save</span>
              </button>

              <a
                href={`mailto:${PRACTICE_INFO.email}`}
                className="w-full text-left p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>{PRACTICE_INFO.email}</span>
                </span>
                <span className="text-[10px] text-slate-500">Mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} DENKIS Engineering. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
