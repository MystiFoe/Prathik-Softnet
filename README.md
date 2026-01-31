# Prathik Softnet - Enterprise IT Infrastructure Solutions

Production-ready website for Prathik Softnet, an IT hardware and infrastructure solutions provider based in Bangalore and Delhi, India.

## Tech Stack

- **React 19** with TypeScript
- **Vite 6** for build tooling
- **Tailwind CSS 4** for styling
- **React Router 7** for client-side routing
- **Scroll-based animations** via IntersectionObserver hooks

## Project Structure

```
src/
├── components/
│   ├── layout/        # Header, Footer, Layout
│   ├── ui/            # SectionHeading and reusable components
│   └── features/      # WhatsApp button, ScrollToTop
├── pages/             # All page components (lazy-loaded)
├── data/              # content.ts - all website content
├── hooks/             # useScrollAnimation, useCountUp
├── utils/             # Icons, helpers
└── styles/            # Tailwind CSS entry point
```

## Pages (25+ routes)

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Full landing page with 12 sections |
| About | `/about` | Company story, team, timeline, certifications |
| Solutions | `/solutions` | 5 service offerings overview |
| Solution Detail | `/solutions/:slug` | Individual solution with process, FAQ |
| Products | `/products` | 30+ products with filtering and search |
| Industries | `/industries` | 6 industry verticals |
| Industry Detail | `/industries/:slug` | Industry-specific solutions |
| Case Studies | `/case-studies` | 5 detailed project case studies |
| Case Study Detail | `/case-studies/:slug` | Individual case study pages |
| Partners | `/partners` | 8 OEM technology partnerships |
| Blog | `/blog` | 5 full-length articles |
| Blog Post | `/blog/:slug` | Individual article pages |
| Contact | `/contact` | Contact form with validation, office info, FAQ |
| Privacy Policy | `/privacy` | Privacy policy |
| Terms of Service | `/terms` | Terms and conditions |
| 404 | `*` | Custom not found page |

## Development

```bash
npm install
npm run dev       # Start dev server on port 3000
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Build Output

Production build generates optimized, code-split bundles:
- Vendor chunk: React, React DOM, React Router (~48 KB gzip)
- Page chunks: Each page lazy-loaded separately (1-15 KB each)
- CSS: Single optimized stylesheet (~9 KB gzip)
- Total initial load: ~130 KB gzip

## Content Management

All website content is centralized in `src/data/content.ts`. To update:
- **Company info**: Edit the `COMPANY` object
- **Products**: Add/edit entries in the `PRODUCTS` array
- **Solutions**: Update `SOLUTIONS` array
- **Case Studies**: Add entries to `CASE_STUDIES`
- **Blog posts**: Add entries to `BLOG_POSTS`
- **Testimonials**: Update `TESTIMONIALS` array
- **Team members**: Edit `TEAM` array

## SEO

- Structured data (JSON-LD) for LocalBusiness in index.html
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Open Graph and Twitter Card meta tags
- Semantic HTML with proper heading hierarchy

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### Manual / cPanel

```bash
npm run build
# Upload contents of dist/ to your web root
# Ensure all routes redirect to index.html (SPA)
```

**Important**: Since this is a SPA with client-side routing, configure your hosting to redirect all requests to `index.html`.

## Contact

- **Company**: Prathik Softnet
- **Phone**: +91 7019555245
- **Email**: prathiknadig4@gmail.com
- **Bangalore**: 912, 2nd Floor, BSK 3rd Stage, Kathriguppe, Bangalore - 560085
