import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToApply: () => void;
}

export function ProspectusModal({
  isOpen,
  onClose,
  onProceedToApply,
}: ProspectusModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="prospectus-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1A1816]/60 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#FAF8F4] border border-stone-300 rounded-lg shadow-xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-stone-200">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#9A3412]">
              Academic Prospectus · 2026–27
            </p>
            <h3
              id="prospectus-title"
              className="mt-1.5 font-serif text-2xl sm:text-3xl font-semibold text-[#1A1816]"
            >
              Tuition, Scholarships & Residential Life
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close prospectus"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#57534E] hover:text-[#1A1816] hover:bg-stone-200/70 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-6 text-sm text-[#44403C]">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-3">
              Annual Tuition Framework (Government & Management Quota)
            </h4>
            <dl className="divide-y divide-stone-200 border-t border-b border-stone-200">
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-medium text-[#1A1816]">B.E. / B.Tech. Programmes</dt>
                <dd className="font-mono tabular-nums text-[#1A1816]">₹55,000 – ₹95,000 / year</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-medium text-[#1A1816]">B.Sc. / B.Com. / B.A. Programmes</dt>
                <dd className="font-mono tabular-nums text-[#1A1816]">₹48,000 – ₹64,000 / year</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-medium text-[#1A1816]">M.B.A. Global Business & Operations</dt>
                <dd className="font-mono tabular-nums text-[#1A1816]">₹1,15,000 / year</dd>
              </div>
              <div className="py-3 flex justify-between gap-4">
                <dt className="font-medium text-[#1A1816]">Residential Hostel & Dining</dt>
                <dd className="font-mono tabular-nums text-[#1A1816]">₹78,000 / academic year</dd>
              </div>
            </dl>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2">
              Merit & Need-Based Scholarships
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li>
                <span className="font-semibold text-[#1A1816]">100% Tuition Waiver:</span>{' '}
                TNEA cutoff ≥ 195/200 or State Board rank holders.
              </li>
              <li>
                <span className="font-semibold text-[#1A1816]">50% Tuition Waiver:</span>{' '}
                TNEA cutoff 185–194.9 or First-Graduate Tamil Nadu scheme applicants.
              </li>
              <li>
                <span className="font-semibold text-[#1A1816]">Sports & Cultural Fellowships:</span>{' '}
                National and State-level collegiate representatives receive full hostel & fee support.
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2">
              Coimbatore & Regional Bus Connectivity
            </h4>
            <p className="leading-relaxed">
              48 college buses connect Kuniamuthur Campus daily with Gandhipuram,
              RS Puram, Peelamedu, Saravanampatti, Singanallur, Pollachi, Tiruppur,
              Mettupalayam, and Palakkad.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2.5 min-h-[40px] text-sm font-medium text-[#44403C] hover:text-[#1A1816] cursor-pointer"
          >
            Close
          </button>
          <button
            type="button"
            onClick={onProceedToApply}
            className="px-5 py-2.5 min-h-[42px] text-sm font-medium bg-[#1B365D] text-[#FAF8F4] rounded-md hover:bg-[#142947] transition-colors cursor-pointer"
          >
            Proceed to Admissions Inquiry
          </button>
        </div>
      </div>
    </div>
  );
}
