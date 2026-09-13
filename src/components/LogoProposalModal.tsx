import React, { useState } from 'react';
import { DenkisLogo } from './DenkisLogo';
import { Download, Copy, Check, Sparkles, X, Layers, Droplets, Navigation, Zap, Compass } from 'lucide-react';

interface LogoProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogoProposalModal: React.FC<LogoProposalModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'default' | 'blueprint' | 'dark' | 'monochrome'>('default');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const rawSvgCode = `<svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="denkisWaterGrad" x1="20" y1="20" x2="85" y2="45" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="denkisRoadGrad" x1="40" y1="35" x2="90" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <linearGradient id="denkisElectricGrad" x1="20" y1="50" x2="70" y2="85" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="47" stroke="rgba(15, 23, 42, 0.12)" stroke-width="1.5" stroke-dasharray="3 3"/>
  <rect x="22" y="18" width="10" height="64" rx="2" fill="#0f172a"/>
  <line x1="20" y1="28" x2="24" y2="28" stroke="#ffffff" stroke-width="1.5"/>
  <line x1="20" y1="50" x2="25" y2="50" stroke="#ffffff" stroke-width="2"/>
  <line x1="20" y1="72" x2="24" y2="72" stroke="#ffffff" stroke-width="1.5"/>
  <path d="M 32 23 C 58 23, 84 32, 84 50 C 84 52, 81 54, 76 53 C 71 52, 60 41, 32 37 Z" fill="url(#denkisWaterGrad)"/>
  <path d="M 35 30 C 52 30, 70 36, 74 46" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M 32 43 C 65 46, 86 52, 86 66 C 86 78, 62 82, 32 82 L 32 72 C 55 72, 74 69, 74 63 C 74 57, 56 54, 32 52 Z" fill="url(#denkisRoadGrad)"/>
  <path d="M 36 62 C 48 62, 62 61, 72 63" stroke="#ffffff" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"/>
  <path d="M 32 50 L 52 50 L 44 68 L 64 68 L 38 86 L 42 70 L 32 70 Z" fill="url(#denkisElectricGrad)"/>
  <circle cx="64" cy="68" r="3" fill="#d97706" stroke="#ffffff" stroke-width="1"/>
</svg>`;

  const handleCopySvg = () => {
    navigator.clipboard.writeText(rawSvgCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadSvg = () => {
    const blob = new Blob([rawSvgCode], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'denkis-engineering-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-lg bg-sky-50 text-sky-600">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                Proposed Brand Identity for DENKIS
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Concept v1.0
                </span>
              </h3>
              <p className="text-xs text-slate-500">
                Geometric monogram uniting Water, Road, and Electrical infrastructure disciplines
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Visual Showcase Stage */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-500">
                Display Environment
              </span>
              <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-medium">
                <button
                  onClick={() => setActiveTab('default')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'default' ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Primary Lockup
                </button>
                <button
                  onClick={() => setActiveTab('blueprint')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'blueprint' ? 'bg-sky-900 text-sky-100 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  CAD Blueprint
                </button>
                <button
                  onClick={() => setActiveTab('dark')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'dark' ? 'bg-slate-900 text-white shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Titanium Dark
                </button>
                <button
                  onClick={() => setActiveTab('monochrome')}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeTab === 'monochrome' ? 'bg-slate-800 text-white shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Document Stamp
                </button>
              </div>
            </div>

            {/* Interactive Preview Canvas */}
            <div
              className={`relative rounded-xl p-10 flex flex-col items-center justify-center transition-colors duration-300 min-h-[220px] border ${
                activeTab === 'blueprint'
                  ? 'bg-[#0b1b36] border-sky-900/60 bg-cad-grid-dark'
                  : activeTab === 'dark'
                  ? 'bg-slate-900 border-slate-800 bg-cad-grid-dark'
                  : activeTab === 'monochrome'
                  ? 'bg-white border-slate-300'
                  : 'bg-gradient-to-b from-slate-50 to-slate-100/70 border-slate-200 bg-cad-grid'
              }`}
            >
              <DenkisLogo
                size="xl"
                variant={activeTab}
                showSubtitle={true}
              />

              <span
                className={`mt-4 text-[11px] font-mono tracking-widest uppercase ${
                  activeTab === 'blueprint'
                    ? 'text-sky-400'
                    : activeTab === 'dark'
                    ? 'text-slate-400'
                    : 'text-slate-500'
                }`}
              >
                Scale: 1:1 Engineering Vector Construction • Ratio 1:1 Emblem
              </span>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="text-xs text-slate-500">
                Vector format ready for CAD title blocks, letterheads, and site signs.
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopySvg}
                  className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied Code!' : 'Copy SVG'}
                </button>
                <button
                  onClick={handleDownloadSvg}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-sm transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download .SVG
                </button>
              </div>
            </div>
          </div>

          {/* Design Anatomy & Symbolism Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-slate-600" />
              Design Geometry &amp; Symbolism
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Pillar 1: Water */}
              <div className="p-4 rounded-xl border border-sky-100 bg-sky-50/50 space-y-2">
                <div className="flex items-center gap-2 text-sky-700 font-bold text-sm">
                  <span className="p-1.5 bg-sky-100 rounded-lg">
                    <Droplets className="w-4 h-4" />
                  </span>
                  1. Upper Hydraulic Arc
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Represents <strong>Water &amp; Wastewater</strong>. A fluid, parabolic curve symbolising pressurized conduit flow, hydraulic gradient lines, and aqueduct geometry.
                </p>
                <div className="text-[11px] font-mono text-sky-800 pt-1">
                  Hex: #0284C7 • Azure Sky
                </div>
              </div>

              {/* Pillar 2: Road */}
              <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <span className="p-1.5 bg-emerald-100 rounded-lg">
                    <Navigation className="w-4 h-4" />
                  </span>
                  2. Transit Corridor Curve
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Represents <strong>Road &amp; Transport</strong>. Outer perimeter tracing parallel dual-lane carriage curves with civil engineering dashed centerline markings.
                </p>
                <div className="text-[11px] font-mono text-emerald-800 pt-1">
                  Hex: #059669 • Civil Emerald
                </div>
              </div>

              {/* Pillar 3: Electrical */}
              <div className="p-4 rounded-xl border border-amber-100 bg-amber-50/50 space-y-2">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-sm">
                  <span className="p-1.5 bg-amber-100 rounded-lg">
                    <Zap className="w-4 h-4" />
                  </span>
                  3. Dynamic Pulse &amp; Node
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Represents <strong>Electrical Infrastructure</strong>. Diagonal 60° vector connecting the central datum spine to the outer curve with an electrical grid termination node.
                </p>
                <div className="text-[11px] font-mono text-amber-800 pt-1">
                  Hex: #D97706 • Copper Power
                </div>
              </div>
            </div>

            {/* The Unified Datum Concept */}
            <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
              <div className="flex items-center justify-between">
                <h5 className="text-xs font-bold font-mono text-slate-800 uppercase tracking-wide">
                  The Letter "D" + Vertical Datum Spine
                </h5>
                <span className="text-[11px] font-mono text-slate-500">
                  Civil Benchmark Reference
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                The vertical foundation bar acts as an engineering datum axis (elevation survey staff with tick marks). Together, the three discipline conduits sweep out the authoritative letter <strong>"D"</strong> for <strong>DENKIS</strong>, communicating integrated civil discipline under a single rigorous practice.
              </p>
            </div>
          </div>

          {/* Practical Application Specs */}
          <div className="p-4 rounded-xl bg-slate-900 text-white space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
              <Sparkles className="w-3.5 h-3.5" />
              Technical Implementation Guide
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Primary Font</span>
                <span className="font-mono font-semibold text-slate-200">JetBrains Mono Bold</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Tracking / Kerning</span>
                <span className="font-mono font-semibold text-slate-200">+0.18em Extended</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Title Block Ratio</span>
                <span className="font-mono font-semibold text-slate-200">1:1 Square Stamp</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[11px]">Permit Submissions</span>
                <span className="font-mono font-semibold text-slate-200">Monochrome 0.25mm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
