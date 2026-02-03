import { motion } from "framer-motion";

const steps = [
  {
    step: "01",
    title: "Preparation",
    description: "Attackers collect \"keys\" on the dark web—credentials, cookies, and leaked data—then map your public-facing assets to identify the easiest entry points.",
  },
  {
    step: "02",
    title: "Intrusion",
    description: "They log in using valid credentials. To traditional controls, it can look like \"normal access,\" which makes detection hard.",
  },
  {
    step: "03",
    title: "Internal Impact",
    description: "Data theft, ransomware deployment, and lateral movement. At this stage, recovery costs and reporting costs increase sharply.",
  },
];

const AttackPath = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Attacks follow a <span className="text-gradient">predictable path</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the attack progression helps you intervene before damage occurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0" />
              )}
              
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-display font-bold">STEP</span>
                  </div>
                  <span className="text-4xl font-display font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-center text-destructive font-medium mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Most organizations realize too late—after damage is already done.
        </motion.p>
      </div>
    </section>
  );
};

export default AttackPath;
