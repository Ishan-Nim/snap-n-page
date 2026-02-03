import { motion } from "framer-motion";
import { Check, Eye, Shield, Radar, FileSearch, BarChart } from "lucide-react";

const features = [
  "Attack Surface visibility",
  "Vulnerability Scanning (Web/API, Network, Cloud)",
  "Dark Web Monitoring",
  "Evidence-based investigations",
  "Automated reporting",
];

const pillars = [
  { icon: Eye, label: "Dark Web", color: "bg-primary" },
  { icon: Shield, label: "Scanning", color: "bg-success" },
  { icon: Radar, label: "Attack Surface", color: "bg-warning" },
];

const PlatformSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              The Platform
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Deliver real security outcomes with a platform{" "}
              <span className="text-gradient">you can keep running</span>
            </h2>
            <p className="text-muted-foreground mb-6">
              AlienGate consolidates Attack Surface visibility, Vulnerability Scanning, and Dark Web Monitoring into one operational platform.
            </p>
            <p className="text-muted-foreground mb-8">
              It doesn't just detect. AlienGate helps you prioritize, prove, and remediate—with the evidence required to take action.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="flex items-center justify-center gap-8">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.label}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl ${pillar.color} flex items-center justify-center mb-3 shadow-lg`}>
                      <pillar.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{pillar.label}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-display font-semibold text-foreground text-center mb-4">Core Capabilities</h4>
                <p className="text-sm text-muted-foreground text-center">
                  Three pillars that power comprehensive external security.
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-success/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
