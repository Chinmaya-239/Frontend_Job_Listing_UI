import React from "react";
import { Search, X } from "lucide-react";

export const SearchHero = ({ searchQuery, setSearchQuery }) => {
  return (
    <section className="py-16 md:py-24 flex flex-col items-start gap-6">
      <div className="space-y-2">
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Find your next opportunity
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none text-foreground text-left">
          Job Board
        </h1>
      </div>
      
      <div className="relative w-full max-w-3xl">
        <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-muted-foreground" />
        <input
          data-testid="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search job titles..."
          className="search-input w-full text-2xl md:text-4xl lg:text-5xl py-4 pl-10 md:pl-14 pr-10"
        />
        {searchQuery && (
          <button
            data-testid="clear-search-btn"
            onClick={() => setSearchQuery("")}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        )}
      </div>
    </section>
  );
};

export default SearchHero;
