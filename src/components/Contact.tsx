import { useState, type FormEvent } from 'react';
import { Phone, MapPin, ArrowUpRight, CheckCircle2, AlertCircle, MessageCircle, Instagram } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, getWhatsAppUrl } from '../data/erkanData';

interface FormState {
  fullName: string;
  phone: string;
  service: string;
  message: string;
}

interface SubmissionSuccess {
  referenceId: string;
  emailConfigured: boolean;
  notice: string;
  submittedData: FormState;
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    phone: '',
    service: SERVICES[0].title,
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [success, setSuccess] = useState<SubmissionSuccess | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg(null);

    if (form.fullName.trim().length < 2) {
      setErrorMsg('Lütfen Ad Soyad alanını doldurun.');
      return;
    }

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setErrorMsg('Lütfen geçerli bir telefon numarası yazın.');
      return;
    }

    if (form.message.trim().length < 5) {
      setErrorMsg('Lütfen yaptırmak istediğiniz işle ilgili kısa bir not yazın.');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        setErrorMsg(
          data.error ||
            'Form şu an gönderilemedi. Dilerseniz WhatsApp veya telefonla doğrudan ulaşabilirsiniz.'
        );
        return;
      }

      setSuccess({
        referenceId: data.referenceId,
        emailConfigured: Boolean(data.emailConfigured),
        notice: data.notice,
        submittedData: { ...form },
      });
      setForm({
        fullName: '',
        phone: '',
        service: SERVICES[0].title,
        message: '',
      });
    } catch {
      setErrorMsg(
        'Bağlantı kurulamadı. İsterseniz doğrudan WhatsApp’tan yazabilir veya telefonla arayabilirsiniz.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  const buildFormWhatsAppMessage = (data: FormState) =>
    `Merhaba EFM Interiors, web sitenizden teklif talebi gönderiyorum.\n\nAd Soyad: ${data.fullName}\nTelefon: ${data.phone}\nHizmet: ${data.service}\nMesaj: ${data.message}`;

  return (
    <section
      id="iletisim"
      className="py-16 lg:py-24 bg-[#F5F5F5] text-[#0B0B0B] border-t border-[#F97316]/35"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="max-w-2xl pb-12 border-b border-[#0B0B0B]/15">
          <p className="text-xs tracking-[0.2em] uppercase text-[#EA580C] font-bold">
            İletişim &amp; Teklif
          </p>
          <h2
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-bold leading-[1.12] text-[#0B0B0B]"
            style={{ textWrap: 'balance' }}
          >
            Fiyat Alın veya Atölyemize Uğrayın
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#333333] leading-relaxed">
            Ücretsiz ölçü ve fiyat bilgisi için WhatsApp’tan fotoğraf ya da ölçü gönderebilir,
            telefonla arayabilir veya Döşemealtı Yeşilbayır’daki yerimize uğrayabilirsiniz.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Direct Channels & Map */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white rounded-2xl border border-[#0B0B0B]/12 p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#EA580C]">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Telefon</span>
                </div>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="mt-3 block font-display text-2xl font-bold text-[#0B0B0B] hover:text-[#EA580C] transition-colors tabular-nums"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
                <p className="mt-1.5 text-xs text-[#525252]">
                  Aramak için numaranın üzerine dokunabilirsiniz.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-[#0B0B0B]/12 p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#16A34A]">
                  <MessageCircle className="w-3.5 h-3.5 text-[#16A34A]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </div>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap"
                >
                  <span>WhatsApp’tan Yazın</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
                <p className="mt-2 text-xs text-[#525252]">
                  Odanızın fotoğrafını atıp hızlıca bilgi alın.
                </p>
              </div>

              <div className="sm:col-span-2 bg-white rounded-2xl border border-[#0B0B0B]/12 p-5 flex flex-wrap items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#525252]">
                      Instagram
                    </p>
                    <p className="text-sm font-bold text-[#0B0B0B]">
                      @{BUSINESS_INFO.instagramHandle}
                    </p>
                  </div>
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white hover:brightness-110 transition-all whitespace-nowrap"
                >
                  <Instagram className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                  <span>Instagram’da Takip Et</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#0B0B0B]/12 overflow-hidden shadow-xs">
              <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#0B0B0B]/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#EA580C]">
                    <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Adres</span>
                  </div>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-[#0B0B0B]">
                    {BUSINESS_INFO.address}
                  </p>
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold bg-[#0B0B0B] text-white hover:bg-[#F97316] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Yol Tarifi Al</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="w-full h-64 sm:h-72 bg-[#E5E5E5]">
                <iframe
                  title="EFM Interiors Konum Haritası - Yeşilbayır, Döşemealtı/Antalya"
                  src={BUSINESS_INFO.googleMapsEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Validated Lead Capture Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#0B0B0B]/12 border-t-4 border-t-[#F97316] p-6 sm:p-8 lg:p-10 shadow-sm">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
              Teklif &amp; Keşif Formu
            </h3>
            <p className="mt-2 text-sm text-[#404040] leading-relaxed">
              Kısa bilgilerinizi bırakın, size dönüş yapalım. Dilerseniz formu doldurduktan sonra
              tek tuşla WhatsApp’tan da iletebilirsiniz.
            </p>

            {success ? (
              <div className="mt-8 bg-[#F4F4F4] rounded-xl border border-[#0B0B0B]/15 p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-base font-bold text-[#0B0B0B]">
                      Notunuz Alındı · Referans: {success.referenceId}
                    </p>
                    <p className="mt-1.5 text-sm text-[#333333] leading-relaxed">
                      {success.notice}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#0B0B0B]/12 flex flex-wrap items-center gap-3">
                  <a
                    href={getWhatsAppUrl(buildFormWhatsAppMessage(success.submittedData))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors"
                  >
                    <span>WhatsApp’tan da İlet</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setSuccess(null)}
                    className="px-4 py-3 rounded-lg text-xs sm:text-sm font-bold text-[#0B0B0B] border border-[#0B0B0B]/25 hover:border-[#0B0B0B] bg-white cursor-pointer"
                  >
                    Yeni Form Yaz
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
                {errorMsg && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#0B0B0B] text-white text-xs sm:text-sm border border-[#F97316]"
                  >
                    <AlertCircle className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-[0.1em] text-[#0B0B0B]">
                    Ad Soyad
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
                    placeholder="Adınız ve soyadınız"
                    className="mt-2 w-full px-4 py-3 rounded-xl text-sm bg-[#F5F5F5] border border-[#0B0B0B]/15 text-[#0B0B0B] placeholder:text-[#737373] focus:outline-none focus:border-[#F97316] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-[0.1em] text-[#0B0B0B]">
                    Telefon
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="05XX XXX XX XX"
                    className="mt-2 w-full px-4 py-3 rounded-xl text-sm bg-[#F5F5F5] border border-[#0B0B0B]/15 text-[#0B0B0B] placeholder:text-[#737373] focus:outline-none focus:border-[#F97316] focus:bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-bold uppercase tracking-[0.1em] text-[#0B0B0B]">
                    İlgilendiğiniz İş
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    className="mt-2 w-full px-4 py-3 rounded-xl text-sm bg-[#F5F5F5] border border-[#0B0B0B]/15 text-[#0B0B0B] focus:outline-none focus:border-[#F97316] focus:bg-white"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.title}>
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-[0.1em] text-[#0B0B0B]">
                    Notunuz
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="Neler yaptırmak istediğinizi veya yaklaşık ölçüleri kısaca yazabilirsiniz."
                    className="mt-2 w-full px-4 py-3 rounded-xl text-sm bg-[#F5F5F5] border border-[#0B0B0B]/15 text-[#0B0B0B] placeholder:text-[#737373] focus:outline-none focus:border-[#F97316] focus:bg-white resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#F97316] text-white hover:bg-[#EA580C] disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    {submitting ? 'Gönderiliyor...' : 'Formu Gönder'}
                  </button>

                  <a
                    href={getWhatsAppUrl(
                      form.fullName || form.message
                        ? buildFormWhatsAppMessage(form)
                        : undefined
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-[#16A34A] text-white hover:bg-[#15803D] transition-colors whitespace-nowrap"
                  >
                    <span>WhatsApp ile Gönder</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
