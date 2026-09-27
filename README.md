# DENKIS Engineering Website

A clean, modern infrastructure engineering website with multi-language support (English, Latvian, Russian), side-by-side text layout, and automatic slow fade-in/fade-out project slideshow.

---

## 📸 Where to Put Pictures / Pages on GitHub

To add, remove, or replace pictures or drawing pages in the rotating slideshow:

### 📁 Upload Folder:
👉 **`src/assets/slideshow/`**

### Step-by-step instructions on GitHub:
1. Open your repository on **GitHub**.
2. Click into the folder **`src`** ➔ **`assets`** ➔ **`slideshow`**.
3. In the top right of the file list, click **Add file** ➔ **Upload files**.
4. Drag and drop your image files (`.jpg`, `.jpeg`, `.png`, `.webp`).
5. *(Optional Tip)*: If you want them displayed in a specific order, prefix them with numbers:
   - `01_main_drawing.jpg`
   - `02_power_line.jpg`
   - `03_drainage.jpg`
   - `04_road_interchange.jpg`
6. Scroll down and click the green button **Commit changes**.

**That's it!** GitHub Actions will automatically rebuild and deploy your site in ~1–2 minutes. Any image placed in `src/assets/slideshow/` is automatically detected and rotated in the fade-in/fade-out gallery!

---

## 🛠 How to Edit Texts and Logo on GitHub

All website texts, headings, and translations are managed in:

📄 **`src/content.ts`**

### 1. How to Change the Logo
- Add your logo file to: `src/assets/images/` (e.g. `DENKIS logo.PNG`).
- If you use a new filename, update line 37 in `src/content.ts`:
  ```ts
  import logoImage from './assets/images/your-logo.png';
  ```

---

### 2. How to Edit Text & Paragraphs
In `src/content.ts`, edit the `content` section for **LV**, **EN**, or **RU**:
```ts
content: {
  LV: {
    heading: 'Enerģētikas un infrastruktūras projektēšana',
    paragraphs: [
      'Mēs sniedzam projektēšanas pakalpojumus enerģētikas un infrastruktūras jomās...',
    ],
  },
  EN: { ... },
  RU: { ... }
}
```
