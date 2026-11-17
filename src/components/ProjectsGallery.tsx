import { useState, useEffect, useCallback, useRef } from 'react';
import {
  Expand,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Images,
  MessageCircle,
} from 'lucide-react';
import {
  PROJECT_SETS,
  PROJECT_CATEGORIES,
  getWhatsAppUrl,
  type ProjectCategory,
  type ProjectSet,
} from '../data/erkanData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ProjectSetCardProps {
  projectSet: ProjectSet;
  onOpenLightbox: (setIndex: number, photoIndex: number) => void;
  setIndex: number;
}

function ProjectSetCard({ projectSet, onOpenLightbox, setIndex }: ProjectSetCardProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const total = projectSet.photos.length;

  const goToSlide = (targetIdx: number) => {
    const wrapped = (targetIdx + total) % total;
    setActiveSlide(wrapped);
    const el = sliderRef.current;
    if (el) {
      el.scrollTo({
        left: wrapped * el.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el || el.clientWidth === 0) return;
    const idx = Math.round(el.scrollLeft / el.clientWidth);
    if (idx !== activeSlide && idx >= 0 && idx < total) {
      setActiveSlide(idx);
    }
  };

  return (
    <article className="bg-[#161616] border border-white/12 hover:border-[#F97316]/70 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-xl">
      {/* Horizontal Swipeable Multi-Photo Track */}
      <div className="relative bg-[#0B0B0B] group">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
          aria-label={`${projectSet.title} fotoğraf galerisi — sağa sola kaydırılabilir`}
        >
          {projectSet.photos.map((photo, photoIdx) => (
            <div
              key={photo.src}
              className="w-full shrink-0 snap-start aspect-[4/3] sm:aspect-[16/11] relative bg-[#0B0B0B]"
            >
              <button
                type="button"
                onClick={() => onOpenLightbox(setIndex, photoIdx)}
                aria-label={`${projectSet.title} - ${photoIdx + 1}. fotoğrafı büyüt`}
                className="w-full h-full block cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F97316]"
              >
                <ArchitecturalImage
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  fallbackTitle={projectSet.title}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Photo Counter Overlay */}
        <div className="pointer-events-none absolute top-3.5 left-3.5 px-2.5 py-1 rounded-md bg-[#0B0B0B]/80 backdrop-blur-sm border border-white/15 text-[11px] font-bold text-white flex items-center gap-1.5 tabular-nums">
          <Images className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
          <span>
            {activeSlide + 1} / {total}
          </span>
        </div>

        {/* Fullscreen Expand Button */}
        <button
          type="button"
          onClick={() => onOpenLightbox(setIndex, activeSlide)}
          aria-label="Tam ekran büyüt"
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-lg bg-[#0B0B0B]/80 border border-white/20 text-white hover:bg-[#F97316] hover:border-[#F97316] flex items-center justify-center transition-colors cursor-pointer"
        >
          <Expand className="w-4 h-4" aria-hidden="true" />
        </button>

        {/* Left / Right Slide Arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Önceki fotoğraf"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0B0B]/75 border border-white/20 text-white hover:bg-[#F97316] hover:border-[#F97316] flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Sonraki fotoğraf"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0B0B0B]/75 border border-white/20 text-white hover:bg-[#F97316] hover:border-[#F97316] flex items-center justify-center transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Interactive Thumbnail Rail for Quick Set Navigation */}
      {total > 1 && (
        <div className="px-4 pt-3 pb-2 bg-[#111111] border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          {projectSet.photos.map((photo, idx) => {
            const isCurrent = idx === activeSlide;
            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`${idx + 1}. fotoğrafa geç`}
                className={`relative w-14 h-11 rounded-md overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  isCurrent
                    ? 'border-[#F97316] opacity-100 scale-[1.03]'
                    : 'border-transparent opacity-55 hover:opacity-90'
                }`}
              >
                <img
                  src={photo.src}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
          <span className="ml-auto pl-2 text-[11px] font-medium text-[#A3A3A3] whitespace-nowrap hidden sm:inline">
            Yana kaydırın
          </span>
        </div>
      )}

      {/* Set Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-xs text-[#F97316] font-bold tracking-wide">
            {projectSet.subtitle} · {projectSet.location}
          </p>
          <h3 className="mt-2 font-display text-xl sm:text-2xl font-bold text-white leading-snug">
            {projectSet.title}
          </h3>
          <p className="mt-2 text-xs text-[#FDBA74] font-medium">
            {projectSet.photos[activeSlide]?.caption}
          </p>
          <p className="mt-3 text-sm text-[#D4D4D4] leading-relaxed">
            {projectSet.description}
          </p>
          <p className="mt-4 text-xs font-medium text-[#A3A3A3]">
            {projectSet.specs.join(' · ')}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => onOpenLightbox(setIndex, activeSlide)}
            className="text-xs font-bold text-white hover:text-[#F97316] transition-colors cursor-pointer whitespace-nowrap"
          >
            Seti Tam Ekran İncele ({total} Fotoğraf)
          </button>

          <a
            href={getWhatsAppUrl(
              `Merhaba EFM Interiors, "${projectSet.title}" çalışması benzeri bir iş için bilgi ve fiyat teklifi almak istiyorum.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Teklif Al</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Tümü');
  const [lightboxState, setLightboxState] = useState<{
    setIndex: number;
    photoIndex: number;
  } | null>(null);

  const filteredSets =
    activeCategory === 'Tümü'
      ? PROJECT_SETS
      : PROJECT_SETS.filter((set) => set.categories.includes(activeCategory));

  const activeSet =
    lightboxState !== null && filteredSets[lightboxState.setIndex]
      ? filteredSets[lightboxState.setIndex]
      : null;

  const activePhoto =
    activeSet && lightboxState !== null
      ? activeSet.photos[lightboxState.photoIndex] || activeSet.photos[0]
      : null;

  const handleClose = useCallback(() => {
    setLightboxState(null);
  }, []);

  const handlePrevPhoto = useCallback(() => {
    setLightboxState((prev) => {
      if (!prev) return null;
      const set = filteredSets[prev.setIndex];
      if (!set) return null;
      return {
        ...prev,
        photoIndex: (prev.photoIndex - 1 + set.photos.length) % set.photos.length,
      };
    });
  }, [filteredSets]);

  const handleNextPhoto = useCallback(() => {
    setLightboxState((prev) => {
      if (!prev) return null;
      const set = filteredSets[prev.setIndex];
      if (!set) return null;
      return {
        ...prev,
        photoIndex: (prev.photoIndex + 1) % set.photos.length,
      };
    });
  }, [filteredSets]);

  useEffect(() => {
    if (!lightboxState) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxState, handleClose, handlePrevPhoto, handleNextPhoto]);

  const handleCategoryChange = (cat: ProjectCategory) => {
    setActiveCategory(cat);
    setLightboxState(null);
  };

  return (
    <section
      id="ornek-calismalar"
      className="py-16 lg:py-24 bg-[#0B0B0B] text-white border-t border-[#F97316]/35"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header & Category Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/12">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              Örnek Çalışmalarımız · Proje Setleri
            </p>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.12] text-white"
              style={{ textWrap: 'balance' }}
            >
              Tamamladığımız Ev ve İşyeri Çalışmaları
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              Her evin işini kendi seti içinde bir araya getirdik. Kartların üzerindeki fotoğrafları
              sağa sola kaydırarak tüm açıları ve detayları inceleyebilirsiniz.
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Çalışma kategorileri"
            className="flex flex-wrap items-center gap-2"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-[13px] font-bold transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F97316] ${
                    isActive
                      ? 'bg-[#F97316] text-white'
                      : 'bg-[#1A1A1A] text-white/80 hover:text-white hover:bg-[#262626] border border-white/10'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Multi-Photo Swipeable Project Sets Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredSets.map((projectSet, setIdx) => (
            <ProjectSetCard
              key={projectSet.id}
              projectSet={projectSet}
              setIndex={setIdx}
              onOpenLightbox={(sIdx, pIdx) =>
                setLightboxState({ setIndex: sIdx, photoIndex: pIdx })
              }
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Carousel */}
      {activeSet && activePhoto && lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeSet.title}
          className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 lg:p-10"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-6xl bg-[#141414] border border-[#F97316]/40 rounded-2xl overflow-hidden text-white grid grid-cols-1 lg:grid-cols-12 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Görseli kapat"
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-lg bg-[#0B0B0B]/90 border border-[#F97316]/50 text-white hover:bg-[#F97316] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="lg:col-span-8 bg-[#0B0B0B] relative flex flex-col justify-between p-4 sm:p-6 min-h-[320px] lg:min-h-[540px]">
              <div className="flex-1 flex items-center justify-center relative">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.caption}
                  referrerPolicy="no-referrer"
                  className="max-h-[68vh] w-auto max-w-full object-contain rounded-lg"
                />

                {activeSet.photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrevPhoto}
                      aria-label="Önceki fotoğraf"
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#141414]/85 border border-white/20 text-white hover:bg-[#F97316] flex items-center justify-center cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleNextPhoto}
                      aria-label="Sonraki fotoğraf"
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#141414]/85 border border-white/20 text-white hover:bg-[#F97316] flex items-center justify-center cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail strip inside lightbox */}
              {activeSet.photos.length > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2 overflow-x-auto pt-2">
                  {activeSet.photos.map((photo, idx) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() =>
                        setLightboxState((prev) =>
                          prev ? { ...prev, photoIndex: idx } : null
                        )
                      }
                      className={`w-16 h-12 rounded-md overflow-hidden border-2 shrink-0 cursor-pointer ${
                        idx === lightboxState.photoIndex
                          ? 'border-[#F97316] opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                    >
                      <img src={photo.src} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/12">
              <div>
                <p className="text-xs tracking-[0.14em] uppercase text-[#F97316] font-bold pr-10">
                  {activeSet.subtitle} · {activeSet.location}
                </p>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-bold leading-snug text-white">
                  {activeSet.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-[#FDBA74]">
                  {activePhoto.caption}
                </p>
                <p className="mt-4 text-sm text-[#D4D4D4] leading-relaxed">
                  {activeSet.description}
                </p>

                <div className="mt-6 pt-5 border-t border-white/12">
                  <p className="text-xs uppercase tracking-[0.14em] text-[#A3A3A3] font-semibold mb-2">
                    Yapılan İşler
                  </p>
                  <p className="text-sm text-white leading-relaxed">
                    {activeSet.specs.join(' · ')}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/12 space-y-4">
                <a
                  href={getWhatsAppUrl(
                    `Merhaba EFM Interiors, "${activeSet.title}" çalışması hakkında bilgi ve benzer bir iş için fiyat teklifi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors"
                >
                  <span>Benzer Çalışma İçin Teklif Al</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <div className="flex items-center justify-between text-xs text-[#A3A3A3] pt-1">
                  <span className="tabular-nums">
                    Fotoğraf {lightboxState.photoIndex + 1} / {activeSet.photos.length}
                  </span>
                  {filteredSets.length > 1 && (
                    <button
                      type="button"
                      onClick={() =>
                        setLightboxState((prev) =>
                          prev
                            ? {
                                setIndex: (prev.setIndex + 1) % filteredSets.length,
                                photoIndex: 0,
                              }
                            : null
                        )
                      }
                      className="font-bold text-[#F97316] hover:text-white cursor-pointer"
                    >
                      Sonraki Proje Setine Geç →
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
