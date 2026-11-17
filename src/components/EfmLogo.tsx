interface EfmLogoProps {
  variant?: 'compact' | 'stacked';
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Geometric stencil vector emblem faithfully matching the EFM INTERIORS
 * brand mark (E-F-M stencil letters, INTERIORS, and •PROJE •TASARIM •UYGULAMA).
 */
export function EfmLogo({
  variant = 'compact',
  theme = 'light',
  className = '',
}: EfmLogoProps) {
  const ink = theme === 'dark' ? '#0B0B0B' : '#FFFFFF';
  const accentInk = '#F97316';

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Geometric EFM Stencil Monogram */}
        <svg
          viewBox="0 0 154 48"
          className="h-7 sm:h-8 w-auto shrink-0"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="0" y="2" width="34" height="7.5" fill={ink} />
          <rect x="0" y="20" width="30" height="7.5" fill={accentInk} />
          <rect x="0" y="38.5" width="34" height="7.5" fill={ink} />

          <rect x="44" y="2" width="34" height="7.5" fill={ink} />
          <path d="M44 20H72V27.5H52V46H44V20Z" fill={ink} />

          <path
            d="M88 46L102 2H110.5L120 27.5L129.5 2H138L152 46H143L133.5 16L123 44H117L106.5 16L97 46H88Z"
            fill={ink}
          />
        </svg>

        <div
          className="flex flex-col leading-none border-l pl-3"
          style={{
            borderColor: theme === 'dark' ? 'rgba(11,11,11,0.22)' : 'rgba(249,115,22,0.45)',
          }}
        >
          <span
            className="font-display text-[13px] sm:text-[15px] font-bold tracking-[0.26em] uppercase"
            style={{ color: ink }}
          >
            INTERIORS
          </span>
          <span
            className="hidden sm:block text-[9px] font-bold tracking-[0.16em] uppercase mt-1"
            style={{ color: accentInk }}
          >
            •PROJE •TASARIM •UYGULAMA
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <svg
        viewBox="0 0 260 128"
        className="w-48 sm:w-56 h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="EFM Interiors - Proje, Tasarım, Uygulama"
      >
        <rect x="14" y="6" width="54" height="11" fill={ink} />
        <rect x="14" y="33" width="46" height="11" fill={accentInk} />
        <rect x="14" y="60" width="54" height="11" fill={ink} />

        <rect x="82" y="6" width="54" height="11" fill={ink} />
        <path d="M82 33H126V44H94V71H82V33Z" fill={ink} />

        <path
          d="M150 71L172 6H184L200 47L216 6H228L250 71H237L221.5 23L204.5 68H195.5L178.5 23L163 71H150Z"
          fill={ink}
        />

        <text
          x="130"
          y="102"
          textAnchor="middle"
          fill={ink}
          fontFamily="Outfit, sans-serif"
          fontWeight="600"
          fontSize="26"
          letterSpacing="6.5"
        >
          INTERIORS
        </text>

        <text
          x="130"
          y="122"
          textAnchor="middle"
          fill={accentInk}
          fontFamily="Plus Jakarta Sans, sans-serif"
          fontWeight="700"
          fontSize="10.2"
          letterSpacing="2.2"
        >
          •PROJE •TASARIM •UYGULAMA
        </text>
      </svg>
    </div>
  );
}
