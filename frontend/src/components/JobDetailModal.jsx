import React from "react";
import { MapPin, Briefcase, DollarSign, Clock, CheckCircle2, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const JobDetailModal = ({ job, open, onClose }) => {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent 
        data-testid="job-detail-modal"
        className="bg-background/95 backdrop-blur-xl border border-border shadow-2xl p-0 overflow-hidden sm:rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6 md:p-8">
          <DialogHeader className="text-left mb-6">
            <div className="flex items-start gap-4 mb-4">
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-16 h-16 rounded-xl object-cover bg-muted"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(job.company)}&background=18181B&color=fff&size=100`;
                }}
              />
              <div className="flex-1">
                <DialogTitle className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-left">
                  {job.title}
                </DialogTitle>
                <DialogDescription className="text-lg text-muted-foreground mt-1 text-left">
                  {job.company}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1.5 rounded-full px-4 py-1.5">
              <MapPin className="w-4 h-4" />
              {job.location}
            </Badge>
            <Badge 
              variant={job.type === "Full-time" ? "default" : "outline"} 
              className="flex items-center gap-1.5 rounded-full px-4 py-1.5"
            >
              <Briefcase className="w-4 h-4" />
              {job.type}
            </Badge>
            {job.salary && (
              <Badge variant="secondary" className="flex items-center gap-1.5 rounded-full px-4 py-1.5">
                <DollarSign className="w-4 h-4" />
                {job.salary}
              </Badge>
            )}
            <Badge variant="outline" className="flex items-center gap-1.5 rounded-full px-4 py-1.5">
              <Clock className="w-4 h-4" />
              {job.posted}
            </Badge>
          </div>

          <div className="mb-6">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-3 text-left">
              About this role
            </h4>
            <p className="text-base leading-relaxed text-muted-foreground text-left">
              {job.description}
            </p>
          </div>

          <div className="mb-8">
            <h4 className="font-heading text-lg font-semibold text-foreground mb-3 text-left">
              Requirements
            </h4>
            <ul className="space-y-2">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start gap-2 text-left">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              data-testid="apply-now-btn"
              className="flex-1 rounded-full py-6 text-base font-semibold"
            >
              Apply Now
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              data-testid="close-modal-btn"
              variant="outline" 
              onClick={() => onClose(false)}
              className="rounded-full py-6 text-base font-semibold"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailModal;
