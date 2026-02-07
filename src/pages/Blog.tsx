import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const posts = [
  {
    id: "1",
    title: "How Infostealers Are Reshaping the Threat Landscape in 2025",
    excerpt: "Infostealers have evolved from simple keyloggers to sophisticated credential-harvesting tools. Here's what security teams need to know about this growing threat category.",
    date: "2025-01-28",
    author: "AlienGate Research",
    category: "Threat Intelligence",
  },
  {
    id: "2",
    title: "5 Signs Your Credentials Are Already on the Dark Web",
    excerpt: "Many organizations discover their data has been compromised months after the fact. Learn the early warning signs and how to act before damage escalates.",
    date: "2025-01-15",
    author: "ParanoidLab",
    category: "Dark Web",
  },
  {
    id: "3",
    title: "Beyond OWASP Top 10: Why DAST Scanning Needs to Go Deeper",
    excerpt: "Standard vulnerability scanning barely scratches the surface. Discover how AlienGate's scanner covers 15,000+ CVEs across web, API, network and cloud.",
    date: "2025-01-05",
    author: "AlienGate Engineering",
    category: "Vulnerability Scanning",
  },
  {
    id: "4",
    title: "Attack Surface Management: From Asset Discovery to Risk Resolution",
    excerpt: "A comprehensive guide to building an effective ASM program that turns asset visibility into actionable security outcomes.",
    date: "2024-12-20",
    author: "ParanoidLab",
    category: "Attack Surface",
  },
  {
    id: "5",
    title: "The Rise of Combo-Lists: What Every CISO Should Know",
    excerpt: "Combo-lists remain one of the most traded commodities on dark web marketplaces. Understanding their lifecycle is key to credential defense.",
    date: "2024-12-10",
    author: "AlienGate Research",
    category: "Dark Web",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen hero-gradient grid-pattern">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <motion.h1
            className="text-4xl font-display font-bold text-foreground mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Blog
          </motion.h1>
          <p className="text-muted-foreground mb-12">Security insights and threat intelligence from AlienGate & ParanoidLab.</p>

          <div className="space-y-6">
            {posts.map((post, i) => (
              <motion.article
                key={post.id}
                className="bg-card rounded-xl border border-border p-6 shadow-card hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <h2 className="text-xl font-display font-semibold text-foreground mt-3 mb-2">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{post.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{post.date}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
