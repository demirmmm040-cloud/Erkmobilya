import { useState } from 'react';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';
import {
  CONCEPT_IMAGES,
  FAQ_ITEMS,
  WORKFLOW_STEPS,
  getWhatsAppUrl,
  type PageId,
} from '../data/erkanData';
import { ArchitecturalImage } from './ArchitecturalImage';

interface ProductionProcessPageProps {
  onNavigate: (page: PageId) => void;
}

const MATERIAL_STANDARDS = [
  {
    title: 'Sağlam Gövde & Lake Kapaklar',
    detail:
      'Sarkma yapmayan birinci sınıf MDFLam gövde, çizilmeye karşı dayanıklı mat veya parlak lake boya ve doğal ahşap kaplamalar kullanıyoruz.',
  },
  {
    title: 'Atölyede CNC Kesim',
    detail:
      'Duvar panelleri, özel kapı desenleri, harf işlemeleri ve kapak menteşe yerleri atölyemizdeki CNC makinelerinde hatasız açılır.',
  },
  {
    title: 'Sessiz Ray & Menteşeler',
    detail:
      'Çekmecelerde tam açılımlı frenli raylar, kapaklarda yavaşlatıcılı menteşeler kullanarak yıllarca ses yapmadan çalışmasını sağlıyoruz.',
  },
];

export function ProductionProcessPage({ onNavigate }: ProductionProcessPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div>
      {/* 4-Step Workflow */}
      <section className="py-16 lg:py-24 bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl pb-10 border-b border-white/12">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              Adım Adım İşleyiş
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
              İlk Ölçüden Anahtar Teslim Montaja
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((item) => (
              <article
                key={item.step}
                className="bg-[#181818] border border-white/10 hover:border-[#F97316] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors"
              >
                <div>
                  <span className="font-display text-3xl font-bold text-[#F97316] tabular-nums">
                    {item.step}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#D4D4D4] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <p className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-[#F97316]">
                  {item.deliverable}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CNC & Material Standards */}
      <section className="py-16 lg:py-24 bg-white text-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#0B0B0B] shadow-xl">
                <ArchitecturalImage
                  src={CONCEPT_IMAGES.studioCraftsmanship}
                  alt="EFM Interiors CNC kesim ve malzeme kalite standartları"
                  className="w-full h-full object-cover"
                  fallbackTitle="EFM Interiors · CNC Üretim"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="text-xs tracking-[0.2em] uppercase text-[#EA580C] font-bold">
                Malzeme &amp; Atölye
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
                Kullandığımız Malzemeler ve CNC İşçiliği
              </h2>

              <div className="mt-8 divide-y divide-[#0B0B0B]/10 border-t border-b border-[#0B0B0B]/10">
                {MATERIAL_STANDARDS.map((std) => (
                  <div key={std.title} className="py-4">
                    <h3 className="font-display text-lg font-bold text-[#0B0B0B]">
                      {std.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#404040] leading-relaxed">{std.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Teklif Al (WhatsApp)</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('calismalar')}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#F97316] text-white hover:bg-[#EA580C] transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Çalışmalarımızı Gör</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#0B0B0B] text-white border-t border-[#F97316]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="pb-8 border-b border-white/12">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              Merak Edilenler
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-white">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="mt-6 divide-y divide-white/12 border-b border-white/12">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className="font-display text-lg font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F97316] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
