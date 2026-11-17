import { Instagram, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/erkanData';

export function WhatsAppFloating() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      <a
        href={BUSINESS_INFO.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram üzerinden Erkanmobilyaa hesabını takip edin"
        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white px-3.5 py-2.5 shadow-lg hover:brightness-110 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DD2A7B]"
      >
        <Instagram className="w-4 h-4 text-white shrink-0 drop-shadow-xs" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide whitespace-nowrap drop-shadow-xs">
          @{BUSINESS_INFO.instagramHandle}
        </span>
      </a>

      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden EFM Interiors ile iletişime geçin"
        className="inline-flex items-center gap-2.5 rounded-xl bg-[#16A34A] text-white border border-[#15803D] px-4 py-3 shadow-xl hover:bg-[#15803D] transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#16A34A]"
      >
        <MessageCircle className="w-5 h-5 text-white shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide whitespace-nowrap">
          WhatsApp Teklif Al
        </span>
      </a>
    </div>
  );
}
