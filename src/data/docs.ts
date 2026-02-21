export interface DocSection {
  id: string;
  title: string;
  group: string;
  content: string;
}

export interface DocGroup {
  title: string;
  items: { id: string; title: string }[];
}

export const docGroups: DocGroup[] = [
  {
    title: "GETTING STARTED",
    items: [
      { id: "welcome", title: "Welcome to AlienGate" },
      { id: "quick-start", title: "Quick Start Guide" },
      { id: "onboarding", title: "Onboarding Process" },
      { id: "first-scan", title: "Your First Scan" },
    ],
  },
  {
    title: "SECURITY GROUPS",
    items: [
      { id: "add-group", title: "Add New Group" },
      { id: "check-add-client", title: "Check & Add Client" },
      { id: "bulk-check", title: "Bulk Check All Emails" },
    ],
  },
  {
    title: "SECURITY DOMAIN",
    items: [
      { id: "domain", title: "Domain" },
      { id: "domain-onboard", title: "Domain Onboarding" },
      { id: "verified-domain", title: "Verified Domain" },
      { id: "osint", title: "OSINT Security Analysis" },
    ],
  },
  {
    title: "DARK WEB INTELLIGENCE",
    items: [
      { id: "we-monitor", title: "We Monitor" },
      { id: "threat-intelligence", title: "Threat Intelligence" },
      { id: "use-cases", title: "Use Cases" },
      { id: "real-time-alert", title: "Real Time Alert" },
    ],
  },
  {
    title: "SECURITY INVESTIGATION",
    items: [
      { id: "risk-assessment", title: "Risk Assessment" },
      { id: "investigations", title: "Investigations" },
    ],
  },
];

export const docSections: Record<string, DocSection> = {
  welcome: {
    id: "welcome",
    title: "Welcome to AlienGate",
    group: "GETTING STARTED",
    content: `AlienGate is a next-generation Digital Risk Protection (DRP) platform designed to safeguard organizations from email-based threats, credential leaks, and dark-web exposure. With an intuitive dashboard and powerful scanning engine, AlienGate helps security teams identify and mitigate risks before they escalate.

## Key Features

- **Email Breach Detection** — Instantly check corporate email addresses against global breach databases and dark-web markets to identify leaked credentials.

- **Security Group Management** — Organize monitored assets into logical groups for streamlined oversight and reporting.

- **Domain Monitoring** — Continuously monitor your domains for unauthorized usage, phishing attempts, and DNS anomalies.

- **Dark Web Intelligence** — Our crawlers scan 50 million+ daily records across Telegram channels, dark web forums, and underground marketplaces.

- **Real-Time Alerts** — Receive notifications within 5 minutes of a detected threat, ensuring rapid incident response.

- **OSINT Security Analysis** — Leverage open-source intelligence to map your organization's external attack surface.

## Why AlienGate?

Traditional security tools are reactive. AlienGate is proactive — we detect threats during the reconnaissance and weaponization phases of the Cyber Kill Chain, giving your team the advantage of early warning and rapid response.

## Platform Overview

AlienGate provides a centralized dashboard where you can:

1. Monitor all your digital assets in one place
2. Track credential exposure across the dark web
3. Manage security groups and domains
4. Generate detailed risk assessment reports
5. Set up automated alerts and notifications`,
  },

  "quick-start": {
    id: "quick-start",
    title: "Quick Start Guide",
    group: "GETTING STARTED",
    content: `Get up and running with AlienGate in under 10 minutes.

## Step 1: Create Your Account

Sign up at [aliengate.com](/) and verify your email address. You'll receive a confirmation link within seconds.

## Step 2: Set Up Your First Security Group

Navigate to **Security Groups → Add New Group** and create a group for your organization. Name it something descriptive like "Corporate Emails" or "Executive Team".

## Step 3: Add Assets to Monitor

Add email addresses, domains, or IP addresses to your security group. You can add them individually or use the bulk import feature.

## Step 4: Run Your First Scan

Click **Scan Now** from your dashboard. AlienGate will check your assets against our database of 50M+ daily records from dark web sources.

## Step 5: Review Results

Check your dashboard for any detected breaches, exposed credentials, or security risks. Each finding includes severity ratings and recommended actions.

## Next Steps

- Configure **Real-Time Alerts** to get notified instantly
- Set up **Domain Monitoring** for your web properties
- Explore **OSINT Security Analysis** for deeper insights`,
  },

  onboarding: {
    id: "onboarding",
    title: "Onboarding Process",
    group: "GETTING STARTED",
    content: `The AlienGate onboarding process is designed to get your organization fully protected as quickly as possible.

## Phase 1: Discovery

During discovery, our team works with you to identify:

- All email domains used by your organization
- Key personnel whose credentials need priority monitoring
- External-facing assets and infrastructure
- Current security tools and processes in place

## Phase 2: Configuration

Based on the discovery phase, we configure your AlienGate environment:

- Create security groups aligned with your org structure
- Set up domain monitoring for all identified domains
- Configure alert thresholds and notification channels
- Import existing asset inventories

## Phase 3: Initial Scan & Assessment

We run a comprehensive initial scan that covers:

- Historical breach data for all monitored emails
- Dark web exposure analysis
- Domain security assessment
- Attack surface mapping

## Phase 4: Ongoing Monitoring

Once onboarding is complete, AlienGate continuously monitors your assets with:

- 24/7 automated scanning
- 5-minute alert response time
- Weekly summary reports
- Monthly risk assessment updates`,
  },

  "first-scan": {
    id: "first-scan",
    title: "Your First Scan",
    group: "GETTING STARTED",
    content: `Running your first scan with AlienGate is straightforward and provides immediate value.

## Before You Scan

Make sure you have:

1. At least one Security Group created
2. Email addresses or domains added to the group
3. Notification preferences configured

## Running the Scan

1. Navigate to your **Dashboard**
2. Select the Security Group you want to scan
3. Click the **Scan Now** button
4. The scan typically completes within 2-5 minutes

## Understanding Results

### Severity Levels

| Level | Description |
|-------|-------------|
| **Critical** | Active credential exposure requiring immediate action |
| **High** | Recent breach data found on dark web markets |
| **Medium** | Historical breach data with potential risk |
| **Low** | Informational findings for awareness |

### Recommended Actions

For each finding, AlienGate provides:

- **Description** of the exposure
- **Source** where the data was found
- **Timeline** of when the breach occurred
- **Remediation steps** to mitigate the risk`,
  },

  "add-group": {
    id: "add-group",
    title: "Add New Group",
    group: "SECURITY GROUPS",
    content: `Security Groups allow you to organize your monitored assets for efficient management and reporting.

## Creating a Group

1. Navigate to **Security Groups** in the sidebar
2. Click **Add New Group**
3. Enter a group name (e.g., "Engineering Team", "C-Suite")
4. Optionally add a description
5. Click **Create Group**

## Group Settings

Each group can be configured with:

- **Alert Preferences** — Choose how and when to be notified
- **Scan Frequency** — Set automatic scan intervals
- **Report Recipients** — Add team members who receive reports
- **Risk Threshold** — Define minimum severity for alerts

## Best Practices

- Create groups by department or risk level
- Keep group sizes manageable (under 500 assets per group)
- Use descriptive names for easy identification
- Assign a group owner for accountability`,
  },

  "check-add-client": {
    id: "check-add-client",
    title: "Check & Add Client",
    group: "SECURITY GROUPS",
    content: `Add individual clients or email addresses to your security groups for monitoring.

## Adding a Client

1. Open the target Security Group
2. Click **Add Client**
3. Enter the email address or identifier
4. AlienGate automatically runs an initial check
5. The client is added to continuous monitoring

## Initial Check Results

When adding a new client, AlienGate immediately scans for:

- Known breach appearances
- Dark web credential exposure
- Associated domain vulnerabilities
- Historical security incidents

## Managing Clients

- **Edit** client details and associated metadata
- **Move** clients between groups
- **Archive** inactive clients while preserving history
- **Export** client reports for compliance documentation`,
  },

  "bulk-check": {
    id: "bulk-check",
    title: "Bulk Check All Emails",
    group: "SECURITY GROUPS",
    content: `The Bulk Check feature allows you to scan large volumes of email addresses simultaneously.

## Supported Formats

Upload your email list in any of these formats:

- **CSV** — One email per row, or in a designated column
- **TXT** — One email per line
- **Excel** (.xlsx) — Specify the column containing emails

## Running a Bulk Check

1. Navigate to **Security Groups → Bulk Check**
2. Upload your file or paste emails directly
3. Select the target Security Group
4. Click **Start Bulk Check**
5. Results are available in your dashboard once complete

## Rate Limits

| Plan | Emails per Check | Daily Limit |
|------|-----------------|-------------|
| Starter | 100 | 500 |
| Professional | 1,000 | 10,000 |
| Enterprise | 10,000 | Unlimited |

## Export Results

Bulk check results can be exported as CSV or PDF reports, including breach details and remediation recommendations for each flagged email.`,
  },

  domain: {
    id: "domain",
    title: "Domain",
    group: "SECURITY DOMAIN",
    content: `Domain monitoring is a core feature of AlienGate that helps protect your web properties from threats.

## What We Monitor

- **DNS Records** — Changes to A, AAAA, MX, TXT, and CNAME records
- **SSL Certificates** — Expiration dates, certificate transparency logs
- **Subdomain Discovery** — Automatic enumeration of subdomains
- **Phishing Detection** — Look-alike domains targeting your brand
- **WHOIS Changes** — Ownership and registration modifications

## Adding a Domain

1. Go to **Security Domain → Domain**
2. Click **Add Domain**
3. Enter your domain name
4. Verify ownership via DNS TXT record or HTML file
5. Monitoring begins immediately after verification

## Dashboard

The domain dashboard provides:

- Real-time status of all monitored domains
- Historical change timeline
- Risk score based on current configuration
- Actionable recommendations for improvement`,
  },

  "domain-onboard": {
    id: "domain-onboard",
    title: "Domain Onboarding",
    group: "SECURITY DOMAIN",
    content: `Onboard new domains into AlienGate's monitoring system with automated verification and configuration.

## Verification Methods

### DNS TXT Record
Add a TXT record to your domain's DNS settings with the provided verification token. This is the recommended method.

### HTML File Upload
Upload a verification file to your web server's root directory. Suitable for domains where you have hosting access.

### Meta Tag
Add a meta tag to your website's homepage. Best for single-page applications.

## Post-Verification Setup

Once verified, AlienGate automatically:

1. Enumerates all subdomains
2. Catalogs SSL certificate information
3. Maps the domain's DNS infrastructure
4. Performs an initial security assessment
5. Sets up continuous monitoring`,
  },

  "verified-domain": {
    id: "verified-domain",
    title: "Verified Domain",
    group: "SECURITY DOMAIN",
    content: `Manage your verified domains and their monitoring configurations.

## Verification Status

| Status | Meaning |
|--------|---------|
| ✅ Verified | Domain ownership confirmed, fully monitored |
| ⏳ Pending | Verification initiated, awaiting confirmation |
| ❌ Failed | Verification attempt unsuccessful |
| 🔄 Re-verify | Ownership needs to be re-confirmed |

## Managing Verified Domains

- View comprehensive security reports per domain
- Adjust monitoring sensitivity and scan frequency
- Configure subdomain-specific alert rules
- Generate compliance reports for audits`,
  },

  osint: {
    id: "osint",
    title: "OSINT Security Analysis",
    group: "SECURITY DOMAIN",
    content: `Open Source Intelligence (OSINT) analysis helps map your organization's external attack surface using publicly available information.

## What OSINT Covers

- **Public Records** — Corporate registrations, employee directories
- **Social Media** — Company profiles, employee exposure
- **Code Repositories** — Leaked credentials in public repos
- **Paste Sites** — Sensitive data on Pastebin and similar platforms
- **Search Engine** — Indexed sensitive documents and pages

## Analysis Process

1. **Reconnaissance** — Automated gathering of publicly available data
2. **Correlation** — Cross-referencing findings across sources
3. **Risk Scoring** — Evaluating potential impact of each finding
4. **Reporting** — Detailed report with remediation recommendations

## Scheduling

OSINT analyses can be scheduled weekly, monthly, or on-demand. Enterprise plans include continuous OSINT monitoring.`,
  },

  "we-monitor": {
    id: "we-monitor",
    title: "We Monitor",
    group: "DARK WEB INTELLIGENCE",
    content: `AlienGate's dark web monitoring covers an extensive range of sources across the deep and dark web.

## Monitored Sources

### Dark Web Forums
- Hacking forums and communities
- Underground marketplaces
- Exploit trading platforms

### Messaging Platforms
- Telegram channels and groups
- Discord servers
- IRC channels

### Paste Sites
- Pastebin and alternatives
- Code sharing platforms
- Data dump repositories

### Marketplaces
- Credential shops
- Data brokers
- Ransomware leak sites

## Coverage Statistics

- **50M+** records processed daily
- **10,000+** sources actively monitored
- **5-minute** average alert time
- **24/7** continuous monitoring`,
  },

  "threat-intelligence": {
    id: "threat-intelligence",
    title: "Threat Intelligence",
    group: "DARK WEB INTELLIGENCE",
    content: `AlienGate's Threat Intelligence engine transforms raw dark web data into actionable security insights.

## Intelligence Types

### Tactical Intelligence
Immediate, actionable findings such as exposed credentials, active phishing campaigns, or newly listed data for sale.

### Strategic Intelligence
Trend analysis and threat landscape reports that inform long-term security strategy and resource allocation.

### Operational Intelligence
Details about specific threat actors, their methods, targets, and infrastructure.

## Threat Feeds

Subscribe to curated threat feeds relevant to your industry:

- **Financial Services** — Banking trojans, payment fraud
- **Healthcare** — Patient data exposure, ransomware targeting
- **Technology** — Source code leaks, API key exposure
- **Government** — Nation-state threats, critical infrastructure

## Integration

Threat intelligence data can be exported via API or integrated with your existing SIEM/SOAR platforms.`,
  },

  "use-cases": {
    id: "use-cases",
    title: "Use Cases",
    group: "DARK WEB INTELLIGENCE",
    content: `Explore how organizations use AlienGate to enhance their security posture.

## Credential Monitoring
Continuously scan for employee credentials appearing on dark web markets and breach databases. Get immediate alerts when credentials are found, enabling rapid password resets and account lockdowns.

## Brand Protection
Detect phishing domains, fake social media accounts, and counterfeit operations targeting your brand before they impact customers.

## Supply Chain Security
Monitor your vendors and partners for security incidents that could affect your organization through the supply chain.

## Compliance & Audit
Generate comprehensive reports demonstrating your organization's proactive security monitoring for regulatory compliance (GDPR, SOC 2, ISO 27001).

## Incident Response
When a breach is detected, AlienGate provides the context needed for rapid response: what was exposed, where it was found, and recommended remediation steps.

## Executive Protection
Monitor executives' personal and professional digital footprints for exposure that could lead to targeted attacks or social engineering.`,
  },

  "real-time-alert": {
    id: "real-time-alert",
    title: "Real Time Alert",
    group: "DARK WEB INTELLIGENCE",
    content: `AlienGate's real-time alerting system ensures you're notified within minutes of a detected threat.

## Alert Channels

- **Email** — Detailed alert with full context
- **SMS** — Critical alerts via text message
- **Webhook** — Integrate with your existing tools
- **Slack** — Direct notifications to your security channel
- **Microsoft Teams** — Alerts in your Teams workspace

## Alert Configuration

### Severity Filters
Choose which severity levels trigger notifications:
- Critical — Always recommended
- High — Recommended for security teams
- Medium — Optional, for comprehensive coverage
- Low — Informational, best as digest

### Custom Rules
Create custom alert rules based on:
- Specific domains or email addresses
- Threat types (credentials, mentions, data leaks)
- Source categories (forums, marketplaces, paste sites)
- Keyword matching

## Alert Response Time

| Severity | Target Response |
|----------|----------------|
| Critical | < 5 minutes |
| High | < 15 minutes |
| Medium | < 1 hour |
| Low | Daily digest |`,
  },

  "risk-assessment": {
    id: "risk-assessment",
    title: "Risk Assessment",
    group: "SECURITY INVESTIGATION",
    content: `AlienGate's Risk Assessment provides a comprehensive view of your organization's security posture.

## Risk Score

Your overall risk score (0-100) is calculated based on:

- Number of exposed credentials
- Severity of dark web mentions
- Domain security configuration
- Attack surface size
- Historical incident patterns

## Assessment Components

### External Exposure
Evaluation of your organization's visibility and vulnerability from an attacker's perspective.

### Credential Risk
Analysis of exposed, reused, or weak credentials associated with your organization.

### Infrastructure Security
Assessment of your domain configurations, SSL/TLS setup, and DNS security.

### Threat Landscape
Overview of active threats targeting your industry and organization specifically.

## Reports

Risk assessment reports include:
- Executive summary for leadership
- Technical details for security teams
- Trend analysis over time
- Prioritized remediation roadmap
- Benchmark comparison against industry peers`,
  },

  investigations: {
    id: "investigations",
    title: "Investigations",
    group: "SECURITY INVESTIGATION",
    content: `The Investigations module provides tools for deep-diving into security incidents and threats.

## Starting an Investigation

1. Navigate to **Security Investigation → Investigations**
2. Click **New Investigation**
3. Define the scope (email, domain, IP, keyword)
4. Set the investigation parameters
5. Launch the investigation

## Investigation Tools

### Deep Search
Search across all historical dark web data for specific terms, emails, or identifiers.

### Timeline View
Visualize the chronological sequence of events related to an incident.

### Entity Mapping
Discover connections between threat actors, infrastructure, and your organization.

### Evidence Collection
Capture and preserve findings for legal or compliance purposes with tamper-proof timestamps.

## Collaboration

- Assign investigations to team members
- Add notes and findings collaboratively
- Share investigation reports securely
- Track investigation status and progress

## Retention

Investigation data is retained based on your plan:
- **Starter** — 90 days
- **Professional** — 1 year
- **Enterprise** — Custom retention`,
  },
};
