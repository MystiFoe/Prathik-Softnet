import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/HomePage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const PartnersPage = lazy(() => import('@/pages/PartnersPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// Solutions
const SolutionsPages = lazy(() =>
  import('@/pages/SolutionsPage').then(m => ({ default: m.SolutionsLanding }))
);
const SolutionDetailPage = lazy(() =>
  import('@/pages/SolutionsPage').then(m => ({ default: m.SolutionDetailPage }))
);

// Industries
const IndustriesLanding = lazy(() =>
  import('@/pages/IndustriesPage').then(m => ({ default: m.IndustriesLanding }))
);
const IndustryDetailPage = lazy(() =>
  import('@/pages/IndustriesPage').then(m => ({ default: m.IndustryDetailPage }))
);

// Case Studies
const CaseStudiesLanding = lazy(() =>
  import('@/pages/CaseStudiesPage').then(m => ({ default: m.CaseStudiesLanding }))
);
const CaseStudyDetailPage = lazy(() =>
  import('@/pages/CaseStudiesPage').then(m => ({ default: m.CaseStudyDetailPage }))
);

// Blog
const BlogLanding = lazy(() =>
  import('@/pages/BlogPage').then(m => ({ default: m.BlogLanding }))
);
const BlogPostPage = lazy(() =>
  import('@/pages/BlogPage').then(m => ({ default: m.BlogPostPage }))
);

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-8 h-8 border-3 border-primary-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="solutions" element={<SolutionsPages />} />
            <Route path="solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="industries" element={<IndustriesLanding />} />
            <Route path="industries/:slug" element={<IndustryDetailPage />} />
            <Route path="case-studies" element={<CaseStudiesLanding />} />
            <Route path="case-studies/:slug" element={<CaseStudyDetailPage />} />
            <Route path="partners" element={<PartnersPage />} />
            <Route path="blog" element={<BlogLanding />} />
            <Route path="blog/:slug" element={<BlogPostPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
