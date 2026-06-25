import { X } from "lucide-react";

export default function ActiveFilters({ filters, onClearAll }) {
  if (!filters.length) return null;
  return (
    <div className="active-filters">
      {filters.map((f, i) => (
        <span key={i} className="chip">
          {f.label}
          <button onClick={f.clear} aria-label={`Remove ${f.label} filter`}>
            <X size={11} />
          </button>
        </span>
      ))}
      {filters.length > 1 && (
        <button className="clear-all" onClick={onClearAll}>Clear all</button>
      )}
    </div>
  );
}
