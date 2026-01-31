import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { HERO, BLOG_POSTS } from '@/data/content';
import { Icons } from '@/utils/icons';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BlogLanding() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{HERO.blog.headline}</h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">{HERO.blog.subheadline}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          {/* Featured */}
          <Link to={`/blog/${featured.slug}`} className="group block bg-gray-50 rounded-2xl overflow-hidden mb-12 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <Icons.layout size={64} className="text-white/20" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary-500 uppercase tracking-wider">{featured.category} · {featured.readTime}</span>
                <h2 className="text-2xl font-bold text-secondary-900 mt-3 group-hover:text-primary-500 transition-colors">{featured.title}</h2>
                <p className="text-secondary-500 mt-3 leading-relaxed">{featured.excerpt}</p>
                <div className="flex items-center gap-2 mt-4 text-sm text-secondary-400">
                  <span>{featured.author}</span>
                  <span>·</span>
                  <span>{new Date(featured.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function BlogCard({ post }: { post: typeof BLOG_POSTS[0] }) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <Link
      to={`/blog/${post.slug}`}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={`group block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="h-40 bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
        <Icons.layout size={32} className="text-secondary-300" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-secondary-400 mb-2">
          <span className="font-semibold text-primary-500">{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-base font-bold text-secondary-900 group-hover:text-primary-500 transition-colors leading-snug">{post.title}</h3>
        <p className="text-sm text-secondary-500 mt-2 line-clamp-2">{post.excerpt}</p>
        <div className="text-xs text-secondary-400 mt-3">
          {post.author} · {new Date(post.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      </div>
    </Link>
  );
}

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  const related = BLOG_POSTS.filter(p => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-secondary-900 mb-2">Post Not Found</h1>
          <Link to="/blog" className="text-primary-500 font-semibold">Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative py-20 bg-gradient-to-br from-secondary-900 via-primary-800 to-secondary-900">
        <div className="container-custom relative z-10 max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold text-primary-300 uppercase tracking-wider">{post.category}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-4">{post.title}</h1>
          <div className="flex items-center justify-center gap-3 mt-6 text-gray-300 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{new Date(post.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none text-secondary-700 leading-relaxed">
            {post.content.split('\n\n').map((paragraph, i) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-secondary-900 mt-10 mb-4">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={i} className="text-xl font-bold text-secondary-900 mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={i} className="font-semibold text-secondary-800 mt-4">{paragraph.replace(/\*\*/g, '')}</p>;
              }
              if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                    {items.map((item, j) => (
                      <li key={j} className="text-secondary-600">{item.replace(/^[-\d.]+\s*/, '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="text-secondary-600 mb-4">{paragraph}</p>;
            })}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold text-primary-500">{post.author.charAt(0)}</span>
            </div>
            <div>
              <div className="font-bold text-secondary-900">{post.author}</div>
              <div className="text-sm text-secondary-500">Prathik Softnet</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-secondary-900 text-center mb-10">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map((r) => (
                <Link key={r.id} to={`/blog/${r.slug}`} className="group">
                  <span className="text-xs font-semibold text-primary-500">{r.category}</span>
                  <h3 className="text-sm font-bold text-secondary-900 mt-1 group-hover:text-primary-500 transition-colors">{r.title}</h3>
                  <span className="text-xs text-secondary-400 mt-2 block">{r.readTime}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
