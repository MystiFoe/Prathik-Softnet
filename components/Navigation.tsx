import React, { useState } from 'react';
import { View } from '../types';

interface NavigationProps {
  currentView: View;
  setView: (view: View) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentView, setView }) => {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: View.HOME },
    { label: 'Products', value: View.PRODUCTS },
    { label: 'About Us', value: View.ABOUT },
    { label: 'Contact', value: View.CONTACT },
  ];

  const solutionItems = [
    { label: 'Procurement', anchor: 'procurement' },
    { label: 'Infrastructure', anchor: 'infra-solutions' },
    { label: 'AMC & Support', anchor: 'maintenance' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => {
            setView(View.HOME);
            setIsSolutionsOpen(false);
          }}
        >
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
            <div className="w-4 h-4 bg-[#00F5D4] rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="brand-font text-xl lg:text-2xl text-black">PRATHIK SOFT-NET</span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 -mt-1 uppercase">Enterprise Systems</span>
          </div>
        </div>
        
        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center space-x-10">
          <button
            onClick={() => setView(View.HOME)}
            className={`text-xs font-semibold uppercase tracking-widest transition-all hover:text-black ${
              currentView === View.HOME ? 'text-black' : 'text-zinc-500'
            }`}
          >
            Home
          </button>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
          >
            <button
              onClick={() => setView(View.SOLUTIONS)}
              className={`flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest transition-all hover:text-black ${
                currentView === View.SOLUTIONS ? 'text-black' : 'text-zinc-500'
              }`}
            >
              <span>Solutions</span>
              <svg className={`w-3 h-3 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            {isSolutionsOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-zinc-100 mt-0 py-4 dropdown-shadow rounded-b-xl animate-fade-in">
                {solutionItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      setView(View.SOLUTIONS);
                      setIsSolutionsOpen(false);
                    }}
                    className="w-full text-left px-6 py-3 text-xs font-bold text-zinc-500 hover:text-black hover:bg-zinc-50 transition-all uppercase tracking-widest"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {navItems.slice(1).map((item) => (
            <button
              key={item.value}
              onClick={() => setView(item.value)}
              className={`text-xs font-semibold uppercase tracking-widest transition-all hover:text-black ${
                currentView === item.value ? 'text-black' : 'text-zinc-500'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Section */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Customer Support</span>
            <a href="tel:+917019555245" className="text-sm font-black text-black hover:text-[#00F5D4] transition-colors tracking-tight">+91 7019555245</a>
          </div>
          <button 
            onClick={() => setView(View.CONTACT)}
            className="bg-black text-white px-8 py-4 rounded-lg text-[11px] font-bold uppercase tracking-widest btn-shadow hover:bg-zinc-800 transition-all active:scale-95"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};