import { motion } from "framer-motion";
import { AlertTriangle, Search, Bell, BarChart, ArrowRight } from "lucide-react";

const comparisons = [
  {
    icon: AlertTriangle,
    title: "Leak Risk",
    before: "You suspect your credentials are being traded somewhere, but you can't confirm where or how serious it is.",
    after: "Continuous monitoring detects leak signals and alerts you early—so you can act before reuse.",
  },
  {
    icon: Search,
    title: "Early Attack Signals",
    before: "You don't know what attackers are targeting until real damage appears.",
    after: "External exposure and weak entry points become visible, so you fix what matters first.",
  },
  {
    icon: Bell,
    title: "Incident Response",
    before: "When a leak is discovered, teams don't know what to do first—and chaos follows.",
    after: "Alerts become structured investigations with clear next steps, reducing confusion and speeding up initial response.",
  },
  {
    icon: BarChart,
    title: "Reporting & Governance",
    before: "Leadership and audit reporting requires huge time and manual work.",
    after: "Actions and evidence are captured, and reports are generated for executives and compliance.",
  },
];

const BeforeAfter = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

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
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            The Transformation
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5 leading-tight">
            From "invisible fear" to{" "}
            <span className="text-gradient">proactive prevention</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation AlienGate brings to your security operations.
          </p>
        </motion.div>

        <div className="space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-glow">
                {/* Header */}
                <div className="flex items-center gap-4 px-8 py-5 border-b border-border/50">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {item.title}
                  </h3>
                </div>

                {/* Content - side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Before */}
                  <div className="relative p-8 md:border-r border-border/50">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-destructive/60 to-transparent" />
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-destructive uppercase tracking-[0.2em] bg-destructive/10 px-3 py-1 rounded-full">
                        Before
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.before}
                    </p>
                  </div>

                  {/* Arrow indicator (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-2 z-10">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </motion.div>
                  </div>

                  {/* After */}
                  <div className="relative p-8">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-success/60 to-transparent" />
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold text-success uppercase tracking-[0.2em] bg-success/10 px-3 py-1 rounded-full">
                        With AlienGate
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.after}
                    </p>
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

export default BeforeAfter;
