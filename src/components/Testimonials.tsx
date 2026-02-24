import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useState } from "react";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-secondary/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Star className="w-3.5 h-3.5 fill-primary" />
            Testimonials
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight">
            Trusted by <span className="text-gradient">Security Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what cybersecurity professionals say about AlienGate.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`relative bg-card/80 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-500 h-full ${
                hoveredIndex === index 
                  ? "border-primary/40 shadow-glow scale-[1.02]" 
                  : "border-border hover:border-primary/20"
              }`}>
                {/* Decorative gradient line */}
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote icon */}
                <motion.div
                  className="mb-6"
                  animate={hoveredIndex === index ? { rotate: [0, -10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    >
                      <Star className="w-4 h-4 fill-warning text-warning" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground leading-relaxed mb-8 text-[15px]">
                  "{item.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {item.initials}
                  </motion.div>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                    <p className="text-xs text-primary font-medium">{item.company}</p>
                  </div>
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
