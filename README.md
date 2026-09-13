# DENKIS Engineering Website

A clean, modern infrastructure engineering website with multi-language support (English, Latvian, Russian) and ArkiLED-inspired presentation.

---

## 🛠 How to Edit Texts and Images on GitHub

All website texts, translations, and images are managed in a single file:

📄 **`src/content.ts`**

You can click this file on GitHub and edit it directly in your browser by clicking the pencil icon (✎).

---

### 1. How to Change the Logo
- Add your logo image file to: `src/assets/images/` (e.g. `logo.svg` or `logo.png`).
- In `src/content.ts`, update the import line at the top:
  ```ts
  import logoImage from './assets/images/your-new-logo.png';
  ```
  *(Or simply overwrite `src/assets/images/logo.svg` with your new file!)*

---

### 2. How to Change the Hero Banner Image
- Put your new photo in: `src/assets/images/`
- In `src/content.ts`, update line 31:
  ```ts
  import heroBannerImage from './assets/images/your-bridge-or-project-photo.jpg';
  ```

---

### 3. How to Add Images or Projects to the Page
In `src/content.ts`, there is a `showcaseImages` array. You can add project photos like this:

```ts
import myPhoto from './assets/images/my_project.jpg';

// In siteContent.showcaseImages:
showcaseImages: [
  {
    id: 'project-1',
    title: {
      EN: 'Highway Interchange Design',
      LV: 'Autoceļu mezgla projektēšana',
      RU: 'Проектирование дорожной развязки',
    },
    image: myPhoto,
  },
]
```
If `showcaseImages: []` is empty, no extra images are displayed. When you add items, they appear in a clean grid below the text.

---

### 4. How to Edit Text & Paragraphs
In `src/content.ts`, look for the `content` section. You will find:
- **`EN`** (English - default)
- **`LV`** (Latvian)
- **`RU`** (Russian)

You can edit:
- `heading`: Section title (e.g. `"Welcome!"`)
- `paragraphs`: Add, delete, or rewrite any paragraph strings in the list.
- `inquireButtonText`: Text for the inquiry button.
- `copyright`: Footer copyright statement.
