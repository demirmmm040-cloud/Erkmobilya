import { useState, useRef, useEffect } from 'react';
import {
  Play,
  ChevronLeft,
  ChevronRight,
  Instagram,
  ArrowUpRight,
  X,
  Film,
  MessageCircle,
  Volume2,
} from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../data/erkanData';

export interface VideoReelItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  videoSrc: string;
}

export const VIDEO_REELS: VideoReelItem[] = [
  {
    id: 'reel-villa-turu',
    title: 'Villa Girişi, Fluted Cam Kapılar & Salon Uygulaması',
    category: 'Villa Turu',
    summary:
      'Özel lake portmanto dolapları, kemerli ayna, flüt camlı kapılar, LED aydınlatmalı duvar panoları ve kavisli TV ünitesi.',
    videoSrc:
      '/assets/aistudio/G_nayd_nn___Hadi_gelin_birlikte_gezelim__Villam_za_girdi_imizde_bizi_tam_kar__da_tavana_kadar___58c8aeb2.mp4',
  },
  {
    id: 'reel-ortak-yasam',
    title: 'Ortak Yaşam Alanı, Mutfak & LED TV Duvarı',
    category: 'Proje Teslimatı',
    summary:
      'Ahşap separatör, dev LED ayna, ışıklı vitrin nişleri, ada tezgahlı mutfak ve salon duvar uygulamasının tamamı.',
    videoSrc:
      '/assets/aistudio/Haftay__mis_gibi_bir_projeyle_kapatal_m__Ortak_ya_am_alanlar_n_z__sizler_i_in_tasarl_yoruz_____a03b561d.mp4',
  },
  {
    id: 'reel-gizli-kapi',
    title: 'Gizli Kapılı Giyinme Odası & Yatak Odası',
    category: 'Yatak & Giyinme',
    summary:
      'Aynalı dolap kapaklarının arkasında gizlenen giyinme odası, boydan başlık ve mermer görünümlü makyaj konsolu.',
    videoSrc:
      '/assets/aistudio/Yatak_Odas__Tasar_m_m_z__Gizli_kap_larla_giyinme_odalar_na_ge_meyi_seviyoruz___interiordesign___c663833c.mp4',
  },
  {
    id: 'reel-giris-patili',
    title: 'Giriş Alanı, Merdiven Altı & Patili Dost Yuvası',
    category: 'Özel Tasarım',
    summary:
      'Merdiven altı çekmeceleri, çizgili antrasit vestiyer ve minik kedimiz için alt dolapta özel CNC kesimli geçiş yuvası.',
    videoSrc:
      '/assets/aistudio/_Giri__alan__yenilendi__merdiven_alt__de_erlendi__Bir_de_minik_patili_dostumuz_i_in__zel_bir_k___29f2993f.mp4',
  },
  {
    id: 'reel-atolye-cnc',
    title: 'Atölyede CNC Kesim & Yatak - Genç Odası Üretimi',
    category: 'Çizimden Montaja',
    summary:
      'AutoCAD teknik çizim ve 3B renderdan başlayıp Reksis CNC kesimi, ray montajı ve odada bitmiş haline kadar tüm süreç.',
    videoSrc:
      '/assets/aistudio/___At_lyemizde_detaylar_asla_g_zden_ka_maz_Yatak_odas__ve_gen_-_ocuk_odas__dolaplar_m_z_n__reti_f5ec2cea.mp4',
  },
  {
    id: 'reel-detaylar',
    title: 'Lake Kapak, Ahşap Çıta & Pirinç Kulp Detayları',
    category: 'İşçilik Detayları',
    summary:
      'LED aydınlatmalı ahşap çıtalı başucu nişi, oymalı lake dolap kapakları, tırtıklı pirinç kulplar ve boy aynalı dolaplar.',
    videoSrc:
      '/assets/aistudio/Details___interiordesign__interior__architecture__bedroomdecor__details__interiorarchitecture__m_75dc4db7.mp4',
  },
];

interface VideoShowcaseProps {
  onExploreGallery: () => void;
}

export function VideoShowcase({ onExploreGallery }: VideoShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeReel = activeIndex !== null ? VIDEO_REELS[activeIndex] : null;

  const scrollTrack = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.min(el.clientWidth * 0.8, 340);
    el.scrollBy({ left: dir === 'next' ? step : -step, behavior: 'smooth' });
  };

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev === null ? null : (prev + 1) % VIDEO_REELS.length));
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + VIDEO_REELS.length) % VIDEO_REELS.length
        );
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  return (
    <section
      id="video-vitrin"
      className="relative py-16 lg:py-22 bg-[#0E0E0E] text-white border-t border-white/10 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 w-[440px] h-[440px] rounded-full bg-[#F97316]/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#F97316] font-bold">
              <Film className="w-4 h-4" aria-hidden="true" />
              <span>Uygulama Videolarımız · {VIDEO_REELS.length} Video</span>
            </div>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-bold leading-[1.12] text-white"
              style={{ textWrap: 'balance' }}
            >
              Atölyeden Teslimata Gerçek Videolar
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#D4D4D4] leading-relaxed">
              Çizimden CNC kesime, gizli giyinme odalarından bitmiş villa turlarına kadar yaptığımız
              işleri videolardan izleyebilirsiniz. Sesli ve tam ekran izlemek için herhangi bir
              videoya dokunun.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={BUSINESS_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:brightness-110 transition-all whitespace-nowrap"
            >
              <Instagram className="w-4 h-4 text-white" aria-hidden="true" />
              <span>@{BUSINESS_INFO.instagramHandle} Reels</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollTrack('prev')}
                aria-label="Önceki video"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/15 text-white hover:border-[#F97316] hover:text-[#F97316] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTrack('next')}
                aria-label="Sonraki video"
                className="w-10 h-10 rounded-lg bg-[#1A1A1A] border border-white/15 text-white hover:border-[#F97316] hover:text-[#F97316] flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal 9:16 Video Reels Strip */}
        <div
          ref={trackRef}
          className="mt-9 flex gap-5 lg:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#F97316 #1A1A1A' }}
        >
          {VIDEO_REELS.map((reel, index) => (
            <ReelCard
              key={reel.id}
              reel={reel}
              index={index}
              isHovered={hoveredId === reel.id}
              onHoverChange={(hovering) => setHoveredId(hovering ? reel.id : null)}
              onOpen={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A3A3A3]">
          <span>Videoları yana kaydırarak diğer işlerimizi de izleyebilirsiniz.</span>
          <button
            type="button"
            onClick={onExploreGallery}
            className="font-bold text-[#F97316] hover:text-white transition-colors cursor-pointer"
          >
            Alttaki Fotoğraf Setlerine Git ↓
          </button>
        </div>
      </div>

      {/* Interactive Full Video Theater Modal */}
      {activeReel && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeReel.title}
          className="fixed inset-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#141414] border border-[#F97316]/45 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-2xl max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Videoyu kapat"
              className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-lg bg-[#0B0B0B]/90 border border-white/25 text-white hover:border-[#F97316] hover:text-[#F97316] flex items-center justify-center cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="md:col-span-7 bg-[#000000] relative flex items-center justify-center min-h-[360px] md:min-h-[540px]">
              <video
                key={activeReel.videoSrc}
                src={activeReel.videoSrc}
                controls
                autoPlay
                playsInline
                className="max-h-[76vh] w-full object-contain"
              />
            </div>

            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs tracking-[0.16em] uppercase text-[#F97316] font-bold pr-10">
                  {activeReel.category} · Video {activeIndex + 1} / {VIDEO_REELS.length}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white leading-snug">
                  {activeReel.title}
                </h3>
                <p className="mt-3 text-sm text-[#D4D4D4] leading-relaxed">
                  {activeReel.summary}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-[#A3A3A3]">
                  <Volume2 className="w-3.5 h-3.5 text-[#F97316]" aria-hidden="true" />
                  <span>Ses kontrollerini video üzerinden açıp kapatabilirsiniz.</span>
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/12 flex flex-col gap-3">
                <a
                  href={getWhatsAppUrl(
                    `Merhaba EFM Interiors, "${activeReel.title}" videonuzdaki çalışma hakkında bilgi ve fiyat teklifi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Bu Çalışma İçin Fiyat Al</span>
                </a>

                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-xs font-bold bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:brightness-110 transition-all"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>@{BUSINESS_INFO.instagramHandle} Hesabına Git</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((activeIndex - 1 + VIDEO_REELS.length) % VIDEO_REELS.length)
                    }
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white/85 hover:text-[#F97316] border border-white/20 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Önceki Video</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((activeIndex + 1) % VIDEO_REELS.length)}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white/85 hover:text-[#F97316] border border-white/20 cursor-pointer"
                  >
                    <span>Sonraki Video</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

interface ReelCardProps {
  reel: VideoReelItem;
  index: number;
  isHovered: boolean;
  onHoverChange: (hovering: boolean) => void;
  onOpen: () => void;
}

function ReelCard({ reel, index, isHovered, onHoverChange, onOpen }: ReelCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isHovered) {
      vid.play().catch(() => {
        /* autoplay muted fallback silently */
      });
    } else {
      vid.pause();
    }
  }, [isHovered]);

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      className="group relative snap-start shrink-0 w-[76vw] sm:w-[270px] lg:w-[285px] aspect-[9/15] rounded-2xl overflow-hidden bg-[#181818] border border-white/15 hover:border-[#F97316] text-left cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-xl focus-visible:outline-2 focus-visible:outline-[#F97316]"
    >
      <video
        ref={videoRef}
        src={`${reel.videoSrc}#t=0.5`}
        muted
        playsInline
        loop
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/95 via-[#0B0B0B]/20 to-[#0B0B0B]/35"
      />

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[11px] font-bold tracking-wider uppercase">
        <span className="text-[#F97316] tabular-nums drop-shadow">
          0{index + 1} · {reel.category}
        </span>
      </div>

      {/* Play Ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span
          className={`w-14 h-14 rounded-full bg-[#0B0B0B]/70 border border-[#F97316] text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 ${
            isHovered ? 'scale-110 bg-[#F97316]' : 'group-hover:scale-110'
          }`}
        >
          <Play className="w-5 h-5 fill-current translate-x-0.5" aria-hidden="true" />
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg font-bold text-white leading-snug drop-shadow">
          {reel.title}
        </h3>
        <p className="mt-1.5 text-xs text-[#D4D4D4] leading-relaxed line-clamp-2">
          {reel.summary}
        </p>
      </div>
    </button>
  );
}
