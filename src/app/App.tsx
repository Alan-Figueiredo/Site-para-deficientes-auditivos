import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
//import { JobListings } from './components/JobListings';
import { JobListings } from './components/JobDetailsListings';
import { ResumeGuide } from './components/ResumeGuide';
import { InterviewTips } from './components/InterviewTips';
import { WorkRights } from './components/WorkRights';
import { CompanyShowcase } from './components/CompanyShowcase';
import { LibrasVideoLibrary } from './components/LibrasVideoLibrary';
import { FloatingLibrasButton } from './components/FloatingLibrasButton';
import { Footer } from './components/Footer';
import type { SearchFilters } from './components/JobSearchModal';

export default function App() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters | null>(null);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const handleClearFilters = () => {
    setSearchFilters(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero onSearch={handleSearch} />
        <JobListings searchFilters={searchFilters} onClearFilters={handleClearFilters} />
        <ResumeGuide />
        <InterviewTips />
        <WorkRights />
        <LibrasVideoLibrary />
        <CompanyShowcase />
      </main>
      <Footer />
      <FloatingLibrasButton />
    </div>
  );
}