import React from "react";
import { ArrowUpDown, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { locations, jobTypes } from "../data/mockJobs";

export const Filters = ({
  locationFilter,
  setLocationFilter,
  typeFilter,
  setTypeFilter,
  sortAZ,
  setSortAZ,
  totalJobs,
  filteredCount,
}) => {
  return (
    <div className="mb-8 md:mb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredCount}</span> of{" "}
            <span className="font-semibold text-foreground">{totalJobs}</span> jobs
          </span>
        </div>
        
        <Button
          data-testid="sort-toggle-btn"
          variant={sortAZ ? "default" : "outline"}
          onClick={() => setSortAZ(!sortAZ)}
          className="rounded-full px-6 transition-all"
        >
          <ArrowUpDown className="w-4 h-4 mr-2" />
          Sort A-Z
        </Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <Select value={locationFilter} onValueChange={setLocationFilter}>
          <SelectTrigger 
            data-testid="location-filter"
            className="w-full sm:w-[180px] rounded-full border-border"
          >
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem 
                key={location} 
                value={location}
                data-testid={`location-option-${location.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {location}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger 
            data-testid="type-filter"
            className="w-full sm:w-[180px] rounded-full border-border"
          >
            <SelectValue placeholder="All Types" />
          </SelectTrigger>
          <SelectContent>
            {jobTypes.map((type) => (
              <SelectItem 
                key={type} 
                value={type}
                data-testid={`type-option-${type.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {(locationFilter !== "All Locations" || typeFilter !== "All Types") && (
          <Button
            data-testid="clear-filters-btn"
            variant="ghost"
            onClick={() => {
              setLocationFilter("All Locations");
              setTypeFilter("All Types");
            }}
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            Clear filters
          </Button>
        )}
      </div>
    </div>
  );
};

export default Filters;
