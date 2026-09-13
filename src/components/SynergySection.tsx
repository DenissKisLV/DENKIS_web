import React from 'react';
import { SYNERGY_POINTS } from '../data/practiceData';
import { Layers, Boxes, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';

export const SynergySection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-5 h-5 text-sky-600" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-emerald-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-600" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-slate-700" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-sky-600" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden bg-cad-grid-dark shadow-xl">
          {/* Subtle background glow */}
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-sky-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-24 -top-24 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-sky-400 text-xs font-mono font-medium mb-4 border border-slate-700">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              The Tri-Discipline Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Why Unified Infrastructure Design Prevents On-Site Utility Failures
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              When water reticulation, road alignments, and electrical cable routing are handled by isolated sub-consultants, coordination delays and underground spatial collisions occur. DENKIS integrates all three disciplines from the first conceptual profile.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SYNERGY_POINTS.map((point, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm space-y-3 hover:border-slate-600 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 shadow-xs">
                  {getIcon(point.icon)}
                </div>
                <h3 className="text-lg font-bold text-white font-mono">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom engineering oath / banner */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <span>Unified Civil 3D Models • ISO &amp; Eurocode Compliant</span>
            <span className="text-sky-400">Direct Principal Engineer Accountability</span>
          </div>
        </div>
      </div>
    </section>
  );
};
