import { Router } from 'express';
import { readDB, writeDB } from '../data/db.js';

const router = Router();

// GET /api/consultations
router.get('/', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    data: db.consultations,
  });
});

// POST /api/consultations
router.post('/', (req, res) => {
  try {
    const body = req.body || {};
    const db = readDB();

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

    db.consultations = [newConsultation, ...db.consultations];
    writeDB(db);

    res.status(201).json({
      success: true,
      message: 'Permintaan konsultasi berhasil dikirim',
      data: newConsultation,
    });
  } catch {
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
    const db = readDB();

    db.consultations = db.consultations.map((item) =>
      item.id === id ? { ...item, status } : item
    );
    writeDB(db);

    res.json({
      success: true,
      message: 'Status konsultasi berhasil diperbarui',
      data: db.consultations,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: 'Gagal memperbarui status',
    });
  }
});

export default router;
