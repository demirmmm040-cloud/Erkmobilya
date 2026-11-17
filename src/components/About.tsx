import { ArrowRight, MessageCircle } from 'lucide-react';
import { CONCEPT_IMAGES, getWhatsAppUrl } from '../data/erkanData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface AboutProps {
  compact?: boolean;
  onReadMore?: () => void;
}

const STUDIO_PILLARS = [
  {
    label: '01 · Yerinde Ölçü & Çizim',
    detail: 'İç mimarlarımız evinize gelip ölçüyü alır, eşyalarınızın ve ışık alanların düzenine göre çizimi çıkarır.',
  },
  {
    label: '02 · Kendi Atölyemizde Üretim',
    detail: 'Çizilen her parça Döşemealtı’ndaki atölyemizde CNC makineleri ve kendi ustalarımızın elinden çıkar.',
  },
  {
    label: '03 · Temiz Montaj',
    detail: 'Dışarıdan taşeron çağırmadan, atölyede ürettiğimiz mobilyaları yine kendi ekibimizle evinize kurarız.',
  },
];

export function About({ compact = false, onReadMore }: AboutProps) {
  return (
    <section id="hakkimizda" className="py-16 lg:py-24 bg-white text-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Studio Visual (User's Requested 2nd Cover Photo) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative flex-1 min-h-[380px] lg:min-h-[540px] rounded-2xl overflow-hidden bg-[#0B0B0B] shadow-xl">
              <ArchitecturalImage
                src={CONCEPT_IMAGES.aboutShowcase}
                alt="EFM Interiors özel ölçü kapı uygulaması, ahşap çıta ve LED aydınlatmalı koridor duvarı"
                className="w-full h-full object-cover object-center"
                fallbackTitle="EFM Interiors · Uygulama"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B0B0B]/85 to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs font-bold text-white">
                <span>Özel Ölçü Kapı &amp; Koridor Duvar Uygulaması</span>
                <span className="text-[#F97316]">Döşemealtı, Antalya</span>
              </div>
            </div>
          </div>

          {/* Right Natural Copy */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[#EA580C] font-bold">
                Hakkımızda · EFM Interiors
              </p>

              <h2
                className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.12] text-[#0B0B0B]"
                style={{ textWrap: 'balance' }}
              >
                BİZ KİMİZ?
              </h2>

              <p className="mt-5 text-base text-[#262626] leading-relaxed">
                EFM INTERIORS Döşemealtı / Antalya’da tasarım ve üretimi aynı çatı altında
                buluşturan bir markadır. Özel ölçü mobilya, CNC üretim, 3D tasarım ve uygulama
                süreçlerinde her mekâna karakter katan özgün çözümler üretiyoruz.
              </p>

              <p className="mt-4 text-base text-[#262626] leading-relaxed">
                Bizim için her proje bir hikâyedir; sadece mobilya değil, yaşam alanına imza atan
                bir tasarım yaratırız. “Tasarım / Proje / Uygulama / Mimarlık” vizyonuyla, yerelden
                aldığı gücü modern çizgilerle birleştirip mekânları yeni yaşam alanlarına
                dönüştürüyoruz.
              </p>
            </div>

            <div className="mt-8 divide-y divide-[#0B0B0B]/10 border-t border-b border-[#0B0B0B]/10">
              {STUDIO_PILLARS.map((pillar) => (
                <div key={pillar.label} className="py-4">
                  <h3 className="font-display text-base font-bold text-[#0B0B0B]">
                    <span className="text-[#EA580C] mr-1.5">{pillar.label.slice(0, 4)}</span>
                    {pillar.label.slice(4)}
                  </h3>
                  <p className="mt-1 text-sm text-[#404040] leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
                <span>WhatsApp’tan Yazın</span>
              </a>

              {compact && onReadMore && (
                <button
                  type="button"
                  onClick={onReadMore}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#0B0B0B] text-white hover:bg-[#EA580C] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  <span>Ekibimizi Tanıyın</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
