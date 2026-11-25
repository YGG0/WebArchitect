import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import consultationsRouter from './routes/consultations.js';
import projectsRouter from './routes/projects.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    service: 'SPRIO Architect & Interior Backend API',
    version: '1.0.0',
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/consultations', consultationsRouter);
app.use('/api/projects', projectsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Backend Express berjalan di http://localhost:${PORT}`);
});
