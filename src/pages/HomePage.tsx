import React from 'react';
import { Link } from 'react-router-dom';
import {
  HERO, STATS, SOLUTIONS, PRODUCTS, INDUSTRIES, TESTIMONIALS,
  WHY_CHOOSE_US, PARTNERS, CASE_STUDIES, BLOG_POSTS, CLIENT_NAMES, COMPANY
} from '@/data/content';
import { Icons, getIcon } from '@/utils/icons';
import { useScrollAnimation, useCountUp } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
      <div className="container-custom relative z-10 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-primary-200 text-sm font-medium mb-6 backdrop-blur-sm">
            <Icons.shield size={14} />
            <span>Trusted by 200+ enterprises across India</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
            {HERO.home.headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
            {HERO.home.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-400 transition-all shadow-lg shadow-primary-500/25 text-base"
            >
              {HERO.home.cta1}
              <Icons.arrowRight size={18} className="ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm text-base border border-white/20"
            >
              {HERO.home.cta2}
            </Link>
          </div>
          <div className="mt-12 flex items-center gap-8 flex-wrap">
            {['Dell', 'HPE', 'Cisco', 'Lenovo'].map((p) => (
              <span key={p} className="text-gray-400 text-sm font-medium tracking-wider uppercase">{p}</span>
            ))}
            <span className="text-gray-500 text-sm">& more</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientMarquee() {
  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="flex" style={{ width: '200%' }}>
        <div className="flex shrink-0 items-center gap-16 animate-marquee">
          {[...CLIENT_NAMES, ...CLIENT_NAMES].map((name, i) => (
            <span key={i} className="text-sm font-semibold text-gray-400 whitespace-nowrap tracking-wide uppercase">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value === 99.9 ? 999 : value);
  const displayCount = value === 99.9 ? (count / 10).toFixed(1) : count;

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-primary-500 tabular-nums">
        {displayCount}{suffix}
      </div>
      <div className="mt-2 text-sm font-medium text-secondary-600">{label}</div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Our Solutions"
          subtitle="End-to-end IT infrastructure services designed to power your digital transformation."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <ServiceCard key={s.id} solution={s} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ solution, Icon }: { solution: typeof SOLUTIONS[0]; Icon: ReturnType<typeof getIcon> }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`group bg-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary-500 transition-colors">
        {Icon && <Icon size={24} className="text-primary-500 group-hover:text-white transition-colors" />}
      </div>
      <h3 className="text-lg font-bold text-secondary-900 mb-3">{solution.title}</h3>
      <p className="text-sm text-secondary-500 leading-relaxed mb-5">{solution.description}</p>
      <Link
        to={`/solutions/${solution.slug}`}
        className="inline-flex items-center text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors"
      >
        Learn More
        <Icons.arrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}

function WhyUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Why Prathik Softnet"
          subtitle="What sets us apart from the competition."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <WhyCard key={item.title} item={item} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyCard({ item, Icon }: { item: typeof WHY_CHOOSE_US[0]; Icon: ReturnType<typeof getIcon> }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`text-center p-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
        {Icon && <Icon size={28} className="text-primary-500" />}
      </div>
      <h3 className="text-xl font-bold text-secondary-900 mb-3">{item.title}</h3>
      <p className="text-secondary-500 leading-relaxed">{item.description}</p>
    </div>
  );
}

function ProductsPreview() {
  const featured = PRODUCTS.slice(0, 6);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Featured Products"
          subtitle="Enterprise-grade hardware from authorized OEM partners."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <ProductPreviewCard key={p.id} product={p} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors"
          >
            View All Products
            <Icons.arrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductPreviewCard({ product }: { product: typeof PRODUCTS[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <Icons.server size={64} className="text-gray-300" />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">{product.brand}</span>
        <h3 className="text-base font-bold text-secondary-900 mt-1 mb-2">{product.name}</h3>
        <ul className="space-y-1 mb-4">
          {product.specs.slice(0, 3).map((s, i) => (
            <li key={i} className="text-xs text-secondary-500 flex items-start gap-1.5">
              <Icons.checkCircle size={12} className="text-accent-500 mt-0.5 shrink-0" />
              {s}
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="block w-full text-center py-2.5 bg-primary-50 text-primary-500 font-semibold rounded-lg hover:bg-primary-500 hover:text-white transition-colors text-sm"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}

function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Industries We Serve"
          subtitle="Tailored infrastructure solutions for every sector."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = getIcon(ind.icon);
            return (
              <IndustryCard key={ind.id} industry={ind} Icon={Icon} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry, Icon }: { industry: typeof INDUSTRIES[0]; Icon: ReturnType<typeof getIcon> }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Link
      to={`/industries/${industry.slug}`}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group p-6 bg-gray-50 rounded-2xl hover:bg-primary-500 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
        {Icon && <Icon size={24} className="text-primary-500 group-hover:text-white transition-colors" />}
      </div>
      <h3 className="text-base font-bold text-secondary-900 group-hover:text-white transition-colors">{industry.title}</h3>
      <p className="text-sm text-secondary-500 group-hover:text-primary-100 mt-2 leading-relaxed transition-colors line-clamp-2">{industry.description}</p>
    </Link>
  );
}

function TestimonialsSection() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-secondary-900">
      <div className="container-custom">
        <SectionHeading title="What Our Clients Say" light />
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[200px]">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className={`absolute inset-0 transition-all duration-500 ${
                  i === active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                }`}
              >
                <Icons.quote size={40} className="text-primary-500/30 mb-4" />
                <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <span className="text-primary-300 font-bold text-sm">{t.author.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{t.author}</div>
                    <div className="text-gray-400 text-xs">{t.role}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${i === active ? 'w-8 bg-primary-500' : 'bg-gray-600 hover:bg-gray-500'}`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Technology Partners"
          subtitle="Authorized partnerships with the world's leading OEMs."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {PARTNERS.map((p) => (
            <div key={p.id} className="flex items-center justify-center p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all">
              <div className="text-center">
                <div className="text-xl font-bold" style={{ color: p.color }}>{p.name}</div>
                <div className="text-xs text-secondary-400 mt-1">{p.level}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/partners" className="text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors">
            View All Partnerships →
          </Link>
        </div>
      </div>
    </section>
  );
}

function CaseStudyHighlight() {
  const featured = CASE_STUDIES.slice(0, 2);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <SectionHeading
          title="Featured Case Studies"
          subtitle="Real projects, measurable results."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-primary-500 hover:text-primary-600"
          >
            View All Case Studies
            <Icons.arrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
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
        <div className="flex gap-4 mb-4">
          {cs.results.slice(0, 2).map((r) => (
            <div key={r.metric} className="text-center">
              <div className="text-xl font-bold text-primary-500">{r.value}</div>
              <div className="text-xs text-secondary-500">{r.metric}</div>
            </div>
          ))}
        </div>
        <span className="text-sm font-semibold text-primary-500 group-hover:underline">
          Read Full Story →
        </span>
      </div>
    </Link>
  );
}

function BlogPreview() {
  const posts = BLOG_POSTS.slice(0, 3);
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Latest Insights"
          subtitle="Expert perspectives on IT infrastructure and enterprise technology."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/blog" className="text-sm font-semibold text-primary-500 hover:text-primary-600">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}

function BlogCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Link
      to={`/blog/${post.slug}`}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-40 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
        <Icons.layout size={32} className="text-secondary-300" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-secondary-400 mb-2">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-base font-bold text-secondary-900 group-hover:text-primary-500 transition-colors leading-snug">{post.title}</h3>
        <p className="text-sm text-secondary-500 mt-2 line-clamp-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Upgrade Your IT Infrastructure?
        </h2>
        <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-8">
          Get a free consultation from our infrastructure experts. We respond within 4 business hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg text-base"
          >
            Get Free Consultation
          </Link>
          <a
            href={`tel:${COMPANY.phone}`}
            className="flex items-center gap-2 px-8 py-4 text-white font-semibold border border-white/30 rounded-xl hover:bg-white/10 transition-colors text-base"
          >
            <Icons.phone size={18} />
            {COMPANY.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ClientMarquee />
      <StatsSection />
      <ServicesSection />
      <WhyUsSection />
      <ProductsPreview />
      <IndustriesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CaseStudyHighlight />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
