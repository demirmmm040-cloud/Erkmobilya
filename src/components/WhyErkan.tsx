import { ArrowRight, MessageCircle } from 'lucide-react';
import { WHY_ERKAN, getWhatsAppUrl } from '../data/erkanData';

interface WhyErkanProps {
  onViewProcess?: () => void;
}

export function WhyErkan({ onViewProcess }: WhyErkanProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#0B0B0B] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              Neden EFM Interiors?
            </p>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl font-bold leading-[1.14] text-white"
              style={{ textWrap: 'balance' }}
            >
              Çizen, Üreten ve Kuran Aynı Ekip
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              İşi aldıktan sonra başkasına devretmiyoruz. İlk ölçüden montajın bittiği ana kadar
              karşınızda EFM Interiors ekibi var.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
                <span>Ölçü &amp; Keşif İsteyin</span>
              </a>

              {onViewProcess && (
                <button
                  type="button"
                  onClick={onViewProcess}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Nasıl Çalışıyoruz?</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {/* Right 7 Advantages + Closing Card */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_ERKAN.map((item) => (
              <div
                key={item.number}
                className="bg-[#151515] border border-white/10 hover:border-[#F97316]/60 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <span className="text-xs font-bold tracking-[0.18em] text-[#F97316] tabular-nums">
                    {item.number}
                  </span>
                  <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#D4D4D4] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            {/* 8th Closing Card */}
            <div className="bg-gradient-to-br from-[#21150D] to-[#151515] border border-[#F97316]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-[0.18em] text-[#F97316]">
                  DÖŞEMEALTI · ANTALYA
                </span>
                <h3 className="mt-2.5 font-display text-xl font-bold text-white">
                  Atölyeden Evinize Doğrudan Teslim
                </h3>
                <p className="mt-2 text-sm text-[#E5E5E5] leading-relaxed">
                  Aracısız üretim sayesinde hem istediğiniz detayı doğrudan anlatır hem de
                  kaliteli işi doğru fiyata alırsınız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
