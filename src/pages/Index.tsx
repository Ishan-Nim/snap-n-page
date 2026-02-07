import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import ScanningView from "@/components/ScanningView";
import ResultsView from "@/components/ResultsView";
import FeatureCards from "@/components/FeatureCards";
import AttackPath from "@/components/AttackPath";
import BeforeAfter from "@/components/BeforeAfter";
import PlatformSection from "@/components/PlatformSection";
import Capabilities from "@/components/Capabilities";
import ServicesSection from "@/components/ServicesSection";
import CyberKillChain from "@/components/CyberKillChain";
import BlogSection from "@/components/BlogSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

type ViewState = "search" | "scanning" | "results";

const scanningStatuses = [
  "Connecting to dark web sources...",
  "Analyzing breach databases...",
  "Checking stealer logs...",
  "Scanning hacker forums...",
  "Verifying credentials...",
  "Analyzing patterns...",
  "Compiling results...",
];

const mockResultData = {
  totalRecords: 279,
  compromised: 6,
  clean: 2,
  categories: [
    {
      name: "Malware",
      initial: "M",
      dataTypes: 3,
      items: [
        { type: "Password", count: 32, status: "exposed" as const },
        { type: "Cookies", count: 0, status: "clean" as const },
        { type: "Pii", count: 1, status: "exposed" as const },
      ],
    },
    {
      name: "Combo",
      initial: "C",
      dataTypes: 2,
      items: [
        { type: "Password", count: 227, status: "exposed" as const },
        { type: "Pii", count: 2, status: "exposed" as const },
      ],
    },
  ],
};

const Index = () => {
  const [viewState, setViewState] = useState<ViewState>("search");
  const [searchQuery, setSearchQuery] = useState("");
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    if (viewState === "scanning") {
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => setViewState("results"), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);

      const statusInterval = setInterval(() => {
        setStatusIndex((prev) => (prev + 1) % scanningStatuses.length);
      }, 800);

      return () => {
        clearInterval(progressInterval);
        clearInterval(statusInterval);
      };
    }
  }, [viewState]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setProgress(0);
    setStatusIndex(0);
    setViewState("scanning");
  };

  const handleNewSearch = () => {
    setViewState("search");
    setSearchQuery("");
    setProgress(0);
  };

  return (
    <div className="min-h-screen hero-gradient grid-pattern">
      <Header />
      
      <main className="pt-16">
        <AnimatePresence mode="wait">
          {viewState === "search" && (
            <motion.div
              key="search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Hero Section */}
              <section className="relative py-20 px-4 overflow-hidden">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8">
                      <Shield className="w-4 h-4" />
                      Operational Security Platform
                    </div>
                  </motion.div>
                  
                  <motion.h1 
                    className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    See external risk. Prioritize real threats.
                    <br />
                    <span className="text-gradient">Investigate and resolve</span> with confidence.
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    AlienGate is your unified platform for Attack Surface Management, 
                    advanced Vulnerability Scanning, and intelligent Dark Web Monitoring.
                  </motion.p>
                  
                  <SearchForm onSearch={handleSearch} isLoading={false} />
                </div>

                {/* Dashboard Preview - Transparent Background */}
                <motion.div 
                  className="relative mt-16 mx-auto max-w-5xl px-4"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <div className="relative">
                    {/* Gradient overlay on top */}
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none" />
                    
                    {/* Dashboard image with transparency */}
                    <img 
                      src={dashboardPreview}
                      alt="AlienGate Dashboard Preview"
                      className="w-full rounded-2xl shadow-2xl opacity-30"
                    />
                    
                    {/* Additional mesh overlay */}
                    <div className="absolute inset-0 grid-pattern opacity-50 rounded-2xl" />
                  </div>
                </motion.div>
              </section>
              
              <FeatureCards />
              <ServicesSection />
              <CyberKillChain />
              <AttackPath />
              <BeforeAfter />
              <PlatformSection />
              <Capabilities />
              <BlogSection />
              <Pricing />
              <FAQ />
              <CTA />
              <Footer />
            </motion.div>
          )}
          
          {viewState === "scanning" && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ScanningView 
                query={searchQuery}
                progress={progress}
                statusText={scanningStatuses[statusIndex]}
              />
            </motion.div>
          )}
          
          {viewState === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultsView 
                query={searchQuery}
                data={mockResultData}
                onNewSearch={handleNewSearch}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
