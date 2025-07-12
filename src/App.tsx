import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Clipboard from "./pages/Clipboard";
import Notepad from "./pages/Notepad";
import FileShare from "./pages/FileShare";
import HowItWorks from "./pages/how-it-works";
import BlogIndex from "./pages/blog/index";
import Post1 from "./pages/blog/how-to-share-text-anonymously";
import Post2 from "./pages/blog/pastebin-alternatives-2025";
import HowToShareTextAnonymously from "./pages/HowToShareTextAnonymously";
import PastebinAlternativeNoLogin from "./pages/PastebinAlternativeNoLogin";
import TemporaryFileSharingTool from "./pages/TemporaryFileSharingTool";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/blog" element={<BlogIndex />} />
                <Route path="/blog/how-to-share-text-anonymously" element={<Post1 />} />
                <Route path="/blog/pastebin-alternatives-2025" element={<Post2 />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/clipboard" element={<Clipboard />} />
                <Route path="/notepad" element={<Notepad />} />
                <Route path="/file-share" element={<FileShare />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/how-to-share-text-anonymously" element={<HowToShareTextAnonymously />} />
                <Route path="/pastebin-alternative-no-login" element={<PastebinAlternativeNoLogin />} />
                <Route path="/temporary-file-sharing-tool" element={<TemporaryFileSharingTool />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
