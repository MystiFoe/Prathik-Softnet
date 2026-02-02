import React from 'react';
import { Link } from 'react-router-dom';
import { HERO, PARTNERS, SEO } from '@/data/content';
import { Icons } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';
import PageMeta from '@/components/ui/PageMeta';

export default function PartnersPage() {
  return (
    <>
      <PageMeta title={SEO.partners.title} description={SEO.partners.description} canonical="https://prathiksoftnet.com/partners" />
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.partners.headline}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">{HERO.partners.subheadline}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <p className="text-secondary-600 leading-relaxed text-lg">
            As authorized partners of the world's leading technology manufacturers, Prathik Softnet delivers genuine, warrantied products with direct access to OEM technical support and resources. Our partnerships ensure you receive the best pricing, priority fulfillment, and certified implementation services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {PARTNERS.map((p) => (
              <PartnerCard key={p.id} partner={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Products from Our Partners?</h2>
          <p className="text-primary-100 mb-8">Get competitive quotes for any product from our OEM portfolio.</p>
          <Link to="/products" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50">
            Browse Products <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

function PartnerCard({ partner }: { partner: typeof PARTNERS[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold" style={{ color: partner.color }}>{partner.name}</h3>
          <span className="text-sm text-secondary-500">{partner.level}</span>
        </div>
        <span className="text-xs bg-primary-50 text-primary-600 px-2.5 py-1 rounded-full font-medium">{partner.years} Years</span>
      </div>
      <p className="text-sm text-secondary-600 leading-relaxed mb-5">{partner.description}</p>
      <div className="mb-4">
        <h4 className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-2">Product Categories</h4>
        <div className="flex flex-wrap gap-1.5">
          {partner.categories.map((c) => (
            <span key={c} className="text-xs px-2.5 py-1 bg-gray-50 rounded-full text-secondary-600 border border-gray-100">{c}</span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-2">Certifications</h4>
        <div className="flex flex-wrap gap-1.5">
          {partner.certifications.map((c) => (
            <span key={c} className="text-xs px-2.5 py-1 bg-accent-50 rounded-full text-accent-700 font-medium">{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
