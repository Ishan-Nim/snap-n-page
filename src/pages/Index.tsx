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
import VideoSection from "@/components/VideoSection";
import ServicesSection from "@/components/ServicesSection";
import CyberKillChain from "@/components/CyberKillChain";
import BlogSection from "@/components/BlogSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
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

const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <>{count >= 1000 ? `${(count / 1000).toFixed(count === target ? 0 : 1)}k` : count}{suffix}</>;
};

const HeroStats = () => (
  <motion.div
    className="flex items-center gap-8 md:gap-12 mt-10 pt-8 border-t border-border"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    {[
      { value: 10000, suffix: "+", label: "CLIENTS SECURED", format: "k" },
      { value: 100000, suffix: "+", label: "TOTAL SEARCHES", format: "k" },
      { value: 100000, suffix: "+", label: "MONITORED ASSETS", format: "k" },
    ].map((stat) => (
      <div key={stat.label}>
        <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
          <AnimatedCounter target={stat.value} suffix={stat.suffix} />
        </div>
        <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
      </div>
    ))}
  </motion.div>
);

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
    <div className="min-h-screen bg-background">
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
                <div className="container mx-auto max-w-6xl relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6"
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-muted-foreground text-sm font-medium mb-8">
                          <Shield className="w-4 h-4 text-primary" />
                          Operational Security Platform
                        </div>
                      </motion.div>
                      
                      <motion.h1 
                        className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        See external risk. Prioritize real threats.{" "}
                        <span className="text-gradient">Investigate and resolve</span> with confidence.
                      </motion.h1>
                      
                      <motion.p 
                        className="text-lg text-muted-foreground mb-8 max-w-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        AlienGate is your unified platform for Attack Surface Management, 
                        advanced Vulnerability Scanning, and intelligent Dark Web Monitoring.
                      </motion.p>
                      
                      <SearchForm onSearch={handleSearch} isLoading={false} />
                      <HeroStats />
                    </div>

                    {/* Right: Dashboard Preview */}
                    <motion.div 
                      className="hidden lg:block relative"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 0.4, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      <img 
                        src={dashboardPreview}
                        alt="AlienGate Dashboard Preview"
                        className="w-full rounded-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </div>

                {/* Subtle grid overlay */}
                <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
              </section>
              
              <FeatureCards />
              <VideoSection />
              <ServicesSection />
              <CyberKillChain />
              <AttackPath />
              <BeforeAfter />
              <PlatformSection />
              <Capabilities />
              <BlogSection />
              <Testimonials />
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
