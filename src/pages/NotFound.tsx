import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Clipboard, FileText, Upload, ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-sky-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 text-gray-900">404</h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            The page you're looking for doesn't exist. Don't worry though - you can still access all our anonymous sharing tools and features.
          </p>
          <Link to="/">
            <Button size="lg" className="text-lg px-8 py-3">
              <Home className="w-5 h-5 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>

        {/* Popular Tools Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900">
            Popular Anonymous Sharing Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clipboard className="w-5 h-5 text-blue-600 mr-2" />
                  Anonymous Clipboard
                </CardTitle>
                <CardDescription>
                  Share text snippets instantly with 4-digit codes. Perfect for quick sharing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/clipboard">
                  <Button className="w-full">
                    Try Clipboard <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 text-green-600 mr-2" />
                  Rich Text Notepad
                </CardTitle>
                <CardDescription>
                  Create formatted notes with headers, lists, and styling. Share with codes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/notepad">
                  <Button className="w-full">
                    Try Notepad <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="w-5 h-5 text-purple-600 mr-2" />
                  Secure File Sharing
                </CardTitle>
                <CardDescription>
                  Upload and share files up to 50MB with automatic expiration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link to="/file-share">
                  <Button className="w-full">
                    Share Files <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-900">
            Need Help Getting Started?
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Learn More</h4>
              <div className="space-y-2">
                <Link to="/how-it-works" className="block text-blue-600 hover:text-blue-800">
                  How It Works
                </Link>
                <Link to="/about" className="block text-blue-600 hover:text-blue-800">
                  About AnonShare
                </Link>
                <Link to="/faq" className="block text-blue-600 hover:text-blue-800">
                  Frequently Asked Questions
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-gray-900">Guides & Resources</h4>
              <div className="space-y-2">
                <Link to="/how-to-share-text-anonymously" className="block text-blue-600 hover:text-blue-800">
                  Text Sharing Guide
                </Link>
                <Link to="/pastebin-alternative-no-login" className="block text-blue-600 hover:text-blue-800">
                  Pastebin Alternatives
                </Link>
                <Link to="/blog" className="block text-blue-600 hover:text-blue-800">
                  Blog & Articles
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* What is AnonShare */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">What is AnonShare?</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            AnonShare is a privacy-first platform for anonymous sharing of text, notes, and files using short 4-digit codes. 
            No login required, no personal information collected, and all content expires automatically for maximum privacy. 
            Whether you need to share code snippets, create collaborative notes, or upload files securely, AnonShare makes it simple and anonymous.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
