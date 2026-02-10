import { motion } from "framer-motion";
import { Globe, ShieldCheck, Bug, Database, Clock, AlertTriangle, MessageSquare, Radio } from "lucide-react";

const stats = [
  { value: "50", unit: "million", label: "Records daily update", icon: Database },
  { value: "5", unit: "min", label: "Alert time", icon: Clock },
];

const monitoringSources = [
  { icon: Globe, label: "Dark Web Marketplaces" },
  { icon: Bug, label: "Combo-lists" },
  { icon: ShieldCheck, label: "Infostealers" },
  { icon: MessageSquare, label: "Hacking Related Telegram Groups & Channels" },
  { icon: Radio, label: "Dark Web Forums" },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-4 bg-card/50" id="services">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Gain Full <span className="text-gradient">Flexibility</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access Dark Web Monitoring via Dashboard or automate detection of compromised credentials across every corner of the underground.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-4xl font-display font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-primary font-semibold uppercase tracking-wider">
                {stat.unit}
              </div>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Monitoring Sources */}
        <motion.div
          className="bg-card rounded-2xl border border-border p-8 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-display font-semibold text-foreground mb-2 text-center">
            Compromised Credentials Monitoring
          </h3>
          <p className="text-muted-foreground text-center mb-8">
            We continuously scan the dark web's most active channels so you're the first to know when your data surfaces.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {monitoringSources.map((source, i) => (
              <motion.div
                key={source.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <source.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium text-sm">{source.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
