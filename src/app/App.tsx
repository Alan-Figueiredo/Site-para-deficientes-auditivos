import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { JobListings } from './components/JobListings';
import { ResumeGuide } from './components/ResumeGuide';
import { InterviewTips } from './components/InterviewTips';
import { WorkRights } from './components/WorkRights';
import { CompanyShowcase } from './components/CompanyShowcase';
import { LibrasVideoLibrary } from './components/LibrasVideoLibrary';
import { FloatingLibrasButton } from './components/FloatingLibrasButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <JobListings />
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