import { motion } from "framer-motion";
import { Radar, ArrowLeft, Search, Camera, FileText, Map, Activity, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  { icon: Search, title: "Asset Discovery", desc: "Automatically discover and inventory all internet-facing assets and services." },
  { icon: Camera, title: "Risk Validation", desc: "Validate risks with visual screenshots and evidence-based verification." },
  { icon: FileText, title: "Case Management", desc: "Track investigations and manage remediation workflows efficiently." },
  { icon: Map, title: "Attack Surface Mapping", desc: "Comprehensive mapping of your external attack surface and exposure points." },
  { icon: Activity, title: "Continuous Monitoring", desc: "24/7 monitoring for changes in your attack surface and new exposures." },
  { icon: Target, title: "Threat Prioritization", desc: "AI-powered prioritization of threats based on exploitability and impact." },
];

const AttackSurfaceManagement = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <a href="/#features">
            <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Button>
          </a>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Radar className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Professional Service</p>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Attack Surface Management</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Map exposed assets, validate risks with screenshots, and track investigations. Get full visibility into your external attack surface.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AttackSurfaceManagement;
