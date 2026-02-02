import React from 'react';
import { COMPANY, SEO } from '@/data/content';
import PageMeta from '@/components/ui/PageMeta';

export default function PrivacyPage() {
  return (
    <>
    <PageMeta title={SEO.privacy.title} description={SEO.privacy.description} canonical="https://prathiksoftnet.com/privacy" />
    <section className="py-20 bg-white">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-secondary-400 mb-10">Last updated: January 2025</p>
        <div className="prose max-w-none text-secondary-600 leading-relaxed space-y-6">
          <p>{COMPANY.name} ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">1. Information We Collect</h2>
          <p><strong>Personal Information:</strong> When you submit a contact form, request a quote, or engage our services, we may collect your name, email address, phone number, company name, job title, and project requirements.</p>
          <p><strong>Usage Data:</strong> We automatically collect information about your device and browsing activity, including IP address, browser type, pages visited, time spent, and referring URLs.</p>
          <p><strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience, analyze usage patterns, and serve relevant content. See our Cookie Policy for details.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Respond to your inquiries and provide requested quotes</li>
            <li>Deliver and improve our products and services</li>
            <li>Send relevant communications about our services (with your consent)</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">3. Information Sharing</h2>
          <p>We do not sell your personal information. We may share information with:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>OEM partners when processing your product orders</li>
            <li>Service providers who assist our operations (hosting, analytics)</li>
            <li>Legal authorities when required by law</li>
          </ul>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">5. Data Retention</h2>
          <p>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, contact us at {COMPANY.email}.</p>

          <h2 className="text-xl font-bold text-secondary-900 mt-8">7. Contact Us</h2>
          <p>For privacy-related questions, contact us at:</p>
          <p>{COMPANY.name}<br />{COMPANY.addresses.bangalore.full}<br />Email: {COMPANY.email}<br />Phone: {COMPANY.phoneDisplay}</p>
        </div>
      </div>
    </section>
    </>
  );
}
