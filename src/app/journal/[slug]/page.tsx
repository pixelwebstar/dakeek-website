import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPostBySlug, blogPosts, BLOG_CATEGORIES } from "@/data/blogData";
import { ArrowLeft, Clock, User, Share2 } from "lucide-react";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(
    props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
    const params = await props.params;
    const post = getBlogPostBySlug(params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Dakeek`,
        description: post.excerpt,
        keywords: post.seoKeywords,
        alternates: {
            canonical: `https://dakeek.ae/journal/${params.slug}`,
            languages: { 'en-AE': `https://dakeek.ae/journal/${params.slug}` },
        },
    };
}

export default async function BlogPostPage(
    props: { params: Promise<{ slug: string }> }
) {
    const params = await props.params;
    const post = getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const relatedPosts = blogPosts
        .filter(p => p.slug !== post.slug)
        .slice(0, 3);

    return (
        <>
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Journal', path: '/journal' },
                { label: post.title, path: `/journal/${post.slug}` }
            ]} />

            <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24">
                <div className="w-full max-w-[90vw] 2xl:max-w-[1600px] mx-auto px-[2vw] lg:px-[4vw]">
                    <article>
                        {/* Back Link */}
                        <div className="max-w-3xl mx-auto">
                            <Link
                                href="/journal"
                                className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#C4A67C] mb-8 transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Journal
                            </Link>
                        </div>

                        {/* Header */}
                        <header className="mb-12 max-w-3xl mx-auto">
                            <span
                                className="inline-block px-3 py-1 rounded-full text-xs font-mono uppercase mb-4"
                                style={{ backgroundColor: `${BLOG_CATEGORIES[post.category].color}20`, color: BLOG_CATEGORIES[post.category].color }}
                            >
                                {BLOG_CATEGORIES[post.category].label}
                            </span>
                            <h1 className="text-4xl md:text-5xl font-serif text-[#111] mb-6 leading-tight">
                                {post.title}
                            </h1>
                            <p className="text-xl text-[#666] mb-6">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-[#999]">
                                <span className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    {post.author}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {post.readTime}
                                </span>
                                <span>{post.date}</span>
                            </div>
                        </header>

                        {/* Featured Image */}
                        <div className="relative h-[300px] md:h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden mb-16 shadow-lg">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg prose-stone max-w-3xl mx-auto mb-16 px-4 md:px-0">
                            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
                        </div>

                        {/* Tags */}
                        <div className="max-w-3xl mx-auto">
                            <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-black/10">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 bg-white rounded-full text-sm text-[#666] border border-black/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Share */}
                            <div className="flex items-center justify-between mb-16">
                                <span className="text-sm font-mono uppercase text-[#999]">Share this article</span>
                                <div className="flex gap-3">
                                    <button className="p-2 rounded-full bg-white border border-black/10 hover:bg-[#111] hover:text-white transition-colors">
                                        <Share2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="border-t border-black/10 pt-16 mt-16">
                            <h3 className="text-3xl font-serif text-[#111] mb-12 text-center">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {relatedPosts.map((related) => (
                                    <Link key={related.slug} href={`/journal/${related.slug}`} className="group block bg-white p-6 rounded-2xl border border-black/5 hover:border-[#C4A67C]/20 shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-[#666] mb-3">
                                            <span style={{ color: BLOG_CATEGORIES[related.category].color }}>
                                                {BLOG_CATEGORIES[related.category].label}
                                            </span>
                                            <span>•</span>
                                            <span>{related.readTime}</span>
                                        </div>
                                        <h4 className="text-xl font-serif text-[#111] group-hover:text-[#C4A67C] transition-colors leading-snug">
                                            {related.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* CTA Banner */}
                    <div className="mt-24">
                        <div className="p-12 md:p-20 bg-[#111] rounded-3xl text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply bg-[url('/images/noise.svg')] bg-repeat" />
                            <div className="relative z-10 max-w-xl mx-auto">
                                <h3 className="text-3xl md:text-5xl font-serif mb-6">Need Professional Help?</h3>
                                <p className="text-white/70 text-lg font-light mb-8">Book a service now and let our certified technical experts handle your home repairs with Dakeek precision.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block px-10 py-5 bg-[#C4A67C] text-white rounded-full font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-[#111] transition-all duration-300 hover:scale-105 shadow-xl"
                                >
                                    Book a Technician
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
