import { Compass, Clock, ShieldCheck, Lightbulb, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/erkanData';

const ARCHITECT_BENEFITS = [
  {
    number: '01',
    icon: Compass,
    title: 'Mekanınıza özel çözümler',
    description:
      'Her evin, her yaşamın ritmi farklıdır. İç mimar, ihtiyaçlarınıza göre en doğru işlevi ve estetiği bir araya getirir.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'Zaman ve bütçe tasarrufu',
    description:
      'Doğru malzeme, doğru planlama, doğru usta... Gereksiz harcamalar olmadan, en iyi sonucu kısa sürede alırsınız.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Sorunsuz süreç yönetimi',
    description:
      'Proje, üretim ve montaj sürecinin her adımı kontrol altında. Siz sadece son halinin keyfini çıkarırsınız.',
  },
  {
    number: '04',
    icon: Lightbulb,
    title: 'Sizin için doğru fikirler üretir',
    description:
      'Kafanızdaki belirsizlikleri ortadan kaldırır. Net, uygulanabilir ve kreatif öneriler sunar.',
  },
];

export function WhyArchitect() {
  return (
    <section
      id="neden-biz"
      className="py-16 lg:py-24 bg-[#141414] text-white border-t border-[#F97316]/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-white/12">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.22em] uppercase text-[#F97316] font-bold">
              Neden Biz? · EFM Interiors
            </p>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.12] text-white"
              style={{ textWrap: 'balance' }}
            >
              Neden İç Mimarla Çalışmalısınız?
            </h2>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
            <span>İç Mimarımızla Görüşün</span>
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARCHITECT_BENEFITS.map((item) => {
            const IconComponent = item.icon;
            return (
              <article
                key={item.number}
                className="group bg-[#1C1C1C] border border-white/10 hover:border-[#F97316] rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#F97316]/15 border border-[#F97316]/35 flex items-center justify-center text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.18em] text-[#F97316] tabular-nums">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#D4D4D4] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
