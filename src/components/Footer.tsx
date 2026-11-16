interface FooterProps {
  onOpenProspectus: () => void;
}

export function Footer({ onOpenProspectus }: FooterProps) {
  return (
    <footer className="bg-[#FAF8F4] text-[#44403C] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-stone-200">
          <div className="md:col-span-5">
            <a
              href="#top"
              className="font-serif text-xl font-semibold text-[#1A1816] tracking-tight"
            >
              Krishna College
            </a>
            <p className="mt-3 text-sm leading-relaxed max-w-sm text-[#57534E]">
              An autonomous collegiate institution in Coimbatore dedicated to
              engineering, sciences, and management scholarship since 1998.
            </p>
            <p className="mt-3 text-xs text-[#57534E]">
              Palakkad Main Road, Kuniamuthur, Coimbatore 641008, Tamil Nadu
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A1816] mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#academics" className="hover:text-[#1B365D] transition-colors">
                  Academic Programmes
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-[#1B365D] transition-colors">
                  Campus & Laboratories
                </a>
              </li>
              <li>
                <a href="#placements" className="hover:text-[#1B365D] transition-colors">
                  Placement Outcomes
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-[#1B365D] transition-colors">
                  Admissions 2026–27
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A1816] mb-3">
              Institutional Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={onOpenProspectus}
                  className="hover:text-[#1B365D] transition-colors cursor-pointer text-left"
                >
                  2026–27 Fee & Scholarship Prospectus
                </button>
              </li>
              <li className="text-[#57534E]">
                TNEA Counselling Code: <span className="font-mono text-[#1A1816]">2722</span>
              </li>
              <li className="text-[#57534E]">
                Affiliated to Anna University & Bharathiar University
              </li>
              <li className="text-[#57534E]">
                Statutory Cells: IQAC · Anti-Ragging · Grievance Redressal
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#57534E]">
          <p>© {new Date().getFullYear()} Krishna College, Coimbatore. All rights reserved.</p>
          <p>Autonomous · NAAC A+ Accredited · Approved by AICTE & UGC</p>
        </div>
      </div>
    </footer>
  );
}
