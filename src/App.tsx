import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import BookDemo from "./pages/BookDemo";
import DarkWebMonitoring from "./pages/DarkWebMonitoring";
import VulnerabilityScanning from "./pages/VulnerabilityScanning";
import AttackSurfaceManagement from "./pages/AttackSurfaceManagement";
import NotFound from "./pages/NotFound";
import Docs from "./pages/Docs";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/dark-web-monitoring" element={<DarkWebMonitoring />} />
            <Route path="/vulnerability-scanning" element={<VulnerabilityScanning />} />
            <Route path="/attack-surface-management" element={<AttackSurfaceManagement />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
