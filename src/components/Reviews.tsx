import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, GOOGLE_REVIEWS } from '../data/erkanData';

export function Reviews() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showAllGrid, setShowAllGrid] = useState(false);

  const scrollByCard = (direction: 'prev' | 'next') => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const distance = Math.min(el.clientWidth * 0.85, 420);
    el.scrollBy({
      left: direction === 'next' ? distance : -distance,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="yorumlar"
      className="py-16 lg:py-24 bg-[#F5F5F5] text-[#0B0B0B] border-t border-[#0B0B0B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Summary Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#0B0B0B]/15">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[#EA580C] font-bold">
              Müşteri Yorumları
            </p>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.12] text-[#0B0B0B]"
              style={{ textWrap: 'balance' }}
            >
              Bizden İş Yaptıranların Yorumları
            </h2>
          </div>

          {/* Google Rating Summary Box */}
          <div className="flex flex-wrap items-center gap-6 bg-[#0B0B0B] text-white border border-[#F97316]/50 rounded-2xl px-6 py-4 shadow-md">
            <div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-4xl font-bold text-white tabular-nums">
                  {BUSINESS_INFO.googleRating}
                </span>
                <span className="text-sm font-bold text-[#F97316] tabular-nums">/ 5</span>
              </div>
              <div className="flex items-center gap-0.5 mt-1 text-[#F97316]" aria-label="5 üzerinden 4,9 yıldız">
                <Star className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
                <Star className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
                <Star className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
                <Star className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
                <Star className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
              </div>
            </div>

            <div className="h-10 w-px bg-white/15 hidden sm:block" aria-hidden="true" />

            <div>
              <p className="text-sm font-bold text-white tabular-nums">
                {BUSINESS_INFO.googleReviewCount} Google Yorumu
              </p>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-flex items-center gap-1 text-xs font-bold text-[#F97316] hover:text-white transition-colors"
              >
                <span>Google Haritalarda Gör</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Carousel Controls & View Toggle */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs sm:text-sm font-medium text-[#262626]">
            Google Haritalar üzerindeki müşteri yorumlarından {GOOGLE_REVIEWS.length} tanesi
          </p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setShowAllGrid((prev) => !prev)}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#0B0B0B] hover:bg-[#EA580C] transition-colors cursor-pointer whitespace-nowrap"
            >
              {showAllGrid ? 'Yana Kaydırmalı Görünüm' : 'Tüm 15 Yorumu Göster'}
            </button>

            {!showAllGrid && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollByCard('prev')}
                  aria-label="Önceki yorumlar"
                  className="w-10 h-10 rounded-lg bg-white border border-[#0B0B0B]/20 text-[#0B0B0B] hover:bg-[#F97316] hover:border-[#F97316] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollByCard('next')}
                  aria-label="Sonraki yorumlar"
                  className="w-10 h-10 rounded-lg bg-white border border-[#0B0B0B]/20 text-[#0B0B0B] hover:bg-[#F97316] hover:border-[#F97316] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Horizontal Carousel or Full 15-Review Grid */}
        {!showAllGrid ? (
          <div
            ref={scrollContainerRef}
            className="mt-6 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#F97316 #F5F5F5' }}
          >
            {GOOGLE_REVIEWS.map((review) => (
              <article
                key={review.id}
                className="snap-start shrink-0 w-[86vw] sm:w-[360px] lg:w-[390px] bg-white rounded-2xl border border-[#0B0B0B]/10 hover:border-[#F97316] p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-0.5 text-[#F97316]" aria-label="5 yıldız">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#525252]">
                      {review.source}
                    </span>
                  </div>

                  <blockquote className="mt-5 text-sm sm:text-[15px] text-[#262626] leading-relaxed">
                    “{review.text}”
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B0B0B]/10">
                  <p className="text-sm font-bold text-[#0B0B0B]">{review.author}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_REVIEWS.map((review) => (
              <article
                key={review.id}
                className="bg-white rounded-2xl border border-[#0B0B0B]/10 hover:border-[#F97316] p-6 sm:p-7 flex flex-col justify-between shadow-xs transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-0.5 text-[#F97316]" aria-label="5 yıldız">
                      {Array.from({ length: review.rating }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-[#F97316]" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-[#525252]">
                      {review.source}
                    </span>
                  </div>

                  <blockquote className="mt-5 text-sm sm:text-[15px] text-[#262626] leading-relaxed">
                    “{review.text}”
                  </blockquote>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B0B0B]/10">
                  <p className="text-sm font-bold text-[#0B0B0B]">{review.author}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
