import { motion } from "framer-motion";
import { ArrowLeft, Database, AlertTriangle, CheckCircle, TrendingUp, TrendingDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResultData {
  totalRecords: number;
  compromised: number;
  clean: number;
  categories: {
    name: string;
    initial: string;
    dataTypes: number;
    items: {
      type: string;
      count: number;
      status: "exposed" | "clean";
    }[];
  }[];
}

interface ResultsViewProps {
  query: string;
  data: ResultData;
  onNewSearch: () => void;
}

const ResultsView = ({ query, data, onNewSearch }: ResultsViewProps) => {
  return (
    <motion.div 
      className="w-full max-w-5xl mx-auto py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button 
          variant="ghost" 
          onClick={onNewSearch}
          className="gap-2 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" />
          New Search
        </Button>
        
        <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-full border border-border shadow-card">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Results for</span>
          <span className="font-semibold text-foreground">{query}</span>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div 
          className="bg-card rounded-2xl p-6 shadow-card border border-border"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <span className="text-muted-foreground">Total Records</span>
          </div>
          <p className="text-4xl font-display font-bold text-foreground">{data.totalRecords}</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-2xl p-6 shadow-card border border-destructive/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-muted-foreground">Compromised</span>
          </div>
          <p className="text-4xl font-display font-bold text-destructive">{data.compromised}</p>
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-br from-success/10 to-success/5 rounded-2xl p-6 shadow-card border border-success/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-success/20 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-success" />
            </div>
            <span className="text-muted-foreground">Clean</span>
          </div>
          <p className="text-4xl font-display font-bold text-success">{data.clean}</p>
        </motion.div>
      </div>
      
      {/* Detailed Results */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-primary rounded-full" />
          <h2 className="text-xl font-display font-semibold text-foreground">Detailed Results</h2>
        </div>
        
        <div className="space-y-6">
          {data.categories.map((category, categoryIndex) => (
            <motion.div 
              key={category.name}
              className="bg-card rounded-2xl p-6 shadow-card border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + categoryIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-semibold text-foreground">
                  {category.initial}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.dataTypes} data types analyzed</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.type}
                    className={`relative rounded-xl p-4 border overflow-hidden ${
                      item.status === "exposed" 
                        ? "bg-gradient-to-br from-destructive/5 to-transparent border-destructive/20" 
                        : "bg-gradient-to-br from-success/5 to-transparent border-success/20"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {item.status === "exposed" ? (
                        <TrendingUp className="w-4 h-4 text-destructive" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-success" />
                      )}
                      <span className="text-sm text-muted-foreground">{item.type}</span>
                      {item.status === "exposed" ? (
                        <X className="w-4 h-4 text-destructive ml-auto" />
                      ) : (
                        <CheckCircle className="w-4 h-4 text-success ml-auto" />
                      )}
                    </div>
                    <p className={`text-3xl font-display font-bold ${
                      item.status === "exposed" ? "text-destructive" : "text-success"
                    }`}>
                      {item.count}
                    </p>
                    <p className={`text-sm ${
                      item.status === "exposed" ? "text-destructive/80" : "text-success/80"
                    }`}>
                      {item.status === "exposed" ? "Exposed records" : "No exposure detected"}
                    </p>
                    
                    {/* Decorative circle */}
                    <div className={`absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-20 ${
                      item.status === "exposed" ? "bg-destructive" : "bg-success"
                    }`} />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsView;
