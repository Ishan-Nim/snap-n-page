import { motion } from "framer-motion";
import {
  Eye,
  ArrowLeft,
  Shield,
  Globe,
  Bug,
  Radio,
  MessageSquare,
  Package,
  Check,
  Zap,
  Search,
  Bell,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Activity,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const bullets = [
  "Credential monitoring across high-risk underground sources",
  "Fast alerting when leaked accounts or records are detected",
  "Visibility into marketplaces, forums, combo-lists, and infostealer data",
  "Centralized dashboard access for investigation and response",
];

const stats = [
  {
    label: "Daily Intelligence Volume",
    value: "50M",
    sub: "records updated daily",
    desc: "AlienGate continuously ingests and refreshes massive volumes of underground intelligence to keep detection current and relevant.",
  },
  {
    label: "Alert Time",
    value: "5",
    sub: "minute alert time",
    desc: "Get notified quickly when compromised credentials or related identity data are discovered in monitored underground channels.",
  },
];

const pillars = [
  {
    icon: Activity,
    title: "Continuous Monitoring",
    desc: "AlienGate continuously watches underground leak sources for signs that employee, customer, or corporate credentials have surfaced outside your control.",
  },
  {
    icon: Zap,
    title: "Fast Detection",
    desc: "Detect exposed usernames, emails, passwords, combo-list entries, and infostealer records early so security teams can contain the risk faster.",
  },
  {
    icon: ShieldCheck,
    title: "Actionable Response",
    desc: "Move from detection to action with centralized visibility that supports password resets, MFA enforcement, account review, and incident response workflows.",
  },
];

const sources = [
  { icon: Globe, title: "Dark Web Marketplaces", desc: "Monitor marketplaces where stolen access, credentials, and breach data are traded." },
  { icon: Package, title: "Combo-lists", desc: "Detect email and password combinations used in credential stuffing campaigns." },
  { icon: Bug, title: "Infostealers", desc: "Identify credentials and sensitive data harvested by malware and leaked in logs." },
  { icon: MessageSquare, title: "Telegram Groups & Channels", desc: "Track fast-moving underground communication channels where stolen data is shared." },
  { icon: Radio, title: "Dark Web Forums", desc: "Monitor threat communities where compromised accounts and leak data are discussed or sold." },
];

const steps = [
  { n: "1", title: "Monitor", desc: "We continuously scan underground sources for data related to your monitored domains, users, and exposed identities." },
  { n: "2", title: "Detect", desc: "When compromised credentials, combo-list entries, or stealer records are identified, AlienGate correlates them to your organization." },
  { n: "3", title: "Alert", desc: "Alerts are generated quickly so your team can investigate high-risk exposures without delay." },
  { n: "4", title: "Respond", desc: "Reset passwords, enforce MFA, review suspicious logins, and reduce account takeover risk before attackers escalate access." },
];

const teamGains = [
  "Early detection of leaked corporate credentials",
  "Faster response to account compromise risk",
  "Visibility into underground exposure trends",
  "Reduced credential stuffing and account takeover risk",
  "Better support for SOC and incident response teams",
];

const responseSteps = [
  "Reset affected passwords immediately",
  "Enforce or verify multi-factor authentication",
  "Review authentication logs and suspicious activity",
  "Check for password reuse across business systems",
  "Notify impacted users and monitor for follow-up abuse",
];

const DarkWebMonitoring = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        {/* HERO */}
        <section className="relative overflow-hidden px-4 pb-16">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute top-40 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="container mx-auto max-w-6xl">
            <Link to="/#features">
              <Button variant="ghost" className="mb-8 gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" /> Back to Home
              </Button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Eye className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Operational Security Platform</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Gain Full Flexibility With <span className="text-gradient">Dark Web Monitoring</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Access Dark Web Monitoring directly from the AlienGate dashboard and automate detection of compromised credentials across every corner of the underground. Detect leaked accounts earlier, reduce exposure time, and respond before attackers turn stolen data into account takeover or internal compromise.
                </p>
                <ul className="space-y-3 mb-8">
                  {bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground/90">{b}</span>
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/book-demo">
                    <Button size="lg" className="gap-2">
                      Request a Demo <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-1 gap-4">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      whileHover={{ y: -4 }}
                      className="card-gradient rounded-2xl p-6 border border-border shadow-card"
                    >
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-display font-bold text-gradient">{s.value}</span>
                          <span className="text-sm text-muted-foreground">{s.sub}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">{s.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SOURCES */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Compromised Credentials Monitoring
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We continuously scan the dark web's most active channels so you are among the first to know when your data surfaces. This helps reduce the time between exposure and response.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sources.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="card-gradient rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="px-4 py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">How It Works</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                AlienGate Dark Web Monitoring gives security teams a simple workflow for detecting, reviewing, and responding to compromised credentials.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {steps.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative bg-card rounded-2xl p-6 border border-border shadow-card"
                >
                  <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center text-primary-foreground font-display font-bold mb-4">
                    {s.n}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* GAINS + RESPONSE */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-success/15 border border-success/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-success" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">What Your Team Gains</h3>
              </div>
              <ul className="space-y-3">
                {teamGains.map((g) => (
                  <li key={g} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground/90">{g}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-warning/15 border border-warning/30 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">Recommended Response After Detection</h3>
              </div>
              <ul className="space-y-3">
                {responseSteps.map((r, i) => (
                  <li key={r} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-foreground/90">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl p-12 text-center border border-primary/30"
              style={{ background: "var(--gradient-primary)" }}
            >
              <div className="absolute inset-0 bg-background/10 backdrop-blur-sm" />
              <div className="relative">
                <Lock className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                  Stay Ahead of Credential Exposure
                </h3>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                  Dark web exposure can turn into real-world compromise quickly. AlienGate helps you detect leaks early, respond faster, and reduce identity-based risk before it impacts your business.
                </p>
                <Link to="/book-demo">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Request a Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DarkWebMonitoring;
