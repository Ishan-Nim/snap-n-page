import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do we need to start?",
    answer: "Simply sign up with your email and enter your company domain. You can start with a free breach check immediately, and expand to continuous monitoring when ready.",
  },
  {
    question: "Is scanning limited to OWASP Top 10?",
    answer: "No. AlienGate supports DAST beyond OWASP Top 10, providing comprehensive coverage including network vulnerability scanning capable of detecting 15,000+ CVEs.",
  },
  {
    question: "What kind of \"evidence\" is provided?",
    answer: "AlienGate provides screenshots, port/service details, technology detection, and credential exposure context—giving you the proof needed to validate risks and justify remediation priorities.",
  },
  {
    question: "Can we manage investigations and reporting?",
    answer: "Yes. The Investigations feature turns alerts into trackable cases with assigned owners, status tracking, and evidence collection. Reports can be generated for executives and compliance teams.",
  },
  {
    question: "How does AI help?",
    answer: "AI accelerates operations with automated risk scoring, smart summaries of findings, and next-action guidance—helping teams focus on what matters most without manual triage.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about AlienGate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
