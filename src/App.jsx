import { Briefcase } from "lucide-react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import ActiveFilters from "./components/ActiveFilters";
import JobCard from "./components/JobCard";
import JobDetail from "./components/JobDetail";
import { useJobs } from "./hooks/useJobs";

export default function App() {
  const jobs = useJobs();

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-brand">
          <Briefcase size={20} aria-hidden="true" />
          <span>JobBoard</span>
        </div>
        <p className="header-sub">Find your next opportunity</p>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <div className="sidebar-controls">
            <SearchBar value={jobs.query} onChange={jobs.setQuery} />
            <FilterBar
              location={jobs.location} setLocation={jobs.setLocation}
              type={jobs.type} setType={jobs.setType}
              sortAZ={jobs.sortAZ} setSortAZ={jobs.setSortAZ}
              showSavedOnly={jobs.showSavedOnly} setShowSavedOnly={jobs.setShowSavedOnly}
              savedCount={jobs.saved.size}
            />
            <ActiveFilters filters={jobs.activeFilters} onClearAll={jobs.clearFilters} />
            <p className="results-count" aria-live="polite">
              {jobs.filtered.length === 1 ? "1 position" : `${jobs.filtered.length} positions`}
            </p>
          </div>

          <div className="job-list" role="list" aria-label="Job listings">
            {jobs.filtered.length === 0 ? (
              <div className="empty-state" role="status">
                <Briefcase size={32} strokeWidth={1.2} aria-hidden="true" />
                <p>No positions match your filters.</p>
                <button onClick={jobs.clearFilters}>Clear filters</button>
              </div>
            ) : (
              jobs.filtered.map(job => (
                <JobCard
                  key={job.id}
                  job={job}
                  query={jobs.query.trim()}
                  isSaved={jobs.saved.has(job.id)}
                  onSave={jobs.toggleSave}
                  isSelected={jobs.selectedJob?.id === job.id}
                  onClick={() => jobs.setSelectedId(job.id)}
                />
              ))
            )}
          </div>
        </aside>

        <main className="detail-pane" aria-label="Job details">
          <JobDetail
            job={jobs.selectedJob}
            isSaved={jobs.selectedJob ? jobs.saved.has(jobs.selectedJob.id) : false}
            onSave={jobs.toggleSave}
          />
        </main>
      </div>
    </div>
  );
}
