import { useState } from 'react';
import {
  PLACEMENT_CYCLES,
  RECRUITER_NAMES,
  TESTIMONIALS,
} from '../data/collegeData';

export function PlacementsSection() {
  const [selectedYear, setSelectedYear] = useState<
    '2025–26' | '2024–25' | '2023–24'
  >('2025–26');

  const activeCycle =
    PLACEMENT_CYCLES.find((c) => c.year === selectedYear) ?? PLACEMENT_CYCLES[0];

  return (
    <section
      id="placements"
      className="py-16 lg:py-24 border-b border-stone-200 bg-[#FAF8F4]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header + Academic Cycle Selector */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-stone-200">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest uppercase text-[#9A3412] mb-2">
              Career Outcomes & Industry Partnerships
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1816] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Verified placement records across three graduating cohorts
            </h2>
            <p className="mt-3 text-base text-[#44403C] leading-relaxed">
              Department-wise full-time engineering, analytics, and management
              offers audited by the Centre for Training & Corporate Relations.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Select placement academic cycle"
            className="flex items-center gap-1 p-1 bg-[#EBE6DF] rounded-lg w-fit shrink-0"
          >
            {PLACEMENT_CYCLES.map((cycle) => {
              const isActive = cycle.year === selectedYear;
              return (
                <button
                  key={cycle.year}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setSelectedYear(cycle.year)}
                  className={`px-3.5 py-2 min-h-[40px] font-mono text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-white text-[#1A1816] shadow-xs'
                      : 'text-[#57534E] hover:text-[#1A1816]'
                  }`}
                >
                  {cycle.year}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cycle Summary Metrics */}
        <div className="py-8 grid grid-cols-2 lg:grid-cols-4 gap-6 border-b border-stone-200">
          <div>
            <div className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#1A1816]">
              {activeCycle.overallRate}
            </div>
            <div className="mt-1 text-xs font-medium text-[#57534E]">
              Overall Placement Rate ({activeCycle.year})
            </div>
          </div>
          <div>
            <div className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#1A1816]">
              {activeCycle.totalOffers.toLocaleString('en-IN')}
            </div>
            <div className="mt-1 text-xs font-medium text-[#57534E]">
              Full-Time Offers Issued
            </div>
          </div>
          <div>
            <div className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#1A1816]">
              {activeCycle.medianPackage}
            </div>
            <div className="mt-1 text-xs font-medium text-[#57534E]">
              Median Annual Package
            </div>
          </div>
          <div>
            <div className="font-mono tabular-nums text-2xl sm:text-3xl font-medium text-[#1B365D]">
              {activeCycle.highestPackage}
            </div>
            <div className="mt-1 text-xs font-medium text-[#57534E]">
              Highest Annual Package ({activeCycle.recruitingPartners} Recruiters)
            </div>
          </div>
        </div>

        {/* Tabular Placement Breakdown */}
        <div className="mt-8 overflow-x-auto bg-white border border-stone-200 rounded-lg">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-stone-200 bg-[#FAF8F4] text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                <th scope="col" className="py-3.5 px-5">Department / School</th>
                <th scope="col" className="py-3.5 px-4 text-right">Eligible</th>
                <th scope="col" className="py-3.5 px-4 text-right">Placed</th>
                <th scope="col" className="py-3.5 px-4 text-right">Placement %</th>
                <th scope="col" className="py-3.5 px-4 text-right">Median CTC</th>
                <th scope="col" className="py-3.5 px-5 text-right">Highest CTC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200 text-sm">
              {activeCycle.records.map((row) => (
                <tr
                  key={row.department}
                  className="hover:bg-[#FAF8F4]/70 transition-colors"
                >
                  <td className="py-4 px-5 font-medium text-[#1A1816]">
                    {row.department}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums text-[#57534E]">
                    {row.eligible}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums text-[#1A1816]">
                    {row.placed}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums font-medium text-[#1B365D]">
                    {row.rate}
                  </td>
                  <td className="py-4 px-4 text-right font-mono tabular-nums text-[#1A1816]">
                    {row.medianCtc}
                  </td>
                  <td className="py-4 px-5 text-right font-mono tabular-nums font-semibold text-[#1A1816]">
                    {row.highestCtc}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Major Recruiting Partners (Unboxed Editorial Line) */}
        <div className="mt-8 pt-6 border-t border-stone-200">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2">
            Principal Campus Recruiters
          </p>
          <p className="text-sm text-[#44403C] leading-relaxed">
            {RECRUITER_NAMES.map((name, index) => (
              <span key={name}>
                <span className="font-medium text-[#1A1816]">{name}</span>
                {index < RECRUITER_NAMES.length - 1 && (
                  <span aria-hidden="true" className="mx-2.5 text-stone-400">
                    ·
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Attributable Voices (Top/bottom hairline rules, zero thick left borders) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {TESTIMONIALS.map((item) => (
            <figure
              key={item.id}
              className="py-7 border-t border-b border-stone-300 flex flex-col justify-between"
            >
              <blockquote className="font-serif italic text-lg sm:text-xl text-[#1A1816] leading-relaxed">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 pt-4 border-t border-stone-200/70">
                <div className="text-sm font-semibold text-[#1A1816]">
                  {item.name}
                </div>
                <div className="text-xs text-[#57534E] mt-0.5">
                  {item.role} · {item.organization}
                </div>
                <div className="text-xs font-medium text-[#1B365D] mt-1.5">
                  {item.outcome}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
