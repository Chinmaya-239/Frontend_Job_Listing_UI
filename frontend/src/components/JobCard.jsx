import React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import { Badge } from "./ui/badge";

const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="highlight">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

export const JobCard = ({ job, index, searchQuery, onClick }) => {
  return (
    <motion.article
      data-testid={`job-card-${job.id}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onClick={() => onClick(job)}
      className="job-card bg-card border border-border/60 shadow-sm rounded-xl p-6 md:p-8 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-12 h-12 rounded-lg object-cover bg-muted"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=18181B&color=fff&size=100`;
          }}
        />
        <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          {job.posted}
        </span>
      </div>

      <h3 className="font-heading text-xl md:text-2xl font-medium text-foreground mb-1 text-left">
        <HighlightText text={job.title} highlight={searchQuery} />
      </h3>
      <p className="text-base text-muted-foreground mb-4 text-left">{job.company}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="secondary" className="flex items-center gap-1 rounded-full px-3 py-1">
          <MapPin className="w-3 h-3" />
          {job.location}
        </Badge>
        <Badge 
          variant={job.type === "Full-time" ? "default" : "outline"} 
          className="flex items-center gap-1 rounded-full px-3 py-1"
        >
          <Briefcase className="w-3 h-3" />
          {job.type}
        </Badge>
        {job.salary && (
          <Badge variant="secondary" className="flex items-center gap-1 rounded-full px-3 py-1">
            <DollarSign className="w-3 h-3" />
            {job.salary}
          </Badge>
        )}
      </div>

      <p className="text-sm text-muted-foreground line-clamp-2 text-left">
        {job.description}
      </p>
    </motion.article>
  );
};

export default JobCard;
