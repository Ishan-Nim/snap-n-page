import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    description: "Basic breach check",
    price: "¥0",
    period: "",
    features: [
      "Up to 10 email checks / month",
      "1 company domain",
      "Basic breach report",
      "Email support",
    ],
    limitations: [
      "No continuous dark web monitoring",
      "No automatic scanning",
      "No PDF reporting",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Basic",
    description: "Practical security for SMEs",
    price: "¥2,980",
    period: "/ month",
    features: [
      "Up to 500 email checks / month",
      "10 company domains",
      "Weekly & monthly scans",
      "Basic dark web monitoring",
      "CSV export",
      "Priority email support",
    ],
    limitations: [
      "No advanced analysis",
      "No custom reports",
    ],
    cta: "Choose Basic",
    popular: false,
  },
  {
    name: "Premium",
    description: "Advanced security for enterprises",
    price: "¥9,800",
    period: "/ month",
    features: [
      "Unlimited email checks",
      "Unlimited domains",
      "Daily automatic scans",
      "Advanced dark web monitoring",
      "Real-time alerts",
      "PDF report generation",
      "Custom dashboard",
      "API access",
      "Phone support",
    ],
    limitations: [],
    cta: "Choose Premium",
    popular: true,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-4" id="pricing">
      <div className="container mx-auto max-w-6xl">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-card rounded-2xl p-6 shadow-card border ${
                plan.popular ? "border-primary ring-1 ring-primary/30" : "border-border"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 primary-gradient text-primary-foreground text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-display font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-display font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.limitations.length > 0 && (
                <>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">Limitations</p>
                  <ul className="space-y-2 mb-6">
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-start gap-2 text-sm">
                        <X className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

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
