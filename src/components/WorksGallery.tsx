import React, { useState } from 'react';
import { PROJECTS } from '../data/practiceData';
import { ProjectWork, DisciplineId } from '../types';
import { Layers, MapPin, Calendar, ArrowUpRight, X, CheckCircle, Cpu } from 'lucide-react';

interface WorksGalleryProps {
  selectedDisciplineFilter?: DisciplineId | 'all';
  onFilterChange?: (filter: DisciplineId | 'all') => void;
}

export const WorksGallery: React.FC<WorksGalleryProps> = ({
  selectedDisciplineFilter = 'all',
  onFilterChange,
}) => {
  const [filter, setFilter] = useState<DisciplineId | 'all'>(selectedDisciplineFilter);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectWork | null>(null);

  const currentFilter = onFilterChange ? selectedDisciplineFilter : filter;
  const setActualFilter = (f: DisciplineId | 'all') => {
    if (onFilterChange) {
      onFilterChange(f);
    } else {
      setFilter(f);
    }
  };

  const filteredProjects =
    currentFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.disciplineId === currentFilter);

  return (
    <section id="works" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-mono font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Project Portfolio &amp; Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Selected Works &amp; Infrastructure Projects
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              Representative civil, hydraulic, and power distribution engineering commissions developed to full permitting and construction maturity.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 self-start">
            <button
              onClick={() => setActualFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                currentFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Works ({PROJECTS.length})
            </button>
            <button
              onClick={() => setActualFilter('water')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                currentFilter === 'water'
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Water &amp; Wastewater
            </button>
            <button
              onClick={() => setActualFilter('road')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                currentFilter === 'road'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Road Design
            </button>
            <button
              onClick={() => setActualFilter('electrical')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                currentFilter === 'electrical'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Electrical Grid
            </button>
          </div>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isWater = project.disciplineId === 'water';
            const isRoad = project.disciplineId === 'road';
            const badgeColor = isWater
              ? 'bg-sky-50 text-sky-700 border-sky-200'
              : isRoad
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : 'bg-amber-50 text-amber-700 border-amber-200';

            return (
              <div
                key={project.id}
                className="group flex flex-col bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Discipline Badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold border backdrop-blur-md shadow-xs ${badgeColor}`}
                    >
                      {project.disciplineName}
                    </span>
                  </div>

                  {/* Year Tag */}
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur text-white text-[11px] font-mono px-2.5 py-1 rounded-lg">
                    {project.year}
                  </div>

                  {/* Quick location banner */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center text-white/90 text-xs font-mono">
                    <MapPin className="w-3.5 h-3.5 mr-1 text-sky-400" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">
                      {project.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Metrics Chips */}
                  <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                        <span className="text-[10px] uppercase font-mono text-slate-400 block">
                          {metric.label}
                        </span>
                        <span className="text-sm font-extrabold font-mono text-slate-800">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white font-semibold text-xs transition-colors duration-200"
                  >
                    <span>Inspect Engineering Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Expanded Project Inspection Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold">
                  {activeProjectModal.disciplineName}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {activeProjectModal.year}
                </span>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-16/9 w-full bg-slate-900">
              <img
                src={activeProjectModal.imageUrl}
                alt={activeProjectModal.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {activeProjectModal.title}
                </h3>
                <p className="text-sm font-mono text-slate-500 mt-1">
                  {activeProjectModal.subtitle} • {activeProjectModal.location}
                </p>
                <p className="text-sm text-slate-700 mt-4 leading-relaxed">
                  {activeProjectModal.description}
                </p>
              </div>

              {/* Engineering Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeProjectModal.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block">
                      {m.label}
                    </span>
                    <span className="text-base font-bold font-mono text-slate-900">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Engineering Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-1.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-amber-900">
                    The Engineering Challenge
                  </h4>
                  <p className="text-xs text-amber-800/90 leading-relaxed">
                    {activeProjectModal.challenge}
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-1.5">
                  <h4 className="text-xs font-mono font-bold uppercase text-emerald-900">
                    The DENKIS Solution
                  </h4>
                  <p className="text-xs text-emerald-800/90 leading-relaxed">
                    {activeProjectModal.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables & Software */}
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-800 mb-2">
                    Key Permitting &amp; Design Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeProjectModal.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-slate-800 mb-2 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-slate-500" />
                    Engineering Software Utilized
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.softwareUsed.map((soft, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                      >
                        {soft}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close / Action footer */}
              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close Inspection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
