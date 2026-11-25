import { Router } from 'express';
import { readDB, writeDB } from '../data/db.js';

const router = Router();

// GET /api/projects/overrides -> returns custom projects, deleted IDs, and featured overrides
router.get('/', (req, res) => {
  const db = readDB();
  res.json({
    success: true,
    data: {
      customProjects: db.customProjects || [],
      deletedProjectIds: db.deletedProjectIds || [],
      featuredOverrides: db.featuredOverrides || {},
    },
  });
});

// POST /api/projects -> add a new project
router.post('/', (req, res) => {
  try {
    const db = readDB();
    const body = req.body || {};
    const title = body.title || 'Proyek Baru';
    const slug =
      title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '') +
      '-' +
      Date.now().toString().slice(-4);

    const newProject = {
      id: `proj-${Date.now()}`,
      code: body.code || `SP-${100 + (db.customProjects?.length || 0) + 31}`,
      title,
      slug,
      category: body.category || 'Rumah Tinggal',
      style: body.style || 'Modern Tropis',
      location: body.location || 'Jakarta',
      year: Number(body.year) || 2026,
      floors: Number(body.floors) || 2,
      buildingArea: Number(body.buildingArea) || 350,
      bedrooms: Number(body.bedrooms) || 4,
      bathrooms: 3,
      garages: 2,
      thumbnail:
        body.thumbnail ||
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: body.description || 'Desain arsitektur modern dan fungsional.',
      concept: body.description || 'Konsep arsitektur eksklusif berkarakter.',
      isFeatured: true,
      status: 'Published',
      constructionStatus: 'Desain Konsep',
      images: [
        {
          id: `img-${Date.now()}-1`,
          url:
            body.thumbnail ||
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          title: 'Fasad Utama',
          category: 'eksterior',
          caption: title,
        },
      ],
    };

    db.customProjects = [newProject, ...(db.customProjects || [])];
    writeDB(db);

    res.status(201).json({
      success: true,
      message: 'Proyek berhasil ditambahkan!',
      data: newProject,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: 'Gagal menambahkan proyek',
    });
  }
});

// PATCH /api/projects/:id/featured -> toggle featured status
router.patch('/:id/featured', (req, res) => {
  try {
    const { id } = req.params;
    const { isFeatured } = req.body || {};
    const db = readDB();

    const customIdx = (db.customProjects || []).findIndex((p) => p.id === id);
    if (customIdx !== -1) {
      db.customProjects[customIdx].isFeatured = Boolean(isFeatured);
    } else {
      db.featuredOverrides = {
        ...(db.featuredOverrides || {}),
        [id]: Boolean(isFeatured),
      };
    }

    writeDB(db);
    res.json({ success: true });
  } catch {
    res.status(500).json({ success: false, message: 'Gagal mengubah status unggulan' });
  }
});

// DELETE /api/projects/:id -> remove project
router.delete('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const db = readDB();

    const beforeLen = (db.customProjects || []).length;
    db.customProjects = (db.customProjects || []).filter((p) => p.id !== id);
    if (db.customProjects.length === beforeLen) {
      if (!db.deletedProjectIds.includes(id)) {
        db.deletedProjectIds.push(id);
      }
    }

    writeDB(db);
    res.json({ success: true, message: 'Proyek berhasil dihapus' });
  } catch {
    res.status(500).json({ success: false, message: 'Gagal menghapus proyek' });
  }
});

export default router;
