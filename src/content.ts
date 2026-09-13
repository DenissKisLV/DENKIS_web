/**
 * ============================================================================
 * DENKIS WEBSITE CONTENT & IMAGES CONFIGURATION
 * ============================================================================
 * 
 * You can edit all website texts and images directly in this file on GitHub!
 * 
 * HOW TO USE THIS FILE:
 * ----------------------------------------------------------------------------
 * 1. TO CHANGE THE LOGO:
 *    - Place your new logo image in the folder: `src/assets/images/`
 *    - Change the `logoImage` import below to your file name (e.g. `logo.png` or `logo.svg`).
 * 
 * 2. TO CHANGE THE HERO BANNER:
 *    - Put your new image into `src/assets/images/`
 *    - Change the `heroBannerImage` import below to your file name.
 * 
 * 3. TO ADD IMAGES TO THE PAGE:
 *    - Add new items to the `showcaseImages` array below.
 *    - If empty, no extra images are shown.
 *    - If you add images, they will appear below the main text as a clean gallery.
 * 
 * 4. TO EDIT TEXTS & TRANSLATIONS:
 *    - Edit the English (EN), Latvian (LV), or Russian (RU) sections below.
 *    - You can edit headings, add/remove paragraphs, or change button labels.
 * ============================================================================
 */

// --- 1. IMAGE IMPORTS ---
// Put your image files inside `src/assets/images/` and import them here:
import logoImage from './assets/images/logo.svg';
import heroBannerImage from './assets/images/infrastructure_bridge_night_1788803236215.jpg';

// You can also import additional project/work images here if you wish:
import waterImg from './assets/images/water_infrastructure_1788706577968.jpg';
import roadImg from './assets/images/road_infrastructure_1788706592621.jpg';
import electricalImg from './assets/images/electrical_infrastructure_1788706607257.jpg';

export interface ShowcaseImage {
  id: string;
  title: {
    EN: string;
    LV: string;
    RU: string;
  };
  image: string;
  description?: {
    EN: string;
    LV: string;
    RU: string;
  };
}

export interface LanguageContent {
  heading: string;
  paragraphs: string[];
  inquireButtonText: string;
  galleryHeading?: string;
  copyright: string;
}

export interface SiteConfig {
  // Brand name
  brandName: string;
  
  // Primary / default language: 'EN' | 'LV' | 'RU'
  defaultLanguage: 'EN' | 'LV' | 'RU';
  
  // Images
  images: {
    // Top-left header logo image (from src/assets/images/)
    logo: string;
    logoAlt: string;
    // Main panoramic hero image (from src/assets/images/)
    heroBanner: string;
    heroBannerAlt: string;
  };

  // Optional showcase gallery images (set to [] if you don't want any extra images)
  showcaseImages: ShowcaseImage[];

  // Email inquiry settings (used when the user clicks the Inquire button)
  emailConfig: {
    recipientUser: string;   // first part of email before @
    recipientDomain: string; // domain part of email after @
    subject: {
      EN: string;
      LV: string;
      RU: string;
    };
    bodyTemplate: {
      EN: string;
      LV: string;
      RU: string;
    };
  };

  // Multi-language text content
  content: {
    EN: LanguageContent;
    LV: LanguageContent;
    RU: LanguageContent;
  };
}

export const siteContent: SiteConfig = {
  brandName: 'DENKIS',
  defaultLanguage: 'EN',

  images: {
    // Point this to your logo in src/assets/images
    logo: logoImage,
    logoAlt: 'DK Engineering Logo',

    // Point this to your panoramic hero banner in src/assets/images
    heroBanner: heroBannerImage,
    heroBannerAlt: 'Illuminated infrastructure bridge at night',
  },

  /**
   * SHOWCASE IMAGES LIST:
   * --------------------------------------------------------------------------
   * If you want to show additional photos/projects on the page, keep items here.
   * If you want a minimal page without extra images, simply set: showcaseImages: []
   */
  showcaseImages: [
    // You can uncomment or add more images here whenever you wish:
    /*
    {
      id: 'water-networks',
      title: {
        EN: 'Water & Wastewater Networks',
        LV: 'Ūdensapgāde un kanalizācija',
        RU: 'Водоснабжение и водоотведение',
      },
      image: waterImg,
    },
    {
      id: 'road-infrastructure',
      title: {
        EN: 'Road & Transportation Geometry',
        LV: 'Ceļu un satiksmes projektēšana',
        RU: 'Проектирование дорог и развязок',
      },
      image: roadImg,
    },
    {
      id: 'electrical-systems',
      title: {
        EN: 'Electrical & Power Distribution',
        LV: 'Elektroapgāde un apgaismojums',
        RU: 'Электроснабжение и освещение',
      },
      image: electricalImg,
    },
    */
  ],

  // Inquire button settings: opens user's email client directly
  emailConfig: {
    recipientUser: 'dkiselovs',
    recipientDomain: 'gmail.com',
    subject: {
      EN: 'DENKIS — Infrastructure Project Inquiry',
      LV: 'DENKIS — Infrastruktūras projekta pieteikums',
      RU: 'DENKIS — Запрос на проектирование инфраструктуры',
    },
    bodyTemplate: {
      EN: 'Hello DENKIS Engineering team,\n\nI would like to discuss an infrastructure design project.\n\nProject details:\n\n',
      LV: 'Labdien, DENKIS inženieru komanda!\n\nVēlos pieteikt infrastruktūras projektēšanas projektu.\n\nProjekta apraksts:\n\n',
      RU: 'Здравствуйте, команда DENKIS!\n\nХочу обсудить проект проектирования инфраструктуры.\n\nДетали проекта:\n\n',
    },
  },

  // Texts for all languages
  content: {
    EN: {
      heading: 'Welcome!',
      paragraphs: [
        'Welcome to DENKIS — independent engineering design practice delivering specialized civil and utility infrastructure solutions for municipal, commercial, and industrial developments. We guide projects from preliminary feasibility studies through detailed construction documentation.',
        'Our practice unites comprehensive technical expertise across utility networks, roadway geometry, and electrical distribution systems. By applying coordinated 3D modeling and precision engineering calculations, we eliminate multi-agency clash points before ground is broken.',
        'Every design fulfills strict technical standards, safety regulations, and environmental compliance. We are committed to turning complex civil engineering challenges into durable, high-performance, and cost-effective infrastructure.',
      ],
      inquireButtonText: 'Inquire About the Project',
      galleryHeading: 'Selected Works',
      copyright: 'All rights reserved.',
    },

    LV: {
      heading: 'Laipni lūdzam!',
      paragraphs: [
        'Laipni lūdzam DENKIS — specializētos inženiertehnisko un infrastruktūras risinājumu projektos. Mēs nodrošinām visaptverošus projektēšanas pakalpojumus pašvaldību, komerciālajiem un industriālajiem objektiem, vadot projektus no priekšizpētes līdz detalizētai būvdokumentācijai.',
        'Mūsu prakse apvieno padziļinātu tehnisko kompetenci inženiertīklu, ceļu ģeometrijas un elektroapgādes sistēmu projektēšanā. Izmantojot koordinētu 3D modelēšanu un precīzus inženiertehniskos aprēķinus, mēs garantējam saskaņotus risinājumus pirms būvdarbu uzsākšanas.',
        'Mūsu prioritāte ir uzticami, ekonomiski pamatoti risinājumi, kas atbilst stingrākajiem nozares standartiem, drošības un vides prasībām. Mēs pārvēršam sarežģītus inženiertehniskos izaicinājumus ilgmūžīgā infrastruktūrā.',
      ],
      inquireButtonText: 'Pieteikt projektu',
      galleryHeading: 'Mūsu darbi',
      copyright: 'Visas tiesības aizsargātas.',
    },

    RU: {
      heading: 'Добро пожаловать!',
      paragraphs: [
        'Добро пожаловать в DENKIS — специализированное инженерное проектирование инфраструктуры. Мы предоставляем комплексные проектные услуги для муниципальных, коммерческих и промышленных объектов, сопровождая проекты от предпроектных проработок до рабочей документации.',
        'Наша практика объединяет передовую экспертизу в области инженерных сетей, дорожной геометрии и систем электроснабжения. Скоординированное 3D-моделирование и точные инженерные расчёты исключают коллизии ещё на этапе проектирования.',
        'Мы создаём надёжные и экономически эффективные решения, полностью соответствующие строительным нормам, требованиям безопасности и экологическим стандартам. Превращаем сложные инженерные вызовы в долговечную инфраструктуру.',
      ],
      inquireButtonText: 'Запросить проект',
      galleryHeading: 'Наши проекты',
      copyright: 'Все права защищены.',
    },
  },
};
