import { motion } from "framer-motion";
import { AlertTriangle, Shield, Search, FileText, Bell, BarChart } from "lucide-react";

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
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            From "invisible fear" to <span className="text-gradient">proactive prevention</span>.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the transformation AlienGate brings to your security operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
              </div>

              <div className="space-y-4">
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-4">
                  <span className="text-xs font-semibold text-destructive uppercase tracking-wide">Before</span>
                  <p className="text-sm text-muted-foreground mt-2">{item.before}</p>
                </div>

                <div className="bg-success/5 border border-success/20 rounded-xl p-4">
                  <span className="text-xs font-semibold text-success uppercase tracking-wide">With AlienGate</span>
                  <p className="text-sm text-muted-foreground mt-2">{item.after}</p>
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
