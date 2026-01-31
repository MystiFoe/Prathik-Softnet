import React from 'react';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ title, subtitle, ctaText, onCtaClick }) => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden bg-white">
      {/* High-Fidelity Enterprise Data Center Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=100&w=2400" 
          alt="Modern futuristic enterprise data center with server racks - Prathik Softnet Bangalore"
          className="w-full h-full object-cover opacity-[0.03] grayscale transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-zinc-50 border border-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-10">
          <span className="w-2 h-2 bg-[#00F5D4] rounded-full animate-pulse"></span>
          <span>ESTABLISHED 2018 • BENGALURU • DELHI</span>
        </div>
        
        <h1 className="serif-heading text-6xl md:text-8xl lg:text-9xl font-black leading-[0.95] mb-10 tracking-tighter text-[#111111]">
          Innovative IT Hardware <br/>
          <span className="text-zinc-200">Solutions for Global Businesses.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-16">
          Engineering robust infrastructure since 2018. Based in Bangalore with a strategic reach in Delhi.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onCtaClick}
            className="group relative px-12 py-5 bg-[#111111] text-white rounded-lg font-bold text-lg overflow-hidden transition-all active:scale-95 btn-shadow hover:bg-black"
          >
            <span className="relative z-10">{ctaText}</span>
          </button>
          
          <button className="px-12 py-5 border border-zinc-200 rounded-lg font-bold text-lg text-[#111111] hover:bg-zinc-50 transition-all">
            Technical Portfolio
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};