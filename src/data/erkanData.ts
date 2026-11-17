export const BUSINESS_INFO = {
  name: 'EFM Interiors',
  address: 'Yeşilbayır, Atatürk Cd. No:43, 07190 Döşemealtı/Antalya',
  shortAddress: 'Yeşilbayır, Atatürk Cd. No:43 · Döşemealtı, Antalya',
  phoneDisplay: '0533 503 04 47',
  phoneHref: 'tel:+905335030447',
  whatsappNumber: '905335034047',
  whatsappDefaultMessage:
    "Merhaba, EFM Interiors'tan mobilya ve iç mimari hizmetleriniz hakkında bilgi ve fiyat teklifi almak istiyorum.",
  googleRating: '4,9',
  googleReviewCount: 78,
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Ye%C5%9Filbay%C4%B1r,+Atat%C3%BCrk+Cd.+No:43,+07190+D%C3%B6%C5%9Femealt%C4%B1/Antalya',
  googleMapsEmbedUrl:
    'https://maps.google.com/maps?q=Ye%C5%9Filbay%C4%B1r,+Atat%C3%BCrk+Cd.+No:43,+07190+D%C3%B6%C5%9Femealt%C4%B1/Antalya&t=&z=15&ie=UTF8&iwloc=&output=embed',
  instagramHandle: 'Erkanmobilyaa',
  instagramUrl: 'https://www.instagram.com/Erkanmobilyaa/',
};

export type PageId =
  | 'home'
  | 'hakkimizda'
  | 'hizmetlerimiz'
  | 'uretim'
  | 'calismalar'
  | 'iletisim';

export interface NavRoute {
  id: PageId;
  label: string;
  hash: string;
}

export const NAV_ROUTES: NavRoute[] = [
  { id: 'home', label: 'Ana Sayfa', hash: '#ana-sayfa' },
  { id: 'hakkimizda', label: 'Hakkımızda', hash: '#hakkimizda' },
  { id: 'hizmetlerimiz', label: 'Hizmetlerimiz', hash: '#hizmetlerimiz' },
  { id: 'uretim', label: 'Nasıl Çalışıyoruz?', hash: '#nasil-calisiyoruz' },
  { id: 'calismalar', label: 'Çalışmalarımız', hash: '#calismalarimiz' },
  { id: 'iletisim', label: 'İletişim', hash: '#iletisim' },
];

export const CONCEPT_IMAGES = {
  heroLiving: '/assets/aistudio/468622957_18287183470211114_5578285483547594137_n_400347b5.jpeg',
  aboutShowcase: '/assets/aistudio/468608622_18287183503211114_5870022352729269657_n_08ed6953.jpeg',
  kitchenShowcase: '/src/assets/images/service_bespoke_kitchen_1794946984499.jpg',
  studioCraftsmanship: '/src/assets/images/about_cnc_craftsmanship_1794946984478.jpg',
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || BUSINESS_INFO.whatsappDefaultMessage;
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export type ProjectCategory =
  | 'Tümü'
  | 'Mutfaklar'
  | 'Banyolar'
  | 'Gardıroplar'
  | 'Salon Mobilyaları'
  | 'Özel Tasarım'
  | 'İç Mimari Projeler';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Tümü',
  'Mutfaklar',
  'Banyolar',
  'Gardıroplar',
  'Salon Mobilyaları',
  'Özel Tasarım',
  'İç Mimari Projeler',
];

export interface ProjectPhoto {
  src: string;
  caption: string;
}

export interface ProjectSet {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  description: string;
  photos: ProjectPhoto[];
  categories: Exclude<ProjectCategory, 'Tümü'>[];
  specs: string[];
}

export const PROJECT_SETS: ProjectSet[] = [
  {
    id: 'tugce-ates-evi',
    title: "Tuğçe Ateş Hanım'ın Evi — Mutfak & Banyo Tasarımı",
    subtitle: 'Komple Mutfak & Banyo Yenileme',
    location: 'Antalya',
    description:
      'Tavana kadar uzanan vizon tonlu mat mutfak dolapları, gold profil kulp ve detaylarla tamamlandı. Evin ana banyosu ve misafir WC alanları da aynı renk ve malzeme diliyle sıfırdan üretilip monte edildi.',
    categories: ['Mutfaklar', 'Banyolar', 'İç Mimari Projeler', 'Özel Tasarım'],
    specs: ['Özel Ölçü Mutfak', 'Gold Kulp & Profil', 'Ana Banyo Dolabı', 'Misafir WC Dolabı'],
    photos: [
      {
        src: '/assets/aistudio/Tu__e_Ate__han_m_n_evi_i_in_tasar_mlar_m_z___Yorumlar_n_z_bizim_i_in__ok__nemli___interiordec__5__2be226d6.jpg',
        caption: 'Mutfak genel görünümü — mat kapaklar, gizli profil kulplar ve beyaz tezgah',
      },
      {
        src: '/assets/aistudio/Tu__e_Ate__han_m_n_evi_i_in_tasar_mlar_m_z___Yorumlar_n_z_bizim_i_in__ok__nemli___interiordec__4__9e034db7.jpg',
        caption: 'Boy dolaplar, fırın nişi ve gold uzun kulp detayları',
      },
      {
        src: '/assets/aistudio/Tu__e_Ate__han_m_n_evi_i_in_tasar_mlar_m_z___Yorumlar_n_z_bizim_i_in__ok__nemli___interiordec__3__7092bc71.jpg',
        caption: 'Ana banyo — özel ölçü lavabo dolabı, gold çerçeveli ayna ve duşakabin uyumu',
      },
      {
        src: '/assets/aistudio/Tu__e_Ate__han_m_n_evi_i_in_tasar_mlar_m_z___Yorumlar_n_z_bizim_i_in__ok__nemli___interiordec__2__1e99f308.jpg',
        caption: 'Banyo lavabo dolabı, gold kulplar ve duvar aplik aydınlatması',
      },
      {
        src: '/assets/aistudio/Tu__e_Ate__han_m_n_evi_i_in_tasar_mlar_m_z___Yorumlar_n_z_bizim_i_in__ok__nemli___interiordec__1__30657b83.jpg',
        caption: 'Misafir WC — kompakt dolap ve gold çerçeveli ayna uygulaması',
      },
    ],
  },
  {
    id: 'yeni-villa-projesi',
    title: 'Villa Projesi — Salon, Mutfak & Antre 3B Tasarımı',
    subtitle: 'Komple Villa İç Mekan Tasarımı',
    location: 'Antalya',
    description:
      'Yeni villa projemiz için salon TV duvarı, mutfak-yemek alanı ve antre holünü baştan sona aynı malzeme ve renk uyumunda planladık. Doğal ahşap çıtalar, koyu mermer dokular, siyah çerçeveli cam kapılar ve kavisli merdiven detayları tek çizgide birleşti.',
    categories: ['Mutfaklar', 'Salon Mobilyaları', 'İç Mimari Projeler', 'Özel Tasarım'],
    specs: ['Salon TV Ünitesi', 'Çapraz Ahşap Mutfak', 'Antre Portmanto', 'Kemerli LED Niş'],
    photos: [
      {
        src: '/assets/aistudio/Yeni_villa_projemizden____tasar_m__i_mekantasar_m___mobilyadekorasyon__mobilya__mobilyaimalat__db046228.jpg',
        caption: 'Salon — ahşap çıtalı TV duvarı, ışıklı kitaplık nişi ve cam sürgülü mutfak geçişi',
      },
      {
        src: '/assets/aistudio/Yeni_villa_projemizden____tasar_m__i_mekantasar_m___mobilyadekorasyon__mobilya__mobilyaimalat___1__e26a1e84.jpg',
        caption: 'Mutfak — tavana kadar beyaz dolaplar, çapraz ahşap kapaklar ve siyah damarlı mermer tezgah',
      },
      {
        src: '/assets/aistudio/Yeni_villa_projemizden____tasar_m__i_mekantasar_m___mobilyadekorasyon__mobilya__mobilyaimalat___2__10312cb1.jpg',
        caption: 'Mutfak & yemek alanı — LED ışıklı ahşap kolon detayı ve masa düzeni',
      },
      {
        src: '/assets/aistudio/Yeni_villa_projemizden____tasar_m__i_mekantasar_m___mobilyadekorasyon__mobilya__mobilyaimalat___3__2ddee9f6.jpg',
        caption: 'Antre — boydan boya ahşap kulplu vestiyer dolabı ve kavisli merdiven başlangıcı',
      },
      {
        src: '/assets/aistudio/Yeni_villa_projemizden____tasar_m__i_mekantasar_m___mobilyadekorasyon__mobilya__mobilyaimalat___4__27a565e4.jpg',
        caption: 'Giriş holü — gold çerçeveli kemerli LED niş ve oval ayna duvar detayı',
      },
    ],
  },
  {
    id: 'siyah-mutfak-kahve-bari-donusum',
    title: 'Öncesi / Sonrası — Siyah Mutfak & Kahve Barı Dönüşümü',
    subtitle: 'Komple Tadilat, Duvar & Mobilya Uygulaması',
    location: 'Antalya',
    description:
      'Kırım ve alçıpan aşamasından itibaren ele aldığımız bu köşe alanı; mat siyah özel ölçü dolaplar, siyah cam tezgah arası, ahşap kahve barı tezgahı, duvar boyası ve aydınlatma uygulamasıyla baştan yarattık.',
    categories: ['Mutfaklar', 'Özel Tasarım', 'İç Mimari Projeler'],
    specs: ['Öncesi / Sonrası', 'Mat Siyah Mutfak', 'Ahşap Kahve Barı', 'Duvar & Aydınlatma'],
    photos: [
      {
        src: '/assets/aistudio/Sizin_i_in_tasarlad___m_z_mekanlar__her__eyiyle_sahipleniyoruz._Mobilyalar_n_z_n_yan_nda_duvar_r__1__e2a7a81a.jpg',
        caption: 'Sonrası — mat siyah dolaplar, ahşap kahve barı ve antrasit duvar uygulaması',
      },
      {
        src: '/assets/aistudio/Sizin_i_in_tasarlad___m_z_mekanlar__her__eyiyle_sahipleniyoruz._Mobilyalar_n_z_n_yan_nda_duvar_r__2__db5c1bd2.jpg',
        caption: 'Öncesi — kırım, tesisat ve alçıpan hazırlık aşaması',
      },
      {
        src: '/assets/aistudio/Sizin_i_in_tasarlad___m_z_mekanlar__her__eyiyle_sahipleniyoruz._Mobilyalar_n_z_n_yan_nda_duvar_r_c505e240.jpg',
        caption: 'Sonrası — yan açıdan ahşap bar tezgahı, siyah cam pano ve kolon kaplaması',
      },
    ],
  },
  {
    id: 'salon-led-koridor-seti',
    title: 'Salon TV Duvarı, Merdiven Separatörü & Koridor Uygulaması',
    subtitle: 'Salon & Antre İç Mimari',
    location: 'Antalya',
    description:
      'Merdiven boşluğu için özel dikey ahşap separatör, gizli gün ışığı LED aydınlatmalı duvar çıtaları, CNC kesimli EFM logolu geometrik TV duvarı ve koridor kapı giydirmeleri bir arada uygulandı.',
    categories: ['Salon Mobilyaları', 'İç Mimari Projeler', 'Özel Tasarım'],
    specs: ['Dikey Separatör', 'CNC Geometrik Panel', 'Gizli LED Aydınlatma', 'Askılı TV Konsolu'],
    photos: [
      {
        src: '/assets/aistudio/unnamed__1__7ee0115e.webp',
        caption: 'CNC kesimli LED aydınlatmalı geometrik TV duvarı ve askılı konsol',
      },
      {
        src: '/assets/aistudio/468622957_18287183470211114_5578285483547594137_n_400347b5.jpeg',
        caption: 'Merdiven yanı dikey ahşap separatör ve LED aydınlatmalı çıtalı duvar',
      },
      {
        src: '/assets/aistudio/468608622_18287183503211114_5870022352729269657_n_08ed6953.jpeg',
        caption: 'Özel lake oda kapıları ve LED ışıklı taş/çıta koridor duvarı',
      },
    ],
  },
  {
    id: 'yatak-giyinme-seti',
    title: 'Ebeveyn Yatak Odası, Giyinme Odası & Makyaj Konsolu',
    subtitle: 'Yatak & Giyinme Odası Takımı',
    location: 'Antalya',
    description:
      'Kapitone başlıklı özel karyola, bizoteli ayna duvar panosu, çift kanatlı girişin ardında boydan boya lake giyinme odası dolapları ve kavisli ayaklı makyaj masası tek takım olarak üretildi.',
    categories: ['Gardıroplar', 'Özel Tasarım', 'İç Mimari Projeler'],
    specs: ['Bizoteli Ayna Pano', 'Lake Giyinme Odası', 'CNC Motifli Kapı', 'Makyaj Konsolu'],
    photos: [
      {
        src: '/assets/aistudio/unnamed__2__62ddcd2d.webp',
        caption: 'Kapitone yatak başlığı, bizoteli ayna çerçeve ve özel karyola',
      },
      {
        src: '/assets/aistudio/unnamed__5__9d0d79a5.webp',
        caption: 'Çift kanatlı kapı ardında tavana kadar lake giyinme odası dolapları',
      },
      {
        src: '/assets/aistudio/unnamed_c4587deb.webp',
        caption: 'Kavisli ayaklı üç çekmeceli lake makyaj masası ve bizoteli ayna',
      },
    ],
  },
  {
    id: 'genc-odasi-seti',
    title: 'Kişiye Özel Harf Kesimli Genç Odası & Çalışma Alanı',
    subtitle: 'Genç Odası Dolap & Masa',
    location: 'Antalya',
    description:
      'Meşe dokulu gövde üzerine mat beyaz ve mavi kapaklarla tasarlanan isimli gardırop, odanın köşesine tam oturan kavisli L çalışma masası ve duvar rafları.',
    categories: ['Gardıroplar', 'Özel Tasarım'],
    specs: ['CNC Harf İşleme', 'Yan Kitaplık Rafları', 'Kavisli L Çalışma Masası', 'Duvar Rafları'],
    photos: [
      {
        src: '/assets/aistudio/unnamed__3__fa9676df.webp',
        caption: 'CNC harf işlemeli genç odası gardırobu ve yan açık raflar',
      },
      {
        src: '/assets/aistudio/unnamed__4__8340202a.webp',
        caption: 'Oda ölçüsüne özel L çalışma masası ve duvar rafları',
      },
    ],
  },
];

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlights: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'mutfak-dolabi',
    number: '01',
    title: 'Mutfak Dolabı Tasarımı ve Üretimi',
    description:
      'Mutfağınızın ölçüsüne göre dolap, çekmece ve beyaz eşya yerleşimini planlayıp uzun ömürlü malzemelerle üretiyoruz.',
    highlights: ['Yerinde ölçü & 3B çizim', 'Lake, akrilik ve doğal kaplama', 'Frenli ray ve menteşe'],
  },
  {
    id: 'ozel-tasarim-mobilya',
    number: '02',
    title: 'Özel Tasarım Mobilya',
    description:
      'Hazır ölçülere uymaya çalışmak yerine; makyaj masası, dresuar, çalışma masası ve yatak başlığını tam odanıza göre yapıyoruz.',
    highlights: ['Tam odaya göre ölçü', 'Renk ve doku seçimi', 'Temiz köşe birleşimleri'],
  },
  {
    id: 'ic-mimari-projelendirme',
    number: '03',
    title: 'İç Mimari ve Projelendirme',
    description:
      'Kendi iç mimarlarımızla evinizi geziyor, dolaplardan duvar panellerine kadar her detayın uyumunu üretime geçmeden çiziyoruz.',
    highlights: ['Ücretsiz ilk görüşme', 'Malzeme & renk uyumu', 'Tek elden takip'],
  },
  {
    id: 'banyo-dolaplari',
    number: '04',
    title: 'Banyo Dolapları',
    description:
      'Neme dayanıklı gövde ve kapaklarla banyonuza hem düzenli depolama alanı hem de şık bir görünüm kazandırıyoruz.',
    highlights: ['Neme dayanıklı malzeme', 'Lavabo altı özel çekmece', 'Ayna & aplik uyumu'],
  },
  {
    id: 'gardirop-giyinme-odalari',
    number: '05',
    title: 'Gardırop ve Giyinme Odaları',
    description:
      'Tavana kadar tek parça yükselen dolaplarla boş kalan üst alanları bile değerlendiriyor, düzenli giyinme odaları kuruyoruz.',
    highlights: ['Tavana kadar tam kullanım', 'Sürgü veya menteşe kapak', 'İç LED ve askı sistemleri'],
  },
  {
    id: 'tv-unitesi-salon',
    number: '06',
    title: 'TV Ünitesi ve Salon Mobilyaları',
    description:
      'Ahşap çıta duvarlar, gizli LED ışıklı paneller ve kabloları gizleyen askılı konsollarla salonunuzun havasını değiştiriyoruz.',
    highlights: ['Çıtalı duvar uygulamaları', 'Gizli kablo & LED ışık', 'Konsol ve kitaplık'],
  },
  {
    id: 'cnc-kesim-uretim',
    number: '07',
    title: 'CNC Kesim ve Mobilya Üretimi',
    description:
      'Atölyemizdeki CNC makineleriyle milimetrik kesimler, dekoratif geometrik paneller ve özel motifli kapaklar işliyoruz.',
    highlights: ['Hassas CNC kesim', 'Dekoratif duvar panelleri', 'Özel kapak ve isim işleme'],
  },
  {
    id: 'mobilya-montaj-uygulama',
    number: '08',
    title: 'Mobilya Montaj ve Uygulama',
    description:
      'İşi taşerona bırakmıyoruz; atölyemizde ürettiğimiz mobilyaları kendi deneyimli ustalarımızla evinize temiz şekilde kuruyoruz.',
    highlights: ['Kendi usta ekibimiz', 'Temiz ve düzenli kurulum', 'Zamanında teslimat'],
  },
];

export interface WhyUsItem {
  number: string;
  title: string;
  description: string;
}

export const WHY_ERKAN: WhyUsItem[] = [
  {
    number: '01',
    title: 'İç Mimar Ekibimiz İşin Başında',
    description:
      'Rastgele dolap çizmiyoruz. İç mimarlarımız evinizi görüp kullanım alışkanlığınıza göre en doğru yerleşimi çıkarıyor.',
  },
  {
    number: '02',
    title: 'Kendi Ustalarımızla Üretim',
    description:
      'Yıllardır birlikte çalıştığımız mobilya ustalarımız, çizilen her parçayı atölyemizde özenle işliyor.',
  },
  {
    number: '03',
    title: 'Sağlam Malzeme & Aksesuar',
    description:
      'Kapakları birkaç ay sonra sarkan ucuz malzemeler değil, yıllarca sorunsuz kullanacağınız ray ve menteşeler takıyoruz.',
  },
  {
    number: '04',
    title: 'CNC ile Hatasız Kesim',
    description:
      'Özel kesim duvar panelleri, işlemeli kapılar ve milimetrik kapak aralıkları CNC parkurumuzdan çıkar.',
  },
  {
    number: '05',
    title: 'Size Özel Ölçü',
    description:
      'Her evin duvarı ve köşesi farklıdır. Yeri milimi milimine ölçüp boşluk bırakmadan tam oturan mobilyalar yapıyoruz.',
  },
  {
    number: '06',
    title: 'Temiz Kurulum & Teslimat',
    description:
      'Montaj günü evinizi kirletmeden, kapak ayarlarını tek tek kontrol ederek eksiksiz teslim ediyoruz.',
  },
  {
    number: '07',
    title: 'Baştan Sona Tek Muhatap',
    description:
      'Ölçüden çizime, boyadan montaja kadar her aşamada karşınızda tek bir ekip, EFM Interiors ekibi var.',
  },
];

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: '01',
    title: 'Yerinde Ölçü & Konuşma',
    description:
      'Antalya ve Döşemealtı’ndaki evinize veya işyerinize geliyoruz. Ölçüyü alıp ne istediğinizi ve günlük ihtiyaçlarınızı dinliyoruz.',
    deliverable: 'Doğru Ölçü & Keşif',
  },
  {
    step: '02',
    title: 'Çizim & Malzeme Seçimi',
    description:
      'İç mimarlarımız yerleşimi çiziyor. Renk kartelalarını ve kulp seçeneklerini görüp üretime geçmeden net kararı veriyorsunuz.',
    deliverable: 'Onaylı Çizim & Fiyat',
  },
  {
    step: '03',
    title: 'Atölyede CNC Kesim & İmalat',
    description:
      'Projeniz Döşemealtı’ndaki atölyemizde CNC ile kesiliyor, lake boya ve kenar işlemleri ustalarımız tarafından tamamlanıyor.',
    deliverable: 'Hassas Üretim',
  },
  {
    step: '04',
    title: 'Temiz Montaj & Teslim',
    description:
      'Söz verdiğimiz günde kendi ustalarımızla gelip kurulumu yapıyor, tüm kapak ve çekmeceleri ayarlayıp teslim ediyoruz.',
    deliverable: 'Kullanıma Hazır Teslimat',
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Özel ölçü mobilya yaptırmak için süreç nasıl başlıyor?',
    answer:
      'Bize WhatsApp’tan ya da telefondan yazdığınızda uygun bir gün için randevu veriyoruz. Gelip yerinizi görüyor, ölçüyü alıp seçenekleri ve net fiyatı paylaşıyoruz.',
  },
  {
    question: 'Antalya’nın hangi bölgelerine hizmet veriyorsunuz?',
    answer:
      'Atölyemiz Döşemealtı Yeşilbayır’da. Başta Döşemealtı, Konyaaltı, Muratpaşa, Kepez ve Lara olmak üzere Antalya genelindeki ev, villa ve ofis işlerine gidiyoruz.',
  },
  {
    question: 'Sadece mutfak veya tek oda için de çalışıyor musunuz?',
    answer:
      'Elbette. Komple daire ya da villa işlerinin yanında tek bir mutfak dolabı, banyo dolabı, giyinme odası veya TV ünitesi için de aynı özenle çalışıyoruz.',
  },
  {
    question: 'Fiyat teklifi almak ücretli mi?',
    answer:
      'Hayır, telefon veya WhatsApp üzerinden ön bilgi alabilir, yerinde ölçü ve keşif talebinizi ücretsiz oluşturabilirsiniz.',
  },
];

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Cem Cerkezoğlu',
    rating: 5,
    text: 'Erkan bey ve ekibine evimize yapılan mobilya uygulaması süresince gösterdikleri ilgi ve alaka ile temiz ve titiz çalışmalarından dolayı teşekkür ederiz. Hayırlı ve bereketli işler dileriz.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-2',
    author: 'Musa Göncü',
    rating: 5,
    text: 'Antalya’nın nadir kalmış esnaflarından Erkan Bey’e ilgi alakasından dolayı çok teşekkür ederim. Aynı şekilde mimari ve usta ekibine titiz çalışmaları ve hiçbir detayı atlamadıklarından dolayı ayrıca teşekkür ederim.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-3',
    author: 'Rafet Çakmak',
    rating: 5,
    text: 'Yaren Hanım ve Açelya Hanım’ın ilgi alakaları için çok teşekkür ederim, çizilen projeden çok daha güzel bir işçilikle mutfak dolaplarını yeniledik. Teşekkürler EFM Mobilya.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-4',
    author: 'Aykut Çıbık',
    rating: 5,
    text: 'Uzun yıllardır Erkan beyle çalışmaktayız. Bir villa ve işyeri yaptırdık ve yeni evimiz için anlaşmaları yaptık. Kalite için Erkan beyle çalışmaya devam.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-5',
    author: 'İpek Kunugus',
    rating: 5,
    text: 'Gezmiş olduğumuz onca firmadan sonra mimari ve ustalık birleşiminde ki son nokta.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-6',
    author: 'Gökhan Hanlıoğlu',
    rating: 5,
    text: 'Aldığım hizmetlerden dolayı çok memnun kaldım. Biz Hantek firması olarak çok memnun kaldık. Erkan Bey ve ekibine bilgilerinden dolayı çok teşekkür ederiz.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-7',
    author: 'Gökhan Özek',
    rating: 5,
    text: 'İşlerinde çok başarılılar. Mimarlarının ilgisi ve alakası çok iyiydi. Ustaların da işçiliği çok başarılıydı. Hayırlı işleriniz olsun.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-8',
    author: 'Uğur',
    rating: 5,
    text: 'Vizyonu açık bir işletme. CNC makineleri ile kesim yapmaktadır. Hayalinizdeki mobilya tasarımını önce bünyesinde çalışan iç mimarlar ve sizin düşüncenizle...',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-9',
    author: 'Mehmet Sarıyar',
    rating: 5,
    text: 'Kalite ve güvenin adresi. Mimarlarıyla, çalışmalarıyla ve ustalarıyla bir numara.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-10',
    author: 'Yıldız Donat',
    rating: 5,
    text: 'Ben mutfağımı yaptırdım, kalite süper. İlgi ve alakaları için teşekkür ederim, herkese tavsiye ederim.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-11',
    author: 'Bayram Mobilya',
    rating: 5,
    text: 'Tasarım, imalat ve montajın her aşamasında oldukça profesyonel bir ekip.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-12',
    author: 'Özgürlük 1917',
    rating: 5,
    text: 'Profesyonel ekip, kaliteli malzeme, güler yüzlü hizmet. Tüm ekibe teşekkürler.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-13',
    author: 'Sercan Ünal',
    rating: 5,
    text: 'Güvenilir, hızlı teslimat ve kaliteli işçilik.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-14',
    author: 'Şura Kocaoğlan',
    rating: 5,
    text: 'Güler yüzlü ve sıcak hizmetinizden dolayı teşekkür ederiz. Dolaplardan çok memnun kaldık.',
    source: 'Google Yorumu',
  },
  {
    id: 'rev-15',
    author: 'Hüseyin Tezcan',
    rating: 5,
    text: 'Egepen ve kaliteli mobilya üretiyorlar. Çok iyi çalışıyorlar, müşteri alakalı, güzel kaliteli ürünler yapıyorlar.',
    source: 'Google Yorumu',
  },
];
