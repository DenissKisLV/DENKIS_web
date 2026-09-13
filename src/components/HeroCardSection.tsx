import React, { useState } from 'react';
import { DenkisLogo } from './DenkisLogo';
import { PRACTICE_INFO } from '../data/practiceData';
import { Mail, MapPin, Download, QrCode, ArrowDown, Sparkles, Droplets, Navigation, Zap, RotateCw, ExternalLink } from 'lucide-react';

interface HeroCardSectionProps {
  onOpenLogoModal: () => void;
  onOpenBusinessCardModal: () => void;
}

export const HeroCardSection: React.FC<HeroCardSectionProps> = ({
  onOpenLogoModal,
  onOpenBusinessCardModal,
}) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

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

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28 bg-white border-b border-slate-200 bg-cad-grid">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Practice Identity & Core Disciplines */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Practice Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono font-medium shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Civil &amp; Municipal Infrastructure Practice</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                Precision Infrastructure Design.
              </h1>
              <p className="text-xl sm:text-2xl font-mono text-slate-600 font-medium">
                Water <span className="text-sky-500">•</span> Road{' '}
                <span className="text-emerald-500">•</span> Electrical
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
              <strong>DENKIS</strong> provides comprehensive engineering design for municipal utilities, transportation networks, and power distribution grids. Founded by <strong>{PRACTICE_INFO.founder}</strong>, we deliver fully coordinated 3D civil models, hydraulic calculations, and authority-ready construction packages.
            </p>

            {/* Proposed Logo Banner */}
            <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-sky-600 text-white shadow-2xs">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-xs font-mono font-bold text-sky-950 uppercase tracking-wide block">
                    Proposed Brand Identity for DENKIS
                  </span>
                  <span className="text-xs text-sky-800">
                    A unified 'D' monogram synthesizing hydraulic wave, highway corridor, and power pulse.
                  </span>
                </div>
              </div>
              <button
                onClick={onOpenLogoModal}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold text-sky-900 bg-white border border-sky-300 hover:bg-sky-100/80 transition-colors shadow-2xs whitespace-nowrap"
              >
                <span>Inspect Logo &amp; SVG</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Discipline Summary Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-sky-100 text-sky-700 shrink-0">
                  <Droplets className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Water Systems</span>
                  <span className="text-[10px] text-slate-500 font-mono">Pipes, Reticulation, SUDS</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                  <Navigation className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Road Design</span>
                  <span className="text-[10px] text-slate-500 font-mono">Corridors, Pavements</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/90 flex items-center gap-2.5">
                <span className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                  <Zap className="w-4 h-4" />
                </span>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Electrical Grid</span>
                  <span className="text-[10px] text-slate-500 font-mono">MV/LV Power &amp; Lighting</span>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#works"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-semibold shadow-xs transition-colors"
              >
                <span>Explore Works &amp; Portfolio</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 text-xs font-mono font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Inquire About Project</span>
              </a>
            </div>
          </div>

          {/* Right Column: Physical-Feel Interactive Digital Business Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md perspective-1000">
              {/* Top Hint Bar */}
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                  <QrCode className="w-4 h-4 text-slate-800" />
                  Official Business Card
                </span>
                <button
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-[11px] text-slate-700 shadow-2xs transition-colors"
                >
                  <RotateCw className="w-3 h-3" />
                  Flip
                </button>
              </div>

              {/* 3D Flippable Card */}
              <div
                className={`relative w-full min-h-[290px] rounded-3xl transition-transform duration-700 preserve-3d cursor-pointer shadow-2xl border border-slate-800/20 ${
                  isCardFlipped ? 'rotate-y-180' : ''
                }`}
                onClick={() => setIsCardFlipped(!isCardFlipped)}
                title="Click card to flip"
              >
                {/* Front Side */}
                <div className="absolute inset-0 backface-hidden bg-slate-950 text-white rounded-3xl p-8 flex flex-col justify-between border border-slate-800 bg-cad-grid-dark">
                  <div className="flex items-start justify-between">
                    <DenkisLogo size="md" variant="dark" showSubtitle={false} />
                    <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Consultancy
                    </div>
                  </div>

                  <div className="my-2 space-y-1">
                    <h3 className="text-xl font-bold font-mono tracking-wide text-white">
                      {PRACTICE_INFO.founder}
                    </h3>
                    <p className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                      Principal Infrastructure Engineer
                    </p>
                    <p className="text-[11px] text-slate-400 font-sans pt-1">
                      Water &amp; Wastewater • Roads &amp; Transport • Electrical Power
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                    <span className="flex items-center gap-2 truncate">
                      <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="truncate">{PRACTICE_INFO.email}</span>
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase shrink-0">
                      Click to flip
                    </span>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white text-slate-900 rounded-3xl p-8 flex flex-col justify-between border border-slate-200 shadow-xl bg-cad-grid">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                      Engineering Scope
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      Certified Practice
                    </span>
                  </div>

                  <div className="space-y-2.5 my-2 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                      <span className="font-semibold text-slate-800">Water:</span>
                      <span className="text-slate-600 text-[11px]">Potable networks, wastewater, SUDS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                      <span className="font-semibold text-slate-800">Road:</span>
                      <span className="text-slate-600 text-[11px]">Alignments, junctions, asphalt structures</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-800">Electrical:</span>
                      <span className="text-slate-600 text-[11px]">MV/LV cable routing &amp; streetlighting</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span className="flex items-center gap-1 text-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{PRACTICE_INFO.location}</span>
                    </span>
                    <span className="text-sky-700 font-bold">DENKIS</span>
                  </div>
                </div>
              </div>

              {/* Card Action Underlay */}
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={handleDownloadVCard}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono text-xs font-semibold shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download .VCF Card</span>
                </button>
                <button
                  onClick={onOpenBusinessCardModal}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold transition-colors shadow-2xs"
                  title="Expand card in modal"
                >
                  <QrCode className="w-4 h-4 text-slate-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
