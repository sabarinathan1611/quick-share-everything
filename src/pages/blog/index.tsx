import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    slug: 'how-to-share-text-anonymously',
    title: 'How to Share Text Anonymously (Without Login)',
    excerpt: "In today's digital age, privacy is paramount. Learn how to use anonymous clipboard tools to share text, notes, and code securely without leaving a digital footprint or requiring registration.",
    date: '16/6/2025',
    readingTime: 1,
    published: true,
  },
  {
    slug: 'pastebin-alternatives-2025',
    title: '5 Best Pastebin Alternatives for Privacy in 2025',
    excerpt: 'While Pastebin is popular, it may not be the best for privacy. We explore the top 5 privacy-focused alternatives for secure, anonymous text and file sharing in 2025.',
    date: '21/6/2025',
    readingTime: 1,
    published: true,
  },
  {
    slug: 'why-temporary-sharing-matters',
    title: 'The Power of Ephemeral: Why Temporary Sharing Matters',
    excerpt: 'Discover why temporary, self-destructing links are a cornerstone of modern digital privacy and how they protect your data from being permanently exposed online.',
    date: '21/10/2025',
    readingTime: 1,
    published: false,
  },
];

const BlogIndex = () => (
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

        <div className="grid gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className={`transition-shadow hover:shadow-lg ${!post.published ? 'bg-gray-50' : 'bg-card'}`}>
              <CardHeader>
                <CardTitle className="text-2xl">
                  {post.published ? (
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary">{post.title}</Link>
                  ) : (
                    <span className="text-gray-500">{post.title}</span>
                  )}
                </CardTitle>
                <CardDescription className="flex items-center space-x-4 text-sm text-gray-500 pt-2">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readingTime} min read</span>
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-gray-600 mb-4 ${!post.published ? 'italic' : ''}`}>
                  {post.excerpt}
                </p>
                {post.published ? (
                  <Link to={`/blog/${post.slug}`} className="font-semibold text-primary inline-flex items-center">
                    Read more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                ) : (
                  <span className="font-semibold text-gray-400">Coming Soon</span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  </>
);

export default BlogIndex; 