import { motion } from "framer-motion";
import ScannerAnimation from "./ScannerAnimation";

interface ScanningViewProps {
  query: string;
  progress: number;
  statusText: string;
}

const ScanningView = ({ query, progress, statusText }: ScanningViewProps) => {
  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[60vh] py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ScannerAnimation status="scanning" progress={progress} />
      
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-display font-semibold text-foreground mb-2">
          Scanning for breaches...
        </h2>
        
        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 my-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary"
              animate={{
                opacity: i < Math.floor(progress / 8.33) ? 1 : 0.2,
                scale: i < Math.floor(progress / 8.33) ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
        
        <motion.p 
          className="text-muted-foreground"
          key={statusText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {statusText}
        </motion.p>
        
        <p className="text-sm text-muted-foreground mt-2">
          Checking: <span className="font-medium text-foreground">{query}</span>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ScanningView;
