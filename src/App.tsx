import React, { useState } from 'react';
import { DKLogo } from './components/DKLogo';
import { Mail, ExternalLink } from 'lucide-react';
import heroBridgeNight from './assets/images/infrastructure_bridge_night_1788803236215.jpg';

type Language = 'EN' | 'LV' | 'RU';

export default function App() {
  // English is the primary language
  const [lang, setLang] = useState<Language>('EN');

  // Multi-language content matching the template
  const content = {
    EN: {
      heading: 'Welcome!',
      p1: 'Welcome to DENKIS — independent engineering design practice delivering specialized civil and utility infrastructure solutions for municipal, commercial, and industrial developments. We guide projects from preliminary feasibility studies through detailed construction documentation.',
      p2: 'Our practice unites comprehensive technical expertise across utility networks, roadway geometry, and electrical distribution systems. By applying coordinated 3D modeling and precision engineering calculations, we eliminate multi-agency clash points before ground is broken.',
      p3: 'Every design fulfills strict technical standards, safety regulations, and environmental compliance. We are committed to turning complex civil engineering challenges into durable, high-performance, and cost-effective infrastructure.',
      btnText: 'Inquire About the Project',
      rights: 'All rights reserved.',
    },
    LV: {
      heading: 'Laipni lūdzam!',
      p1: 'Laipni lūdzam DENKIS — specializētos inženiertehnisko un infrastruktūras risinājumu projektos. Mēs nodrošinām visaptverošus projektēšanas pakalpojumus pašvaldību, komerciālajiem un industriālajiem objektiem, vadot projektus no priekšizpētes līdz detalizētai būvdokumentācijai.',
      p2: 'Mūsu prakse apvieno padziļinātu tehnisko kompetenci inženiertīklu, ceļu ģeometrijas un elektroapgādes sistēmu projektēšanā. Izmantojot koordinētu 3D modelēšanu un precīzus inženiertehniskos aprēķinus, mēs garantējam saskaņotus risinājumus pirms būvdarbu uzsākšanas.',
      p3: 'Mūsu prioritāte ir uzticami, ekonomiski pamatoti risinājumi, kas atbilst stingrākajiem nozares standartiem, drošības un vides prasībām. Mēs pārvēršam sarežģītus inženiertehniskos izaicinājumus ilgmūžīgā infrastruktūrā.',
      btnText: 'Pieteikt projektu',
      rights: 'Visas tiesības aizsargātas.',
    },
    RU: {
      heading: 'Добро пожаловать!',
      p1: 'Добро пожаловать в DENKIS — специализированное инженерное проектирование инфраструктуры. Мы предоставляем комплексные проектные услуги для муниципальных, коммерческих и промышленных объектов, сопровождая проекты от предпроектных проработок до рабочей документации.',
      p2: 'Наша практика объединяет передовую экспертизу в области инженерных сетей, дорожной геометрии и систем электроснабжения. Скоординированное 3D-моделирование и точные инженерные расчёты исключают коллизии ещё на этапе проектирования.',
      p3: 'Мы создаём надёжные и экономически эффективные решения, полностью соответствующие строительным нормам, требованиям безопасности и экологическим стандартам. Превращаем сложные инженерные вызовы в долговечную инфраструктуру.',
      btnText: 'Запросить проект',
      rights: 'Все права защищены.',
    },
  }[lang];

  // Inquire button directly opens user's email client (no forms, no subsections, no direct email rendered on screen)
  const handleOpenEmailBrowser = () => {
    // Encoded parts so email is not exposed as plain text in the HTML DOM
    const user = 'dkiselovs';
    const domain = 'gmail.com';
    const target = `${user}@${domain}`;
    const subject = encodeURIComponent('DENKIS — Infrastructure Project Inquiry');
    const body = encodeURIComponent(
      'Hello DENKIS Engineering team,\n\nI would like to discuss an infrastructure design project.\n\nProject details:\n\n'
    );
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#eaedf2] text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* Centralized Page Container matching the template */}
      <div className="w-full max-w-6xl mx-auto my-0 sm:my-3 bg-white shadow-xl flex flex-col flex-1 border-x border-slate-200/80">
        
        {/* Top Header Banner in Dark Navy (matching ArkiLED) */}
        <header className="bg-[#07162c] border-b border-[#0f284a] px-6 py-4 flex items-center justify-between">
          {/* User's DK Engineering logo in top left corner */}
          <div id="header-logo-container">
            <DKLogo height={58} />
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

        {/* Wide Panoramic Hero Image Banner (Illuminated Bridge Night Scene) */}
        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[400px] overflow-hidden bg-[#030914] border-b border-slate-300">
          <img
            src={heroBridgeNight}
            alt="Illuminated infrastructure bridge at night"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle bottom gradient to blend smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Main Content Area (Clean White Background) */}
        <main className="flex-1 px-6 sm:px-12 py-10 md:py-14 bg-white">
          <div className="max-w-3xl">
            {/* Heading with classic /// slanted bars from template */}
            <div className="flex items-center gap-3 pb-3 mb-6 border-b border-slate-200">
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-900 tracking-tight">
                {content.heading}
              </h1>
              {/* Slanted styling accent lines from the screenshot */}
              <div className="flex items-center space-x-1 text-slate-400 select-none pl-2" aria-hidden="true">
                <span className="inline-block w-1.5 h-4 bg-slate-300 transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 bg-slate-300 transform -skew-x-12"></span>
                <span className="inline-block w-1.5 h-4 bg-slate-300 transform -skew-x-12"></span>
              </div>
            </div>

            {/* General Text: 2-3 Paragraphs */}
            <div className="space-y-4 text-slate-700 text-[15px] sm:text-base leading-relaxed">
              <p id="content-p1">
                {content.p1}
              </p>
              <p id="content-p2">
                {content.p2}
              </p>
              <p id="content-p3">
                {content.p3}
              </p>
            </div>

            {/* Inquire Button (Opens email browser directly; no forms, no subsections) */}
            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <button
                id="inquire-project-btn"
                onClick={handleOpenEmailBrowser}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-[#08182f] hover:bg-[#0d2547] active:bg-[#050f1d] text-white font-medium text-sm transition-all shadow-md hover:shadow-lg cursor-pointer border border-[#1b3456]"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{content.btnText}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-1" />
              </button>
            </div>
          </div>
        </main>

        {/* Footer in muted slate tone (Clean, without the hyperlink) */}
        <footer className="bg-[#e2e6eb] border-t border-slate-300 px-6 sm:px-12 py-6 text-xs text-slate-600">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Left side copyright */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-800 tracking-wider">DENKIS</span>
              <span>•</span>
              <span>© {new Date().getFullYear()} {content.rights}</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
