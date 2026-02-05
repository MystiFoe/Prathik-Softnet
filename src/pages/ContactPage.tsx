import React, { useState } from 'react';
import { HERO, COMPANY, FORM_OPTIONS, SEO } from '@/data/content';
import { Icons } from '@/utils/icons';
import SectionHeading from '@/components/ui/SectionHeading';
import PageMeta from '@/components/ui/PageMeta';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  services: string[];
  description: string;
  budget: string;
  contactMethod: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', email: '', phone: '', company: '', industry: '',
    services: [], description: '', budget: '', contactMethod: 'Email',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = () => {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.phone.trim() || !/^[+]?\d{10,13}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Valid phone number is required';
    if (!form.description.trim()) errs.description = 'Please describe your requirements';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const subject = encodeURIComponent(`Website Inquiry from ${form.name}`);
    const bodyParts = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.company ? `Company: ${form.company}` : '',
      form.industry ? `Industry: ${form.industry}` : '',
      form.services.length ? `Services: ${form.services.join(', ')}` : '',
      form.budget ? `Budget: ${form.budget}` : '',
      `Preferred Contact: ${form.contactMethod}`,
      '',
      `Requirements:`,
      form.description,
    ].filter(Boolean).join('\n');
    const body = encodeURIComponent(bodyParts);

    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setSubmitting(false);
  };

  const handleServiceToggle = (service: string) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  };

  if (submitted) {
    return (
      <>
        <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
          <div className="container-custom relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.contact.headline}</h1>
          </div>
        </section>
        <section className="py-20 bg-white">
          <div className="container-custom max-w-lg mx-auto text-center">
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.checkCircle size={32} className="text-accent-500" />
            </div>
            <h2 className="text-2xl font-bold text-secondary-900 mb-4">Thank You!</h2>
            <p className="text-secondary-600 mb-8">
              Your request has been submitted successfully. Our team will review your requirements and get back to you within 4 business hours.
            </p>
            <div className="space-y-3">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center justify-center gap-2 text-sm font-medium text-primary-500">
                <Icons.phone size={16} /> Call us: {COMPANY.phoneDisplay}
              </a>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-sm font-medium text-green-600">
                <Icons.whatsapp size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageMeta title={SEO.contact.title} description={SEO.contact.description} canonical="https://prathiksoftnet.com/contact" />
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.contact.headline}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">{HERO.contact.subheadline}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField label="Full Name *" name="name" value={form.name} error={errors.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <FormField label="Email Address *" name="email" type="email" value={form.email} error={errors.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <FormField label="Phone Number *" name="phone" type="tel" value={form.phone} error={errors.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <FormField label="Company Name" name="company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1.5">Industry</label>
                    <select
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Industry</option>
                      {FORM_OPTIONS.industries.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-700 mb-1.5">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value="">Select Budget</option>
                      {FORM_OPTIONS.budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">Services Interested In</label>
                  <div className="flex flex-wrap gap-2">
                    {FORM_OPTIONS.services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => handleServiceToggle(s)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          form.services.includes(s)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-1.5">Project Description *</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none ${errors.description ? 'border-red-300' : 'border-gray-200'}`}
                  />
                  {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description}</p>}
                </div>

                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3.5 bg-primary-500 text-white font-semibold rounded-xl hover:bg-primary-600 transition-colors text-base"
                >
                  Submit Request
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-secondary-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Bangalore */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-secondary-900 mb-3 flex items-center gap-2">
                    <Icons.mapPin size={16} className="text-primary-500" />
                    {COMPANY.addresses.bangalore.label}
                  </h3>
                  <p className="text-sm text-secondary-600 mb-3">{COMPANY.addresses.bangalore.full}</p>
                  <a href={COMPANY.addresses.bangalore.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary-500 hover:text-primary-600">
                    View on Map →
                  </a>
                </div>

                {/* Delhi */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-base font-bold text-secondary-900 mb-3 flex items-center gap-2">
                    <Icons.mapPin size={16} className="text-primary-500" />
                    {COMPANY.addresses.delhi.label}
                  </h3>
                  <p className="text-sm text-secondary-600 mb-3">{COMPANY.addresses.delhi.full}</p>
                  <a href={COMPANY.addresses.delhi.mapUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-primary-500 hover:text-primary-600">
                    View on Map →
                  </a>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                  <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-secondary-700 hover:text-primary-500 transition-colors">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icons.phone size={18} className="text-primary-500" />
                    </div>
                    <div>
                      <div className="font-semibold">{COMPANY.phoneDisplay}</div>
                      <div className="text-xs text-secondary-400">Mon - Fri, 9 AM - 6 PM</div>
                    </div>
                  </a>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-secondary-700 hover:text-primary-500 transition-colors">
                    <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center">
                      <Icons.mail size={18} className="text-primary-500" />
                    </div>
                    <div>
                      <div className="font-semibold">{COMPANY.email}</div>
                      <div className="text-xs text-secondary-400">Respond within 4 hours</div>
                    </div>
                  </a>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-secondary-700 hover:text-green-600 transition-colors">
                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                      <Icons.whatsapp size={18} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-xs text-secondary-400">Quick chat for inquiries</div>
                    </div>
                  </a>
                </div>

                <div className="bg-primary-50 rounded-2xl p-6">
                  <h4 className="text-sm font-bold text-secondary-900 mb-2">Business Hours</h4>
                  <p className="text-sm text-secondary-600">{COMPANY.hours}</p>
                  <p className="text-sm text-secondary-600">{COMPANY.hoursSaturday}</p>
                  <p className="text-xs text-primary-600 font-medium mt-2">{COMPANY.emergencySupport}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Frequently Asked Questions" />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'What are your delivery timelines?', a: 'Standard configurations ship within 5-7 business days. Custom or build-to-order configurations typically take 2-4 weeks depending on OEM lead times.' },
              { q: 'Do you offer bulk discounts?', a: 'Yes. Our pricing improves with volume. For large deployments, we negotiate special project pricing directly with OEM manufacturers.' },
              { q: 'What payment terms do you offer?', a: 'We offer multiple payment options including advance payment, credit terms (for qualifying organizations), EMI, and leasing.' },
              { q: 'Do all products come with manufacturer warranty?', a: 'Yes. All products are sourced through authorized channels and come with full manufacturer warranty. We also offer extended warranty packages.' },
              { q: 'Do you provide on-site installation?', a: 'Yes. Our certified engineers handle installation across all major cities in India. Remote setup assistance is available for other locations.' },
              { q: 'What AMC packages do you offer?', a: 'We offer three tiers: Basic (break-fix), Standard (proactive with monitoring), and Premium (fully managed with dedicated engineer). Contact us for details.' },
              { q: 'Can I get a custom configuration?', a: 'Yes. We work with OEMs to build custom server, storage, and networking configurations based on your specific workload requirements.' },
              { q: 'Do you serve clients outside Bangalore and Delhi?', a: 'Yes. While our offices are in Bangalore and Delhi NCR, we deliver and support clients across all major cities in India.' },
            ].map((faq) => (
              <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({ label, name, type = 'text', value, error, onChange }: {
  label: string; name: string; type?: string; value: string; error?: string; onChange: (v: string) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-secondary-700 mb-1.5">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-2.5 bg-gray-50 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 ${error ? 'border-red-300' : 'border-gray-200'}`}
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full px-6 py-4 text-left" aria-expanded={open}>
        <span className="text-sm font-semibold text-secondary-900 pr-4">{question}</span>
        <Icons.chevronDown size={16} className={`text-secondary-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm text-secondary-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
