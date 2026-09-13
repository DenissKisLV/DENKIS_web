import React from 'react';

interface DKLogoProps {
  className?: string;
  height?: number | string;
}

export const DKLogo: React.FC<DKLogoProps> = ({ className = '', height = 54 }) => {
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Crisp White Card Container for authentic reproduction of the user's uploaded logo on dark header */}
      <div className="bg-white px-2.5 py-1 rounded-[3px] shadow-[0_1px_6px_rgba(0,0,0,0.3)] border border-slate-300 flex items-center justify-center transition-transform hover:scale-[1.01]">
        <svg
          viewBox="0 0 520 590"
          style={{ height, width: 'auto' }}
          className="overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main "D" Glyph in deep dark espresso/black (#190605) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M 15 15 
               H 205 
               C 315 15, 365 95, 365 245 
               C 365 395, 315 475, 205 475 
               H 15 
               V 15 
               Z 
               M 72 70 
               H 200 
               C 275 70, 305 125, 305 245 
               C 305 365, 275 420, 200 420 
               H 72 
               V 70 
               Z"
            fill="#180605"
          />

          {/* Letter "K" overlayed with white fill and thin dark outline */}
          {/* Vertical Bar of K */}
          <rect
            x="150"
            y="15"
            width="55"
            height="460"
            fill="#ffffff"
            stroke="#180605"
            strokeWidth="3.5"
          />

          {/* Upper Diagonal Arm of K */}
          <polygon
            points="150,210 205,170 410,15 490,15 290,238 205,238"
            fill="#ffffff"
            stroke="#180605"
            strokeWidth="3.5"
            strokeLinejoin="miter"
          />

          {/* Lower Diagonal Arm of K */}
          <polygon
            points="205,238 290,238 500,475 420,475 205,278 150,210"
            fill="#ffffff"
            stroke="#180605"
            strokeWidth="3.5"
            strokeLinejoin="miter"
          />

          {/* Vertical divider lines on K's bar to reflect the intersection in the image */}
          <line
            x1="150"
            y1="15"
            x2="150"
            y2="475"
            stroke="#180605"
            strokeWidth="3.5"
          />
          <line
            x1="205"
            y1="15"
            x2="205"
            y2="170"
            stroke="#180605"
            strokeWidth="3.5"
          />
          <line
            x1="205"
            y1="278"
            x2="205"
            y2="475"
            stroke="#180605"
            strokeWidth="3.5"
          />

          {/* Text "engineering" in clean lowercase underneath */}
          <text
            x="260"
            y="556"
            textAnchor="middle"
            fill="#180605"
            fontSize="76"
            fontWeight="500"
            letterSpacing="2.5px"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          >
            engineering
          </text>
        </svg>
      </div>
    </div>
  );
};

