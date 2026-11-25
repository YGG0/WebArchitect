import { Router } from 'express';

const router = Router();

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { password } = req.body || {};
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

  if (password === adminPassword) {
    return res.json({
      success: true,
      message: 'Login berhasil',
      token: 'sprio-admin-session',
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Password salah. Coba lagi.',
  });
});

export default router;
