import { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/collegeData';
import { ResilientImage } from './ResilientImage';

export function CampusSection() {
  const [activeId, setActiveId] = useState(CAMPUS_FACILITIES[0].id);

  const activeFacility =
    CAMPUS_FACILITIES.find((f) => f.id === activeId) ?? CAMPUS_FACILITIES[0];

  return (
    <section
      id="campus"
      className="py-16 lg:py-24 border-b border-stone-200 bg-[#F2EFE9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-xs font-medium tracking-widest uppercase text-[#9A3412] mb-2">
            Campus & Research Infrastructure
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1816] tracking-tight"
            style={{ textWrap: 'balance' }}
          >
            Built for quiet study, laboratory fabrication, and collegiate life
          </h2>
        </div>

        {/* Interactive Facility Selector Strip */}
        <div
          role="tablist"
          aria-label="Campus facilities"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10"
        >
          {CAMPUS_FACILITIES.map((facility) => {
            const isSelected = facility.id === activeFacility.id;
            return (
              <button
                key={facility.id}
                role="tab"
                type="button"
                aria-selected={isSelected}
                onClick={() => setActiveId(facility.id)}
                className={`text-left p-4 rounded-lg border transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#1B365D] ${
                  isSelected
                    ? 'bg-white border-[#1B365D] text-[#1A1816]'
                    : 'bg-[#FAF8F4]/70 border-stone-300/80 text-[#57534E] hover:bg-white hover:text-[#1A1816]'
                }`}
              >
                <span className="block font-mono text-xs text-[#9A3412] mb-1">
                  {facility.indexLabel}.
                </span>
                <span className="block font-serif text-base font-semibold leading-snug">
                  {facility.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric 2-Column Editorial Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch bg-white border border-stone-200 rounded-lg p-5 sm:p-8">
          <div className="lg:col-span-7 flex flex-col">
            <div className="overflow-hidden rounded-md border border-stone-200 bg-[#EBE6DF] aspect-[4/3]">
              <ResilientImage
                src={activeFacility.image}
                alt={activeFacility.imageAlt}
                fallbackTitle={activeFacility.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs font-serif italic text-[#57534E]">
              {activeFacility.caption}
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-[#57534E]">
                {activeFacility.indexLabel}. {activeFacility.subtitle}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1A1816]">
                {activeFacility.title}
              </h3>
              <p className="mt-4 text-sm sm:text-base text-[#44403C] leading-relaxed">
                {activeFacility.description}
              </p>
            </div>

            <dl className="mt-8 divide-y divide-stone-200 border-t border-b border-stone-200 text-sm">
              {activeFacility.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="py-3 flex items-baseline justify-between gap-4"
                >
                  <dt className="text-xs font-medium text-[#57534E] shrink-0">
                    {spec.label}
                  </dt>
                  <dd className="text-right font-medium text-[#1A1816] tabular-nums">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
