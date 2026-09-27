/**
 * ============================================================================
 * DENKIS WEBSITE CONTENT & IMAGES CONFIGURATION
 * ============================================================================
 * 
 * You can edit all website texts and images directly in this file or by uploading
 * images to GitHub!
 * 
 * ----------------------------------------------------------------------------
 * HOW TO UPLOAD ROTATING PICTURES / BLUEPRINT PAGES ON GITHUB:
 * ----------------------------------------------------------------------------
 * 1. Go to your GitHub repository in your web browser.
 * 2. Navigate to the folder:
 *       src/assets/slideshow/
 * 3. Click "Add file" -> "Upload files".
 * 4. Drag & drop your pictures, drawing pages, blueprints, or photos.
 * 5. (Optional) Name them with numbers if you want a specific order:
 *       01_hero_drawing.jpg
 *       02_power_supply.jpg
 *       03_drainage.jpg
 *       04_road_design.jpg
 * 6. Click "Commit changes".
 *    -> GitHub Actions automatically deploys! Every picture in that folder
 *       will automatically appear in the rotating fade-in / fade-out display!
 * 
 * ----------------------------------------------------------------------------
 * HOW TO CHANGE THE LOGO:
 * ----------------------------------------------------------------------------
 * - Place your new logo image in `src/assets/images/`
 * - Change the `logoImage` import below to your file name (e.g. `DENKIS logo.PNG`).
 * 
 * ----------------------------------------------------------------------------
 * HOW TO EDIT TEXTS & TRANSLATIONS:
 * ----------------------------------------------------------------------------
 * - Scroll down to the `content` section below.
 * - Edit Latvian (LV), English (EN), or Russian (RU) text paragraphs.
 * ============================================================================
 */

// --- 1. LOGO IMPORT ---
import logoImage from './assets/images/DENKIS logo.PNG';

// Fallback images in case src/assets/slideshow is empty
import defaultHeroImage from './assets/images/infrastructure_bridge_night_1788803236215.jpg';
import waterImg from './assets/images/water_infrastructure_1788706577968.jpg';
import roadImg from './assets/images/road_infrastructure_1788706592621.jpg';
import electricalImg from './assets/images/electrical_infrastructure_1788706607257.jpg';

// --- 2. AUTOMATIC ROTATING SLIDESHOW DISCOVERY ---
// Automatically imports every image uploaded to `src/assets/slideshow/` on GitHub!
const slideshowModules = import.meta.glob(
  './assets/slideshow/*.{jpg,jpeg,png,webp,PNG,JPG,WEBP,svg,SVG}',
  { eager: true, import: 'default' }
) as Record<string, string>;

// Sort numerically/alphabetically by filename (e.g. 01_..., 02_...)
const discoveredSlideshow: string[] = Object.keys(slideshowModules)
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map((path) => slideshowModules[path]);

// Check for any legacy hero collage in src/assets/images/
const imagesModules = import.meta.glob(
  './assets/images/*',
  { eager: true, import: 'default' }
) as Record<string, string>;
const customHeroPath = Object.keys(imagesModules).find((path) => {
  const lower = path.toLowerCase();
  return lower.includes('hero') || lower.includes('collage');
});
const heroCollageImage = (customHeroPath && imagesModules[customHeroPath]) || defaultHeroImage;

// Combine discovered slideshow images; fallback to available images if folder is empty
export const defaultSlideshowImages: string[] =
  discoveredSlideshow.length > 0
    ? discoveredSlideshow
    : [heroCollageImage, roadImg, waterImg, electricalImg];

export interface LanguageContent {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  inquireButtonText?: string;
  copyright: string;
}

export interface SiteConfig {
  // Brand name
  brandName: string;

  // Primary / default language: 'LV' | 'EN' | 'RU'
  defaultLanguage: 'EN' | 'LV' | 'RU';

  // Footer contact info string
  footerContact: string;

  // Time in milliseconds for each picture in the slideshow (5500 = 5.5 seconds)
  slideshowIntervalMs: number;

  // Images
  images: {
    // Top-left header logo image (from src/assets/images/)
    logo: string;
    logoAlt: string;

    // Array of pictures rotating in the fade in / fade out area
    slideshow: string[];
    slideshowAlt: string;
  };

  // Email inquiry settings
  emailConfig: {
    recipientUser: string;
    recipientDomain: string;
    contactEmail: string;
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

  // 5.5 seconds per slide for a relaxed, slow fade presentation
  slideshowIntervalMs: 5500,

  footerContact: 'DENKIS SIA - Reģ.nr.40103728081 - Piedrujas iela 11, Rīga, LV-1073 - denkis.projekti@gmail.com -',

  images: {
    logo: logoImage,
    logoAlt: 'DENKIS Engineering Logo',

    // Rotating pictures (automatically picks up everything in src/assets/slideshow/)
    slideshow: defaultSlideshowImages,
    slideshowAlt: 'DENKIS inženiertehniskie projekti un rasējumi',
  },

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
      copyright: 'All rights reserved.',
    },

    LV: {
      paragraphs: [
        'Mēs sniedzam projektēšanas pakalpojumus enerģētikas un infrastruktūras jomās. Mēs projektējām energoapgādes pieslēgumus un iekštelpu energoapgādi, meliorācijas risinājumus mežu, lauksaimniecību un pilsētas teritorijas un ceļu infrastruktūru.',
      ],
      copyright: 'Visas tiesības aizsargātas.',
    },

    RU: {
      paragraphs: [
        'Мы предоставляем услуги по проектированию в сфере энергетики и инфраструктуры. Мы проектируем подключения к электросетям и внутреннее электроснабжение, системы мелиорации для лесных угодий, сельскохозяйственных и городских территорий, а также дорожную инфраструктуру.',
      ],
      copyright: 'Все права защищены.',
    },
  },
};
