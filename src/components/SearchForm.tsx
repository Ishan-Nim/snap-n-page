import { useState } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchFormProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="relative flex items-center gap-2 p-2 bg-card rounded-2xl shadow-card border border-border">
        <div className="flex items-center gap-3 flex-1 pl-4">
          <Search className="w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter Domain or Email Address"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-base placeholder:text-muted-foreground"
            disabled={isLoading}
          />
        </div>
        <Button 
          type="submit" 
          size="lg"
          className="primary-gradient px-6 py-6 rounded-xl font-semibold text-base gap-2 hover:opacity-90 transition-opacity"
          disabled={isLoading || !query.trim()}
        >
          Scan Now
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        Check if your credentials have been exposed in data breaches
      </p>
    </motion.form>
  );
};

export default SearchForm;
