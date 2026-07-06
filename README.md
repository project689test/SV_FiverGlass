# Sunny Verma Fiberglass | Website & Enterprise Google SEO Repository

This repository contains the source code, asset configs, and enterprise-grade search engine optimizations for the **Sunny Verma Fiberglass** corporate website.

Sunny Verma Fiberglass is India's leading manufacturer of high-quality, customized **Fiberglass Reinforced Plastic (FRP) products**. The website is a premium, high-performance React + Vite single page application optimized to maximize search index positioning across Google Search, Google Images, Bing Webmaster, Yahoo, DuckDuckGo, and AI-powered search engines.

---

## 🚀 Technology Stack

- **Core Library**: React 19.2 (Functional Components & Hooks)
- **Build Engine & Bundler**: Vite 8.0 (Fast HMR & Assets Optimization)
- **Styling framework**: Tailwind CSS 4.0 (Utilizes high-speed `@import "tailwindcss"` build plugin)
- **Animations**: Framer Motion 12.3 (Fluid scroll triggers and fade overlays)
- **Icons**: Lucide React 1.7 (Accessible vector icon mappings)
- **Form Integration**: FormSubmit API (Protected from spam bots via honey pots)

---

## 🛠️ Project Structure

```bash
client/
├── public/                 # Static assets, crawlers metadata, PWA favicons
│   ├── favicon-16x16.png   # Standard 16x16 browser favicon
│   ├── favicon-32x32.png   # Tab favicon for high-res displays
│   ├── favicon-48x48.png   # OS-level shortcut favicon
│   ├── apple-touch-icon.png# iOS touch bookmark (180x180)
│   ├── logo-192.png        # PWA launch icon (192x192)
│   ├── logo-512.png        # PWA splash screen icon (512x512)
│   ├── manifest.json       # Progressive Web App registry
│   ├── robots.txt          # Crawler instructions & sitemap links
│   └── sitemap.xml         # XML index map of core section links
├── src/
│   ├── assets/             # Global visual styling sheets
│   ├── components/
│   │   ├── about/          # About Section & Manufacturing details
│   │   ├── clients/        # Client list & Marquee sliding logos
│   │   ├── contact/        # Contact form, details cards, and maps
│   │   ├── hero/           # H1 Header & Hero call-to-actions
│   │   ├── layout/         # Header Navbar & Footer layouts
│   │   ├── services/       # Product Cards grid & Industries We Serve
│   │   ├── testimonials/   # Customer reviews grid mapping
│   │   └── why/            # Why Choose Us features & Quality Assurance
│   ├── context/            # Global contexts (Theme Provider / Dark mode)
│   ├── pages/
│   │   └── Home.jsx        # Home assembly page (supports React.lazy imports)
│   ├── App.jsx             # Main application entry layout
│   ├── index.css           # Global Tailwind root styles
│   └── main.jsx            # Application bootstrap file
├── index.html              # Core HTML structure, metadata tags, and JSON-LD schemas
└── package.json            # Scripts & project dependencies
```

---

##  Google SEO Optimization Details

We implemented a complete search engine marketing (SEM) and indexing optimization suite matching Google's latest Search Essentials and EEAT guidelines:

### 1. Header Metadata & Search Indexing
- **SEO Title** (Under 60-character Google visual truncation limit):
  `Sunny Verma Fiberglass | Leading FRP Manufacturer India`
- **Meta Description** (Optimized between 150-160 characters):
  `Sunny Verma Fiberglass is India's leading FRP products manufacturer. We design custom fiberglass domes, sculptures, roofing sheets, canopies, and water tanks.`
- **Canonical Address**: Configured `<link rel="canonical" href="https://www.vermafibers.com/" />` to avoid duplicate domain indexing.
- **Social Metadata**: Set up standard Open Graph (Facebook, LinkedIn, WhatsApp) and Twitter Cards matching corporate specifications.

### 2. Google JSON-LD Schema Graph
Embedded structured schema markup directly inside `index.html` under a unified graph:
- **Organization**: Associates logo (`logo-512.png`), social profiles, and contact channels.
- **LocalBusiness**: Integrates address coordinates (`Sector-88, Noida`), service phone, pricing brackets, and weekly operational hours.
- **WebSite**: Enables the Google sitelinks search query box (`SearchAction`).
- **WebPage**: Details page description and targeted queries.
- **BreadcrumbList**: Confirms structural navigation priorities.
- **FAQPage**: Embeds schema Q&As regarding custom mold manufacturing, locations served, and company experience.

### 3. Heading (H1-H3) Hierarchy & Semantic Tags
- **ONE H1 Heading per Page**:
  `Leading FRP & Fiberglass Products Manufacturer in India`
- **Semantic Restructuring**: Converted generic wrapping divs into standard HTML5 landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>`.
- **Heading Cascades**: Modified card headers from `<h4>` to `<h3>` to prevent skipped headings warning (keeps layout hierarchy flowing H1 ➔ H2 ➔ H3).

### 4. Image SEO (Google Images Optimization)
- **Keyword-Rich Filenames**: All public images are renamed to match high-volume search queries (e.g., `custom-automobile-frp-parts.jpg`, `industrial-frp-tank-lamination.webp`, `frp-park-benches-dustbins.jpg`).
- **Image Attributes**: Applied lazy loading (`loading="lazy"`), corresponding `alt` text descriptors, custom `title` tags, and specified explicit image `width`/`height` pixel bounds to prevent Cumulative Layout Shift (CLS).

### 5. Indexing configs
- **Sitemap**: Generated standard `sitemap.xml` mapping layout priority sections.
- **Robots**: Configured standard `robots.txt` pointing to the sitemap location.

---

## ⚡ Performance & Core Web Vitals

To score a **100/100** on Google PageSpeed Insights, the following performance rules are applied:

1. **Code Splitting & Dynamic Imports**: Deferred loading of off-screen components (`Testimonials`, `Clients`, `Contact`) using `React.lazy` and wrapped them inside `<Suspense>` boundaries.
2. **Preloading**: Preloaded the hero background image (`/sunny-verma-fiberglass-hero.jpeg`) directly in the header to improve **Largest Contentful Paint (LCP)**.
3. **Preconnecting**: Preconnected browser threads to Google Font CDNs (`fonts.googleapis.com`) to optimize text rendering speeds.
4. **Cumulative Layout Shift (CLS)**: Visual Suspense placeholder skeletons and exact image boundaries are set to prevent page layout jumps during asset downloads.

---

## ♿ Accessibility (a11y) Compliance

- **ARIA Controls**: Added accessible label attributes (`aria-label`, `aria-expanded`) to mobile buttons and menu navigations.
- **Form Linking**: Connected form field labels to inputs using proper `htmlFor` and `id` tag binds so that screen readers correctly interpret fields.

---

## 💻 Local Development Setup

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation
Clone the repository, navigate to the `client` directory, and install dependencies:
```bash
cd client
npm install
```

### Running Locally
To launch the Vite hot-reloading development server:
```bash
npm run dev
```

### Building for Production
Vite builds the project, compiles styles, minifies Javascript, and partitions assets into chunks inside the `dist/` directory:
```bash
npm run build
```

### Previewing the Production Build
To test the built files locally before hosting:
```bash
npm run preview
```

---

## 🛠️ Google Search Console & Bing Webmaster Verification

1. **Update Verification Tokens**:
   - For **Google Search Console**: Replace the site verification token inside `index.html` on line 13:
     `<meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_TOKEN" />`
   - For **Bing Webmaster Tools**: Replace the Bing verification token on line 14:
     `<meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_TOKEN" />`
2. **Submit Sitemaps**:
   - Go to Google Search Console ➔ Sitemaps.
   - Enter `https://www.vermafibers.com/sitemap.xml` and submit.
   - Submit the same XML link in the Bing Webmaster console.
