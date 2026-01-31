
import React, { useState, useEffect, useCallback } from 'react';
import { View } from './types';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SOLUTIONS, PRODUCTS, PARTNERS, TESTIMONIALS, WHY_CHOOSE_US } from './constants';
import { getIntelligenceInsight } from './services/geminiService';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>(View.HOME);
  const [insight, setInsight] = useState<string>('');
  const [isInsightLoading, setIsInsightLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeProductTab, setActiveProductTab] = useState('All');

  const fetchInsight = useCallback(async () => {
    setIsInsightLoading(true);
    const result = await getIntelligenceInsight("The roadmap for scalable enterprise infrastructure for global MNCs in 2025");
    setInsight(result);
    setIsInsightLoading(false);
  }, []);

  useEffect(() => {
    if (currentView === View.HOME) {
      fetchInsight();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, fetchInsight]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate form inputs...
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 15000); // Longer visibility for the success message
  };

  const solutionImages: Record<string, string> = {
    'procurement': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    'infra-design': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=1200',
    'maintenance': 'https://images.unsplash.com/photo-1581092921461-7d1568637f6a?auto=format&fit=crop&q=80&w=1200',
    'consulting': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
    'integration': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200'
  };

  const productImages: Record<string, string> = {
    'Servers': 'https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=1200',
    'Storage': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    'Networking': 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1200',
    'Workstations': 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&q=80&w=1200'
  };

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <div className="animate-fade-in">
            <Hero 
              title="Innovative IT Hardware Solutions for Global Businesses." 
              subtitle="Engineering robust infrastructure since 2018. Based in Bangalore with a strategic reach in Delhi."
              ctaText="Request a Quote"
              onCtaClick={() => setView(View.CONTACT)}
            />

            {/* Clients Marquee */}
            <section className="py-16 border-y border-zinc-100 bg-white overflow-hidden">
              <div className="marquee-container">
                <div className="marquee-content">
                  {PARTNERS.map((partner, i) => (
                    <div key={i} className="flex items-center space-x-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-12">
                      <span className="text-4xl font-black tracking-tighter text-[#111111]">{partner}</span>
                    </div>
                  ))}
                  {PARTNERS.map((partner, i) => (
                    <div key={`dup-${i}`} className="flex items-center space-x-2 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default px-12">
                      <span className="text-4xl font-black tracking-tighter text-[#111111]">{partner}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Legacy Section */}
            <section className="py-32 migsak-container bg-white">
              <div className="grid md:grid-cols-3 gap-16 border-b border-zinc-100 pb-32">
                <div className="text-center md:text-left space-y-4">
                  <div className="serif-heading text-7xl font-black text-[#111111]">2018</div>
                  <div className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">Founded In Bengaluru</div>
                  <p className="text-zinc-500 font-light leading-relaxed">Starting with a vision to revolutionize hardware logistics in Bangalore.</p>
                </div>
                <div className="text-center md:text-left space-y-4">
                  <div className="serif-heading text-7xl font-black text-[#111111]">2</div>
                  <div className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">Major City Hubs</div>
                  <p className="text-zinc-500 font-light leading-relaxed">Direct presence in Bengaluru and Delhi, managing nationwide nodes.</p>
                </div>
                <div className="text-center md:text-left space-y-4">
                  <div className="serif-heading text-7xl font-black text-[#111111]">100%</div>
                  <div className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-400">Quality Commitment</div>
                  <p className="text-zinc-500 font-light leading-relaxed">Rigorous QC protocols and Tier-1 hardware partnerships.</p>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="py-32 bg-zinc-50 border-y border-zinc-100">
              <div className="migsak-container">
                <div className="mb-24 max-w-2xl">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 block mb-6">Client Voice</span>
                  <h2 className="serif-heading text-5xl font-black tracking-tight text-[#111111]">Legacy of Robustness & Trust.</h2>
                </div>
                <div className="grid lg:grid-cols-3 gap-12">
                  {TESTIMONIALS.map((t, idx) => (
                    <div key={idx} className="bg-white p-12 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                      <p className="text-lg text-zinc-600 font-light leading-relaxed italic mb-10">"{t.quote}"</p>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-zinc-50 rounded-lg flex items-center justify-center font-black text-zinc-300 text-lg border border-zinc-100">{t.author.charAt(0)}</div>
                        <div>
                          <div className="font-bold text-[#111111]">{t.author}</div>
                          <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mt-0.5">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );

      case View.SOLUTIONS:
        const solAlts: Record<string, string> = {
            'procurement': 'Enterprise server procurement in Bangalore',
            'infra-design': 'IT infrastructure consulting Delhi and design',
            'maintenance': 'Hardware maintenance and support Bangalore',
            'consulting': 'IT infrastructure consulting Delhi',
            'integration': 'Precision hardware integration Bangalore'
        };
        return (
          <section className="py-32 migsak-container animate-fade-in">
            <div className="max-w-4xl mb-24">
              <h1 className="serif-heading text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Institutional <br/><span className="text-zinc-300">Solutions.</span></h1>
              <p className="text-xl text-zinc-500 font-light leading-relaxed">Enterprise-grade IT management from Bangalore to Delhi.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {SOLUTIONS.map((sol) => (
                <div key={sol.id} className="group flex flex-col h-full bg-white rounded-2xl border border-zinc-100 hover:border-black transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
                  <div className="aspect-[16/10] w-full overflow-hidden">
                    <img 
                      src={solutionImages[sol.id]} 
                      alt={solAlts[sol.id] || sol.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-black mb-4 tracking-tight">{sol.title}</h3>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{sol.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case View.PRODUCTS:
        const prodAlts: Record<string, string> = {
            'Servers': 'Enterprise rack server procurement Bangalore',
            'Storage': 'Unified scalable storage solutions Delhi',
            'Networking': 'Data center networking hardware Bangalore',
            'Workstations': 'High performance precision workstations Bangalore'
        };
        // Fix: Defined filteredProducts based on the active tab and available constant
        const filteredProducts = activeProductTab === 'All' 
          ? PRODUCTS 
          : PRODUCTS.filter(p => p.category === activeProductTab);

        return (
          <section className="py-32 migsak-container animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
              <div className="max-w-2xl">
                <h1 className="serif-heading text-7xl font-black tracking-tighter mb-8 leading-[0.9]">Hardware <br/><span className="text-zinc-300">Ecosystem.</span></h1>
                <p className="text-xl text-zinc-500 font-light leading-relaxed">Curated enterprise-grade gear on white background.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {['All', 'Servers', 'Storage', 'Networking', 'Workstations'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => setActiveProductTab(tab)}
                    className={`px-6 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                      activeProductTab === tab ? 'bg-black text-white' : 'bg-zinc-100 text-zinc-400 hover:bg-zinc-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              {filteredProducts.map((prod) => (
                <div key={prod.id} className="group border-b border-zinc-100 pb-16">
                  <div className="aspect-[16/9] bg-[#F9FAFB] rounded-3xl overflow-hidden mb-10 border border-zinc-50 shadow-sm group-hover:shadow-xl transition-all duration-700">
                    <img 
                      src={productImages[prod.category]}
                      alt={prodAlts[prod.category] || prod.name}
                      className="w-full h-full object-contain p-12 grayscale opacity-90 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="serif-heading text-4xl font-black tracking-tight text-[#111111] mb-4">{prod.name}</h3>
                  <p className="text-zinc-500 text-lg font-light mb-8 leading-relaxed">{prod.description}</p>
                </div>
              ))}
            </div>
          </section>
        );

      case View.ABOUT:
        return (
          <section className="py-32 migsak-container animate-fade-in">
            <div className="max-w-5xl">
              <span className="inline-block px-4 py-1 bg-black text-white rounded text-[10px] font-bold uppercase tracking-[0.3em] mb-10">Established 2018</span>
              <h1 className="serif-heading text-8xl font-black tracking-tighter leading-[0.95] mb-20">Architecting the <br/><span className="text-zinc-300">Global Economy.</span></h1>
              <div className="grid md:grid-cols-2 gap-24">
                <div className="space-y-8">
                  <p className="text-3xl text-zinc-900 font-light leading-relaxed">Prathik Softnet is the heart of infrastructure in Bangalore.</p>
                </div>
                <div className="aspect-[3/4] rounded-2xl bg-zinc-50 overflow-hidden shadow-2xl border border-zinc-100 group">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                    alt="Prathik P Nadig - Lead Systems Architect and IT Consultant Bangalore" 
                    className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
            </div>
          </section>
        );

      case View.CONTACT:
        return (
          <section className="py-32 migsak-container animate-fade-in grid lg:grid-cols-2 gap-24">
            <div>
              <h1 className="serif-heading text-8xl font-black tracking-tighter leading-[0.95] mb-12">Establish <br/><span className="text-zinc-300">Connectivity.</span></h1>
              <p className="text-xl text-zinc-400 font-light mb-16 leading-relaxed">Direct pipeline to prathiknadig4@gmail.com.</p>
            </div>

            <div className="bg-zinc-50 p-12 lg:p-16 rounded-3xl border border-zinc-200 shadow-sm relative">
              {formSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                  <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mb-10">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="serif-heading text-4xl font-black mb-6">Success.</h3>
                  <p className="text-zinc-500 mb-8">Your request has been routed to <strong>prathiknadig4@gmail.com</strong>. We will respond within 120 minutes.</p>
                  <button onClick={() => setFormSubmitted(false)} className="px-8 py-3 bg-black text-white rounded-lg text-xs font-bold uppercase tracking-widest">New Proposal</button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleFormSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Name</label>
                      <input required type="text" placeholder="Full Name" className="w-full bg-white border border-zinc-200 p-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all text-sm font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Email</label>
                      <input required type="email" placeholder="Corporate Email" className="w-full bg-white border border-zinc-200 p-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all text-sm font-medium" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Summary</label>
                    <textarea required rows={4} placeholder="Deployment scale..." className="w-full bg-white border border-zinc-200 p-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition-all text-sm font-medium resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full py-6 bg-black text-white font-black rounded-xl text-xl tracking-tighter transition-all hover:bg-zinc-800 flex items-center justify-center space-x-4">
                    <span>Submit Proposal</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </form>
              )}
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentView={currentView} setView={setView} />
      <main className="pt-24">{renderContent()}</main>
      <footer className="py-32 border-t border-zinc-100 bg-white">
        <div className="migsak-container grid lg:grid-cols-4 gap-16">
            <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-8 group cursor-pointer" onClick={() => setView(View.HOME)}>
                    <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-[#00F5D4] rounded-full"></div>
                    </div>
                    <span className="brand-font text-2xl tracking-tighter">PRATHIK SOFTNET</span>
                </div>
                <p className="text-zinc-400 text-sm">Top IT Hardware Vendor & Infrastructure Solutions Bangalore.</p>
            </div>
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-widest text-black mb-6">Connect</h4>
                <div className="text-xs text-zinc-400">prathiknadig4@gmail.com</div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
