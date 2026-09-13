import React, { useState } from 'react';
import { Mail, ExternalLink } from 'lucide-react';
import { siteContent, LanguageContent } from './content';

type Language = 'EN' | 'LV' | 'RU';

export default function App() {
  // Primary / default language configured in siteContent (defaults to EN)
  const [lang, setLang] = useState<Language>(siteContent.defaultLanguage);

  const activeContent: LanguageContent = siteContent.content[lang];
  const activeShowcaseImages = siteContent.showcaseImages;

  // Inquire button directly opens user's email client (no forms, no subsections, no direct email rendered on screen)
  const handleOpenEmailBrowser = () => {
    const { recipientUser, recipientDomain, subject, bodyTemplate } = siteContent.emailConfig;
    const target = `${recipientUser}@${recipientDomain}`;
    const emailSubject = encodeURIComponent(subject[lang]);
    const emailBody = encodeURIComponent(bodyTemplate[lang]);
    window.location.href = `mailto:${target}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Centralized Page Container matching the template */}
      <div className="w-full max-w-6xl mx-auto my-0 sm:my-3 bg-white shadow-xl flex flex-col flex-1 border-x border-slate-200/80">
        
        {/* Top Header Banner in Dark Navy (matching ArkiLED) */}
        <header className="bg-[#07162c] border-b border-[#0f284a] px-6 py-4 flex items-center justify-between">
          
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

          {/* Language Switcher (Eng | Lat | Rus) - Eng is primary */}
          <nav aria-label="Language selection" className="flex items-center space-x-2 text-xs font-semibold text-slate-400">
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

        {/* Wide Panoramic Hero Image Banner (Configured via siteContent in src/assets/images) */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden bg-[#030914] border-b border-slate-300">
          <img
            id="hero-banner-img"
            src={siteContent.images.heroBanner}
            alt={siteContent.images.heroBannerAlt}
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle bottom gradient to blend smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Main Content Area (Clean White Background) */}
        <main className="flex-1 px-6 sm:px-12 py-10 md:py-14 bg-white">
          <div className="max-w-4xl">
            {/* Heading with classic /// slanted bars from template */}
            <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-200">
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                {activeContent.heading}
              </h1>
              {/* Slanted styling accent lines from the screenshot */}
              <div className="flex items-center space-x-1 text-slate-400 select-none pl-2" aria-hidden="true">
                <span className="inline-block w-1.5 h-4 bg-slate-300 transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 bg-slate-300 transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 bg-slate-300 transform -skew-x-12"></span>
              </div>
            </div>

            {/* General Text Paragraphs (Dynamically loaded from src/content.ts) */}
            <div className="space-y-4 text-slate-700 text-[15px] sm:text-base leading-relaxed">
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

            {/* Inquire Button (Directly launches email client without forms or subsections) */}
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <button
                id="inquire-project-btn"
                onClick={handleOpenEmailBrowser}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-[#08182f] hover:bg-[#0d2547] active:bg-[#050f1d] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer border border-[#1b3456]"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{activeContent.inquireButtonText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </button>
            </div>
          </div>
        </main>

        {/* Footer in muted slate tone */}
        <footer className="bg-[#e2e6eb] border-t border-slate-300 px-6 sm:px-12 py-6 text-xs text-slate-600">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright with brand name from content config */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800 tracking-wider">
                {siteContent.brandName}
              </span>
              <span>•</span>
              <span>© {new Date().getFullYear()} {activeContent.copyright}</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
