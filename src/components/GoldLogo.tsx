import React from 'react';

interface GoldLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const GoldLogo: React.FC<GoldLogoProps> = ({ size = 'md', showText = true }) => {
  const dimensions = {
    sm: { box: 36, fontSize: 'text-lg', subSize: 'text-[10px]' },
    md: { box: 44, fontSize: 'text-xl', subSize: 'text-xs' },
    lg: { box: 64, fontSize: 'text-3xl', subSize: 'text-sm' },
  }[size];

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Letter D in Gold Icon */}
      <div 
        className="relative flex items-center justify-center rounded-xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-amber-500/30 shadow-[0_4px_20px_rgba(212,175,55,0.15)]"
        style={{ width: dimensions.box, height: dimensions.box }}
      >
        <svg
          viewBox="0 0 100 100"
          className="w-4/5 h-4/5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldD" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FCE794" />
              <stop offset="30%" stopColor="#E2B857" />
              <stop offset="70%" stopColor="#C69228" />
              <stop offset="100%" stopColor="#F9D776" />
            </linearGradient>
            <linearGradient id="goldAccent" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFF1B8" />
              <stop offset="100%" stopColor="#966C15" />
            </linearGradient>
          </defs>

          {/* Letter D Form - Architectural & Geometric */}
          <path
            d="M26 18 H52 C71 18 82 29 82 50 C82 71 71 82 52 82 H26 V18 Z"
            stroke="url(#goldD)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner D Counter Aperture */}
          <path
            d="M40 33 H50 C61 33 67 39 67 50 C67 61 61 67 50 67 H40 V33 Z"
            fill="url(#goldAccent)"
            opacity="0.25"
          />
          {/* Precision drafting accent line */}
          <line
            x1="26"
            y1="50"
            x2="42"
            y2="50"
            stroke="url(#goldD)"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-bold tracking-wider text-slate-100 font-mono-tech ${dimensions.fontSize}`}>
              DENKIS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          </div>
          <span className={`tracking-widest uppercase text-amber-500/80 font-medium ${dimensions.subSize}`}>
            Infrastructure Design
          </span>
        </div>
      )}
    </div>
  );
};
