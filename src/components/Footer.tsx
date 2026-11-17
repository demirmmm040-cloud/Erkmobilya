import { ArrowUpRight, Instagram } from 'lucide-react';
import { BUSINESS_INFO, NAV_ROUTES, getWhatsAppUrl, type PageId } from '../data/erkanData';
import { EfmLogo } from './EfmLogo';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] text-white border-t border-[#F97316]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/12">
          {/* Full Stacked EFM INTERIORS Brand Mark */}
          <div className="md:col-span-5">
            <a
              href="#ana-sayfa"
              aria-label="EFM Interiors Ana Sayfa"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block"
            >
              <EfmLogo variant="stacked" theme="light" />
            </a>
            <p className="mt-5 text-sm text-[#D4D4D4] leading-relaxed max-w-sm">
              Antalya Döşemealtı’ndaki atölyemizde iç mimarlarımız ve kendi mobilya ustalarımızla
              mutfak, banyo, giyinme odası ve özel ölçü ev mobilyaları üretiyoruz.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              Sayfalar
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#D4D4D4]">
              {NAV_ROUTES.map((route) => (
                <li key={route.id}>
                  <a
                    href={route.hash}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(route.id);
                    }}
                    className="hover:text-[#F97316] transition-colors"
                  >
                    {route.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-4">
            <p className="text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              İletişim Bilgileri
            </p>
            <div className="mt-4 space-y-3 text-sm text-[#D4D4D4]">
              <p className="font-semibold text-white">{BUSINESS_INFO.name}</p>
              <p className="leading-relaxed">{BUSINESS_INFO.address}</p>
              <p>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="text-white font-bold hover:text-[#F97316] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4ADE80] hover:text-white transition-colors"
                >
                  <span>WhatsApp Teklif</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F472B6] hover:text-white transition-colors"
                >
                  <span className="w-4 h-4 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] inline-flex items-center justify-center rounded-[3px]">
                    <Instagram className="w-3 h-3 text-white" aria-hidden="true" />
                  </span>
                  <span>@{BUSINESS_INFO.instagramHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F97316] hover:text-white transition-colors"
                >
                  <span>Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A3A3A3]">
          <p>© {currentYear} {BUSINESS_INFO.name}. Tüm hakları saklıdır.</p>
          <p>Döşemealtı, Antalya · Proje · Tasarım · Uygulama</p>
        </div>
      </div>
    </footer>
  );
}
