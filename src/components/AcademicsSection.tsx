import { useMemo, useState } from 'react';
import { ArrowUpRight, Search, X } from 'lucide-react';
import {
  PROGRAMMES,
  Programme,
  ProgrammeCategory,
} from '../data/collegeData';

interface AcademicsSectionProps {
  onSelectProgramme: (programme: Programme) => void;
}

const CATEGORIES: Array<'All Programmes' | ProgrammeCategory> = [
  'All Programmes',
  'Engineering & Computing',
  'Arts & Sciences',
  'Management & Commerce',
];

export function AcademicsSection({ onSelectProgramme }: AcademicsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    'All Programmes' | ProgrammeCategory
  >('All Programmes');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProgrammes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return PROGRAMMES.filter((prog) => {
      const matchesCategory =
        selectedCategory === 'All Programmes' ||
        prog.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      return (
        prog.title.toLowerCase().includes(query) ||
        prog.degree.toLowerCase().includes(query) ||
        prog.category.toLowerCase().includes(query) ||
        prog.coreModules.some((m) => m.toLowerCase().includes(query))
      );
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="academics"
      className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAF8F4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest uppercase text-[#9A3412] mb-2">
              Academic Catalogue · 2026–27
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1816] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Accredited undergraduate and postgraduate degrees
            </h2>
            <p className="mt-3 text-base text-[#44403C] leading-relaxed">
              Autonomous curricula revised annually with industry advisors from
              Coimbatore’s precision manufacturing and Bengaluru’s software hubs.
              Select any programme to inspect core courses, laboratories, and intake.
            </p>
          </div>

          {/* Search input */}
          <div className="w-full lg:w-72 shrink-0">
            <label htmlFor="programme-search" className="sr-only">
              Search degree programmes or subjects
            </label>
            <div className="relative">
              <Search
                className="w-4 h-4 text-[#57534E] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="programme-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by degree or topic..."
                className="w-full pl-10 pr-9 py-2.5 min-h-[42px] text-sm bg-white border border-stone-300 rounded-md text-[#1A1816] placeholder:text-[#78716C] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#57534E] hover:text-[#1A1816] cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Segmented Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter programmes by school"
          className="mt-6 flex flex-wrap items-center gap-1.5 p-1 bg-[#EBE6DF] rounded-lg w-fit"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 min-h-[40px] text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B365D] ${
                  isActive
                    ? 'bg-white text-[#1A1816] shadow-xs'
                    : 'text-[#57534E] hover:text-[#1A1816]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Programmes Grid / Editorial Index */}
        {filteredProgrammes.length === 0 ? (
          <div className="mt-10 py-14 px-6 text-center bg-white border border-stone-200 rounded-lg">
            <p className="font-serif text-lg font-medium text-[#1A1816]">
              No matching programmes found
            </p>
            <p className="mt-1 text-sm text-[#57534E]">
              Try clearing your filter or searching for another specialization such as VLSI, Data Science, or Commerce.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All Programmes');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-sm font-medium text-[#1B365D] border border-[#1B365D] rounded-md hover:bg-[#1B365D] hover:text-white transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProgrammes.map((programme) => (
              <button
                key={programme.id}
                type="button"
                onClick={() => onSelectProgramme(programme)}
                className="group text-left bg-white border border-stone-200 rounded-lg p-6 hover:border-[#1B365D]/60 transition-colors duration-150 flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D] cursor-pointer"
              >
                <div>
                  {/* Quiet unboxed metadata line (Zero-Pill Discipline) */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#57534E] mb-3">
                    <span>
                      {programme.degree}
                      <span aria-hidden="true" className="mx-1.5 text-stone-300">·</span>
                      {programme.duration}
                      <span aria-hidden="true" className="mx-1.5 text-stone-300">·</span>
                      <span className="font-mono tabular-nums">{programme.intake} Seats</span>
                    </span>
                    <span className="font-mono text-[11px] text-[#78716C]">
                      {programme.code}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-[#1A1816] group-hover:text-[#1B365D] transition-colors">
                    {programme.title}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#44403C] leading-relaxed">
                    {programme.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div className="text-xs text-[#57534E]">
                    <span>{programme.accreditation}</span>
                    <span aria-hidden="true" className="mx-1.5 text-stone-300">·</span>
                    <span className="font-mono tabular-nums text-[#1A1816] font-medium">
                      Median {programme.medianCtc}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B365D] whitespace-nowrap shrink-0">
                    <span>Curriculum</span>
                    <ArrowUpRight
                      className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
