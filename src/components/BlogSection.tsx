import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";

const mockPosts = [
  {
    id: "1",
    title: "How Infostealers Are Reshaping the Threat Landscape in 2025",
    excerpt: "Infostealers have evolved from simple keyloggers to sophisticated credential-harvesting tools. Here's what security teams need to know.",
    date: "2025-01-28",
    author: "AlienGate Research",
    category: "Threat Intelligence",
  },
  {
    id: "2",
    title: "5 Signs Your Credentials Are Already on the Dark Web",
    excerpt: "Many organizations discover their data has been compromised months after the fact. Learn the early warning signs and how to act.",
    date: "2025-01-15",
    author: "AlienGate Research",
    category: "Dark Web",
  },
  {
    id: "3",
    title: "Beyond OWASP Top 10: Why DAST Scanning Needs to Go Deeper",
    excerpt: "Standard vulnerability scanning barely scratches the surface. Discover how AlienGate's scanner covers 15,000+ CVEs.",
    date: "2025-01-05",
    author: "AlienGate Engineering",
    category: "Vulnerability Scanning",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 px-4 bg-card/30" id="blog">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Latest from the <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Security insights, product updates, and threat intelligence from our team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mockPosts.map((post, i) => (
            <motion.article
              key={post.id}
              className="bg-card rounded-2xl border border-border overflow-hidden shadow-card hover:border-primary/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
              <div className="p-6">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="font-display font-semibold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
