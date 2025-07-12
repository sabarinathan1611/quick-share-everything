import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AdUnit from '@/components/AdUnit';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Importance of Anonymous Communication in 2024",
      excerpt: "Exploring why privacy-first tools like AnonShare are essential in today's digital landscape and how they protect user freedom.",
      date: "June 04, 2025",
      author: "Privacy Team",
      content: "In an era where digital surveillance and data collection have become the norm, the need for anonymous communication tools has never been more critical. This comprehensive guide explores why platforms like AnonShare are essential for protecting user privacy and maintaining freedom of expression online."
    },
    {
      title: "How to Share Code Snippets Securely",
      excerpt: "Best practices for developers sharing code without exposing sensitive information or creating security vulnerabilities.",
      date: "June 04, 2025",
      author: "Dev Team",
      content: "Developers often need to share code snippets with colleagues, on forums, or for debugging purposes. However, sharing code can inadvertently expose sensitive information, API keys, or proprietary logic. Learn how to share code securely using anonymous platforms and what precautions to take."
    },
    {
      title: "Understanding Digital Privacy: A Beginner's Guide",
      excerpt: "Everything you need to know about protecting your digital footprint and why tools like anonymous clipboards matter.",
      date: "June 04, 2025",
      author: "Privacy Team",
      content: "Digital privacy isn't just for tech experts anymore. With increasing awareness about data collection and online tracking, more people are seeking ways to protect their digital footprint. This beginner's guide covers the basics of digital privacy and how anonymous tools fit into a comprehensive privacy strategy."
    },
    {
      title: "File Sharing Without the Risks",
      excerpt: "Comparing traditional file sharing methods with anonymous alternatives and their security implications.",
      date: "June 04, 2025",
      author: "Security Team",
      content: "Traditional file sharing often requires email attachments, cloud storage accounts, or complex file sharing services that track users and store data indefinitely. Learn about the risks of conventional file sharing and how anonymous alternatives provide better security and privacy protection."
    },
    {
      title: "The Evolution of Anonymous Tools",
      excerpt: "A look at how privacy-focused sharing tools have evolved and what the future holds for anonymous communication.",
      date: "June 04, 2025",
      author: "Tech Team",
      content: "From simple pastebin services to sophisticated anonymous communication platforms, privacy tools have evolved significantly. This article traces the development of anonymous sharing tools and explores emerging trends in privacy-preserving technology."
    },
    {
      title: "Building Trust in Anonymous Platforms",
      excerpt: "How anonymous platforms establish user trust without compromising on privacy principles.",
      date: "June 04, 2025",
      author: "Privacy Team",
      content: "Trust is essential for any platform, but it's particularly challenging for anonymous services that prioritize privacy over user identification. Learn how platforms like AnonShare build trust through transparency, security practices, and user-centric design while maintaining strict privacy standards."
    }
  ];

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">AnonShare Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights on privacy, security, and anonymous communication in the digital age
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button variant="outline">
                Try Anonymous Clipboard
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline">
                How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Ad Unit */}
        <div className="mb-12">
          <AdUnit adSlot="1234567896" adFormat="horizontal" className="text-center" />
        </div>

        {/* Featured Post */}
        <Card className="mb-12 border-2 border-blue-200">
          <CardHeader>
            <div className="flex items-center space-x-2 text-sm text-blue-600 mb-2">
              <span className="bg-blue-100 px-2 py-1 rounded">Featured</span>
            </div>
            <CardTitle className="text-2xl">{blogPosts[0].title}</CardTitle>
            <CardDescription className="flex items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{blogPosts[0].date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{blogPosts[0].author}</span>
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
            <p className="text-gray-600 mb-4">{blogPosts[0].content}</p>
            <Link to="/how-to-share-text-anonymously">
              <Button variant="outline">
                Read More About Anonymous Sharing <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="flex items-center space-x-4 text-sm">
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="flex gap-2">
                  <Link to="/clipboard">
                    <Button variant="outline" size="sm">
                      Try Clipboard
                    </Button>
                  </Link>
                  <Link to="/notepad">
                    <Button variant="outline" size="sm">
                      Try Notepad
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ad Unit */}
        <div className="my-12">
          <AdUnit adSlot="1234567897" adFormat="rectangle" className="text-center" />
        </div>

        {/* Categories */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Blog Categories</CardTitle>
            <CardDescription>
              Explore our content by topic
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Privacy & Security</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Learn about digital privacy best practices, security measures, and 
                  how to protect your data online.
                </p>
                <Link to="/privacy-policy">
                  <Button variant="outline" size="sm">
                    Privacy Policy
                  </Button>
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Developer Resources</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Technical guides, code sharing best practices, and developer-focused 
                  privacy tools and techniques.
                </p>
                <Link to="/clipboard">
                  <Button variant="outline" size="sm">
                    Code Sharing Tool
                  </Button>
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Platform Updates</h3>
                <p className="text-sm text-gray-600 mb-3">
                  News about AnonShare features, improvements, and technical insights 
                  into our privacy-first architecture.
                </p>
                <Link to="/about">
                  <Button variant="outline" size="sm">
                    About AnonShare
                  </Button>
                </Link>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Digital Rights</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Discussions about digital rights, freedom of expression, and the 
                  importance of anonymous communication tools.
                </p>
                <Link to="/how-it-works">
                  <Button variant="outline" size="sm">
                    How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Ready to Start Sharing Anonymously?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Try our anonymous sharing tools and experience the difference that privacy-first design makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/clipboard">
              <Button size="lg">
                Anonymous Clipboard
              </Button>
            </Link>
            <Link to="/notepad">
              <Button size="lg" variant="outline">
                Rich Text Notepad
              </Button>
            </Link>
            <Link to="/file-share">
              <Button size="lg" variant="outline">
                Secure File Sharing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
