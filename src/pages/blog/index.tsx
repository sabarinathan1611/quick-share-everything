import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { listPublishedPosts } from '@/utils/blogService';

const BlogIndex = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['blog', 'published-list'],
    queryFn: listPublishedPosts,
  });

  return (
    <>
      <Helmet>
        <title>Blog - AnonShare</title>
        <meta name="description" content="Read the latest articles on privacy, security, anonymous clipboard tools, and secure file sharing from the AnonShare team." />
        <link rel="canonical" href="https://anonshare.live/blog" />
      </Helmet>
      <main className="min-h-screen bg-sky-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AnonShare Blog</h1>
            <p className="text-xl text-gray-600">
              Insights on privacy, security, and anonymous communication in the digital age.
            </p>
          </header>

          {isLoading && (
            <p className="text-center text-gray-600">Loading posts…</p>
          )}
          {isError && (
            <p className="text-center text-red-600">Failed to load posts. Please try again later.</p>
          )}

          <div className="grid gap-8">
            {data?.map((post) => {
              const date = post.published_at ? new Date(post.published_at).toLocaleDateString() : '';
              return (
                <Card key={post.slug} className="transition-shadow hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-4 text-sm text-gray-500 pt-2">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{date}</span>
                      </span>
                      {post.reading_time ? (
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.reading_time} min read</span>
                        </span>
                      ) : null}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {post.excerpt ? (
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    ) : null}
                    <Link to={`/blog/${post.slug}`} className="font-semibold text-primary inline-flex items-center">
                      Read more <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogIndex;