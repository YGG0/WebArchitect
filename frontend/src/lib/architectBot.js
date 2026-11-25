import { PACKAGES_DATA } from '@/data/mockData';

// Normalisasi singkatan & typo umum Bahasa Indonesia
const SLANG_MAP = {
  brp: 'berapa',
  brpa: 'berapa',
  brapa: 'berapa',
  hrg: 'harga',
  hrga: 'harga',
  hargaa: 'harga',
  biayaa: 'biaya',
  rmh: 'rumah',
  rumh: 'rumah',
  bgn: 'bangun',
  bngun: 'bangun',
  dsain: 'desain',
  disain: 'desain',
  design: 'desain',
  desgn: 'desain',
  arsitek: 'arsitek',
  arsitect: 'arsitek',
  arsitekt: 'arsitek',
  arsitk: 'arsitek',
  arsitektur: 'arsitektur',
  yg: 'yang',
  dgn: 'dengan',
  utk: 'untuk',
  untk: 'untuk',
  klo: 'kalau',
  kl: 'kalau',
  kalo: 'kalau',
  gimna: 'bagaimana',
  gmn: 'bagaimana',
  gmna: 'bagaimana',
  bgmn: 'bagaimana',
  dmna: 'dimana',
  dmn: 'dimana',
  kpn: 'kapan',
  apakh: 'apakah',
  apkah: 'apakah',
  wa: 'whatsapp',
  watsap: 'whatsapp',
  wasap: 'whatsapp',
  nomer: 'nomor',
  no: 'nomor',
  tlp: 'telepon',
  telp: 'telepon',
  tlpn: 'telepon',
  kantro: 'kantor',
  almt: 'alamat',
  pkt: 'paket',
  bgt: 'banget',
  ga: 'tidak',
  gak: 'tidak',
  ngga: 'tidak',
  engga: 'tidak',
  blh: 'boleh',
  bs: 'bisa',
  bsa: 'bisa',
  m2: 'meter',
  mtr: 'meter',
  lt: 'lantai',
  lntai: 'lantai',
  lnti: 'lantai',
  kmr: 'kamar',
  kmar: 'kamar',
  renov: 'renovasi',
  revis: 'revisi',
  revs: 'revisi',
  vew: 'view',
  gmap: 'maps',
  gmaps: 'maps',
  map: 'maps',
  psn: 'pesan',
  pesen: 'pesan',
  krja: 'kerja',
  karya: 'portofolio',
  porto: 'portofolio',
};

// Hitung jarak edit (Levenshtein) untuk toleransi salah ketik
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

// Bersihkan tanda baca (.,?!/- dll) dan pecah jadi kata bersih
function normalizeTokens(rawText) {
  const cleaned = rawText
    .toLowerCase()
    .replace(/[.,?!;:'"()\[\]{}\/\\\-_~`@#$%^&*+=<>|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  if (!cleaned) return { cleaned: '', tokens: [] };

  const tokens = cleaned.split(' ').map((word) => SLANG_MAP[word] || word);
  return { cleaned: tokens.join(' '), tokens };
}

// Cek apakah ada kata user yang cocok (atau mirip typo) dengan daftar kata kunci
function countKeywordMatches(tokens, keywords) {
  let score = 0;
  for (const kw of keywords) {
    let matched = false;
    for (const token of tokens) {
      if (token === kw) {
        score += 2;
        matched = true;
        break;
      }
      // Toleransi typo: 1 huruf untuk kata 4-5 huruf, 2 huruf untuk kata >=6 huruf
      if (kw.length >= 4 && token.length >= 3) {
        const maxDist = kw.length >= 6 ? 2 : 1;
        if (levenshtein(token, kw) <= maxDist) {
          score += 1.5;
          matched = true;
          break;
        }
      }
    }
    if (matched) continue;
  }
  return score;
}

// Deteksi angka luas m2 atau dimensi P x L (misal 10x15 = 150 m2)
function extractAreaSqm(rawText) {
  const dimMatch = rawText.toLowerCase().match(/(\d+(?:[.,]\d+)?)\s*[x×*]\s*(\d+(?:[.,]\d+)?)/);
  if (dimMatch) {
    const p = parseFloat(dimMatch[1].replace(',', '.'));
    const l = parseFloat(dimMatch[2].replace(',', '.'));
    if (p > 0 && l > 0 && p * l <= 20000) {
      return Math.round(p * l);
    }
  }

  const areaMatch = rawText
    .toLowerCase()
    .match(/(?:luas|ukuran|tanah|lahan|bangunan|sekitar|kira)?\s*(\d{2,5})\s*(?:m2|m²|meter|persegi)?/);
  if (areaMatch) {
    const num = parseInt(areaMatch[1], 10);
    // Hindari menangkap tahun (2020-2030) atau 360/3d jika tanpa kata meter/luas
    const hasUnit = /(?:m2|m²|meter|persegi|luas|ukuran|tanah|lahan|bangunan)/i.test(rawText);
    if (hasUnit && num >= 20 && num <= 20000) {
      return num;
    }
  }
  return null;
}

function pickPackageByArea(sqm) {
  if (sqm <= 100) return PACKAGES_DATA[0]; // Starter
  if (sqm <= 200) return PACKAGES_DATA[1]; // Basic
  if (sqm <= 350) return PACKAGES_DATA[2]; // Standard
  if (sqm <= 500) return PACKAGES_DATA[3]; // Premium
  if (sqm <= 750) return PACKAGES_DATA[4]; // Exclusive
  return PACKAGES_DATA[5]; // Ultimate
}

export const QUICK_QUESTIONS = [
  'Berapa harga paket desain rumah?',
  'Bagaimana alur & lama pengerjaan?',
  'Apa saja kelengkapan gambar yang didapat?',
  'Apakah bisa konsultasi luar kota / online?',
  'Di mana lokasi kantor & Google Maps?',
];

export function getArchitectBotReply(userInput, settings = {}) {
  const { tokens } = normalizeTokens(userInput);
  if (tokens.length === 0) {
    return 'Silakan ketik pertanyaan Anda seputar desain arsitektur, interior, harga paket, atau lokasi studio kami.';
  }

  const primaryPhone = settings.whatsappDisplay || '+62 878-7200-8510';
  const primaryEmail = settings.email || 'studio@sprioarchitect.com';
  const address = settings.address || 'Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190';
  const mapsUrl = settings.googleMapsUrl || 'https://maps.google.com';

  // 1. Cek jika user menyebutkan ukuran / luas bangunan
  const areaSqm = extractAreaSqm(userInput);
  if (areaSqm !== null) {
    const pkg = pickPackageByArea(areaSqm);
    return (
      `Untuk perkiraan luas **${areaSqm} m²**, paket yang paling sesuai adalah **Paket ${pkg.name}** (${pkg.tagline}).\n\n` +
      `• **Estimasi Biaya:** ${pkg.priceLabel}\n` +
      `• **Cakupan Utama:** ${pkg.coverage.slice(0, 3).join(', ')}, dll.\n\n` +
      `Anda bisa melihat rincian lengkap di menu **Paket Desain** atau klik tombol WhatsApp di bawah untuk hitung penawaran pastinya bersama arsitek kami.`
    );
  }

  // 2. Skor setiap topik khusus arsitektur
  const intents = [
    {
      id: 'greeting',
      keywords: ['halo', 'hai', 'hello', 'pagi', 'siang', 'sore', 'malam', 'permisi', 'assalamualaikum'],
      reply: () =>
        `Halo! Selamat datang di **SPRIO Architect & Interior** 👋\nSaya asisten virtual khusus informasi desain arsitektur & interior.\n\nSilakan tanyakan seputar **harga paket, alur desain, kelengkapan gambar, layanan renovasi/interior, atau lokasi studio** kami.`,
    },
    {
      id: 'pricing',
      keywords: ['harga', 'biaya', 'tarif', 'paket', 'budget', 'estimasi', 'bayar', 'berapa', 'murah', 'mahal', 'starter', 'basic', 'standard', 'premium', 'exclusive', 'ultimate'],
      reply: () =>
        `Berikut kisaran **Paket Desain SPRIO Architect**:\n\n` +
        `• **Starter (≤ 100 m²):** Mulai Rp 7.000.000\n` +
        `• **Basic (101–200 m²):** Mulai Rp 14.000.000\n` +
        `• **Standard (201–350 m²):** Mulai Rp 24.500.000 *(Terlaris)*\n` +
        `• **Premium (351–500 m²):** Mulai Rp 37.500.000\n` +
        `• **Exclusive (501–750 m²):** Mulai Rp 60.000.000\n` +
        `• **Ultimate (> 750 m²):** Hubungi Kami (Custom)\n\n` +
        `💡 *Tips:* Coba ketik luas tanah/bangunan Anda (contoh: **"luas 150 m2"** atau **"10x12"**) agar saya pilihkan paket yang paling pas!`,
    },
    {
      id: 'process',
      keywords: ['alur', 'proses', 'tahap', 'cara', 'pesan', 'order', 'lama', 'durasi', 'waktu', 'minggu', 'bulan', 'selesai', 'kapan', 'mulai', 'bagaimana'],
      reply: () =>
        `**Alur & Lama Pengerjaan Desain:**\n\n` +
        `1. **Konsultasi & Pengumpulan Data** (ukuran lahan & kebutuhan ruang)\n` +
        `2. **Konsep Denah 2D** (sirkulasi & tata ruang — bisa revisi hingga pas)\n` +
        `3. **Visualisasi 3D Eksterior & Interior** (render realistis + opsi 360°)\n` +
        `4. **Gambar Kerja Lengkap & RAB** (siap untuk izin PBG/IMB & kontraktor)\n\n` +
        `⏱️ Estimasi pengerjaan rata-rata **2–5 minggu** tergantung luas dan kompleksitas bangunan.`,
    },
    {
      id: 'deliverables',
      keywords: ['kelengkapan', 'dapat', 'dokumen', 'output', 'gambar', 'denah', 'kerja', 'struktur', 'mep', 'rab', 'imb', 'pbg', 'revisi', 'kontraktor'],
      reply: () =>
        `**Kelengkapan Dokumen yang Anda Dapatkan** *(tersedia lengkap mulai Paket Basic ke atas)*:\n\n` +
        `• Denah Tata Ruang 2D terukur & berdimensi\n` +
        `• Visualisasi 3D Render Eksterior & Interior beresolusi tinggi\n` +
        `• Gambar Kerja Arsitektur lengkap (tampak, potongan, detail)\n` +
        `• Gambar Struktur (pondasi, kolom, balok, atap) & MEP (listrik, air, sanitasi)\n` +
        `• Dokumen standar siap pengajuan **PBG / IMB** & **RAB** *(sesuai paket pilihan)*.\n\n` +
        `Setiap tahap juga dilengkapi sesi **revisi terarah** agar desain benar-benar sesuai keinginan Anda.`,
    },
    {
      id: 'tour360',
      keywords: ['360', 'virtual', 'tour', 'render', 'visual', 'animasi', 'video', 'view', 'tampilan'],
      reply: () =>
        `Ya! Kami menyediakan **3D Render Realistis** dan **360° Virtual Tour Interaktif**.\n\n` +
        `Anda bisa melihat simulasi ruangan secara memutar 360° sebelum bangunan dibangun (bisa langsung dicoba di halaman detail proyek pada menu **Portofolio** kami).`,
    },
    {
      id: 'services',
      keywords: ['layanan', 'jasa', 'gaya', 'model', 'konsep', 'tropis', 'klasik', 'minimalis', 'mediterania', 'industrial', 'interior', 'renovasi', 'komersial', 'kantor', 'cafe', 'villa', 'rumah', 'bangun', 'kontruksi', 'konstruksi'],
      reply: () =>
        `**Layanan & Gaya Arsitektur Kami:**\n\n` +
        `• **Desain Arsitektur Baru & Renovasi:** Rumah tinggal, villa, ruko, kantor, cafe, & bangunan komersial.\n` +
        `• **Desain Interior & Fit-Out:** Penataan ruang dalam, furnitur custom, & pencahayaan.\n` +
        `• **Pilihan Gaya:** *Modern Tropis, Klasik Mewah, Mediterania, Industrial Modern,* dan *Minimalis Kontemporer*.\n\n` +
        `Lihat contoh karya kami di menu **Portofolio** (30+ proyek).`,
    },
    {
      id: 'online',
      keywords: ['luar', 'kota', 'pulau', 'online', 'zoom', 'meet', 'survei', 'survey', 'daerah', 'bandung', 'surabaya', 'bali', 'medan', 'makassar'],
      reply: () =>
        `**Tentu bisa!** Lebih dari 60% klien kami berada di luar Jabodetabek (Bali, Bandung, Surabaya, Medan, Kalimantan, hingga luar pulau).\n\n` +
        `• Konsultasi dilakukan rutin via **Zoom / Google Meet** & grup **WhatsApp proyek**.\n` +
        `• Pengukuran/data lahan cukup kirim ukuran tanah/sertifikat & foto lokasi, tim arsitek kami akan memandu langkah demi langkah.`,
    },
    {
      id: 'contact',
      keywords: ['lokasi', 'alamat', 'kantor', 'studio', 'maps', 'dimana', 'jam', 'buka', 'operasional', 'kontak', 'whatsapp', 'telepon', 'nomor', 'email', 'hubungi'],
      reply: () =>
        `**Informasi Studio & Kontak Resmi SPRIO:**\n\n` +
        `• **Alamat:** ${address}\n` +
        `• **WhatsApp:** ${primaryPhone}\n` +
        `• **Email:** ${primaryEmail}\n` +
        `• **Jam Kerja:** Senin – Sabtu (08.30 – 17.30 WIB)\n` +
        `• **Google Maps:** ${mapsUrl}`,
    },
  ];

  let bestIntent = null;
  let bestScore = 0;

  for (const intent of intents) {
    const score = countKeywordMatches(tokens, intent.keywords);
    if (score > bestScore) {
      bestScore = score;
      bestIntent = intent;
    }
  }

  if (bestIntent && bestScore >= 1.5) {
    return bestIntent.reply();
  }

  // Fallback ketat: Jangan ngelantur jika di luar topik arsitektur
  return (
    `Maaf, saya adalah **Asisten Arsitek SPRIO** yang khusus menjawab seputar **desain arsitektur, interior, harga paket, alur pengerjaan, dan lokasi studio**.\n\n` +
    `Silakan pilih salah satu pertanyaan di atas, ketik luas lahan Anda (misal: *"luas 150 m2"*), atau klik **Lanjut ke WhatsApp** untuk bertanya langsung ke arsitek kami.`
  );
}
