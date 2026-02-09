import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const demoSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().min(1, "Company is required").max(100),
  role: z.string().trim().min(1, "Please select your role"),
  employees: z.string().trim().min(1, "Please select company size"),
  message: z.string().trim().max(1000).optional(),
});

const BookDemo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    employees: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = demoSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    toast({ title: "Demo requested!", description: "We'll be in touch within 24 hours." });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-muted-foreground text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              Book a Demo
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              See AlienGate in <span className="text-gradient">Action</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Get a personalized walkthrough of our platform tailored to your security needs.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card border border-border rounded-2xl p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-display font-bold text-foreground mb-3">
                Demo Request Received!
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team will reach out within 24 hours to schedule your personalized demo.
              </p>
              <Button asChild variant="outline">
                <a href="/">Back to Home</a>
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Company *</Label>
                  <Input
                    id="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => updateField("company", e.target.value)}
                  />
                  {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Your Role *</Label>
                  <Select onValueChange={(v) => updateField("role", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ciso">CISO</SelectItem>
                      <SelectItem value="cto">CTO</SelectItem>
                      <SelectItem value="security-engineer">Security Engineer</SelectItem>
                      <SelectItem value="it-manager">IT Manager</SelectItem>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.role && <p className="text-sm text-destructive">{errors.role}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label>Company Size *</Label>
                <Select onValueChange={(v) => updateField("employees", v)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Number of employees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-50">1–50</SelectItem>
                    <SelectItem value="51-200">51–200</SelectItem>
                    <SelectItem value="201-1000">201–1,000</SelectItem>
                    <SelectItem value="1001+">1,001+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.employees && <p className="text-sm text-destructive">{errors.employees}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Anything else? (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your security needs..."
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full primary-gradient gap-2 hover:opacity-90 transition-opacity">
                <Send className="w-4 h-4" />
                Request Demo
              </Button>
            </motion.form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;
