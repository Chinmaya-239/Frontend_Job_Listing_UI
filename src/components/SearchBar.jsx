import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrap">
      <Search size={15} className="search-icon" aria-hidden="true" />
      <input
        type="text"
        className="search-input"
        placeholder="Search titles, companies, skills…"
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-label="Search jobs"
      />
      {value && (
        <button className="search-clear" onClick={() => onChange("")} aria-label="Clear search">
          <X size={14} />
        </button>
      )}
    </div>
  );
}
