import React, { useState } from 'react';
import { DenkisLogo } from './DenkisLogo';
import { Compass, QrCode, Mail, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenLogoModal: () => void;
  onOpenBusinessCard: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenLogoModal, onOpenBusinessCard }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3">
            <DenkisLogo size="md" variant="full" showSubtitle={true} />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono font-semibold uppercase tracking-wider text-slate-600">
            <a href="#disciplines" className="hover:text-slate-900 transition-colors">
              Disciplines
            </a>
            <a href="#works" className="hover:text-slate-900 transition-colors">
              Works &amp; Portfolio
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Logo Proposal Button */}
            <button
              onClick={onOpenLogoModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-colors"
              title="Inspect proposed DENKIS logo identity and rationale"
            >
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              <span>Proposed Logo</span>
            </button>

            {/* Business Card Button */}
            <button
              onClick={onOpenBusinessCard}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-white bg-slate-900 hover:bg-slate-800 shadow-xs transition-colors"
              title="Open tactile 3D business card & vCard"
            >
              <QrCode className="w-3.5 h-3.5 text-sky-400" />
              <span>Business Card</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBusinessCard}
              className="p-2 rounded-lg bg-slate-100 text-slate-800"
              aria-label="Business Card"
            >
              <QrCode className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 font-mono text-xs">
          <a
            href="#disciplines"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-slate-900"
          >
            Disciplines
          </a>
          <a
            href="#works"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-slate-900"
          >
            Works &amp; Portfolio
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2 text-slate-700 hover:text-slate-900"
          >
            Contact Practice
          </a>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenLogoModal();
              }}
              className="w-full text-left py-2 px-3 rounded-lg bg-slate-100 text-slate-800 flex items-center justify-between"
            >
              <span>Inspect Proposed Logo</span>
              <Compass className="w-4 h-4 text-sky-600" />
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBusinessCard();
              }}
              className="w-full text-left py-2 px-3 rounded-lg bg-slate-900 text-white flex items-center justify-between"
            >
              <span>Open Business Card (.VCF)</span>
              <QrCode className="w-4 h-4 text-sky-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
