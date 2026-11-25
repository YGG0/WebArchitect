import { Router } from 'express';

const router = Router();

// Endpoint informasi proyek (siap disambungkan ke Database + Cloudinary saat deploy)
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'API Proyek siap. Hubungkan ke PostgreSQL (Neon/Supabase) & Cloudinary untuk produksi.',
  });
});

export default router;
