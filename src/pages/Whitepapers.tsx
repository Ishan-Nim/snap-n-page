import { motion } from "framer-motion";
import { Download, FileText, Shield, Globe, Eye, BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface WhitepaperCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  pages: string;
  category: string;
  filename: string;
}

const whitepapers: WhitepaperCard[] = [
  {
    title: "AlienGate Platform Overview",
    description:
      "A comprehensive introduction to AlienGate's Digital Risk Protection platform — capabilities, architecture, and how it defends organizations against dark-web threats and credential exposure.",
    icon: <Shield className="w-6 h-6" />,
    pages: "12 pages",
    category: "Platform Guide",
    filename: "AlienGate_Platform_Overview.pdf",
  },
  {
    title: "Dark Web Threat Landscape 2025",
    description:
      "An in-depth report on the current dark-web threat landscape, covering emerging trends in credential markets, ransomware leak sites, and underground forums.",
    icon: <Eye className="w-6 h-6" />,
    pages: "18 pages",
    category: "Threat Report",
    filename: "Dark_Web_Threat_Landscape_2025.pdf",
  },
  {
    title: "Attack Surface Management Best Practices",
    description:
      "Learn how to map, monitor, and reduce your external attack surface with proven methodologies and AlienGate's automated tools.",
    icon: <Globe className="w-6 h-6" />,
    pages: "10 pages",
    category: "Best Practices",
    filename: "ASM_Best_Practices.pdf",
  },
  {
    title: "Credential Exposure & Breach Response Guide",
    description:
      "Step-by-step playbook for responding to credential leaks detected on the dark web — from initial triage to full remediation and prevention.",
    icon: <FileText className="w-6 h-6" />,
    pages: "8 pages",
    category: "Response Guide",
    filename: "Breach_Response_Guide.pdf",
  },
];

const generateSamplePDF = (title: string, filename: string) => {
  const content = getSampleContent(title);
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename.replace(".pdf", ".txt");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const getSampleContent = (title: string): string => {
  if (title.includes("Platform Overview")) {
    return `
================================================================================
                        ALIENGATE — PLATFORM OVERVIEW
                     Digital Risk Protection White Paper
================================================================================

1. EXECUTIVE SUMMARY
--------------------
AlienGate is a next-generation Digital Risk Protection (DRP) platform built to
safeguard organizations from email-based threats, credential leaks, dark-web
exposure, and external attack-surface vulnerabilities.

With 50 million+ records processed daily from Telegram channels, dark-web forums,
and underground marketplaces, AlienGate gives security teams the visibility they
need to detect threats during the earliest stages of the Cyber Kill Chain.


2. THE PROBLEM
--------------
Traditional perimeter-based security is no longer sufficient. Attackers routinely:

  • Trade stolen credentials on dark-web marketplaces
  • Discuss targets in private Telegram channels and forums
  • Exploit exposed assets discovered through open-source intelligence (OSINT)
  • Launch phishing campaigns using look-alike domains

Organizations need continuous, proactive monitoring of their digital footprint
beyond the corporate firewall.


3. ALIENGATE CAPABILITIES
--------------------------

  3.1  Dark Web Intelligence
       - Continuous monitoring of 10,000+ dark-web sources
       - 5-minute average alert time for new exposures
       - Coverage across forums, paste sites, marketplaces, and messaging apps

  3.2  Credential Monitoring
       - Real-time detection of leaked corporate credentials
       - Breach history tracking per email address
       - Automated risk scoring and remediation guidance

  3.3  Attack Surface Management
       - Automated asset discovery and enumeration
       - Subdomain monitoring and DNS change detection
       - SSL/TLS certificate tracking and alerting

  3.4  Domain Protection
       - Phishing domain detection (look-alike and typosquatting)
       - Brand impersonation monitoring
       - WHOIS change notifications

  3.5  OSINT Security Analysis
       - External attack surface mapping
       - Public data exposure assessment
       - Social media and code repository scanning


4. ARCHITECTURE
---------------

  ┌─────────────┐    ┌──────────────┐    ┌─────────────────┐
  │  Data        │───▶│  Processing  │───▶│  AlienGate      │
  │  Collection  │    │  Engine      │    │  Dashboard      │
  │  Crawlers    │    │  (50M+/day)  │    │  & API          │
  └─────────────┘    └──────────────┘    └─────────────────┘
        │                    │                     │
   Dark Web             Correlation           Real-Time
   Forums               & Scoring             Alerts
   Telegram                                   Reports
   Paste Sites                                Integrations


5. KEY METRICS
--------------

  • 10,000+  clients secured
  • 100,000+ total searches performed
  • 100,000+ monitored assets
  • 50M+     records processed daily
  • 5 min    average alert response time
  • 15,000+  CVEs covered by vulnerability scanning


6. DEPLOYMENT OPTIONS
---------------------
AlienGate is available as a cloud-hosted SaaS platform with:

  • Single Sign-On (SSO) integration
  • API access for SIEM/SOAR integration
  • Custom alert webhooks (Slack, Teams, Email, SMS)
  • Role-based access control
  • Multi-tenant support for MSSPs


7. COMPLIANCE
-------------
AlienGate helps organizations meet requirements for:

  • GDPR — Data breach notification readiness
  • SOC 2 — Continuous monitoring controls
  • ISO 27001 — Threat intelligence and risk management
  • PCI DSS — Credential exposure monitoring
  • NIST CSF — Identify and Protect functions


8. GETTING STARTED
------------------
Visit https://aliengate.jp or contact our team to schedule a demo.

  1. Sign up for an account
  2. Configure your security groups
  3. Add domains and email addresses
  4. Run your first scan
  5. Review findings and set up alerts


================================================================================
              © 2025 AlienGate. All rights reserved.
              For more information visit: https://aliengate.jp
================================================================================
`;
  }

  if (title.includes("Threat Landscape")) {
    return `
================================================================================
                DARK WEB THREAT LANDSCAPE REPORT — 2025
                          by AlienGate Research
================================================================================

1. OVERVIEW
-----------
This report summarizes the key trends and threats observed across dark-web
sources during Q1–Q4 2025, based on AlienGate's analysis of 50M+ daily records.


2. KEY FINDINGS
---------------

  2.1  Credential Markets
       • 340% increase in corporate credential listings year-over-year
       • Average price per credential dropped from $15 to $8 (supply increase)
       • "Combo lists" bundling email + password + session tokens now standard

  2.2  Ransomware Leak Sites
       • 47 active ransomware groups maintaining leak sites
       • Healthcare and manufacturing most targeted sectors
       • Average time-to-leak after breach: 72 hours

  2.3  Telegram as a Threat Vector
       • 65% of initial breach disclosures now appear on Telegram first
       • Automated bots selling credentials in real time
       • Channels dedicated to specific industries and regions

  2.4  Phishing-as-a-Service
       • Turn-key phishing kits available from $50/month
       • MFA bypass tools becoming commodity items
       • AI-generated phishing content increasing in quality


3. REGIONAL BREAKDOWN
---------------------

  Region          | Credential Exposure | Top Threat
  ────────────────|────────────────────|──────────────────────
  Asia Pacific    | +280% YoY          | Credential stuffing
  Europe          | +190% YoY          | Ransomware
  North America   | +220% YoY          | BEC / phishing
  Middle East     | +350% YoY          | Hacktivism


4. RECOMMENDATIONS
------------------

  • Implement continuous dark-web monitoring (AlienGate)
  • Enforce MFA across all corporate applications
  • Conduct regular credential exposure audits
  • Train employees on phishing awareness quarterly
  • Develop and test incident response playbooks


================================================================================
              © 2025 AlienGate Research. All rights reserved.
================================================================================
`;
  }

  if (title.includes("Attack Surface")) {
    return `
================================================================================
            ATTACK SURFACE MANAGEMENT — BEST PRACTICES
                         by AlienGate
================================================================================

1. WHAT IS ATTACK SURFACE MANAGEMENT?
--------------------------------------
Attack Surface Management (ASM) is the continuous process of discovering,
cataloging, and monitoring all external-facing digital assets that could
be exploited by an attacker.


2. THE FIVE PILLARS OF ASM
--------------------------

  Pillar 1: Discovery
  - Enumerate all subdomains, IPs, and cloud assets
  - Identify shadow IT and forgotten infrastructure
  - Map third-party integrations and APIs

  Pillar 2: Classification
  - Categorize assets by criticality and business function
  - Identify asset owners and responsible teams
  - Tag assets with compliance requirements

  Pillar 3: Assessment
  - Scan for known vulnerabilities (15,000+ CVEs)
  - Check configurations against security baselines
  - Test SSL/TLS, DNS, and email security (SPF/DKIM/DMARC)

  Pillar 4: Monitoring
  - Detect new assets appearing in your perimeter
  - Alert on configuration changes and certificate expirations
  - Track exposure trends over time

  Pillar 5: Remediation
  - Prioritize fixes based on risk score
  - Automate ticket creation for security teams
  - Verify remediation and track closure rates


3. HOW ALIENGATE HELPS
-----------------------
AlienGate automates all five pillars with:

  • Automated subdomain enumeration and port scanning
  • Continuous vulnerability assessment (DAST)
  • Real-time alerts for new exposures
  • Integration with ticketing systems (Jira, ServiceNow)
  • Executive dashboards and trend reporting


================================================================================
              © 2025 AlienGate. All rights reserved.
================================================================================
`;
  }

  return `
================================================================================
         CREDENTIAL EXPOSURE & BREACH RESPONSE GUIDE
                       by AlienGate
================================================================================

1. WHEN A BREACH IS DETECTED
-----------------------------
AlienGate monitors the dark web 24/7. When exposed credentials are found:

  Step 1: TRIAGE (0–15 minutes)
  - Review the alert in your AlienGate dashboard
  - Identify which accounts are affected
  - Determine the source and scope of the exposure

  Step 2: CONTAIN (15–60 minutes)
  - Force password resets for affected accounts
  - Revoke active sessions and API tokens
  - Enable additional MFA if not already in place

  Step 3: INVESTIGATE (1–24 hours)
  - Check for unauthorized access in audit logs
  - Correlate with other security events
  - Identify the root cause (phishing, malware, third-party breach)

  Step 4: REMEDIATE (1–7 days)
  - Patch identified vulnerabilities
  - Update security policies as needed
  - Notify affected parties per compliance requirements

  Step 5: RECOVER & IMPROVE (Ongoing)
  - Document lessons learned
  - Update incident response playbook
  - Increase monitoring for affected assets


2. PREVENTION CHECKLIST
-----------------------

  □ Deploy AlienGate for continuous dark-web monitoring
  □ Enforce unique, strong passwords with a password manager
  □ Require MFA on all corporate applications
  □ Conduct quarterly credential exposure audits
  □ Train employees on phishing and social engineering
  □ Monitor for brand impersonation and phishing domains
  □ Integrate AlienGate alerts with your SIEM/SOAR


================================================================================
              © 2025 AlienGate. All rights reserved.
================================================================================
`;
};

const Whitepapers = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur flex items-center px-4 gap-4">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <BookOpen className="w-5 h-5 text-primary" />
          AlienGate
        </Link>
        <div className="ml-auto">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 text-sm text-muted-foreground mb-6">
              <FileText className="w-4 h-4 text-primary" />
              Free Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              White Papers & <span className="text-gradient">Reports</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download our latest research, best practices, and platform guides to strengthen your organization's security posture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whitepapers.map((wp, i) => (
            <motion.div
              key={wp.filename}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-card card-gradient p-6 flex flex-col shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {wp.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {wp.category}
                  </span>
                  <h3 className="text-lg font-display font-bold text-foreground mt-1 leading-tight">
                    {wp.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {wp.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{wp.pages}</span>
                <Button
                  onClick={() => generateSamplePDF(wp.title, wp.filename)}
                  className="primary-gradient hover:opacity-90 transition-opacity gap-2"
                  size="sm"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-20">
        <div className="max-w-3xl mx-auto text-center rounded-xl border border-border bg-card p-10">
          <h2 className="text-2xl font-display font-bold text-foreground mb-3">
            Need a Custom Report?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our research team can prepare tailored threat intelligence reports for your industry and organization.
          </p>
          <Link to="/book-demo">
            <Button className="primary-gradient hover:opacity-90 transition-opacity">
              Contact Our Team
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Whitepapers;
