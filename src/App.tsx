import { useState, useEffect, useCallback } from 'react';
import { NAV_ROUTES, type PageId } from './data/erkanData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/VideoShowcase';
import { WhyArchitect } from './components/WhyArchitect';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyErkan } from './components/WhyErkan';
import { Reviews } from './components/Reviews';
import { ProjectsGallery } from './components/ProjectsGallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { PageHeader } from './components/PageHeader';
import { ProductionProcessPage } from './components/ProductionProcessPage';

function resolvePageFromHash(): PageId {
  const hash = window.location.hash;
  const found = NAV_ROUTES.find((r) => r.hash === hash);
  return found ? found.id : 'home';
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() =>
    typeof window !== 'undefined' ? resolvePageFromHash() : 'home'
  );

  useEffect(() => {
    const onHashChange = () => {
      setActivePage(resolvePageFromHash());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = useCallback((page: PageId) => {
    const route = NAV_ROUTES.find((r) => r.id === page);
    if (route && window.location.hash !== route.hash) {
      window.history.pushState(null, '', route.hash);
    }
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToElementId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0B] text-white">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              onExploreWork={() => scrollToElementId('ornek-calismalar')}
              onOpenReviews={() => scrollToElementId('yorumlar')}
            />
            <VideoShowcase onExploreGallery={() => scrollToElementId('ornek-calismalar')} />
            <WhyArchitect />
            <About compact onReadMore={() => handleNavigate('hakkimizda')} />
            <Services compact onViewAll={() => handleNavigate('hizmetlerimiz')} />
            <WhyErkan onViewProcess={() => handleNavigate('uretim')} />
            <Reviews />
            <ProjectsGallery />
            <Contact />
          </>
        )}

        {activePage === 'hakkimizda' && (
          <>
            <PageHeader
              eyebrow="Hakkımızda"
              title="EFM Interiors Kimdir?"
              description="Antalya Döşemealtı’ndaki atölyemizde ölçüden tasarıma, üretimden montaja kadar kendi ekibimizle çalışıyoruz."
              currentLabel="Hakkımızda"
              onNavigate={handleNavigate}
            />
            <About />
            <WhyArchitect />
            <WhyErkan onViewProcess={() => handleNavigate('uretim')} />
            <Reviews />
            <Contact />
          </>
        )}

        {activePage === 'hizmetlerimiz' && (
          <>
            <PageHeader
              eyebrow="Neler Yapıyoruz?"
              title="Özel Ölçü Mobilya ve İç Mekan İşleri"
              description="Mutfak dolabından giyinme odasına, banyodan salon TV ünitesine ve CNC kesime kadar evinizin ölçüsüne göre üretim yapıyoruz."
              currentLabel="Hizmetlerimiz"
              onNavigate={handleNavigate}
            />
            <Services />
            <ProjectsGallery />
            <Contact />
          </>
        )}

        {activePage === 'uretim' && (
          <>
            <PageHeader
              eyebrow="Süreç & Atölye"
              title="Nasıl Çalışıyoruz?"
              description="Gelip ölçüyü almamızdan çizime, atölyede CNC kesiminden evinizde montajına kadar tüm adımlar."
              currentLabel="Nasıl Çalışıyoruz?"
              onNavigate={handleNavigate}
            />
            <ProductionProcessPage onNavigate={handleNavigate} />
            <Contact />
          </>
        )}

        {activePage === 'calismalar' && (
          <>
            <PageHeader
              eyebrow="İşlerimiz"
              title="Tamamladığımız Çalışmalar"
              description="Antalya’da müşterilerimizin evleri ve işyerleri için üretip montajını bitirdiğimiz işlerden fotoğraflar."
              currentLabel="Çalışmalarımız"
              onNavigate={handleNavigate}
            />
            <ProjectsGallery />
            <Reviews />
            <Contact />
          </>
        )}

        {activePage === 'iletisim' && (
          <>
            <PageHeader
              eyebrow="Bize Ulaşın"
              title="İletişim & Ücretsiz Ölçü"
              description="Döşemealtı Yeşilbayır’daki adresimiz, telefonumuz, WhatsApp hattımız ve teklif formumuzdan bize hemen ulaşabilirsiniz."
              currentLabel="İletişim"
              onNavigate={handleNavigate}
            />
            <Contact />
          </>
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppFloating />
    </div>
  );
}
