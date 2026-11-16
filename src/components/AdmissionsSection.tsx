import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, MapPin, Phone, Mail } from 'lucide-react';
import { ADMISSIONS_TIMELINE, PROGRAMMES } from '../data/collegeData';

interface AdmissionsSectionProps {
  preselectedProgramme: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  programme?: string;
}

export function AdmissionsSection({
  preselectedProgramme,
}: AdmissionsSectionProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [programme, setProgramme] = useState(
    preselectedProgramme || `${PROGRAMMES[0].degree} ${PROGRAMMES[0].title}`
  );
  const [inquiryType, setInquiryType] = useState<
    'Admission Application' | 'Campus Visit & Tour' | 'Scholarship Assessment'
  >('Admission Application');
  const [notes, setNotes] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProgramme) {
      setProgramme(preselectedProgramme);
      setSubmittedRef(null);
    }
  }, [preselectedProgramme]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (fullName.trim().length < 3) {
      nextErrors.fullName = 'Please enter the applicant’s full name (min. 3 characters).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      nextErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    if (!programme) {
      nextErrors.programme = 'Please select a degree programme.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const code = `KC-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedRef(code);
  };

  const handleReset = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setNotes('');
    setErrors({});
    setSubmittedRef(null);
  };

  return (
    <section
      id="admissions"
      className="py-16 lg:py-24 border-b border-stone-200 bg-[#F2EFE9]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Admissions Timeline & Campus Contact */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium tracking-widest uppercase text-[#9A3412] mb-2">
              Admissions 2026–27 · TNEA Code 2722
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#1A1816] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
              Admissions timeline and Kuniamuthur campus desk
            </h2>
            <p className="mt-3 text-base text-[#44403C] leading-relaxed">
              Admissions are conducted transparently via Tamil Nadu Engineering
              Admissions (TNEA), TANCET, and institutional merit counselling.
              Merit scholarships covering up to 100% of tuition are awarded
              based on 10+2 aggregate scores.
            </p>

            {/* 4-Step Editorial Timeline */}
            <div className="mt-8 divide-y divide-stone-300/80 border-t border-b border-stone-300/80">
              {ADMISSIONS_TIMELINE.map((item) => (
                <div key={item.step} className="py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-base font-semibold text-[#1A1816]">
                      {item.step}
                    </h3>
                    <span className="font-mono text-xs text-[#9A3412]">
                      {item.window}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm text-[#44403C] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Coimbatore Campus Office Block */}
            <div id="contact" className="mt-8 pt-6 space-y-3 text-sm text-[#44403C]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#57534E]">
                Coimbatore Admissions & Administrative Office
              </h3>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1B365D] mt-0.5 shrink-0" aria-hidden="true" />
                <span>
                  Krishna College Campus, Palakkad Main Road, Kuniamuthur,
                  Coimbatore, Tamil Nadu 641008
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1B365D] shrink-0" aria-hidden="true" />
                <span className="font-mono tabular-nums">
                  +91 422 267 8001 · +91 422 267 8002
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1B365D] shrink-0" aria-hidden="true" />
                <span>admissions@krishnacollege.ac.in</span>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Application & Campus Tour Form */}
          <div className="lg:col-span-6 bg-white border border-stone-200 rounded-lg p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-6" role="status" aria-live="polite">
                <div className="flex items-center gap-3 text-[#14532D] mb-4">
                  <CheckCircle2 className="w-6 h-6 shrink-0" aria-hidden="true" />
                  <h3 className="font-serif text-2xl font-semibold text-[#1A1816]">
                    Inquiry dossier recorded
                  </h3>
                </div>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1A1816]">{fullName}</span>. Your{' '}
                  <span className="font-medium text-[#1A1816]">{inquiryType.toLowerCase()}</span>{' '}
                  request for <span className="font-medium text-[#1A1816]">{programme}</span>{' '}
                  has been logged with the Kuniamuthur Admissions Office.
                </p>

                <dl className="mt-6 divide-y divide-stone-200 border-t border-b border-stone-200 text-sm">
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Reference Number</dt>
                    <dd className="font-mono font-semibold text-[#1B365D]">{submittedRef}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Confirmation Sent To</dt>
                    <dd className="text-[#1A1816]">{email}</dd>
                  </div>
                  <div className="py-3 flex justify-between gap-4">
                    <dt className="text-[#57534E]">Expected Response</dt>
                    <dd className="text-[#1A1816]">Within 1 working day (Mon–Sat)</dd>
                  </div>
                </dl>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 min-h-[42px] text-sm font-medium border border-stone-300 text-[#1A1816] rounded-md hover:bg-stone-100 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-serif text-2xl font-semibold text-[#1A1816]">
                  Request Admissions Counselling or Campus Visit
                </h3>
                <p className="mt-1.5 text-sm text-[#57534E]">
                  Connect directly with our Coimbatore faculty advisors or schedule a guided laboratory tour.
                </p>

                {/* Inquiry Type Segmented Control */}
                <div className="mt-6">
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#57534E] mb-2">
                    Purpose of Inquiry
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 p-1 bg-[#F2EFE9] rounded-lg">
                    {(
                      [
                        'Admission Application',
                        'Campus Visit & Tour',
                        'Scholarship Assessment',
                      ] as const
                    ).map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`px-3 py-2 min-h-[38px] text-xs font-medium rounded-md transition-colors cursor-pointer ${
                          inquiryType === type
                            ? 'bg-white text-[#1A1816] shadow-xs'
                            : 'text-[#57534E] hover:text-[#1A1816]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="applicant-name"
                      className="block text-sm font-medium text-[#1A1816] mb-1.5"
                    >
                      Applicant Full Name
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g., Aravindhan Balasubramanian"
                      className="w-full px-3.5 py-2.5 min-h-[42px] text-sm bg-white border border-stone-300 rounded-md text-[#1A1816] placeholder:text-[#78716C] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#9A3412]" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="applicant-email"
                        className="block text-sm font-medium text-[#1A1816] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="applicant-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 min-h-[42px] text-sm bg-white border border-stone-300 rounded-md text-[#1A1816] placeholder:text-[#78716C] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-[#9A3412]" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="applicant-phone"
                        className="block text-sm font-medium text-[#1A1816] mb-1.5"
                      >
                        Mobile Number (+91)
                      </label>
                      <input
                        id="applicant-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="98422 00000"
                        className="w-full px-3.5 py-2.5 min-h-[42px] text-sm font-mono tabular-nums bg-white border border-stone-300 rounded-md text-[#1A1816] placeholder:text-[#78716C] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-[#9A3412]" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-programme"
                      className="block text-sm font-medium text-[#1A1816] mb-1.5"
                    >
                      Preferred Degree Programme
                    </label>
                    <select
                      id="applicant-programme"
                      value={programme}
                      onChange={(e) => setProgramme(e.target.value)}
                      className="w-full px-3.5 py-2.5 min-h-[42px] text-sm bg-white border border-stone-300 rounded-md text-[#1A1816] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
                    >
                      {PROGRAMMES.map((p) => {
                        const label = `${p.degree} ${p.title}`;
                        return (
                          <option key={p.id} value={label}>
                            {label} ({p.duration})
                          </option>
                        );
                      })}
                    </select>
                    {errors.programme && (
                      <p className="mt-1 text-xs text-[#9A3412]" role="alert">
                        {errors.programme}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-notes"
                      className="block text-sm font-medium text-[#1A1816] mb-1.5"
                    >
                      Academic Background or Questions (Optional)
                    </label>
                    <textarea
                      id="applicant-notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="12th Board / TNEA cutoff score, hostel requirements, or preferred campus visit date..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-stone-300 rounded-md text-[#1A1816] placeholder:text-[#78716C] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D]"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full py-3 px-6 min-h-[44px] text-sm font-medium bg-[#1B365D] text-[#FAF8F4] rounded-md hover:bg-[#142947] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B365D] cursor-pointer"
                  >
                    Submit Admissions Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
