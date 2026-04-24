import { motion } from "framer-motion";
import {
  Radar,
  ArrowLeft,
  Check,
  ArrowRight,
  Globe,
  Network,
  Search,
  Camera,
  Cloud,
  Eye,
  Activity,
  ShieldCheck,
  Zap,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const bullets = [
  "Powerful, connected scanners for mapping exposed network assets and web apps, including cloud and APIs",
  "Global view of potential jumping off points for deeper testing, including open ports, running services, operating systems, and screenshots",
  "Built-in machine learning capabilities that improve and maintain accuracy across large-scale projects",
  "Great for extracting insights from limited exposure, such as subdomains, outdated technologies, reverse DNS, WAFs, and hidden files",
  "Popular capabilities: Subdomain Finder, Port Scanner, URL Fuzzer",
];

const stats = [
  { label: "Discovery Scope", value: "360°", sub: "external visibility", desc: "Centralized visibility across domains, subdomains, exposed services, cloud endpoints, and public-facing web applications." },
  { label: "Asset Insight", value: "Live", sub: "continuous context", desc: "See ports, services, fingerprints, technologies, screenshots, and exposure markers that help prioritize deeper testing." },
  { label: "Recon Depth", value: "Multi", sub: "signal mapping", desc: "Correlates subdomains, hidden files, reverse DNS, WAF presence, technology clues, and other internet-facing indicators." },
  { label: "Popular Tools", value: "3+", sub: "key capabilities", desc: "Subdomain Finder, Port Scanner, and URL Fuzzer help teams move quickly from surface discovery to validation." },
];

const reveals = [
  "Discover exposed internet-facing assets",
  "Organize assets by environment or business function",
  "Monitor changes across public-facing infrastructure",
  "Identify unmanaged or newly observed assets",
  "Review technologies associated with each domain",
  "Prioritize investigation and remediation",
];

const asmShows = [
  "Total scans",
  "Total domains",
  "Active domains",
  "Vulnerabilities",
  "Protocols in use",
  "Last observed / scanned",
  "Technology fingerprinting",
  "Severity / exposure markers",
];

const pillars = [
  { icon: Search, title: "Asset Discovery", desc: "Map internet-facing assets across domains, subdomains, exposed applications, APIs, and cloud services to build a clearer external inventory." },
  { icon: Zap, title: "Recon at Scale", desc: "Combine connected scanners and machine learning to improve accuracy across broad projects while extracting useful insights from limited exposure." },
  { icon: ShieldCheck, title: "Actionable Review", desc: "Prioritize unmanaged assets, outdated technologies, suspicious services, and newly discovered domains before they turn into deeper security risk." },
];

const capabilities = [
  { icon: Globe, title: "Subdomain Finder", desc: "Discover subdomains that expand the known attack surface and may require review or ownership validation." },
  { icon: Network, title: "Port Scanner", desc: "Identify open ports, exposed services, and reachable entry points that can become starting points for deeper testing." },
  { icon: Search, title: "URL Fuzzer", desc: "Probe for hidden paths, files, panels, and overlooked web content that may expose sensitive functionality." },
  { icon: Cloud, title: "Cloud & API Mapping", desc: "Bring visibility to public cloud exposure, API presence, and connected internet-facing application components." },
  { icon: Camera, title: "Visual Recon", desc: "Use screenshots and service context to quickly understand what is actually exposed and how it appears externally." },
];

const coverageAreas = [
  { icon: Globe, title: "Exposed Internet-Facing Assets", items: ["Public web applications", "Customer-facing APIs", "Marketing & landing sites", "Forgotten staging environments"] },
  { icon: Layers, title: "Domains & Subdomains", items: ["Primary corporate domains", "Newly observed subdomains", "Wildcard exposure detection", "Ownership validation hints"] },
  { icon: Network, title: "Ports, Services & OS Clues", items: ["Open port enumeration", "Service banners", "Operating system fingerprints", "Reverse DNS correlation"] },
  { icon: Camera, title: "Visual & Hidden Content", items: ["Screenshots of exposed apps", "Hidden files and paths", "Backup file discovery", "Login panel detection"] },
  { icon: Cloud, title: "API & Cloud Exposure", items: ["Public cloud assets", "API endpoint presence", "Misconfigured buckets clues", "Edge service identification"] },
];

const workflow = [
  { n: "1", title: "Add Primary Domains", desc: "Start with your main company domains and customer-facing services to establish a reliable monitoring baseline." },
  { n: "2", title: "Review New Discoveries", desc: "Validate newly observed domains, services, or subdomains quickly so unmanaged assets do not go unnoticed." },
  { n: "3", title: "Group by Environment", desc: "Separate production, development, testing, and third-party exposure to prioritize what matters most." },
  { n: "4", title: "Investigate & Scan", desc: "Investigate unknown technologies, run deeper scans on important assets, and track changes over time." },
];

const useCases = [
  "External asset inventory",
  "Shadow IT discovery",
  "Production environment monitoring",
  "Domain sprawl control",
  "Vendor exposure review",
  "Ongoing attack surface reduction programs",
];

const bestPractices = [
  "Start with your main domains",
  "Separate production from non-production",
  "Review new discoveries regularly",
  "Investigate unknown technologies",
  "Monitor third-party exposure",
  "Confirm ownership of exposed assets",
];

const reviewTable = [
  { area: "Domain Inventory", show: "Known domains, subdomains, protocols, status, and last observed / scanned timestamps", why: "Gives teams a live operational view of what is exposed externally" },
  { area: "Technology Visibility", show: "Fingerprinting results, stack clues, WAF visibility, and outdated technologies", why: "Helps identify unmanaged services, shadow IT, and higher-risk technologies" },
  { area: "Pending Items", show: "New discoveries, assets waiting for review, and missing validation", why: "Prevents exposed assets from being overlooked during onboarding or ongoing monitoring" },
  { area: "Grouping", show: "Production, development, testing, and third-party environments", why: "Improves prioritization and keeps critical assets separate from lower-priority systems" },
  { area: "Actions", show: "Add domains, create workspaces, review asset details, launch scans, and monitor change", why: "Helps teams move from discovery into validation and remediation faster" },
];

const AttackSurfaceManagement = () => {
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

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Radar className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Attack Surface Management</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Attack Surface <span className="text-gradient">Mapping & Recon</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  Powerful, connected scanners for mapping exposed network assets and web apps, including cloud and APIs. Gain a global view of potential jumping off points for deeper testing—open ports, running services, operating systems, screenshots, and externally visible technologies.
                </p>
                <ul className="space-y-3 mb-8">
                  {bullets.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-success/15 border border-success/30 flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      <span className="text-foreground/90 text-sm">{b}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link to="/book-demo">
                  <Button size="lg" className="gap-2">
                    Book a Demo <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              {/* Stats grid */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -4 }}
                    className="card-gradient rounded-2xl p-5 border border-border shadow-card"
                  >
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">{s.label}</p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-display font-bold text-gradient">{s.value}</span>
                      <span className="text-xs text-muted-foreground">{s.sub}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHAT IT REVEALS + WHAT YOU SEE */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">What ASM Reveals</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                AlienGate Attack Surface Management helps security teams continuously discover, organize, monitor, and review internet-facing assets from a single view—surfacing exposed domains, environments, technologies, and third-party services so unmanaged assets don't slip through.
              </p>
              <ul className="space-y-3">
                {reveals.map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 shrink-0" />
                    <span className="text-sm text-foreground/90">{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-border shadow-card"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Activity className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground">What You Can See on the ASM Page</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                A centralized operational view of monitored domains and related assets, helping teams understand the size, exposure, and changing condition of their external footprint.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {asmShows.map((it) => (
                  <div
                    key={it}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/50 border border-border text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-foreground/90">{it}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="px-4 py-20">
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

        {/* POPULAR CAPABILITIES */}
        <section className="px-4 py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Popular Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These features help teams move from broad exposure mapping into targeted follow-up, validation, and remediation planning.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="card-gradient rounded-2xl p-6 border border-border shadow-card hover:shadow-glow transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COVERAGE AREAS - ACCORDION */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Coverage Areas</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Click each section to explore the different ways AlienGate helps teams map, organize, and monitor their external attack surface.
              </p>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-3">
              {coverageAreas.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <AccordionItem value={c.title} className="card-gradient rounded-xl border border-border px-5 shadow-card">
                    <AccordionTrigger className="hover:no-underline py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                          <c.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-display font-semibold text-foreground text-left">{c.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="grid md:grid-cols-2 gap-2 pl-14 pb-2">
                        {c.items.map((it) => (
                          <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-3.5 h-3.5 text-success mt-1 shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="px-4 py-20 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Recommended Workflow</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A practical way to use Attack Surface Management to keep internet-facing exposure organized, prioritized, and continuously reviewed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workflow.map((w, i) => (
                <motion.div
                  key={w.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border shadow-card"
                >
                  <div className="w-10 h-10 rounded-full primary-gradient flex items-center justify-center text-primary-foreground font-display font-bold mb-4">
                    {w.n}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{w.title}</h3>
                  <p className="text-sm text-muted-foreground">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES + BEST PRACTICES */}
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-border shadow-card"
            >
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Example Use Cases</h3>
              <ul className="space-y-3">
                {useCases.map((u) => (
                  <li key={u} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span className="text-foreground/90">{u}</span>
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
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">Best Practices</h3>
              <ul className="space-y-3">
                {bestPractices.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-success mt-1 shrink-0" />
                    <span className="text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* REVIEW TABLE */}
        <section className="px-4 py-16 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">What Teams Typically Review</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A clear summary so both technical and non-technical readers can understand AlienGate's ASM at a glance.
              </p>
            </motion.div>

            <div className="card-gradient rounded-2xl border border-border shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-background/50 border-b border-border">
                    <tr>
                      <th className="text-left px-6 py-4 font-display font-semibold text-foreground">Area</th>
                      <th className="text-left px-6 py-4 font-display font-semibold text-foreground">What AlienGate Shows</th>
                      <th className="text-left px-6 py-4 font-display font-semibold text-foreground">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviewTable.map((r, i) => (
                      <tr key={r.area} className={i !== reviewTable.length - 1 ? "border-b border-border" : ""}>
                        <td className="px-6 py-4 font-semibold text-foreground align-top whitespace-nowrap">{r.area}</td>
                        <td className="px-6 py-4 text-muted-foreground align-top">{r.show}</td>
                        <td className="px-6 py-4 text-muted-foreground align-top">{r.why}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-6 max-w-3xl">
              <strong className="text-foreground">Why it matters:</strong> without continuous external visibility, teams can miss forgotten subdomains, old staging environments, misconfigured public applications, third-party services, and newly deployed assets outside normal security review.
            </p>
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
                <Radar className="w-12 h-12 text-primary-foreground mx-auto mb-4" />
                <h3 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                  Turn Exposure Into Actionable Insight
                </h3>
                <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                  AlienGate Attack Surface Management helps teams discover exposed assets, organize what matters, investigate unknown technologies, and reduce external risk with continuous visibility.
                </p>
                <Link to="/book-demo">
                  <Button size="lg" variant="secondary" className="gap-2">
                    Book a Demo <ArrowRight className="w-4 h-4" />
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

export default AttackSurfaceManagement;
