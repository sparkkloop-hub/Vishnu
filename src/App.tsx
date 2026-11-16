import { useState } from 'react';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { CampusSection } from './components/CampusSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PlacementsSection } from './components/PlacementsSection';
import { ProgrammeModal } from './components/ProgrammeModal';
import { ProspectusModal } from './components/ProspectusModal';
import { Programme } from './data/collegeData';

export default function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [prospectusOpen, setProspectusOpen] = useState(false);
  const [inquiryProgramme, setInquiryProgramme] = useState('');

  const scrollToSection = (id: string, focusInputId?: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      if (focusInputId) {
        window.setTimeout(() => {
          const input = document.getElementById(focusInputId);
          if (input instanceof HTMLElement) {
            input.focus({ preventScroll: true });
          }
        }, 450);
      }
    }
  };

  const handleInquireForProgramme = (programmeTitle: string) => {
    setInquiryProgramme(programmeTitle);
    setSelectedProgramme(null);
    scrollToSection('admissions', 'applicant-name');
  };

  const handleProceedFromProspectus = () => {
    setProspectusOpen(false);
    scrollToSection('admissions', 'applicant-name');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F4] text-[#1A1816]">
      <Header
        onApplyClick={() => scrollToSection('admissions', 'applicant-name')}
      />

      <main className="flex-1">
        <HeroSection
          onExploreProgrammes={() => scrollToSection('academics')}
          onOpenProspectus={() => setProspectusOpen(true)}
        />

        <AcademicsSection
          onSelectProgramme={(programme) => setSelectedProgramme(programme)}
        />

        <CampusSection />

        <PlacementsSection />

        <AdmissionsSection preselectedProgramme={inquiryProgramme} />
      </main>

      <Footer onOpenProspectus={() => setProspectusOpen(true)} />

      <ProgrammeModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
        onInquire={handleInquireForProgramme}
      />

      <ProspectusModal
        isOpen={prospectusOpen}
        onClose={() => setProspectusOpen(false)}
        onProceedToApply={handleProceedFromProspectus}
      />
    </div>
  );
}
