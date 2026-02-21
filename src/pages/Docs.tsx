import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { cn } from "@/lib/utils";
import { docGroups, docSections } from "@/data/docs";
import { ChevronRight, Menu, X, Search, BookOpen } from "lucide-react";

const Docs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeId = searchParams.get("section") || "welcome";
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const activeSection = docSections[activeId] || docSections["welcome"];

  const filteredGroups = docGroups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  const navigateTo = (id: string) => {
    setSearchParams({ section: id });
    setSidebarOpen(false);
  };

  const renderMarkdown = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let i = 0;
    let tableRows: string[][] = [];
    let inTable = false;

    const renderInline = (text: string) => {
      return text.split(/(\*\*[^*]+\*\*|\`[^`]+\`)/).map((part, idx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={idx} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith("`") && part.endsWith("`")) {
          return <code key={idx} className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono text-primary">{part.slice(1, -1)}</code>;
        }
        // Handle links
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: (string | JSX.Element)[] = [];
        let lastIndex = 0;
        let match;
        while ((match = linkRegex.exec(part)) !== null) {
          if (match.index > lastIndex) parts.push(part.slice(lastIndex, match.index));
          parts.push(<a key={`${idx}-${match.index}`} href={match[2]} className="text-primary hover:underline">{match[1]}</a>);
          lastIndex = match.index + match[0].length;
        }
        if (parts.length > 0) {
          if (lastIndex < part.length) parts.push(part.slice(lastIndex));
          return <span key={idx}>{parts}</span>;
        }
        return part;
      });
    };

    while (i < lines.length) {
      const line = lines[i];

      // Table
      if (line.includes("|") && line.trim().startsWith("|")) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        if (!cells.every((c) => /^[-:]+$/.test(c))) {
          tableRows.push(cells);
        }
        i++;
        if (i >= lines.length || !lines[i]?.includes("|")) {
          inTable = false;
          elements.push(
            <div key={`table-${i}`} className="overflow-x-auto my-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border">
                    {tableRows[0]?.map((cell, ci) => (
                      <th key={ci} className="text-left py-2 px-3 font-semibold text-foreground">{renderInline(cell)}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.slice(1).map((row, ri) => (
                    <tr key={ri} className="border-b border-border/50">
                      {row.map((cell, ci) => (
                        <td key={ci} className="py-2 px-3 text-muted-foreground">{renderInline(cell)}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        continue;
      }

      if (line.startsWith("## ")) {
        elements.push(<h2 key={i} className="text-xl font-display font-bold text-foreground mt-8 mb-3">{line.slice(3)}</h2>);
      } else if (line.startsWith("### ")) {
        elements.push(<h3 key={i} className="text-lg font-display font-semibold text-foreground mt-6 mb-2">{line.slice(4)}</h3>);
      } else if (line.startsWith("- ")) {
        const listItems: string[] = [line.slice(2)];
        while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
          i++;
          listItems.push(lines[i].slice(2));
        }
        elements.push(
          <ul key={i} className="list-disc list-inside space-y-1.5 my-3 text-muted-foreground">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
            ))}
          </ul>
        );
      } else if (/^\d+\.\s/.test(line)) {
        const listItems: string[] = [line.replace(/^\d+\.\s/, "")];
        while (i + 1 < lines.length && /^\d+\.\s/.test(lines[i + 1])) {
          i++;
          listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        }
        elements.push(
          <ol key={i} className="list-decimal list-inside space-y-1.5 my-3 text-muted-foreground">
            {listItems.map((item, idx) => (
              <li key={idx} className="leading-relaxed">{renderInline(item)}</li>
            ))}
          </ol>
        );
      } else if (line.trim() === "") {
        // skip
      } else {
        elements.push(<p key={i} className="text-muted-foreground leading-relaxed my-2">{renderInline(line)}</p>);
      }
      i++;
    }
    return elements;
  };

  // Find prev/next
  const allItems = docGroups.flatMap((g) => g.items);
  const currentIdx = allItems.findIndex((item) => item.id === activeId);
  const prevItem = currentIdx > 0 ? allItems[currentIdx - 1] : null;
  const nextItem = currentIdx < allItems.length - 1 ? allItems[currentIdx + 1] : null;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <header className="sticky top-0 z-50 h-14 border-b border-border bg-background/95 backdrop-blur flex items-center px-4 gap-4">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-1.5 rounded-md hover:bg-muted"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg text-foreground">
          <BookOpen className="w-5 h-5 text-primary" />
          AlienGate Docs
        </Link>
        <div className="ml-auto">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={cn(
            "w-72 border-r border-border bg-card/50 flex-shrink-0 overflow-y-auto",
            "fixed md:sticky top-14 bottom-0 z-40 transition-transform duration-200",
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="p-4">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <nav className="space-y-6">
              {filteredGroups.map((group) => (
                <div key={group.title}>
                  <h4 className="text-xs font-bold text-muted-foreground tracking-wider mb-2">
                    {group.title}
                  </h4>
                  <ul className="space-y-0.5">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => navigateTo(item.id)}
                          className={cn(
                            "w-full text-left text-sm py-1.5 px-3 rounded-md transition-colors",
                            activeId === item.id
                              ? "text-primary font-medium bg-primary/10"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                        >
                          {item.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-background/80 z-30 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-3xl mx-auto px-6 py-10">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-primary font-medium mb-2">
              <span>{activeSection.group}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              {activeSection.title}
            </h1>

            <article className="prose-custom">
              {renderMarkdown(activeSection.content)}
            </article>

            {/* Prev / Next nav */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-border">
              {prevItem ? (
                <button
                  onClick={() => navigateTo(prevItem.id)}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="w-4 h-4 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
                  {prevItem.title}
                </button>
              ) : <div />}
              {nextItem ? (
                <button
                  onClick={() => navigateTo(nextItem.id)}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {nextItem.title}
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              ) : <div />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Docs;
