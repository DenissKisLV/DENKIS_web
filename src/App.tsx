import React, { useState } from 'react';
import { siteContent, LanguageContent } from './content';
import { Slideshow } from './components/Slideshow';

type Language = 'EN' | 'LV' | 'RU';

export default function App() {
  // Primary / default language configured in siteContent (defaults to LV)
  const [lang, setLang] = useState<Language>(siteContent.defaultLanguage);

  const activeContent: LanguageContent = siteContent.content[lang];

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Centralized Page Container matching the template */}
      <div className="w-full max-w-6xl mx-auto my-0 sm:my-3 bg-white shadow-xl flex flex-col flex-1 border-x border-slate-200/80">
        
        {/* Top Header Banner in Solid Black housing Logo and Language Switcher */}
        <header className="bg-black border-b border-neutral-800 px-6 py-4 flex items-center justify-between">
          
          {/* Logo as a link to image located in src/assets/images/ */}
          <div id="header-logo-container">
            <a 
              href="#"
              id="header-logo-link"
              title={`${siteContent.brandName} Home`}
              className="inline-flex items-center select-none bg-white px-2.5 py-1.5 rounded-[3px] shadow-[0_1px_6px_rgba(0,0,0,0.3)] border border-slate-300 transition-transform hover:scale-[1.02]"
            >
              <img
                id="header-logo-img"
                src={siteContent.images.logo}
                alt={siteContent.images.logoAlt}
                className="h-14 sm:h-16 w-auto object-contain block"
              />
            </a>
          </div>

          {/* Language Switcher (Lat | Eng | Rus) */}
          <nav aria-label="Language selection" className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
            <button
              id="lang-lv-btn"
              onClick={() => setLang('LV')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                lang === 'LV' ? 'text-amber-400 font-bold underline underline-offset-4' : 'hover:text-white'
              }`}
            >
              Lat
            </button>
            <span className="text-slate-600">|</span>
            <button
              id="lang-en-btn"
              onClick={() => setLang('EN')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                lang === 'EN' ? 'text-amber-400 font-bold underline underline-offset-4' : 'hover:text-white'
              }`}
            >
              Eng
            </button>
            <span className="text-slate-600">|</span>
            <button
              id="lang-ru-btn"
              onClick={() => setLang('RU')}
              className={`px-1.5 py-0.5 rounded transition-colors ${
                lang === 'RU' ? 'text-amber-400 font-bold underline underline-offset-4' : 'hover:text-white'
              }`}
            >
              Rus
            </button>
          </nav>
        </header>

        {/* Main Content Area (Text on Left, Compact Rotating Pictures on Right; Stacked on Mobile) */}
        <main className="flex-1 px-6 sm:px-10 lg:px-12 py-8 sm:py-12 bg-white">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 justify-between">
            
            {/* Left Column: Text content */}
            <div className="w-full md:w-3/5 lg:w-7/12 flex flex-col justify-center">
              {/* General Text Paragraphs (Dynamically loaded from src/content.ts) */}
              <div className="space-y-4 text-slate-700 text-base sm:text-[17px] leading-relaxed">
                {activeContent.paragraphs.map((paragraph, idx) => (
                  <p key={idx} id={`content-p${idx + 1}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Right Column: Compact Rotating Pictures (approximately same height as text paragraph) */}
            <div className="w-full md:w-2/5 lg:w-5/12 flex items-center justify-center md:justify-end">
              <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[340px]">
                <Slideshow
                  images={siteContent.images.slideshow}
                  alt={siteContent.images.slideshowAlt}
                  intervalMs={siteContent.slideshowIntervalMs}
                  stageHeightClass="h-[135px] sm:h-[150px] md:h-[160px]"
                />
              </div>
            </div>

          </div>
        </main>

        {/* Footer with Contact Information */}
        <footer className="bg-[#e2e6eb] border-t border-slate-300 px-6 sm:px-12 py-6 text-xs sm:text-[13px] text-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Contact Details */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1 font-medium text-slate-800">
              <span>DENKIS SIA</span>
              <span className="text-slate-400">-</span>
              <span>Reģ.nr.40103728081</span>
              <span className="text-slate-400">-</span>
              <span>Piedrujas iela 11, Rīga, LV-1073</span>
              <span className="text-slate-400">-</span>
              <a 
                href="mailto:denkis.projekti@gmail.com" 
                className="hover:text-amber-600 underline underline-offset-2 transition-colors font-semibold"
              >
                denkis.projekti@gmail.com
              </a>
              <span className="text-slate-400">-</span>
            </div>

            {/* Copyright */}
            <div className="text-slate-500 whitespace-nowrap text-xs">
              © 2013 {activeContent.copyright}
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
