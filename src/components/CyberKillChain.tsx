import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "Reconnaissance",
    desc: "Attackers harvest emails, addresses, conference information, and public records to map your organization's digital footprint.",
  },
  {
    num: 2,
    title: "Weaponization",
    desc: "Exploit code is coupled with a backdoor into a deliverable payload—crafted specifically for the vulnerabilities discovered.",
  },
  {
    num: 3,
    title: "Delivery",
    desc: "The weaponized payload reaches the target through email attachments, compromised websites, or removable media.",
  },
  {
    num: 4,
    title: "Exploitation",
    desc: "A vulnerability is triggered to execute malicious code on the victim's system, gaining an initial foothold.",
  },
  {
    num: 5,
    title: "Installation",
    desc: "Persistent malware is installed on the compromised asset, ensuring the attacker retains access even after reboots.",
  },
  {
    num: 6,
    title: "Command & Control",
    desc: "A covert channel is established for remote manipulation—allowing the attacker to issue commands and exfiltrate data.",
  },
  {
    num: 7,
    title: "Action on Objectives",
    desc: "With full 'hands on keyboard' access, intruders accomplish their original goals—data theft, sabotage, or ransom.",
  },
];

const CyberKillChain = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Stop Cyber Attacks at the <span className="text-gradient">Earliest Stage</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Understanding the cyber kill chain lets you intercept threats before they escalate—AlienGate focuses on stages 1 & 2 where prevention is most effective.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-card rounded-xl border border-border p-5 shadow-card">
                      <h3 className="font-display font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>

                  {/* Number node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm border-2 ${
                        step.num <= 2
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-card text-foreground border-border"
                      }`}
                    >
                      {step.num}
                    </div>
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          className="text-center text-muted-foreground mt-12 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          AlienGate intercepts at <span className="text-primary font-semibold">Reconnaissance & Weaponization</span>—before attackers ever reach your perimeter.
        </motion.p>
      </div>
    </section>
  );
};

export default CyberKillChain;
