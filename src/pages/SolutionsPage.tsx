import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HERO, SOLUTIONS, CASE_STUDIES, COMPANY, SEO } from '@/data/content';
import { Icons, getIcon } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';
import PageMeta from '@/components/ui/PageMeta';

export function SolutionsLanding() {
  return (
    <>
      <PageMeta title={SEO.solutions.title} description={SEO.solutions.description} canonical="https://prathiksoftnet.com/solutions" />
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.solutions.headline}</h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">{HERO.solutions.subheadline}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SOLUTIONS.map((s) => {
              const Icon = getIcon(s.icon);
              return (
                <SolutionCard key={s.id} solution={s} Icon={Icon} />
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="How We Work" subtitle="A structured approach that delivers results." />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Discover', desc: 'We assess your needs, challenges, and goals through consultative sessions.' },
              { step: 2, title: 'Design', desc: 'Our engineers architect the optimal solution for your specific requirements.' },
              { step: 3, title: 'Deliver', desc: 'We procure, configure, deploy, and test every component to specification.' },
              { step: 4, title: 'Support', desc: 'Ongoing maintenance and support keep your infrastructure performing optimally.' },
            ].map((item) => (
              <ProcessStep key={item.step} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a Project in Mind?</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">Let our experts help you design the right infrastructure solution.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Discuss Your Project
            <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

function SolutionCard({ solution, Icon }: { solution: typeof SOLUTIONS[0]; Icon: ReturnType<typeof getIcon> }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Link
      to={`/solutions/${solution.slug}`}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group block bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
        {Icon && <Icon size={28} className="text-primary-500 group-hover:text-white transition-colors" />}
      </div>
      <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-500 transition-colors">{solution.title}</h3>
      <p className="text-sm text-secondary-500 leading-relaxed mb-6">{solution.description}</p>
      <span className="inline-flex items-center text-sm font-semibold text-primary-500">
        Learn More <Icons.arrowRight size={16} className="ml-1" />
      </span>
    </Link>
  );
}

function ProcessStep({ step, title, desc }: { step: number; title: string; desc: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-14 h-14 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
        {step}
      </div>
      <h3 className="text-lg font-bold text-secondary-900 mb-2">{title}</h3>
      <p className="text-sm text-secondary-500">{desc}</p>
    </div>
  );
}

// Individual Solution Page
export function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const solution = SOLUTIONS.find(s => s.slug === slug);

  if (!solution) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Solution Not Found</h1>
          <Link to="/solutions" className="text-primary-500 font-semibold">Back to Solutions</Link>
        </div>
      </div>
    );
  }

  const Icon = getIcon(solution.icon);
  const relatedCases = CASE_STUDIES.filter(cs => solution.industries.some(i => cs.industry.includes(i.split(' ')[0]))).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <div className="flex items-center gap-2 text-primary-200 text-sm mb-4">
            <Link to="/solutions" className="hover:text-white transition-colors">Solutions</Link>
            <Icons.chevronRight size={14} />
            <span>{solution.shortTitle}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{solution.title}</h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-3xl">{solution.description}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Overview</h2>
            <p className="text-secondary-600 leading-relaxed">{solution.overview}</p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="What We Deliver" />
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {solution.deliverables.map((d) => (
              <div key={d.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100">
                <Icons.checkCircle size={20} className="text-accent-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-secondary-900">{d.title}</h4>
                  <p className="text-sm text-secondary-500 mt-1">{d.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading title="Our Process" />
          <div className="max-w-3xl mx-auto">
            {solution.process.map((p) => (
              <div key={p.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white font-bold shrink-0">
                  {p.step}
                </div>
                <div>
                  <h4 className="text-base font-bold text-secondary-900">{p.title}</h4>
                  <p className="text-sm text-secondary-500 mt-1 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Key Benefits" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h4 className="text-base font-bold text-secondary-900 mb-2">{b.title}</h4>
                <p className="text-sm text-secondary-500 leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <SectionHeading title="Technologies We Use" />
          <div className="flex flex-wrap justify-center gap-3">
            {solution.technologies.map((t) => (
              <span key={t} className="px-4 py-2 bg-gray-50 rounded-lg text-sm font-medium text-secondary-700 border border-gray-100">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-4">
            {solution.faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 mb-8">Get a free consultation for your {solution.shortTitle.toLowerCase()} needs.</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Request a Consultation
            <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-6 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-secondary-900 pr-4">{faq.question}</span>
        <Icons.chevronDown size={16} className={`text-secondary-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-secondary-500 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
