import { motion } from "framer-motion";
import { Eye, Shield, Radar, FileSearch } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Dark Web Monitoring",
    description: "Find leaked credentials fast on marketplaces, stealer logs and hacker forums.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Vulnerability Scanning",
    description: "Assess Web, API, network and cloud security with DAST + 15000 CVE coverage.",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Radar,
    title: "Attack Surface + Cases",
    description: "Map exposed assets, validate risks with screenshots, and track investigations.",
    color: "text-warning",
    bgColor: "bg-warning/10",
  },
];

const FeatureCards = () => {
  return (
    <section className="py-20 px-4">
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
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
