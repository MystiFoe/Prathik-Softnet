import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HERO, CASE_STUDIES, COMPANY } from '@/data/content';
import { Icons } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';

export function CaseStudiesLanding() {
  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.caseStudies.headline}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">{HERO.caseStudies.subheadline}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs) => (
              <CaseStudyCard key={cs.id} cs={cs} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Let Us Build Your Success Story</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">Join 200+ organizations that trust Prathik Softnet with their IT infrastructure.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50">
            Start Your Project <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

function CaseStudyCard({ cs }: { cs: typeof CASE_STUDIES[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Link
      to={`/case-studies/${cs.slug}`}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
        <Icons.building size={48} className="text-white/30" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">{cs.industry}</span>
        <h3 className="text-lg font-bold text-secondary-900 mt-2 mb-3 group-hover:text-primary-500 transition-colors">{cs.title}</h3>
        <div className="grid grid-cols-2 gap-3 mb-4">
          {cs.results.slice(0, 2).map((r) => (
            <div key={r.metric} className="bg-gray-50 rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-primary-500">{r.value}</div>
              <div className="text-[10px] text-secondary-500 font-medium">{r.metric}</div>
            </div>
          ))}
        </div>
        <span className="inline-flex items-center text-sm font-semibold text-primary-500 group-hover:underline">
          Read Full Story <Icons.arrowRight size={14} className="ml-1" />
        </span>
      </div>
    </Link>
  );
}

export function CaseStudyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const cs = CASE_STUDIES.find(c => c.slug === slug);
  const others = CASE_STUDIES.filter(c => c.slug !== slug).slice(0, 2);

  if (!cs) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Case Study Not Found</h1>
          <Link to="/case-studies" className="text-primary-500 font-semibold">Back to Case Studies</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-primary-200 text-sm mb-4">
            <Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
            <Icons.chevronRight size={14} />
            <span>{cs.industry}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight max-w-3xl">{cs.title}</h1>
          <div className="flex items-center gap-6 mt-6 text-gray-300 text-sm">
            <span>Industry: {cs.industry}</span>
            <span>Timeline: {cs.timeline}</span>
            <span>Team: {cs.teamSize}</span>
          </div>
        </div>
      </section>

      {/* Client */}
      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold text-secondary-400 uppercase tracking-wider mb-2">Client</h2>
          <p className="text-secondary-700">{cs.client}</p>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">The Challenge</h2>
          <p className="text-secondary-600 leading-relaxed">{cs.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">Our Solution</h2>
          <p className="text-secondary-600 leading-relaxed">{cs.solution}</p>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-12 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="text-lg font-bold text-secondary-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {cs.technologies.map((t) => (
              <span key={t} className="px-3 py-1.5 bg-gray-50 rounded-lg text-sm font-medium text-secondary-700 border border-gray-100">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-secondary-900">
        <div className="container-custom">
          <SectionHeading title="Results" light />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {cs.results.map((r) => (
              <div key={r.metric} className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary-400">{r.value}</div>
                <div className="text-sm font-semibold text-white mt-1">{r.metric}</div>
                <div className="text-xs text-gray-400 mt-1">{r.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <Icons.quote size={40} className="text-primary-200 mx-auto mb-4" />
          <blockquote className="text-lg md:text-xl text-secondary-700 italic leading-relaxed">
            "{cs.testimonial.quote}"
          </blockquote>
          <div className="mt-6">
            <div className="font-semibold text-secondary-900">{cs.testimonial.author}</div>
            <div className="text-sm text-secondary-500">{cs.testimonial.role}</div>
          </div>
        </div>
      </section>

      {/* Related */}
      {others.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <SectionHeading title="More Case Studies" />
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {others.map((o) => (
                <Link key={o.id} to={`/case-studies/${o.slug}`} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all">
                  <span className="text-xs font-semibold text-primary-500 uppercase">{o.industry}</span>
                  <h3 className="text-base font-bold text-secondary-900 mt-2 group-hover:text-primary-500 transition-colors">{o.title}</h3>
                  <div className="flex gap-3 mt-3">
                    {o.results.slice(0, 2).map((r) => (
                      <span key={r.metric} className="text-sm"><span className="font-bold text-primary-500">{r.value}</span> {r.metric}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50">
            Get Free Consultation <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
