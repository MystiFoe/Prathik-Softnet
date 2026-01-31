import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY, NAV_ITEMS } from '@/data/content';
import { Icons } from '@/utils/icons';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0" aria-label="Prathik Softnet Home">
              <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-secondary-900 leading-tight tracking-tight">Prathik Softnet</span>
                <span className="text-[10px] text-secondary-500 font-medium tracking-wider uppercase leading-none hidden sm:block">IT Infrastructure Solutions</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                          location.pathname.startsWith(item.path)
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-secondary-700 hover:text-primary-500 hover:bg-gray-50'
                        }`}
                        aria-expanded={openDropdown === item.label}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <Icons.chevronDown size={14} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      {openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2.5 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === item.path
                          ? 'text-primary-500 bg-primary-50'
                          : 'text-secondary-700 hover:text-primary-500 hover:bg-gray-50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-sm font-medium text-secondary-700 hover:text-primary-500 transition-colors"
              >
                <Icons.phone size={16} />
                <span>{COMPANY.phoneDisplay}</span>
              </a>
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-primary-500 text-white text-sm font-semibold rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
              >
                Request Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <Icons.x size={24} /> : <Icons.menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/20" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl overflow-y-auto">
            <div className="p-6 pt-20">
              <nav className="space-y-1" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                          className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-secondary-800 rounded-lg hover:bg-gray-50"
                        >
                          {item.label}
                          <Icons.chevronDown size={16} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === item.label && (
                          <div className="ml-4 space-y-1 mt-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.path}
                                to={child.path}
                                className="block px-3 py-2.5 text-sm text-secondary-600 hover:text-primary-500 rounded-lg hover:bg-primary-50"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-3 py-3 text-base font-medium rounded-lg ${
                          location.pathname === item.path
                            ? 'text-primary-500 bg-primary-50'
                            : 'text-secondary-800 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-secondary-700"
                >
                  <Icons.phone size={18} />
                  {COMPANY.phoneDisplay}
                </a>
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 bg-primary-500 text-white font-semibold rounded-lg"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
