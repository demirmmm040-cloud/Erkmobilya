import { ChevronRight } from 'lucide-react';
import type { PageId } from '../data/erkanData';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  currentLabel: string;
  onNavigate: (page: PageId) => void;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  currentLabel,
  onNavigate,
}: PageHeaderProps) {
  return (
    <section className="bg-[#0B0B0B] text-white py-14 sm:py-16 lg:py-20 border-b border-[#F97316]/35">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <nav aria-label="Sayfa konumu" className="flex items-center gap-2 text-xs font-medium text-[#A3A3A3] mb-5">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="hover:text-[#F97316] transition-colors cursor-pointer"
          >
            Ana Sayfa
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#525252]" aria-hidden="true" />
          <span className="text-[#F97316] font-bold">{currentLabel}</span>
        </nav>

        <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
          {eyebrow}
        </p>
        <h1
          className="mt-2.5 font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.12] text-white max-w-3xl"
          style={{ textWrap: 'balance' }}
        >
          {title}
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#D4D4D4] max-w-2xl leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
