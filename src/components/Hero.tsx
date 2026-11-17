import { ArrowDown, MessageCircle, Star } from 'lucide-react';
import { BUSINESS_INFO, CONCEPT_IMAGES, getWhatsAppUrl } from '../data/erkanData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface HeroProps {
  onExploreWork: () => void;
  onOpenReviews: () => void;
}

export function Hero({ onExploreWork, onOpenReviews }: HeroProps) {
  return (
    <section id="ana-sayfa" className="relative bg-[#0B0B0B] text-white overflow-hidden">
      {/* Main Hero Frame */}
      <div className="relative min-h-[600px] lg:min-h-[680px] flex items-center">
        <div className="absolute inset-0">
          <ArchitecturalImage
            src={CONCEPT_IMAGES.heroLiving}
            alt="EFM Interiors özel tasarım LED aydınlatmalı duvar paneli ve ahşap dikey separatör uygulaması"
            loading="eager"
            className="w-full h-full object-cover object-[50%_42%]"
            fallbackTitle="EFM Interiors"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B]/92 via-[#0B0B0B]/65 to-[#0B0B0B]/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/30"
          />
        </div>

        {/* Hero Copy & Primary Actions */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-[13px] tracking-[0.22em] uppercase text-[#F97316] font-bold mb-4">
              EFM INTERIORS · PROJE · TASARIM · UYGULAMA
            </p>

            <h1
              className="font-display text-[2.25rem] sm:text-5xl lg:text-[3.75rem] font-bold leading-[1.06] tracking-tight text-white"
              style={{ textWrap: 'balance' }}
            >
              Evinize Tam Oturan Özel Ölçü Mobilyalar.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/90 leading-relaxed max-w-xl font-normal">
              EFM Interiors olarak mutfaktan banyoya, giyinme odasından salon duvarına kadar her
              işi kendi iç mimarlarımızla çiziyor, Döşemealtı’ndaki atölyemizde üretip evinize
              kuruyoruz.
            </p>

            {/* 1. Green Teklif Al (WhatsApp), 2. Orange Çalışmalarımızı İncele */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-[15px] font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-all duration-150 whitespace-nowrap shrink-0 shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                <span>Teklif Al (WhatsApp)</span>
              </a>

              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-[15px] font-bold bg-[#F97316] text-white hover:bg-[#EA580C] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-lg hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <span>Çalışmalarımızı İncele</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Black & Orange Quick Info Strip */}
      <div className="relative z-10 border-t border-[#F97316]/30 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <button
            type="button"
            onClick={onOpenReviews}
            className="group flex items-start gap-3.5 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F97316]"
          >
            <div className="flex items-center gap-0.5 text-[#F97316] pt-1 shrink-0" aria-hidden="true">
              <Star className="w-4 h-4 fill-[#F97316]" />
              <Star className="w-4 h-4 fill-[#F97316]" />
              <Star className="w-4 h-4 fill-[#F97316]" />
              <Star className="w-4 h-4 fill-[#F97316]" />
              <Star className="w-4 h-4 fill-[#F97316]" />
            </div>
            <div>
              <p className="text-lg font-bold text-white tabular-nums group-hover:text-[#F97316] transition-colors">
                {BUSINESS_INFO.googleRating} / 5 Google Puanı
              </p>
              <p className="text-xs text-white/70 mt-0.5 tabular-nums">
                {BUSINESS_INFO.googleReviewCount} Müşteri Değerlendirmesi
              </p>
            </div>
          </button>

          <div className="sm:border-l sm:border-white/12 sm:pl-6">
            <p className="text-base font-bold text-white">Kendi İç Mimar Ekibimiz</p>
            <p className="text-xs text-white/70 mt-1">
              Gelip ölçüyü alıyor, üretime geçmeden 3B çizimi gösteriyoruz
            </p>
          </div>

          <div className="lg:border-l lg:border-white/12 lg:pl-6">
            <p className="text-base font-bold text-white">Atölyede CNC Kesim</p>
            <p className="text-xs text-white/70 mt-1">
              Özel kapaklar, çıtalar ve dolaplar kendi atölyemizden çıkar
            </p>
          </div>

          <div className="sm:border-l sm:border-white/12 sm:pl-6">
            <p className="text-base font-bold text-white">Döşemealtı · Antalya</p>
            <p className="text-xs text-white/70 mt-1">
              Tüm Antalya’ya ölçü, üretim ve temiz montaj
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
