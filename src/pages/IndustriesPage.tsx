import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HERO, INDUSTRIES, COMPANY, SEO } from '@/data/content';
import { Icons, getIcon } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';
import PageMeta from '@/components/ui/PageMeta';

export function IndustriesLanding() {
  return (
    <>
      <PageMeta title={SEO.industries.title} description={SEO.industries.description} canonical="https://prathiksoftnet.com/industries" />
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.industries.headline}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">{HERO.industries.subheadline}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => {
              const Icon = getIcon(ind.icon);
              return <IndustryCard key={ind.id} industry={ind} Icon={Icon} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Your Industry Not Listed?</h2>
          <p className="text-primary-100 mb-8">We serve businesses across all sectors. Tell us your needs.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Contact Us <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

function IndustryCard({ industry, Icon }: { industry: typeof INDUSTRIES[0]; Icon: ReturnType<typeof getIcon> }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Link
      to={`/industries/${industry.slug}`}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group block bg-gray-50 rounded-2xl p-8 hover:bg-primary-500 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
        {Icon && <Icon size={28} className="text-primary-500 group-hover:text-white transition-colors" />}
      </div>
      <h3 className="text-xl font-bold text-secondary-900 group-hover:text-white transition-colors">{industry.title}</h3>
      <p className="text-sm text-secondary-500 group-hover:text-primary-100 mt-3 leading-relaxed transition-colors">{industry.description}</p>
      <span className="inline-flex items-center text-sm font-semibold text-primary-500 group-hover:text-white mt-4 transition-colors">
        Learn More <Icons.arrowRight size={16} className="ml-1" />
      </span>
    </Link>
  );
}

export function IndustryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Industry Not Found</h1>
          <Link to="/industries" className="text-primary-500 font-semibold">Back to Industries</Link>
        </div>
      </div>
    );
  }

  const Icon = getIcon(industry.icon);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-primary-200 text-sm mb-4">
            <Link to="/industries" className="hover:text-white transition-colors">Industries</Link>
            <Icons.chevronRight size={14} />
            <span>{industry.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{industry.title}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">{industry.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Industry Overview</h2>
          <p className="text-secondary-600 leading-relaxed">{industry.overview}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Challenges We Solve" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {industry.challenges.map((c) => (
              <div key={c.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="text-base font-bold text-secondary-900 mb-2">{c.title}</h4>
                <p className="text-sm text-secondary-500 leading-relaxed">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading title="Key Metrics" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {industry.metrics.map((m) => (
              <div key={m.label} className="text-center p-4">
                <div className="text-2xl md:text-3xl font-bold text-primary-500">{m.value}</div>
                <div className="text-xs text-secondary-500 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Compliance & Standards" />
          <div className="flex flex-wrap justify-center gap-3">
            {industry.compliance.map((c) => (
              <span key={c} className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-secondary-700 border border-gray-100">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Build Your {industry.title} Infrastructure</h2>
          <p className="text-primary-100 mb-8">Speak with our industry specialists for a tailored solution.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50">
            Schedule Consultation <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
