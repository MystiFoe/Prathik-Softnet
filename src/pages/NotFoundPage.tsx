import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from '@/utils/icons';
import { SEO } from '@/data/content';
import PageMeta from '@/components/ui/PageMeta';

export default function NotFoundPage() {
  return (
    <>
    <PageMeta title={SEO.notFound.title} description={SEO.notFound.description} />
    <section className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="container-custom text-center">
        <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-secondary-900 mb-3">Page Not Found</h1>
        <p className="text-secondary-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="inline-flex items-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors">
            Go Home <Icons.arrowRight size={16} className="ml-2" />
          </Link>
          <Link to="/contact" className="inline-flex items-center px-6 py-3 text-primary-500 font-semibold border border-primary-200 rounded-xl hover:bg-primary-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
    </>
  );
}
