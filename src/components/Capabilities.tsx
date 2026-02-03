import { motion } from "framer-motion";
import { Eye, Shield, Radar, CheckCircle, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Eye,
    title: "Dark Web Monitoring",
    subtitle: "Marketplaces, stealer logs, underground forums",
    description: "AlienGate provides continuous dark web intelligence by monitoring sources where stolen access commonly appears—such as dark web marketplaces, infostealer/stealer logs, private breach databases, and underground forums.",
    detail: "When a match is found (emails, domains, credentials), AlienGate alerts you quickly with enough context to validate impact—so you can take early action before stolen access is reused.",
    extra: "Includes a free Public Breach check to confirm whether your data appears in known leaked datasets.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Vulnerability Scanning",
    subtitle: "Web/API, Network, Cloud",
    description: "AlienGate's VAPT scanner identifies security weaknesses across web apps, APIs, network infrastructure, and cloud environments in a single workflow—built to reduce noise and provide clear evidence teams can act on.",
    detail: "Supports DAST scanning beyond OWASP Top 10 and network vulnerability scanning capable of detecting 15,000+ CVEs.",
    tags: ["Web & API", "Network", "Cloud"],
    color: "success",
  },
  {
    icon: Radar,
    title: "Evidence-Based Case Management",
    subtitle: "AMS + Investigations",
    description: "AlienGate AMS builds an attack surface map by combining scan results with discovery workflows—then helps you review, prioritize, and formalize assets for monitoring and remediation.",
    detail: "Investigations turns alerts into a trackable case workflow: identify who is affected, how serious it is, what actions to take, and how to prove it's resolved.",
    features: ["Open ports", "Running services", "Outdated technologies", "Screenshots"],
    aiNote: "AI accelerates operations with risk scoring, smart summaries, and next-action guidance.",
    color: "warning",
  },
];

const Capabilities = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Core <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three pillars that power comprehensive external security.
          </p>
        </motion.div>

        <div className="space-y-8">
          {capabilities.map((cap, index) => (
            <motion.div
              key={cap.title}
              className="bg-card rounded-2xl p-8 shadow-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className={`w-14 h-14 rounded-2xl bg-${cap.color}/10 flex items-center justify-center flex-shrink-0`}>
                  <cap.icon className={`w-7 h-7 text-${cap.color}`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-4">{cap.subtitle}</p>
                  
                  <p className="text-muted-foreground mb-4">{cap.description}</p>
                  <p className="text-muted-foreground mb-4">{cap.detail}</p>
                  
                  {cap.extra && (
                    <p className="text-sm text-primary bg-primary/5 px-4 py-2 rounded-lg inline-block">
                      {cap.extra}
                    </p>
                  )}

                  {cap.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cap.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {cap.features && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {cap.features.map((feature) => (
                        <span key={feature} className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-success" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {cap.aiNote && (
                    <div className="flex items-center gap-2 mt-4 text-sm text-primary">
                      <Cpu className="w-4 h-4" />
                      {cap.aiNote}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Operational Loop */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-semibold text-xl text-foreground mb-4">
            Don't stop at "finding." Operationalize response and proof.
          </h3>
          <p className="text-muted-foreground mb-6">
            Many tools are strong in one area—either "exposure discovery" or "vulnerability detection." AlienGate is built to cover the full operational loop.
          </p>
          <ul className="space-y-3">
            {[
              "Detect intrusion signals early (dark web + external exposure)",
              "Validate with evidence (ports/services/screenshots)",
              "Prioritize what matters (AI risk scoring)",
              "Manage response as cases (Investigations)",
              "Produce defensible outputs (Executive/Compliance/PDF reporting)",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Capabilities;
