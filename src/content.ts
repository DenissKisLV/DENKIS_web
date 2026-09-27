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
import logoImage from './assets/images/DENKIS logo.PNG';
import defaultHeroImage from './assets/images/DENKIS hero.jpg';

// Automatically detect your uploaded collage image (collage-10photos-1920x1440.png) in src/assets/images/
const availableImages = import.meta.glob('./assets/images/*', { eager: true, import: 'default' }) as Record<string, string>;
const uploadedCollagePath = Object.keys(availableImages).find((path) =>
  path.toLowerCase().includes('collage') || path.includes('1920x1440')
);
const heroBannerImage = (uploadedCollagePath && availableImages[uploadedCollagePath]) || defaultHeroImage;

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
  heading?: string;
  paragraphs: string[];
  inquireButtonText?: string;
  galleryHeading?: string;
  copyright: string;
}

export interface SiteConfig {
  // Brand name
  brandName: string;
  
  // Primary / default language: 'EN' | 'LV' | 'RU'
  defaultLanguage: 'EN' | 'LV' | 'RU';
  
  // Footer contact info string
  footerContact: string;

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

  // Email inquiry settings
  emailConfig: {
    recipientUser: string;   // first part of email before @
    recipientDomain: string; // domain part of email after @
    contactEmail: string;    // full email address
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
  defaultLanguage: 'LV',

  footerContact: 'DENKIS SIA - Reģ.nr.40103728081 - Piedrujas iela 11, Rīga, LV-1073 - denkis.projekti@gmail.com -',

  images: {
    // Point this to your logo in src/assets/images
    logo: logoImage,
    logoAlt: 'DK Engineering Logo',

    // Point this to your panoramic hero banner in src/assets/images
    heroBanner: heroBannerImage,
    heroBannerAlt: 'DENKIS inženiertehnisko rasējumu un projektu kolāža / Engineering design drawings collage',
  },

  /**
   * SHOWCASE IMAGES LIST:
   * --------------------------------------------------------------------------
   * If you want to show additional photos/projects on the page, keep items here.
   * If you want a minimal page without extra images, simply set: showcaseImages: []
   */
  showcaseImages: [],

  // Email settings
  emailConfig: {
    recipientUser: 'denkis.projekti',
    recipientDomain: 'gmail.com',
    contactEmail: 'denkis.projekti@gmail.com',
    subject: {
      EN: 'DENKIS — Project Inquiry',
      LV: 'DENKIS — Projekta pieteikums',
      RU: 'DENKIS — Запрос на проектирование',
    },
    bodyTemplate: {
      EN: 'Hello DENKIS team,\n\nI would like to inquire about project design services.\n\n',
      LV: 'Labdien, DENKIS komanda!\n\nVēlos pieteikt projektēšanas pakalpojumus.\n\n',
      RU: 'Здравствуйте, команда DENKIS!\n\nХочу обсудить проектные услуги.\n\n',
    },
  },

  // Texts for all languages
  content: {
    EN: {
      paragraphs: [
        'We provide design services in the fields of energy and infrastructure. We design power supply connections and indoor power supply, drainage solutions for forests, agricultural and urban territories, and road infrastructure.',
      ],
      galleryHeading: 'Selected Works',
      copyright: 'All rights reserved.',
    },

    LV: {
      paragraphs: [
        'Mēs sniedzam projektēšanas pakalpojumus enerģētikas un infrastruktūras jomās. Mēs projektējām energoapgādes pieslēgumus un iekštelpu energoapgādi, meliorācijas risinājumus mežu, lauksaimniecību un pilsētas teritorijas un ceļu infrastruktūru.',
      ],
      galleryHeading: 'Mūsu darbi',
      copyright: 'Visas tiesības aizsargātas.',
    },

    RU: {
      paragraphs: [
        'Мы предоставляем услуги по проектированию в сфере энергетики и инфраструктуры. Мы проектируем подключения к электросетям и внутреннее электроснабжение, системы мелиорации для лесных угодий, сельскохозяйственных и городских территорий, а также дорожную инфраструктуру.',
      ],
      galleryHeading: 'Наши проекты',
      copyright: 'Все права защищены.',
    },
  },
};
