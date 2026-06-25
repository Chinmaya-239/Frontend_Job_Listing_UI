import { MapPin, Briefcase, DollarSign, Clock, Bookmark, ExternalLink, Building2, Tag } from "lucide-react";
import { TYPE_STYLES, timeAgo } from "../utils/helpers";

const DESCRIPTIONS = {
  "Full-time": "Join our team full-time and contribute to a fast-growing product. You'll collaborate with cross-functional teams, ship features regularly, and grow with us.",
  "Internship": "A hands-on internship where you'll work on real projects alongside experienced engineers. Great for building your portfolio and learning industry best practices.",
  "Contract": "A project-based engagement with clear scope and deliverables. Ideal for experienced professionals who prefer flexible arrangements.",
  "Part-time": "A flexible part-time role that fits around your schedule. You'll contribute meaningfully to the team while maintaining work-life balance.",
};

const REQUIREMENTS = {
  "Full-time": ["3+ years of relevant experience", "Strong communication skills", "Experience with modern tooling", "Ability to work in a fast-paced environment"],
  "Internship": ["Currently enrolled in a relevant degree", "Eagerness to learn", "Familiarity with core concepts", "Available for at least 3 months"],
  "Contract": ["5+ years of hands-on experience", "Proven track record of delivery", "Available to start within 2 weeks", "Strong documentation habits"],
  "Part-time": ["2+ years of relevant experience", "Self-directed and organized", "Strong async communication", "15–20 hours per week availability"],
};

export default function JobDetail({ job, isSaved, onSave }) {
  if (!job) {
    return (
      <div className="detail-empty">
        <Briefcase size={36} strokeWidth={1.2} />
        <p>Select a job to see details</p>
      </div>
    );
  }

  const typeStyle = TYPE_STYLES[job.type] ?? {};

  return (
    <div className="job-detail">
      <div className="detail-header">
        <div className="detail-avatar" aria-label={`${job.company} logo`}>
          {job.company.charAt(0)}
        </div>
        <div className="detail-title-wrap">
          <h1 className="detail-title">{job.title}</h1>
          <p className="detail-company">
            <Building2 size={13} aria-hidden="true" />
            {job.company}
          </p>
        </div>
      </div>

      <div className="detail-meta-row">
        <span className="badge badge-loc"><MapPin size={12} />{job.location}</span>
        <span className="badge" style={{ background: typeStyle.bg, color: typeStyle.color }}>{job.type}</span>
        <span className="badge badge-salary">{job.salary}</span>
        <span className="posted"><Clock size={11} /> {timeAgo(job.posted)}</span>
      </div>

      <div className="detail-actions">
        <a
          className="apply-btn"
          href={`#apply-${job.id}`}
          onClick={e => { e.preventDefault(); alert(`Application flow for "${job.title}" would open here.`); }}
        >
          Apply now <ExternalLink size={13} aria-hidden="true" />
        </a>
        <button
          className={`save-btn-lg${isSaved ? " saved" : ""}`}
          onClick={e => onSave(job.id, e)}
          aria-pressed={isSaved}
        >
          <Bookmark size={15} fill={isSaved ? "currentColor" : "none"} />
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>

      <div className="detail-section">
        <h3>About the role</h3>
        <p>{DESCRIPTIONS[job.type]}</p>
      </div>

      <div className="detail-section">
        <h3>Requirements</h3>
        <ul>
          {REQUIREMENTS[job.type].map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      </div>

      <div className="detail-section">
        <h3><Tag size={13} aria-hidden="true" /> Skills</h3>
        <div className="detail-tags">
          {job.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </div>
  );
}
