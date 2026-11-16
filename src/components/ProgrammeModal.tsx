import { useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Programme } from '../data/collegeData';

interface ProgrammeModalProps {
  programme: Programme | null;
  onClose: () => void;
  onInquire: (programmeTitle: string) => void;
}

export function ProgrammeModal({
  programme,
  onClose,
  onInquire,
}: ProgrammeModalProps) {
  useEffect(() => {
    if (!programme) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [programme, onClose]);

  if (!programme) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="programme-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1816]/60 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F4] border border-stone-300 rounded-lg shadow-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-stone-200">
          <div>
            <p className="text-xs font-medium tracking-wider uppercase text-[#9A3412]">
              {programme.category}
              <span aria-hidden="true" className="mx-2 text-stone-400">·</span>
              <span className="font-mono">{programme.code}</span>
            </p>
            <h3
              id="programme-modal-title"
              className="mt-1.5 font-serif text-2xl sm:text-3xl font-semibold text-[#1A1816]"
            >
              {programme.degree} {programme.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close programme details"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#57534E] hover:text-[#1A1816] hover:bg-stone-200/70 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-5 text-sm sm:text-base text-[#44403C] leading-relaxed">
          {programme.overview}
        </p>

        {/* Accession-style Definition List */}
        <dl className="mt-6 divide-y divide-stone-200 border-t border-b border-stone-200 text-sm">
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
            <dt className="font-medium text-[#57534E]">Duration & Intake</dt>
            <dd className="sm:col-span-2 font-mono tabular-nums text-[#1A1816]">
              {programme.duration} · {programme.intake} Seats
            </dd>
          </div>
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
            <dt className="font-medium text-[#57534E]">Eligibility</dt>
            <dd className="sm:col-span-2 text-[#1A1816]">{programme.eligibility}</dd>
          </div>
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
            <dt className="font-medium text-[#57534E]">Department Chair</dt>
            <dd className="sm:col-span-2 text-[#1A1816]">{programme.departmentChair}</dd>
          </div>
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
            <dt className="font-medium text-[#57534E]">Accreditation</dt>
            <dd className="sm:col-span-2 text-[#1A1816]">{programme.accreditation}</dd>
          </div>
          <div className="py-3 grid grid-cols-1 sm:grid-cols-3 gap-1">
            <dt className="font-medium text-[#57534E]">Median Graduate CTC</dt>
            <dd className="sm:col-span-2 font-mono tabular-nums font-semibold text-[#1B365D]">
              {programme.medianCtc}
            </dd>
          </div>
        </dl>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2.5">
              Core Curriculum Pillars
            </h4>
            <ul className="space-y-2 text-sm text-[#1A1816]">
              {programme.coreModules.map((mod) => (
                <li key={mod} className="pb-2 border-b border-stone-200/70 last:border-b-0">
                  {mod}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2.5">
              Dedicated Laboratories
            </h4>
            <ul className="space-y-2 text-sm text-[#1A1816]">
              {programme.laboratories.map((lab) => (
                <li key={lab} className="pb-2 border-b border-stone-200/70 last:border-b-0">
                  {lab}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 min-h-[40px] text-sm font-medium text-[#44403C] hover:text-[#1A1816] cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => onInquire(`${programme.degree} ${programme.title}`)}
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] text-sm font-medium bg-[#1B365D] text-[#FAF8F4] rounded-md hover:bg-[#142947] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Inquire for This Programme</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
