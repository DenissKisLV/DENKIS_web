import React from 'react';

export interface DenkisLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'mark-only' | 'blueprint' | 'monochrome' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const DenkisLogo: React.FC<DenkisLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  showSubtitle = true,
}) => {
  // Dimensions map
  const sizeConfig = {
    sm: { iconSize: 32, textScale: 'text-lg', subScale: 'text-[9px]' },
    md: { iconSize: 42, textScale: 'text-2xl', subScale: 'text-[10px]' },
    lg: { iconSize: 56, textScale: 'text-3xl', subScale: 'text-xs' },
    xl: { iconSize: 84, textScale: 'text-5xl', subScale: 'text-sm' },
  }[size];

  // Palette handling based on variant
  const isBlueprint = variant === 'blueprint';
  const isMonochrome = variant === 'monochrome';
  const isDark = variant === 'dark';

  // Colors
  const waterColor = isBlueprint ? '#38bdf8' : isMonochrome ? '#334155' : isDark ? '#38bdf8' : '#0284c7';
  const roadColor = isBlueprint ? '#7dd3fc' : isMonochrome ? '#475569' : isDark ? '#34d399' : '#059669';
  const electricColor = isBlueprint ? '#bae6fd' : isMonochrome ? '#64748b' : isDark ? '#fbbf24' : '#d97706';
  const datumColor = isBlueprint ? '#0284c7' : isMonochrome ? '#0f172a' : isDark ? '#f8fafc' : '#0f172a';
  const textColor = isBlueprint ? '#e0f2fe' : isDark ? '#ffffff' : '#0f172a';
  const subTextColor = isBlueprint ? '#7dd3fc' : isDark ? '#94a3b8' : '#64748b';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Geometric SVG Emblem representing "D" + Water (wave) + Road (geometric corridor) + Electrical (energy vector) */}
      <svg
        width={sizeConfig.iconSize}
        height={sizeConfig.iconSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
        role="img"
        aria-label="DENKIS Logo Mark - Unified Infrastructure Design"
      >
        <defs>
          {/* Subtle gradients for modern depth */}
          <linearGradient id="denkisWaterGrad" x1="20" y1="20" x2="85" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={waterColor} />
            <stop offset="100%" stopColor={isMonochrome ? '#475569' : '#38bdf8'} />
          </linearGradient>

          <linearGradient id="denkisRoadGrad" x1="40" y1="35" x2="90" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={roadColor} />
            <stop offset="100%" stopColor={isMonochrome ? '#1e293b' : '#10b981'} />
          </linearGradient>

          <linearGradient id="denkisElectricGrad" x1="20" y1="50" x2="70" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={electricColor} />
            <stop offset="100%" stopColor={isMonochrome ? '#0f172a' : '#f59e0b'} />
          </linearGradient>
        </defs>

        {/* Outer subtle boundary / coordinate circle */}
        <circle
          cx="50"
          cy="50"
          r="47"
          stroke={isBlueprint ? 'rgba(56, 189, 248, 0.25)' : isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(15, 23, 42, 0.08)'}
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />

        {/* 1. Structural Vertical Datum Spine (Civil Alignment Foundation) */}
        <rect x="22" y="18" width="10" height="64" rx="2" fill={datumColor} />

        {/* Datum survey ticks / elevation marks */}
        <line x1="20" y1="28" x2="24" y2="28" stroke={isBlueprint ? '#bae6fd' : '#ffffff'} strokeWidth="1.5" />
        <line x1="20" y1="50" x2="25" y2="50" stroke={isBlueprint ? '#bae6fd' : '#ffffff'} strokeWidth="2" />
        <line x1="20" y1="72" x2="24" y2="72" stroke={isBlueprint ? '#bae6fd' : '#ffffff'} strokeWidth="1.5" />

        {/* 2. Water Stream (Top Hydraulic Conduit Arc) */}
        <path
          d="M 32 23 C 58 23, 84 32, 84 50 C 84 52, 81 54, 76 53 C 71 52, 60 41, 32 37 Z"
          fill="url(#denkisWaterGrad)"
        />
        {/* Water wave internal streamline */}
        <path
          d="M 35 30 C 52 30, 70 36, 74 46"
          stroke={isBlueprint ? '#ffffff' : 'rgba(255,255,255,0.7)'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* 3. Road Infrastructure (Outer Geometric Curvature & Highway Ribbon) */}
        <path
          d="M 32 43 C 65 46, 86 52, 86 66 C 86 78, 62 82, 32 82 L 32 72 C 55 72, 74 69, 74 63 C 74 57, 56 54, 32 52 Z"
          fill="url(#denkisRoadGrad)"
        />
        {/* Road lane centerline dashes */}
        <path
          d="M 36 62 C 48 62, 62 61, 72 63"
          stroke="#ffffff"
          strokeWidth="2"
          strokeDasharray="4 3"
          strokeLinecap="round"
        />

        {/* 4. Electrical Grid Vector (Diagonal Energy Pulse & Substation Busbar) */}
        <path
          d="M 32 50 L 52 50 L 44 68 L 64 68 L 38 86 L 42 70 L 32 70 Z"
          fill="url(#denkisElectricGrad)"
        />

        {/* Technical connection node (Grid interconnection point) */}
        <circle cx="64" cy="68" r="3" fill={electricColor} stroke="#ffffff" strokeWidth="1" />
      </svg>

      {/* Typography Lockup */}
      {variant !== 'mark-only' && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-baseline gap-1.5">
            <span
              className={`font-mono-tech font-extrabold tracking-[0.18em] ${sizeConfig.textScale}`}
              style={{ color: textColor }}
            >
              DENKIS
            </span>
            <span
              className="text-[10px] font-mono-tech uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded"
              style={{
                backgroundColor: isBlueprint ? 'rgba(56, 189, 248, 0.2)' : isDark ? 'rgba(255,255,255,0.1)' : 'rgba(15, 23, 42, 0.06)',
                color: subTextColor,
              }}
            >
              ENG
            </span>
          </div>

          {showSubtitle && variant === 'full' && (
            <span
              className={`font-mono-tech uppercase tracking-[0.2em] font-medium mt-1 ${sizeConfig.subScale}`}
              style={{ color: subTextColor }}
            >
              Water • Road • Electrical
            </span>
          )}
        </div>
      )}
    </div>
  );
};
