import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { HERO, PRODUCTS, PRODUCT_CATEGORIES, PARTNERS, COMPANY } from '@/data/content';
import { Icons } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    let items = PRODUCTS;
    if (activeCategory !== 'all') {
      items = items.filter(p => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }
    return items;
  }, [activeCategory, search]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.products.headline}</h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed">{HERO.products.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {/* Search */}
          <div className="mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Icons.search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="text-sm text-secondary-500">{filtered.length} products</div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  if (cat.id === 'all') {
                    searchParams.delete('category');
                  } else {
                    searchParams.set('category', cat.id);
                  }
                  setSearchParams(searchParams);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-secondary-700 hover:bg-gray-200'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <Icons.search size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-700 mb-2">No products found</h3>
              <p className="text-sm text-secondary-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Partner Badges */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeading title="Authorized OEM Partners" subtitle="All products sourced through official manufacturer channels." />
          <div className="flex flex-wrap justify-center gap-6">
            {PARTNERS.map((p) => (
              <div key={p.id} className="px-6 py-4 bg-white rounded-xl border border-gray-100 text-center">
                <span className="text-base font-bold" style={{ color: p.color }}>{p.name}</span>
                <div className="text-xs text-secondary-400 mt-1">{p.level}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-500">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Help Choosing the Right Hardware?</h2>
          <p className="text-primary-100 mb-8 max-w-xl mx-auto">Our engineers will assess your requirements and recommend the best-fit products from our entire catalog.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
              Get Expert Recommendation
            </Link>
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 px-8 py-4 text-white font-semibold border border-white/30 rounded-xl hover:bg-white/10 transition-colors">
              <Icons.phone size={18} />
              {COMPANY.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const { ref, isVisible } = useScrollAnimation(0.05);
  return (
    <div
      ref={ref}
      className={`bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-44 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8">
        <Icons.server size={56} className="text-gray-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">{product.brand}</span>
          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded-full text-secondary-500 capitalize">{product.category}</span>
        </div>
        <h3 className="text-base font-bold text-secondary-900 mb-3">{product.name}</h3>
        <p className="text-sm text-secondary-500 mb-4 line-clamp-2">{product.description}</p>
        <ul className="space-y-1.5 mb-5">
          {product.specs.slice(0, 4).map((s, i) => (
            <li key={i} className="text-xs text-secondary-600 flex items-start gap-1.5">
              <Icons.checkCircle size={12} className="text-accent-500 mt-0.5 shrink-0" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.useCases.map((u) => (
            <span key={u} className="text-[10px] px-2 py-0.5 bg-primary-50 text-primary-600 rounded-full font-medium">{u}</span>
          ))}
        </div>
        <Link
          to="/contact"
          className="block w-full text-center py-2.5 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition-colors text-sm"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
