import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, FileText, BarChart3, Plus, Trash2, Edit, Eye, LogOut, Search, TrendingUp, Users, Globe, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

type Tab = "posts" | "analytics" | "new";

const mockPosts = [
  { id: "1", title: "How Infostealers Are Reshaping the Threat Landscape in 2025", status: "published", date: "2025-01-28", views: 1243 },
  { id: "2", title: "5 Signs Your Credentials Are Already on the Dark Web", status: "published", date: "2025-01-15", views: 892 },
  { id: "3", title: "Beyond OWASP Top 10: Why DAST Scanning Needs to Go Deeper", status: "draft", date: "2025-01-05", views: 0 },
  { id: "4", title: "Attack Surface Management: From Discovery to Resolution", status: "published", date: "2024-12-20", views: 567 },
];

const analyticsData = {
  pageViews: "24,831",
  sessions: "8,492",
  users: "5,217",
  avgDuration: "2m 34s",
  topPages: [
    { page: "/", views: 8420, pct: 34 },
    { page: "/blog", views: 3210, pct: 13 },
    { page: "/#pricing", views: 2890, pct: 12 },
    { page: "/#features", views: 2450, pct: 10 },
    { page: "/#services", views: 1980, pct: 8 },
  ],
  sources: [
    { name: "Organic Search", pct: 42 },
    { name: "Direct", pct: 28 },
    { name: "Social", pct: 18 },
    { name: "Referral", pct: 12 },
  ],
};

const Admin = () => {
  const [tab, setTab] = useState<Tab>("posts");
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const tabs = [
    { id: "posts" as Tab, label: "Blog Posts", icon: FileText },
    { id: "new" as Tab, label: "New Post", icon: Plus },
    { id: "analytics" as Tab, label: "Analytics", icon: BarChart3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <header className="bg-card border-b border-border px-4 h-14 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-foreground">AlienGate Admin</span>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1 text-xs">
              <Eye className="w-3 h-3" /> View Site
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="gap-1 text-xs">
            <LogOut className="w-3 h-3" /> Logout
          </Button>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-56 border-r border-border bg-card min-h-[calc(100vh-3.5rem)] p-4 hidden md:block">
          <nav className="space-y-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === t.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tabs */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border flex z-50">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs font-medium ${
                tab === t.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <t.icon className="w-4 h-4" />
              {t.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 pb-24 md:pb-6">
          {tab === "posts" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-display font-bold text-foreground">Blog Posts</h1>
                <Button onClick={() => setTab("new")} size="sm" className="gap-1">
                  <Plus className="w-4 h-4" /> New Post
                </Button>
              </div>

              <div className="mb-4">
                <div className="relative max-w-sm">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search posts..." className="pl-9" />
                </div>
              </div>

              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="px-4 py-3 text-muted-foreground font-medium">Title</th>
                      <th className="px-4 py-3 text-muted-foreground font-medium hidden sm:table-cell">Status</th>
                      <th className="px-4 py-3 text-muted-foreground font-medium hidden md:table-cell">Date</th>
                      <th className="px-4 py-3 text-muted-foreground font-medium hidden md:table-cell">Views</th>
                      <th className="px-4 py-3 text-muted-foreground font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockPosts.map((post) => (
                      <tr key={post.id} className="border-b border-border last:border-0 hover:bg-secondary/30">
                        <td className="px-4 py-3 text-foreground font-medium">{post.title}</td>
                        <td className="px-4 py-3 hidden sm:table-cell">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              post.status === "published"
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {post.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{post.date}</td>
                        <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{post.views.toLocaleString()}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit className="w-3.5 h-3.5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                              <Trash2 className="w-3.5 h-3.5" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {tab === "new" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-2xl">
              <h1 className="text-2xl font-display font-bold text-foreground mb-6">Create New Post</h1>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Title</label>
                  <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter post title..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Category</label>
                  <Input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="e.g. Threat Intelligence, Dark Web..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Excerpt</label>
                  <Textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Short description..." rows={2} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Content</label>
                  <Textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Write your post content here..." rows={12} />
                </div>
                <div className="flex gap-3 pt-2">
                  <Button className="primary-gradient">Publish</Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
              </div>
            </motion.div>
          )}

          {tab === "analytics" && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-2xl font-display font-bold text-foreground mb-6">Google Analytics</h1>

              {/* Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Page Views", value: analyticsData.pageViews, icon: Eye, change: "+12.5%" },
                  { label: "Sessions", value: analyticsData.sessions, icon: TrendingUp, change: "+8.3%" },
                  { label: "Users", value: analyticsData.users, icon: Users, change: "+15.1%" },
                  { label: "Avg Duration", value: analyticsData.avgDuration, icon: Clock, change: "+3.2%" },
                ].map((metric) => (
                  <div key={metric.label} className="bg-card rounded-xl border border-border p-4 shadow-card">
                    <div className="flex items-center justify-between mb-2">
                      <metric.icon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs text-primary font-medium">{metric.change}</span>
                    </div>
                    <div className="text-2xl font-display font-bold text-foreground">{metric.value}</div>
                    <div className="text-xs text-muted-foreground">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Top Pages */}
                <div className="bg-card rounded-xl border border-border p-5 shadow-card">
                  <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-primary" />
                    Top Pages
                  </h3>
                  <div className="space-y-3">
                    {analyticsData.topPages.map((page) => (
                      <div key={page.page}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-foreground font-mono text-xs">{page.page}</span>
                          <span className="text-muted-foreground text-xs">{page.views.toLocaleString()} views</span>
                        </div>
                        <div className="w-full bg-secondary rounded-full h-1.5">
                          <div className="bg-primary h-1.5 rounded-full" style={{ width: `${page.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traffic Sources */}
                <div className="bg-card rounded-xl border border-border p-5 shadow-card">
                  <h3 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    Traffic Sources
                  </h3>
                  <div className="space-y-4">
                    {analyticsData.sources.map((source) => (
                      <div key={source.name} className="flex items-center gap-3">
                        <div className="w-full">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-foreground">{source.name}</span>
                            <span className="text-muted-foreground">{source.pct}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-1.5">
                            <div className="bg-primary/70 h-1.5 rounded-full" style={{ width: `${source.pct}%` }} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Admin;
