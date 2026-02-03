import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Don't wait until it's <span className="text-destructive">too late</span>.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start with a free Public Breach check to confirm your current exposure.
            Then expand into continuous monitoring, scanning, investigations, and reporting—when you're ready.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="primary-gradient gap-2 px-8">
              Start Free Breach Check
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <Calendar className="w-4 h-4" />
              Request a Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
