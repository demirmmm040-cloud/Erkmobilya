import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { CONCEPT_IMAGES, SERVICES, getWhatsAppUrl } from '../data/erkanData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ServicesProps {
  compact?: boolean;
  onViewAll?: () => void;
}

export function Services({ compact = false, onViewAll }: ServicesProps) {
  return (
    <section
      id="hizmetlerimiz"
      className="py-16 lg:py-24 bg-[#121212] text-white border-t border-[#F97316]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Feature Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-14 border-b border-white/10">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              Hizmetlerimiz · Proje · Tasarım · Uygulama
            </p>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.7rem] font-bold leading-[1.12] text-white"
              style={{ textWrap: 'balance' }}
            >
              Ev ve İşyeriniz İçin Neler Yapıyoruz?
            </h2>
            <p className="mt-4 text-base text-[#D4D4D4] leading-relaxed">
              Mutfak dolabından giyinme odasına, banyodan salon TV ünitesine kadar ihtiyacınız olan
              her işi evinizin ölçüsüne göre çizip üretiyoruz.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap"
              >
                <span>Fiyat Teklifi Al</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>

              {compact && onViewAll && (
                <button
                  type="button"
                  onClick={onViewAll}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Tüm Hizmetler</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0B0B0B] border border-white/10 shadow-xl">
              <ArchitecturalImage
                src={CONCEPT_IMAGES.kitchenShowcase}
                alt="EFM Interiors özel tasarım mutfak dolabı ve ada tezgah çalışması"
                className="w-full h-full object-cover"
                fallbackTitle="EFM Interiors · Mutfak Tasarımı"
              />
            </div>
            <p className="mt-3 text-xs font-medium text-[#A3A3A3]">
              Özel Ölçü Mutfak &amp; İç Mimari Tasarım · Yaptığımız gerçek işleri sayfanın
              altındaki Çalışmalar bölümünden kaydırarak inceleyebilirsiniz.
            </p>
          </div>
        </div>

        {/* 8 Sleek Service Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-[#191919] border border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#F97316] hover:bg-[#1E1E1E] hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.16em] text-[#F97316] tabular-nums">
                    {service.number}
                  </span>
                  <span className="w-6 h-[2px] bg-[#F97316] transition-all duration-300 group-hover:w-10" aria-hidden="true" />
                </div>

                <h3 className="mt-4 font-display text-xl font-bold text-white leading-snug">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-[#D4D4D4] leading-relaxed">
                  {service.description}
                </p>

                <ul className="mt-5 pt-4 border-t border-white/10 space-y-2 text-xs font-semibold text-[#E5E5E5]">
                  {service.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#F97316] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={getWhatsAppUrl(
                    `Merhaba EFM Interiors, "${service.title}" hizmetiniz hakkında bilgi ve fiyat teklifi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>WhatsApp’tan Sor</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
