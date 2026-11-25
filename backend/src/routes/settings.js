import { Router } from 'express';
import { readDB, writeDB } from '../data/db.js';

const router = Router();

// GET /api/settings
router.get('/', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    data: db.settings,
  });
});

// PUT /api/settings
router.put('/', (req, res) => {
  try {
    const db = readDB();
    db.settings = {
      ...db.settings,
      ...req.body,
    };
    writeDB(db);
    res.json({
      success: true,
      message: 'Pengaturan website berhasil disimpan!',
      data: db.settings,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: 'Gagal menyimpan pengaturan website',
    });
  }
});

export default router;
