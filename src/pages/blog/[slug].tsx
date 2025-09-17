import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getPostBySlug } from '@/utils/blogService';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import DOMPurify from 'dompurify';

const BlogPostPage = () => {
  const { slug = '' } = useParams();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ['blog', 'post', slug],
    queryFn: () => getPostBySlug(slug),
    enabled: Boolean(slug),
  });

  const title = post?.title ?? 'Blog Post';
  const description = post?.excerpt ?? 'AnonShare blog article';
  const sanitizedHtml = React.useMemo(() => {
    return DOMPurify.sanitize(post?.content ?? '', { USE_PROFILES: { html: true } });
  }, [post?.content]);

  return (
    <>
      <Helmet>
        <title>{title} - AnonShare</title>
        <meta name="description" content={description} />
        {post?.slug ? (
          <link rel="canonical" href={`https://anonshare.live/blog/${post.slug}`} />
        ) : null}
      </Helmet>
      <main className="min-h-screen bg-sky-50">
        <div className="max-w-3xl mx-auto px-4 py-10">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to blog
            </Link>
          </div>

          {isLoading && (
            <p className="text-center text-gray-600">Loading…</p>
          )}

          {isError && (
            <p className="text-center text-red-600">Failed to load post.</p>
          )}

          {!isLoading && !isError && !post && (
            <p className="text-center text-gray-600">Post not found.</p>
          )}

          {post && (
            <article className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-blue-100">
              <header className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  {post.published_at ? (
                    <span className="inline-flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.published_at).toLocaleDateString()}
                    </span>
                  ) : null}
                  {post.reading_time ? (
                    <span className="inline-flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.reading_time} min read
                    </span>
                  ) : null}
                </div>
              </header>

              <div
                className="prose prose-sky dark:prose-invert prose-headings:scroll-mt-20 max-w-none"
                dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
              />
            </article>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogPostPage;


