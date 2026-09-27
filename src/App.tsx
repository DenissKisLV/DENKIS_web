import React, { useState } from 'react';
import { siteContent, LanguageContent } from './content';

type Language = 'EN' | 'LV' | 'RU';

export default function App() {
  // Primary / default language configured in siteContent (defaults to LV)
  const [lang, setLang] = useState<Language>(siteContent.defaultLanguage);

  const activeContent: LanguageContent = siteContent.content[lang];
  const activeShowcaseImages = siteContent.showcaseImages;

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

        {/* Wide Panoramic Hero Image Banner */}
        <div className="relative w-full h-[240px] sm:h-[320px] md:h-[400px] lg:h-[440px] overflow-hidden bg-slate-900 border-b border-slate-300">
          <img
            id="hero-banner-img"
            src={siteContent.images.heroBanner}
            alt={siteContent.images.heroBannerAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Main Content Area (Clean White Background) */}
        <main className="flex-1 px-6 sm:px-12 py-10 md:py-14 bg-white">
          <div className="max-w-4xl">
            {/* General Text Paragraphs (Dynamically loaded from src/content.ts) */}
            <div className="space-y-4 text-slate-700 text-base sm:text-[17px] leading-relaxed">
              {activeContent.paragraphs.map((paragraph, idx) => (
                <p key={idx} id={`content-p${idx + 1}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Optional Showcase Images Gallery (if configured in src/content.ts) */}
            {activeShowcaseImages && activeShowcaseImages.length > 0 && (
              <div className="mt-10 pt-8 border-t border-slate-200">
                {activeContent.galleryHeading && (
                  <div className="flex items-center gap-3 pb-3 mb-6">
                    <h2 className="text-xl font-semibold text-slate-900 tracking-tight">
                      {activeContent.galleryHeading}
                    </h2>
                    <div className="flex items-center space-x-1 text-slate-400 select-none pl-1" aria-hidden="true">
                      <span className="inline-block w-1 h-3.5 bg-slate-300 transform -skew-x-12"></span>
                      <span className="inline-block w-1 h-3.5 bg-slate-300 transform -skew-x-12"></span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {activeShowcaseImages.map((item) => (
                    <div 
                      key={item.id}
                      className="group border border-slate-200 rounded overflow-hidden bg-slate-50 hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.title[lang]}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="text-sm font-medium text-slate-900">
                          {item.title[lang]}
                        </h3>
                        {item.description && (
                          <p className="text-xs text-slate-500 mt-1">
                            {item.description[lang]}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer with Contact Information */}
        <footer className="bg-[#e2e6eb] border-t border-slate-300 px-6 sm:px-12 py-6 text-xs sm:text-[13px] text-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Contact Details requested by user */}
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
