import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "For trials and validation",
    price: "¥0",
    period: "",
    taxNote: "",
    features: [
      "Email address check: 10 addresses",
      "Public leaked database check",
      "Manual scan: OSINT only",
      "Simple report / PDF export",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Basic",
    description: "For companies that want to start continuous monitoring",
    price: "¥19,800",
    period: "/ month",
    taxNote: "¥21,780/month including tax",
    features: [
      "Dark web investigation: 1 domain",
      "Vulnerability assessment: 3 domains",
      "Email leak check: 300 addresses",
      "Scan frequency: Once per week",
    ],
    cta: "Select Plan",
    popular: false,
  },
  {
    name: "Premium",
    description: "For companies that want to strengthen assessment and operational management",
    price: "¥49,800",
    period: "/ month",
    taxNote: "¥54,780/month including tax",
    features: [
      "Dark web investigation: 3 domains",
      "Vulnerability assessment: 10 domains",
      "Email leak check: 1,000 addresses",
      "Scan frequency: Daily",
    ],
    cta: "Select Plan",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations and custom requirements",
    price: "Custom quote",
    period: "",
    taxNote: "",
    features: [
      "Dark web investigation: Unlimited",
      "Vulnerability assessment: Unlimited",
      "Email leak check: Unlimited",
      "Custom requirements supported",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Choose your <span className="text-gradient">security level</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and scale as your security needs grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 shadow-card border flex flex-col ${
                plan.popular ? "border-primary ring-1 ring-primary/30" : "border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 primary-gradient text-primary-foreground text-xs font-semibold rounded-full">
                  Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 min-h-[40px]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-bold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                {plan.taxNote && (
                  <p className="text-xs text-muted-foreground mt-1">{plan.taxNote}</p>
                )}
              </div>

              <ul className="space-y-3 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${plan.popular ? "primary-gradient hover:opacity-90 transition-opacity" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
