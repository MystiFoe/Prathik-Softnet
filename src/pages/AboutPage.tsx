import React from 'react';
import { HERO, COMPANY, TEAM, MILESTONES, CERTIFICATIONS, WHY_CHOOSE_US, SEO } from '@/data/content';
import { Icons, getIcon } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';
import PageMeta from '@/components/ui/PageMeta';

export default function AboutPage() {
  return (
    <>
      <PageMeta title={SEO.about.title} description={SEO.about.description} canonical="https://prathiksoftnet.com/about" />
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.about.headline}</h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">{HERO.about.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Our Story" />
            <div className="prose prose-lg max-w-none text-secondary-600 leading-relaxed space-y-4">
              <p>
                Prathik Softnet was founded in 2018 by Prathik P Nadig with a clear mission: to make enterprise-grade IT infrastructure accessible and affordable for businesses across India. Starting from a small office in Bangalore's Banashankari neighborhood, the company began by sourcing Dell and HP servers for mid-size IT companies in the city.
              </p>
              <p>
                What set Prathik Softnet apart from day one was a commitment to honest, consultative selling. Rather than pushing products for margins, the team focused on understanding each client's actual workload requirements and recommending the most cost-effective solution, even if that meant a less expensive product.
              </p>
              <p>
                This approach earned trust and repeat business. Within two years, Prathik Softnet had expanded from two OEM partnerships to five, added networking and security solutions to its portfolio, and grown its client base steadily. The team invested in building deep technical expertise, with engineers earning certifications from Dell, Cisco, VMware, and HP.
              </p>
              <p>
                In 2022, recognizing growing demand from North India, the company opened a branch office in the Delhi NCR region. The same year, Prathik Softnet achieved ISO 9001:2015 and ISO 27001:2018 certifications, formalizing the quality and security standards that had always been part of its DNA.
              </p>
              <p>
                Today, Prathik Softnet serves clients across banking, healthcare, education, manufacturing, and government sectors. The company delivers everything from single workstation procurement to complete data center builds, backed by comprehensive AMC services that keep client infrastructure running around the clock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                <Icons.shield size={24} className="text-primary-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Our Mission</h3>
              <p className="text-secondary-600 leading-relaxed">
                To empower organizations across India with reliable, cost-effective IT infrastructure solutions that drive business growth. We deliver enterprise-grade technology with the personalized service and technical expertise that large system integrators often lack.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-5">
                <Icons.lightbulb size={24} className="text-accent-500" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">Our Vision</h3>
              <p className="text-secondary-600 leading-relaxed">
                To be India's most trusted IT infrastructure partner, recognized for technical depth, transparent business practices, and consistently exceeding client expectations. We envision a future where every Indian business has access to world-class IT infrastructure, regardless of size.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Our Core Values" subtitle="The principles that guide every decision we make." />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Integrity', desc: 'Honest advice and transparent pricing. We recommend what you need, not what earns us the highest margin.' },
              { title: 'Expertise', desc: 'OEM-certified professionals who understand both the technology and your business requirements.' },
              { title: 'Reliability', desc: 'We deliver on our promises. Every timeline, every specification, every commitment honored.' },
              { title: 'Partnership', desc: 'We invest in long-term relationships, not transactions. Your success is our success.' },
              { title: 'Innovation', desc: 'We stay current with technology evolution to bring you forward-looking solutions.' },
            ].map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Our Journey" subtitle="Key milestones in our growth story." />
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
              {MILESTONES.map((m, i) => (
                <TimelineItem key={m.year} milestone={m} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Leadership Team" subtitle="The people driving our mission forward." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Certifications & Accreditations" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => {
              const Icon = getIcon(cert.icon);
              return (
                <div key={cert.name} className="bg-white rounded-2xl p-6 border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                    {Icon && <Icon size={24} className="text-primary-500" />}
                  </div>
                  <h4 className="text-sm font-bold text-secondary-900">{cert.name}</h4>
                  <p className="text-xs text-secondary-500 mt-1">{cert.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionHeading title="Our Offices" />
          <div className="grid md:grid-cols-2 gap-8">
            {Object.values(COMPANY.addresses).map((addr) => (
              <div key={addr.label} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Icons.mapPin size={20} className="text-primary-500" />
                  <h3 className="text-lg font-bold text-secondary-900">{addr.label}</h3>
                </div>
                <p className="text-secondary-600 mb-4">{addr.full}</p>
                <a
                  href={addr.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  View on Google Maps
                  <Icons.externalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`text-center p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <h4 className="text-base font-bold text-secondary-900 mb-2">{title}</h4>
      <p className="text-sm text-secondary-500 leading-relaxed">{desc}</p>
    </div>
  );
}

function TimelineItem({ milestone, index }: { milestone: typeof MILESTONES[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`relative pl-12 pb-10 last:pb-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
      <div className="absolute left-2 top-1 w-5 h-5 bg-primary-500 rounded-full border-4 border-white" />
      <span className="text-sm font-bold text-primary-500">{milestone.year}</span>
      <h4 className="text-base font-bold text-secondary-900 mt-1">{milestone.title}</h4>
      <p className="text-sm text-secondary-500 mt-1 leading-relaxed">{milestone.description}</p>
    </div>
  );
}

function TeamCard({ member }: { member: typeof TEAM[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div ref={ref} className={`bg-gray-50 rounded-2xl p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
        <span className="text-2xl font-bold text-primary-500">{member.name.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <h4 className="text-base font-bold text-secondary-900">{member.name}</h4>
      <p className="text-sm font-medium text-primary-500 mb-3">{member.role}</p>
      <p className="text-sm text-secondary-500 leading-relaxed line-clamp-4">{member.bio}</p>
    </div>
  );
}
