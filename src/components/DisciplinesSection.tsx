import React, { useState } from 'react';
import { DISCIPLINES } from '../data/practiceData';
import { DisciplineId } from '../types';
import { Droplets, Navigation, Zap, CheckCircle2, ChevronRight, FileText, Settings, ArrowUpRight } from 'lucide-react';

interface DisciplinesSectionProps {
  onSelectDisciplineForProject?: (disciplineId: DisciplineId) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({ onSelectDisciplineForProject }) => {
  const [activeTab, setActiveTab] = useState<DisciplineId>('water');

  const activeDiscipline = DISCIPLINES.find((d) => d.id === activeTab) || DISCIPLINES[0];

  const getIcon = (id: DisciplineId, className: string = 'w-5 h-5') => {
    switch (id) {
      case 'water':
        return <Droplets className={className} />;
      case 'road':
        return <Navigation className={className} />;
      case 'electrical':
        return <Zap className={className} />;
    }
  };

  return (
    <section id="disciplines" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-sky-500" />
            Core Engineering Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Integrated Civil &amp; Utility Disciplines
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            DENKIS delivers authoritative design solutions across the three foundational arteries of municipal infrastructure. Each discipline is executed with full 3D modeling, regulatory compliance, and cross-utility coordination.
          </p>
        </div>

        {/* 3 Discipline Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {DISCIPLINES.map((discipline) => {
            const isSelected = discipline.id === activeTab;
            return (
              <button
                key={discipline.id}
                onClick={() => setActiveTab(discipline.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-200 relative overflow-hidden group ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.01]'
                    : 'bg-slate-50 text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-white'
                }`}
              >
                {isSelected && (
                  <div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ backgroundColor: discipline.color.primary }}
                  />
                )}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`p-2.5 rounded-xl ${
                      isSelected
                        ? 'bg-slate-800 text-white'
                        : 'bg-white text-slate-700 shadow-2xs border border-slate-200'
                    }`}
                    style={isSelected ? { color: discipline.color.primary } : {}}
                  >
                    {getIcon(discipline.id)}
                  </span>
                  <span
                    className={`text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      isSelected ? 'bg-slate-800 text-slate-300' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    Discipline 0{discipline.id === 'water' ? '1' : discipline.id === 'road' ? '2' : '3'}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug">
                  {discipline.title}
                </h3>
                <p
                  className={`text-xs mt-1.5 line-clamp-2 ${
                    isSelected ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {discipline.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Discipline Deep-Dive Canvas */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
          {/* Subtle watermark discipline ID */}
          <div className="absolute right-6 top-6 text-7xl font-mono-tech font-extrabold text-slate-200/40 pointer-events-none select-none">
            0{activeDiscipline.id === 'water' ? '1' : activeDiscipline.id === 'road' ? '2' : '3'}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Column: Scope & Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: activeDiscipline.color.primary }}
                  />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                    Design Scope &amp; Methodology
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {activeDiscipline.title}
                </h3>
                <p className="mt-3 text-slate-700 text-base leading-relaxed">
                  {activeDiscipline.description}
                </p>
              </div>

              {/* Core Engineering Services */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                  <Settings className="w-4 h-4 text-slate-500" />
                  Key Engineering Deliverables &amp; Solutions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeDiscipline.coreServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activeDiscipline.color.primary }}
                      />
                      <span className="text-xs font-medium text-slate-700 leading-snug">
                        {service}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Standards, Deliverables & Call to Action */}
            <div className="lg:col-span-5 space-y-6">
              {/* Technical Standards Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-500" />
                  Design Codes &amp; Standards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeDiscipline.designStandards.map((std, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables Box */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  Standard Documentation Package
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  {activeDiscipline.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: activeDiscipline.color.primary }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* View sample project button */}
              {onSelectDisciplineForProject && (
                <button
                  onClick={() => onSelectDisciplineForProject(activeDiscipline.id)}
                  className="w-full inline-flex items-center justify-between px-5 py-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs tracking-wide transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <span>View {activeDiscipline.title.split('&')[0].trim()} Project Case</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
