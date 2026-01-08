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
        title: `${post.title} | Dakeek Blog`,
        description: post.excerpt,
        keywords: post.seoKeywords,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.image],
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
        .filter(p => p.slug !== post.slug && p.category === post.category)
        .slice(0, 2);

    return (
        <>
            <BreadcrumbSchema items={[
                { label: 'Home', path: '/' },
                { label: 'Blog', path: '/blog' },
                { label: post.title, path: `/blog/${post.slug}` }
            ]} />

            <main className="min-h-screen bg-[#FAFAF9] pt-32 pb-24">
                <article className="max-w-3xl mx-auto px-[5vw]">
                    {/* Back Link */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-sm text-[#666] hover:text-[#A18262] mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Header */}
                    <header className="mb-12">
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
                    <div className="relative h-[400px] rounded-2xl overflow-hidden mb-12">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-stone max-w-none mb-16">
                        {/* Render markdown content - in production use a markdown renderer */}
                        <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
                    </div>

                    {/* Tags */}
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

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div>
                            <h3 className="text-2xl font-serif text-[#111] mb-8">Related Articles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {relatedPosts.map((related) => (
                                    <Link key={related.slug} href={`/blog/${related.slug}`} className="group">
                                        <div className="relative h-[150px] rounded-xl overflow-hidden mb-3">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <h4 className="font-serif text-[#111] group-hover:text-[#A18262] transition-colors">
                                            {related.title}
                                        </h4>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </article>

                {/* CTA Banner */}
                <div className="max-w-3xl mx-auto px-[5vw] mt-20">
                    <div className="p-8 bg-[#111] rounded-2xl text-center text-white">
                        <h3 className="text-2xl font-serif mb-4">Need Professional Help?</h3>
                        <p className="text-white/70 mb-6">Book a service and let our experts handle it.</p>
                        <Link
                            href="/contact"
                            className="inline-block px-8 py-3 bg-[#A18262] text-white rounded-full font-mono text-sm uppercase tracking-wider hover:bg-white hover:text-[#111] transition-colors"
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
}
