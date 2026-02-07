import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AlienGate transformed our threat detection capabilities. The dark web monitoring catches credential leaks within minutes, giving us time to respond before any damage occurs.",
    name: "Marcus Chen",
    role: "Chief Information Security Officer",
    company: "FinSecure Corp",
    initials: "MC",
  },
  {
    quote: "The platform's ability to map our external attack surface and correlate it with dark web intelligence is unmatched. We've reduced our incident response time by over 70%.",
    name: "Sarah Nakamura",
    role: "Security Operations Manager",
    company: "TechShield Inc",
    initials: "SN",
  },
  {
    quote: "Before AlienGate, we had no visibility into what attackers could see about us. Now we proactively identify and remediate vulnerabilities before they're exploited.",
    name: "David Park",
    role: "VP of Information Security",
    company: "CloudBase Systems",
    initials: "DP",
  },
  {
    quote: "The cyber kill chain integration and automated alerting have been game-changers for our team. AlienGate doesn't just detect threats—it helps us understand and neutralize them.",
    name: "Elena Volkov",
    role: "Threat Intelligence Analyst",
    company: "DefenseNet Global",
    initials: "EV",
  },
];

const Testimonials = () => {
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
            Trusted by <span className="text-gradient">Security Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what cybersecurity professionals say about AlienGate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative bg-card border border-border rounded-2xl p-8 shadow-card overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full" />

              <Quote className="w-8 h-8 text-primary/40 mb-4" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                {item.quote}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                  <p className="text-xs text-primary/70">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
