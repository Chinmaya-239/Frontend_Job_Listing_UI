import { MapPin, Bookmark, Clock } from "lucide-react";
import { TYPE_STYLES, timeAgo } from "../utils/helpers";

export default function JobCard({ job, query, isSaved, onSave, isSelected, onClick }) {
  const typeStyle = TYPE_STYLES[job.type] ?? {};

  function hlText(text) {
    if (!query) return text;
    const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escaped})`, "gi"));
    return parts.map((p, i) =>
      p.toLowerCase() === query.toLowerCase()
        ? <mark key={i}>{p}</mark>
        : p
    );
  }

  return (
    <article
      className={`job-card${isSelected ? " selected" : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onClick()}
      aria-selected={isSelected}
      aria-label={`${job.title} at ${job.company}`}
    >
      <div className="card-header">
        <div className="company-avatar" aria-hidden="true">
          {job.company.charAt(0)}
        </div>
        <div className="card-meta">
          <h2 className="card-title">{hlText(job.title)}</h2>
          <p className="card-company">{job.company}</p>
        </div>
        <button
          className={`save-btn${isSaved ? " saved" : ""}`}
          onClick={e => onSave(job.id, e)}
          aria-label={isSaved ? `Unsave ${job.title}` : `Save ${job.title}`}
          aria-pressed={isSaved}
        >
          <Bookmark size={15} fill={isSaved ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="card-badges">
        <span className="badge badge-loc">
          <MapPin size={11} aria-hidden="true" />
          {job.location}
        </span>
        <span
          className="badge"
          style={{ background: typeStyle.bg, color: typeStyle.color }}
        >
          {job.type}
        </span>
        <span className="badge badge-salary">{job.salary}</span>
      </div>

      <div className="card-tags">
        {job.tags.map(tag => (
          <span key={tag} className="tag">{hlText(tag)}</span>
        ))}
      </div>

      <div className="card-footer">
        <span className="posted"><Clock size={11} aria-hidden="true" /> {timeAgo(job.posted)}</span>
      </div>
    </article>
  );
}
