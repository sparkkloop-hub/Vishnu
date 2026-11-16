import { ArrowRight, BookOpen } from 'lucide-react';
import { CAMPUS_IMAGES } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onExploreProgrammes: () => void;
  onOpenProspectus: () => void;
}

const KEY_METRICS = [
  {
    value: '96.4%',
    label: 'Placement Record',
    context: '2025–26 graduating cohort',
  },
  {
    value: '42 Acres',
    label: 'Kuniamuthur Campus',
    context: 'Western Ghats foothills, Coimbatore',
  },
  {
    value: '₹44.0 LPA',
    label: 'Highest Annual Offer',
    context: 'Median package ₹7.2 LPA',
  },
  {
    value: '148+',
    label: 'Recruiting Partners',
    context: 'Software, VLSI, manufacturing & finance',
  },
];

export function HeroSection({
  onExploreProgrammes,
  onOpenProspectus,
}: HeroSectionProps) {
  return (
    <section id="top" className="border-b border-stone-200 bg-[#FAF8F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* Two-column split with balanced stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center py-2">
            {/* Clean unboxed institutional trust line */}
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#57534E] mb-4">
              Kuniamuthur, Coimbatore
              <span aria-hidden="true" className="mx-2 text-stone-400">·</span>
              Autonomous
              <span aria-hidden="true" className="mx-2 text-stone-400">·</span>
              NAAC A+ Accredited
              <span aria-hidden="true" className="mx-2 text-stone-400">·</span>
              Est. 1998
            </p>

            <h1
              className="font-serif font-semibold text-[#1A1816] tracking-tight leading-[1.12] mb-6"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
                textWrap: 'balance',
              }}
            >
              Engineering rigour and liberal scholarship in Coimbatore.
            </h1>

            <p className="text-base sm:text-lg text-[#44403C] leading-relaxed max-w-xl mb-8">
              Set along Palakkad Main Road at the foot of the Western Ghats,
              Krishna College prepares undergraduate and postgraduate scholars across
              computing, semiconductor systems, precision manufacturing, and commerce.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={onExploreProgrammes}
                className="inline-flex items-center gap-2.5 px-6 py-3 min-h-[44px] text-sm font-medium bg-[#1B365D] text-[#FAF8F4] rounded-md hover:bg-[#142947] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D] cursor-pointer"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenProspectus}
                className="inline-flex items-center gap-2 px-3 py-2.5 min-h-[44px] text-sm font-medium text-[#1B365D] hover:text-[#9A3412] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D] cursor-pointer"
              >
                <BookOpen className="w-4 h-4" aria-hidden="true" />
                <span className="bg-[#1726da]">View 2026–27 Prospectus</span>
              </button>
            </div>
          </div>

          {/* Dominant Architectural Hero Image */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 overflow-hidden rounded-lg border border-stone-200 bg-[#EBE6DF] min-h-[280px] lg:min-h-[420px]">
              <ResilientImage
                src={CAMPUS_IMAGES.hero}
                alt="Aerial view of Krishna College Coimbatore academic blocks with terracotta gabled roofs and central courtyard lawn"
                fallbackTitle="Krishna College Main Campus, Coimbatore"
                className="w-full h-full lg:h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-width 4-column Institutional KPI Strip below hero split */}
        <div className="mt-12 pt-8 border-t border-stone-200 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className={`${
                idx !== 0 ? 'lg:border-l lg:border-stone-200 lg:pl-8' : ''
              }`}
            >
              <div className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#1A1816] tracking-tight">
                {metric.value}
              </div>
              <div className="mt-1 text-sm font-semibold text-[#1A1816]">
                {metric.label}
              </div>
              <div className="mt-0.5 text-xs text-[#57534E]">
                {metric.context}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Operational Utility Ribbon */}
      <div className="bg-[#F2EFE9] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 text-xs text-[#44403C]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="font-semibold text-[#9A3412]">Admissions 2026–27 Open</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span className="font-mono tabular-nums">TNEA Counselling Code: 2722</span>
            <span aria-hidden="true" className="text-stone-400">·</span>
            <span>Campus Visits: Mon–Sat, 09:00–17:00 IST</span>
          </div>
          <div className="text-[#57534E]">
            Palakkad Main Road, Kuniamuthur, Coimbatore 641008
          </div>
        </div>
      </div>
    </section>
  );
}
