import React from "react";
import { motion } from "framer-motion";
import { SearchX, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

export const NoResults = ({ searchQuery, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="no-results py-16 md:py-24"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
          <SearchX className="w-10 h-10 text-muted-foreground" />
        </div>
        
        <div className="space-y-2 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
            No jobs found
          </h3>
          <p className="text-muted-foreground max-w-md">
            {searchQuery 
              ? `We couldn't find any jobs matching "${searchQuery}". Try adjusting your search or filters.`
              : "No jobs match your current filters. Try adjusting your criteria."}
          </p>
        </div>

        <Button
          data-testid="reset-all-btn"
          variant="outline"
          onClick={onReset}
          className="rounded-full px-6"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset all filters
        </Button>
      </div>
    </motion.div>
  );
};

export default NoResults;
