import { motion } from "framer-motion";
import { Eye, Shield, Radar, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Dark Web Monitoring",
    label: "MONITORING SERVICE",
    description: "Find leaked credentials fast on marketplaces, stealer logs and hacker forums.",
    bullets: ["Credential Monitoring", "Combo-list Detection", "Infostealer Analysis"],
  },
  {
    icon: Shield,
    title: "Vulnerability Scanning",
    label: "PROFESSIONAL SERVICE",
    description: "Assess Web, API, network and cloud security with DAST + 15,000 CVE coverage.",
    bullets: ["Web & API Scanning", "Network Assessment", "Cloud Security Review"],
  },
  {
    icon: Radar,
    title: "Attack Surface Management",
    label: "PROFESSIONAL SERVICE",
    description: "Map exposed assets, validate risks with screenshots, and track investigations.",
    bullets: ["Asset Discovery", "Risk Validation", "Case Management"],
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 px-4" id="features">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Get <span className="text-gradient">Dark Web</span> alerts the moment
            <br />your data hits hacker channels
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-primary/30 transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                {feature.label}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {feature.description}
              </p>
              <ul className="space-y-2 mb-6">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary transition-colors cursor-pointer">
                VIEW DETAILS <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
