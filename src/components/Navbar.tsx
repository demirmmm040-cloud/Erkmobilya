import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAV_ROUTES, getWhatsAppUrl, type PageId } from '../data/erkanData';
import { EfmLogo } from './EfmLogo';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleLinkClick = (page: PageId) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-200 bg-[#0B0B0B]/95 backdrop-blur-md ${
        scrolled ? 'border-b border-[#F97316]/35 shadow-lg' : 'border-b border-white/12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: EFM INTERIORS Brand Mark */}
        <a
          href="#ana-sayfa"
          aria-label="EFM Interiors Ana Sayfa"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F97316]"
        >
          <EfmLogo variant="compact" theme="light" />
        </a>

        {/* Zone 2: Multi-page single-line navigation */}
        <nav
          aria-label="Ana Menü"
          className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] font-bold tracking-wide"
        >
          {NAV_ROUTES.map((route) => {
            const isActive = activePage === route.id;
            return (
              <a
                key={route.id}
                href={route.hash}
                aria-current={isActive ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(route.id);
                }}
                className={`relative py-1.5 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F97316] ${
                  isActive
                    ? 'text-[#F97316] after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#F97316]'
                    : 'text-white/80 hover:text-[#F97316] after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#F97316] after:transition-all after:duration-200 hover:after:w-full'
                }`}
              >
                {route.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Green WhatsApp Primary Action + Mobile Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16A34A]"
          >
            <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
            <span>Teklif Al</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-white border border-white/25 hover:border-[#F97316] hover:text-[#F97316] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F97316]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="lg:hidden bg-[#121212] border-t border-[#F97316]/30 px-4 sm:px-6 py-5 shadow-xl"
        >
          <nav aria-label="Mobil Menü" className="flex flex-col divide-y divide-white/10">
            {NAV_ROUTES.map((route) => {
              const isActive = activePage === route.id;
              return (
                <a
                  key={route.id}
                  href={route.hash}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(route.id);
                  }}
                  className={`py-3.5 text-base font-bold transition-colors ${
                    isActive ? 'text-[#F97316]' : 'text-white/85 hover:text-[#F97316]'
                  }`}
                >
                  {route.label}
                </a>
              );
            })}
          </nav>

          <div className="mt-5 pt-4 border-t border-white/12 flex flex-col gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Teklif Al (WhatsApp)</span>
            </a>
            <a
              href={BUSINESS_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center py-2.5 rounded-lg text-sm font-bold text-white border border-[#F97316]/60 hover:bg-[#F97316] hover:text-[#0B0B0B] transition-colors"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
