import { useState, useMemo } from "react";
import { JOBS } from "../data/jobs";

export function useJobs() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [sortAZ, setSortAZ] = useState(false);
  const [saved, setSaved] = useState(new Set());
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let jobs = JOBS.filter(j => {
      if (q && !j.title.toLowerCase().includes(q) && !j.company.toLowerCase().includes(q) && !j.tags.some(t => t.toLowerCase().includes(q))) return false;
      if (location && j.location !== location) return false;
      if (type && j.type !== type) return false;
      if (showSavedOnly && !saved.has(j.id)) return false;
      return true;
    });
    if (sortAZ) jobs = [...jobs].sort((a, b) => a.title.localeCompare(b.title));
    return jobs;
  }, [query, location, type, sortAZ, saved, showSavedOnly]);

  const selectedJob = useMemo(
    () => JOBS.find(j => j.id === selectedId) ?? filtered[0] ?? null,
    [selectedId, filtered]
  );

  function toggleSave(id, e) {
    e?.stopPropagation();
    setSaved(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function clearFilters() {
    setQuery("");
    setLocation("");
    setType("");
    setShowSavedOnly(false);
  }

  const activeFilters = [
    query && { label: `"${query}"`, clear: () => setQuery("") },
    location && { label: location, clear: () => setLocation("") },
    type && { label: type, clear: () => setType("") },
    showSavedOnly && { label: "Saved", clear: () => setShowSavedOnly(false) },
  ].filter(Boolean);

  return {
    query, setQuery,
    location, setLocation,
    type, setType,
    sortAZ, setSortAZ,
    saved, toggleSave,
    showSavedOnly, setShowSavedOnly,
    selectedJob, setSelectedId,
    filtered,
    activeFilters,
    clearFilters,
  };
}
