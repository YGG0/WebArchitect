import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'db.json');

const DEFAULT_DATA = {
  settings: {
    heroTitle: 'Architecture Design',
    heroSubtitle: 'Your Partner in Perfect Architecture & Interior Creation',
    whatsappNumber: '6287872008510',
    whatsappDisplay: '+62 878-7200-8510',
    email: 'studio@sprioarchitect.com',
    address: 'Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190',
    branchAddress: 'Cabang Bali: Jl. Pantai Batu Bolong, Canggu',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jl.+Senopati+No.+88,+Kebayoran+Baru,+Jakarta+Selatan',
    googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Jl.+Senopati+No.+88,+Kebayoran+Baru,+Jakarta+Selatan&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  consultations: [
    {
      id: 'cons-1',
      name: 'Budi Santoso',
      email: 'budi.santoso@example.com',
      phone: '081234567890',
      service: 'Jasa Desain Arsitektur',
      location: 'Jakarta Selatan',
      estimatedArea: '300 - 600 m²',
      message: 'Saya berencana membangun rumah 2 lantai gaya modern tropis di lahan 15x25m.',
      status: 'New',
      createdAt: '2026-11-08 10:30',
    },
    {
      id: 'cons-2',
      name: 'Dewi Lestari',
      email: 'dewi.lestari@example.com',
      phone: '081987654321',
      service: 'Desain Villa & Resort',
      location: 'Ubud, Bali',
      estimatedArea: '> 600 m²',
      message: 'Membutuhkan konsep villa tropis 4 kamar tidur dengan infinity pool.',
      status: 'In Progress',
      createdAt: '2026-11-07 14:15',
    },
  ],
  customProjects: [],
  deletedProjectIds: [],
  featuredOverrides: {},
};

export function readDB() {
  try {
    if (!fs.existsSync(DB_PATH)) {
      fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_DATA, null, 2), 'utf8');
      return JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_DATA,
      ...parsed,
      settings: { ...DEFAULT_DATA.settings, ...(parsed.settings || {}) },
    };
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

export function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}
