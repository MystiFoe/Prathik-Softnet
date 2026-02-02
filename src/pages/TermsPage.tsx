import React from 'react';
import { COMPANY, SEO } from '@/data/content';
import PageMeta from '@/components/ui/PageMeta';

export default function TermsPage() {
  return (
    <>
    <PageMeta title={SEO.terms.title} description={SEO.terms.description} canonical="https://prathiksoftnet.com/terms" />
    <section className="py-20 bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-secondary-400 mb-10">Last updated: January 2025</p>
        <div className="prose max-w-none text-secondary-600 leading-relaxed space-y-6">
          <p>These Terms of Service govern your use of the {COMPANY.name} website and services. By accessing our website or engaging our services, you agree to these terms.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">1. Services</h2>
          <p>{COMPANY.name} provides IT hardware procurement, infrastructure design, maintenance, consulting, and installation services. All services are subject to separate agreements and statements of work.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">2. Product Orders</h2>
          <p>Product quotes are valid for 15 business days unless otherwise stated. Prices are subject to manufacturer pricing changes. All orders are subject to product availability and confirmation.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">3. Payment Terms</h2>
          <p>Payment terms are specified in individual quotes and purchase orders. Standard payment terms require advance payment or confirmed credit terms prior to order processing. Late payments may incur interest at 1.5% per month.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">4. Warranties</h2>
          <p>All hardware products carry manufacturer warranties as specified at the time of purchase. {COMPANY.name} does not provide warranties beyond those offered by the original equipment manufacturer. Extended warranty packages are available as separate add-on services.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">5. Returns and Refunds</h2>
          <p>Returns are subject to manufacturer return policies. Custom or build-to-order products are non-returnable. Standard products may be returned within 15 days of delivery in original packaging, subject to restocking fees.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">6. Limitation of Liability</h2>
          <p>{COMPANY.name}'s liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service or product giving rise to such claim.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">7. Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and design elements, is the property of {COMPANY.name} and protected by applicable intellectual property laws.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">8. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Bangalore, Karnataka.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">9. Contact</h2>
          <p>For questions about these terms, contact us at {COMPANY.email} or {COMPANY.phoneDisplay}.</p>
        </div>
      </div>
    </section>
    </>
  );
}
