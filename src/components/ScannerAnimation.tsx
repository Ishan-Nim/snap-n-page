import { motion } from "framer-motion";
import { Shield } from "lucide-react";

interface ScannerAnimationProps {
  status: "idle" | "scanning" | "complete";
  progress: number;
}

const ScannerAnimation = ({ status, progress }: ScannerAnimationProps) => {
  return (
    <div className="relative flex items-center justify-center w-80 h-80 mx-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 scanner-gradient rounded-full" />
      
      {/* Outer ring - static */}
      <motion.div 
        className="absolute w-72 h-72 rounded-full border border-border opacity-30"
        animate={status === "scanning" ? { scale: [1, 1.02, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Dashed circle */}
      <motion.div 
        className="absolute w-64 h-64 rounded-full border border-dashed border-primary/30"
        animate={status === "scanning" ? { rotate: 360 } : {}}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Scanning ring with gradient */}
      <motion.div 
        className="absolute w-56 h-56 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, transparent 0%, hsl(217 91% 60% / 0.2) 25%, transparent 50%)",
        }}
        animate={status === "scanning" ? { rotate: 360 } : {}}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Inner glow circle */}
      <motion.div 
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-primary/10 to-primary/5"
        animate={status === "scanning" ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Dots around the circle */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
        <motion.div
          key={angle}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 120}px - 4px)`,
            top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 120}px - 4px)`,
          }}
          animate={status === "scanning" ? {
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          } : { opacity: 0.3 }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            delay: index * 0.1 
          }}
        />
      ))}
      
      {/* Cross lines */}
      <motion.div 
        className="absolute w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        animate={status === "scanning" ? { opacity: [0.3, 0.6, 0.3] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div 
        className="absolute w-32 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={status === "scanning" ? { opacity: [0.3, 0.6, 0.3] } : {}}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
      
      {/* Center shield icon */}
      <motion.div 
        className="relative z-10 w-20 h-20 rounded-xl bg-primary flex items-center justify-center shadow-glow"
        style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
        animate={status === "scanning" ? { 
          boxShadow: [
            "0 0 20px hsl(217 91% 60% / 0.3)",
            "0 0 40px hsl(217 91% 60% / 0.5)",
            "0 0 20px hsl(217 91% 60% / 0.3)",
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Shield className="w-8 h-8 text-primary-foreground" />
      </motion.div>
      
      {/* Scanning line */}
      {status === "scanning" && (
        <motion.div
          className="absolute w-40 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent origin-left"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  );
};

export default ScannerAnimation;
