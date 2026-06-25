import { ArrowDownAZ, Bookmark } from "lucide-react";
import { LOCATIONS, JOB_TYPES } from "../data/jobs";

export default function FilterBar({ location, setLocation, type, setType, sortAZ, setSortAZ, showSavedOnly, setShowSavedOnly, savedCount }) {
  return (
    <div className="filter-bar">
      <select value={location} onChange={e => setLocation(e.target.value)} aria-label="Filter by location">
        <option value="">All locations</option>
        {LOCATIONS.map(l => <option key={l}>{l}</option>)}
      </select>

      <select value={type} onChange={e => setType(e.target.value)} aria-label="Filter by job type">
        <option value="">All types</option>
        {JOB_TYPES.map(t => <option key={t}>{t}</option>)}
      </select>

      <button
        className={`filter-btn${sortAZ ? " active" : ""}`}
        onClick={() => setSortAZ(v => !v)}
        aria-pressed={sortAZ}
      >
        <ArrowDownAZ size={14} aria-hidden="true" /> A–Z
      </button>

      <button
        className={`filter-btn${showSavedOnly ? " active" : ""}`}
        onClick={() => setShowSavedOnly(v => !v)}
        aria-pressed={showSavedOnly}
      >
        <Bookmark size={14} aria-hidden="true" />
        Saved{savedCount > 0 ? ` (${savedCount})` : ""}
      </button>
    </div>
  );
}
