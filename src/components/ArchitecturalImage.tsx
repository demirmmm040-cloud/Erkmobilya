import { useState } from 'react';
import { Compass } from 'lucide-react';

interface ArchitecturalImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fallbackTitle?: string;
}

export function ArchitecturalImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  loading = 'lazy',
  fallbackTitle,
}: ArchitecturalImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full min-h-[220px] bg-gradient-to-br from-[#141414] via-[#1E1E1E] to-[#2B2B2B] flex flex-col items-center justify-center p-6 text-center text-white"
      >
        <Compass className="w-8 h-8 text-[#F97316] mb-3 stroke-[1.5]" aria-hidden="true" />
        <p className="font-display text-lg font-bold tracking-wide">
          {fallbackTitle || 'EFM Interiors'}
        </p>
        <p className="text-xs text-[#A3A3A3] mt-1 max-w-xs">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
