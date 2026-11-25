import { Router } from 'express';

const router = Router();

// Data awal konsultasi (nanti saat deploy bisa dihubungkan ke PostgreSQL / Neon)
let consultations = [
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
];

// GET /api/consultations
router.get('/', (req, res) => {
  res.json({
    success: true,
    data: consultations,
  });
});

// POST /api/consultations
router.post('/', (req, res) => {
  try {
    const body = req.body || {};

    const newConsultation = {
      id: `cons-${Date.now()}`,
      name: body.name || 'Anonymous',
      email: body.email || '',
      phone: body.phone || '',
      service: body.service || 'Jasa Desain Arsitektur',
      location: body.location || '',
      estimatedArea: body.estimatedArea || '',
      message: body.message || '',
      status: 'New',
      createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
    };

    consultations = [newConsultation, ...consultations];

    res.status(201).json({
      success: true,
      message: 'Permintaan konsultasi berhasil dikirim',
      data: newConsultation,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Gagal memproses data konsultasi',
    });
  }
});

// PATCH /api/consultations
router.patch('/', (req, res) => {
  try {
    const { id, status } = req.body || {};

    consultations = consultations.map((item) =>
      item.id === id ? { ...item, status } : item
    );

    res.json({
      success: true,
      message: 'Status konsultasi berhasil diperbarui',
      data: consultations,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Gagal memperbarui status',
    });
  }
});

export default router;
