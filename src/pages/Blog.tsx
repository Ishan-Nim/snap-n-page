import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
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
    author: "AlienGate Research",
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
    author: "AlienGate Research",
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
  {
    id: "6",
    title: "Why External Attack Surface Management Is Non-Negotiable in 2025",
    excerpt: "As organizations expand their digital footprint, monitoring external exposure becomes critical. Learn how EASM closes the gap traditional tools miss.",
    date: "2024-11-30",
    author: "AlienGate Research",
    category: "Attack Surface",
  },
];

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const featured = posts[0];
  const filtered = (activeCategory === "All" ? posts.slice(1) : posts.filter((p) => p.category === activeCategory && p.id !== featured.id));

  return (
    <div className="min-h-screen hero-gradient grid-pattern">
      <Header />
      <main className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/" className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary text-sm mb-6 transition-colors">
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
              Security <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Threat intelligence, product updates, and security insights from the AlienGate team.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.article
            className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-card mb-12 group hover:border-primary/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {featured.category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {featured.title}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl">{featured.excerpt}</p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />{featured.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />{featured.date}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium cursor-pointer hover:underline">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </motion.article>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <motion.article
                key={post.id}
                className="bg-card rounded-xl border border-border overflow-hidden shadow-card hover:border-primary/30 transition-all hover:-translate-y-1 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <div className="h-1 bg-gradient-to-r from-primary/60 to-transparent" />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Tag className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />{post.author}
                      </span>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" />{post.date}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">No posts in this category yet.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
