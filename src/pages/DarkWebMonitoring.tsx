import { motion } from "framer-motion";
import { Eye, ArrowLeft, Shield, Database, Globe, Bug, Radio, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const features = [
  { icon: Globe, title: "Dark Web Marketplaces", desc: "Monitor underground marketplaces for stolen credentials and data listings." },
  { icon: Bug, title: "Combo-list Detection", desc: "Detect your credentials appearing in combo-lists shared across hacker communities." },
  { icon: Shield, title: "Infostealer Analysis", desc: "Analyze infostealer logs for compromised passwords, cookies, and PII." },
  { icon: MessageSquare, title: "Telegram Monitoring", desc: "Track hacking-related Telegram groups and channels for emerging threats." },
  { icon: Radio, title: "Forum Scanning", desc: "Continuously scan dark web forums for mentions of your organization." },
  { icon: Database, title: "Breach Database Checks", desc: "Cross-reference credentials against known breach databases in real-time." },
];

const DarkWebMonitoring = () => {
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
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">Monitoring Service</p>
                <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground">Dark Web Monitoring</h1>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mb-12">
              Find leaked credentials fast on marketplaces, stealer logs and hacker forums. Get alerted the moment your data surfaces in underground channels.
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

export default DarkWebMonitoring;
