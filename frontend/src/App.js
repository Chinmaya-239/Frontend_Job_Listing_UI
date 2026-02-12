import React, { useState, useMemo } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { mockJobs } from "./data/mockJobs";
import { SearchHero } from "./components/SearchHero";
import { Filters } from "./components/Filters";
import { JobCard } from "./components/JobCard";
import { JobDetailModal } from "./components/JobDetailModal";
import { NoResults } from "./components/NoResults";

const JobBoard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [sortAZ, setSortAZ] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filteredJobs = useMemo(() => {
    let result = [...mockJobs];

    // Filter by search query (title)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter((job) =>
        job.title.toLowerCase().includes(query)
      );
    }

    // Filter by location
    if (locationFilter !== "All Locations") {
      result = result.filter((job) => job.location === locationFilter);
    }

    // Filter by job type
    if (typeFilter !== "All Types") {
      result = result.filter((job) => job.type === typeFilter);
    }

    // Sort alphabetically by title
    if (sortAZ) {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, locationFilter, typeFilter, sortAZ]);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelectedJob(null), 200);
  };

  const handleReset = () => {
    setSearchQuery("");
    setLocationFilter("All Locations");
    setTypeFilter("All Types");
    setSortAZ(false);
  };

  return (
    <main data-testid="job-board" className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SearchHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        
        <Filters
          locationFilter={locationFilter}
          setLocationFilter={setLocationFilter}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          sortAZ={sortAZ}
          setSortAZ={setSortAZ}
          totalJobs={mockJobs.length}
          filteredCount={filteredJobs.length}
        />

        {filteredJobs.length > 0 ? (
          <section 
            data-testid="job-list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-24"
          >
            {filteredJobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
                searchQuery={searchQuery}
                onClick={handleJobClick}
              />
            ))}
          </section>
        ) : (
          <NoResults searchQuery={searchQuery} onReset={handleReset} />
        )}
      </div>

      <JobDetailModal
        job={selectedJob}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JobBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
