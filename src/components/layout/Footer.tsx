import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY, SOLUTIONS } from '@/data/content';
import { Icons } from '@/utils/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-gray-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Prathik Softnet</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Enterprise IT infrastructure solutions provider serving 200+ organizations across India since 2018. Authorized partner of Dell, HP, Cisco, and Lenovo.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Icons.linkedin size={16} />
              </a>
              <a
                href={COMPANY.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                aria-label="WhatsApp"
              >
                <Icons.whatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About Us', path: '/about' },
                { label: 'Products', path: '/products' },
                { label: 'Case Studies', path: '/case-studies' },
                { label: 'Partners', path: '/partners' },
                { label: 'Blog', path: '/blog' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2.5">
              {SOLUTIONS.map((s) => (
                <li key={s.id}>
                  <Link to={`/solutions/${s.slug}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/industries" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Icons.mapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.addresses.bangalore.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Icons.mapPin size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.addresses.delhi.full}</span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Icons.phone size={16} className="text-primary-400 shrink-0" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors">
                  <Icons.mail size={16} className="text-primary-400 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icons.clock size={16} className="text-primary-400 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-400">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
