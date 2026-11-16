import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Krishna College, Coimbatore',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EBE6DF] via-[#F2EFE9] to-[#E2DDD3] text-[#57534E] p-8 text-center ${className}`}
      >
        <Building2 className="w-8 h-8 text-[#1B365D] mb-3 opacity-75" aria-hidden="true" />
        <p className="font-serif text-base font-medium text-[#1A1816]">{fallbackTitle}</p>
        <p className="text-xs text-[#57534E] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
