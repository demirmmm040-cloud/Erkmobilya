import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';

interface ContactPayload {
  fullName?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
}

interface StoredInquiry {
  referenceId: string;
  fullName: string;
  phone: string;
  service: string;
  message: string;
  createdAt: string;
}

function sanitizePhone(phone: string): string {
  return phone.replace(/[^\d+\s()-]/g, '').trim();
}

function isValidTurkishOrIntlPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'EFM Interiors API' });
  });

  app.post('/api/contact', (req, res) => {
    const body = (req.body || {}) as ContactPayload;

    const fullName = typeof body.fullName === 'string' ? body.fullName.trim() : '';
    const phoneRaw = typeof body.phone === 'string' ? body.phone : '';
    const phone = sanitizePhone(phoneRaw);
    const service = typeof body.service === 'string' ? body.service.trim() : '';
    const message = typeof body.message === 'string' ? body.message.trim() : '';

    if (fullName.length < 2 || fullName.length > 120) {
      res.status(400).json({
        ok: false,
        error: 'Lütfen geçerli bir Ad Soyad bilgisi giriniz (en az 2 karakter).',
      });
      return;
    }

    if (!isValidTurkishOrIntlPhone(phone)) {
      res.status(400).json({
        ok: false,
        error: 'Lütfen geçerli bir telefon numarası giriniz (ör. 0533 503 04 47).',
      });
      return;
    }

    if (!service || service.length > 120) {
      res.status(400).json({
        ok: false,
        error: 'Lütfen ilgilendiğiniz hizmeti seçiniz.',
      });
      return;
    }

    if (message.length < 5 || message.length > 2000) {
      res.status(400).json({
        ok: false,
        error: 'Lütfen projeniz veya talebiniz hakkında kısa bir mesaj yazınız.',
      });
      return;
    }

    const referenceId = `EM-${Date.now().toString(36).toUpperCase()}`;
    const inquiry: StoredInquiry = {
      referenceId,
      fullName,
      phone,
      service,
      message,
      createdAt: new Date().toISOString(),
    };

    try {
      const dataDir = path.resolve(__dirname, 'data');
      const filePath = path.join(dataDir, 'inquiries.json');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      let existing: StoredInquiry[] = [];
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          existing = parsed;
        }
      }
      existing.push(inquiry);
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf-8');
    } catch (err) {
      console.error('Inquiry persistence error:', err);
      res.status(500).json({
        ok: false,
        error: 'Talebiniz kaydedilirken sunucu hatası oluştu. Lütfen WhatsApp veya telefon üzerinden ulaşınız.',
      });
      return;
    }

    const emailConfigured = Boolean(
      process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS && process.env.CONTACT_TO_EMAIL
    );

    res.status(201).json({
      ok: true,
      referenceId,
      savedToServer: true,
      emailConfigured,
      notice: emailConfigured
        ? 'Talebiniz kaydedildi ve e-posta bildirimi iletildi.'
        : 'Talebiniz sunucuda güvenli biçimde kaydedildi. E-posta/SMTP servisi harici olarak yapılandırılmadığı için ekibimize anında ulaşmak adına WhatsApp üzerinden doğrudan iletebilirsiniz.',
    });
  });

  if (!IS_PROD) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`EFM Interiors server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
