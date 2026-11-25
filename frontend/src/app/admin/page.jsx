'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { INITIAL_PROJECTS } from '@/data/mockData';
import {
  Building2,
  Plus,
  Trash2,
  Star,
  CheckCircle2,
  MessageSquare,
  Globe,
  LogOut,
  Lock,
  Save,
  ExternalLink,
  FolderKanban,
} from 'lucide-react';

export default function AdminDashboard() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  // Simple Auth State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Simple 3-tab Navigation
  const [activeTab, setActiveTab] = useState('content');

  // 1. Website Content & Contact Settings State
  const [settings, setSettings] = useState({
    heroTitle: 'Architecture Design',
    heroSubtitle: 'Your Partner in Perfect Architecture & Interior Creation',
    whatsappNumber: '6287872008510',
    whatsappDisplay: '+62 878-7200-8510',
    email: 'studio@sprioarchitect.com',
    address: 'Jl. Senopati No. 88, Kebayoran Baru, Jakarta Selatan 12190',
    branchAddress: 'Cabang Bali: Jl. Pantai Batu Bolong, Canggu',
    googleMapsUrl: '',
    googleMapsEmbedUrl: '',
  });
  const [saveMessage, setSaveMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  // 2. Projects State
  const [projects, setProjects] = useState(INITIAL_PROJECTS);
  const [newProject, setNewProject] = useState({
    title: '',
    category: 'Rumah Tinggal',
    style: 'Modern Tropis',
    location: '',
    buildingArea: '350',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    description: '',
  });
  const [projectMessage, setProjectMessage] = useState('');

  // 3. Consultations State
  const [consultations, setConsultations] = useState([]);

  // Check session on load
  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('sprio_admin') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  // Load live data from Backend when logged in
  useEffect(() => {
    if (!isLoggedIn) return;

    fetch(`${apiBase}/api/settings`)
      .then((r) => r.json())
      .then((res) => {
        if (res.success && res.data) setSettings((prev) => ({ ...prev, ...res.data }));
      })
      .catch(() => {});

    fetch(`${apiBase}/api/consultations`)
      .then((r) => r.json())
      .then((res) => {
        if (res.success && res.data) setConsultations(res.data);
      })
      .catch(() => {});

    fetch(`${apiBase}/api/projects`)
      .then((r) => r.json())
      .then((res) => {
        if (res.success && res.data) {
          const { customProjects = [], deletedProjectIds = [], featuredOverrides = {} } = res.data;
          const merged = [
            ...customProjects,
            ...INITIAL_PROJECTS.filter((p) => !deletedProjectIds.includes(p.id)).map((p) =>
              p.id in featuredOverrides ? { ...p, isFeatured: featuredOverrides[p.id] } : p
            ),
          ];
          setProjects(merged);
        }
      })
      .catch(() => {});
  }, [isLoggedIn, apiBase]);

  // Login Handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    try {
      const res = await fetch(`${apiBase}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('sprio_admin', 'true');
        setIsLoggedIn(true);
      } else {
        setLoginError(data.message || 'Password salah');
      }
    } catch {
      // Fallback for offline local check
      if (password === 'admin123') {
        sessionStorage.setItem('sprio_admin', 'true');
        setIsLoggedIn(true);
      } else {
        setLoginError('Backend belum menyala atau password salah.');
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('sprio_admin');
    setIsLoggedIn(false);
    setPassword('');
  };

  // Save Website Settings
  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');
    try {
      const res = await fetch(`${apiBase}/api/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      const data = await res.json();
      if (data.success) {
        setSaveMessage('Perubahan berhasil disimpan! Refresh halaman utama/kontak untuk melihat hasilnya.');
        setTimeout(() => setSaveMessage(''), 4000);
      }
    } catch {
      setSaveMessage('Gagal terhubung ke server backend (pastikan port 5000 menyala).');
    } finally {
      setIsSaving(false);
    }
  };

  // Add Project
  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${apiBase}/api/projects`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProject),
      });
      const data = await res.json();
      if (data.success && data.data) {
        setProjects((prev) => [data.data, ...prev]);
        setNewProject({
          title: '',
          category: 'Rumah Tinggal',
          style: 'Modern Tropis',
          location: '',
          buildingArea: '350',
          thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          description: '',
        });
        setProjectMessage('Proyek baru berhasil ditambahkan & disimpan!');
        setTimeout(() => setProjectMessage(''), 3000);
      }
    } catch {}
  };

  // Toggle Featured
  const handleToggleFeatured = async (id, current) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, isFeatured: !current } : p)));
    try {
      await fetch(`${apiBase}/api/projects/${id}/featured`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isFeatured: !current }),
      });
    } catch {}
  };

  // Delete Project
  const handleDeleteProject = async (id) => {
    if (!confirm('Yakin ingin menghapus proyek ini?')) return;
    setProjects((prev) => prev.filter((p) => p.id !== id));
    try {
      await fetch(`${apiBase}/api/projects/${id}`, { method: 'DELETE' });
    } catch {}
  };

  // Update Consultation Status
  const handleUpdateStatus = async (id, status) => {
    setConsultations((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
    try {
      await fetch(`${apiBase}/api/consultations`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
    } catch {}
  };

  // === LOGIN SCREEN ===
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-200 p-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-500 flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl font-bold text-stone-900">Panel Admin Studio</h1>
            <p className="text-xs text-stone-500">
              Masuk untuk mengubah teks website, nomor WhatsApp, Google Maps, dan mengelola pesan klien.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1.5">Password Admin</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan password..."
                className="w-full px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
              />
              <p className="text-[11px] text-stone-400 mt-1.5">
                Password default lokal: <code className="bg-stone-100 px-1.5 py-0.5 rounded text-stone-700 font-semibold">admin123</code>
              </p>
            </div>

            {loginError && (
              <p className="text-xs text-rose-600 bg-rose-50 px-3 py-2 rounded-lg border border-rose-200">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-colors cursor-pointer"
            >
              Masuk ke Panel Admin
            </button>
          </form>

          <div className="text-center pt-2">
            <Link href="/" className="text-xs text-stone-500 hover:text-stone-900 underline">
              ← Kembali ke Halaman Utama
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // === MAIN SIMPLE ADMIN PANEL ===
  const newLeadsCount = consultations.filter((c) => c.status === 'New').length;

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Simple Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-stone-900">Panel Admin SPRIO</span>
              <span className="text-[11px] text-stone-500 block -mt-1">Kelola isi website dengan mudah</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-2 rounded-lg transition"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lihat Web</span>
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 px-3 py-2 rounded-lg transition cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* 3 Clear Navigation Tabs */}
        <div className="flex flex-wrap gap-2 bg-white p-1.5 rounded-xl border border-stone-200 shadow-2xs w-fit">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'content' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Globe className="w-4 h-4" />
            <span>Edit Teks &amp; Kontak</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'projects' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            <FolderKanban className="w-4 h-4" />
            <span>Portofolio ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('consultations')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              activeTab === 'consultations' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Pesan Klien</span>
            {newLeadsCount > 0 && (
              <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                {newLeadsCount}
              </span>
            )}
          </button>
        </div>

        {/* === TAB 1: EDIT TEKS & KONTAK === */}
        {activeTab === 'content' && (
          <form onSubmit={handleSaveSettings} className="space-y-6">
            {saveMessage && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{saveMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Card 1: Tampilan Halaman Depan */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4 shadow-2xs">
                <div>
                  <h2 className="font-serif text-lg font-bold text-stone-900">1. Teks Halaman Depan (Beranda)</h2>
                  <p className="text-xs text-stone-500">Ubah judul besar yang pertama kali dilihat pengunjung.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Utama (Emas)</label>
                  <input
                    type="text"
                    value={settings.heroTitle}
                    onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Sub-Judul (Bawah Judul Utama)</label>
                  <input
                    type="text"
                    value={settings.heroSubtitle}
                    onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Card 2: Kontak & WhatsApp */}
              <div className="bg-white rounded-2xl border border-stone-200 p-6 space-y-4 shadow-2xs">
                <div>
                  <h2 className="font-serif text-lg font-bold text-stone-900">2. Nomor WhatsApp &amp; Email</h2>
                  <p className="text-xs text-stone-500">Atur kontak tujuan saat klien menekan tombol WhatsApp.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Nomor WA (Format 628...)</label>
                    <input
                      type="text"
                      value={settings.whatsappNumber}
                      onChange={(e) => setSettings({ ...settings, whatsappNumber: e.target.value })}
                      placeholder="6287872008510"
                      className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Tampilan Nomor di Web</label>
                    <input
                      type="text"
                      value={settings.whatsappDisplay}
                      onChange={(e) => setSettings({ ...settings, whatsappDisplay: e.target.value })}
                      placeholder="+62 878-7200-8510"
                      className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email Studio</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                  />
                </div>
              </div>

              {/* Card 3: Alamat & Google Maps */}
              <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-200 p-6 space-y-4 shadow-2xs">
                <div>
                  <h2 className="font-serif text-lg font-bold text-stone-900">3. Alamat Kantor &amp; Peta Google Maps</h2>
                  <p className="text-xs text-stone-500">Ditampilkan di halaman Kontak beserta peta interaktif.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Alamat Utama</label>
                    <input
                      type="text"
                      value={settings.address}
                      onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Alamat Cabang (Opsional)</label>
                    <input
                      type="text"
                      value={settings.branchAddress}
                      onChange={(e) => setSettings({ ...settings, branchAddress: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Link Tombol &ldquo;Buka di Google Maps&rdquo;</label>
                    <input
                      type="text"
                      value={settings.googleMapsUrl}
                      onChange={(e) => setSettings({ ...settings, googleMapsUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">Link Embed Peta (iframe src)</label>
                    <input
                      type="text"
                      value={settings.googleMapsEmbedUrl}
                      onChange={(e) => setSettings({ ...settings, googleMapsEmbedUrl: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-8 py-3.5 rounded-xl transition-colors shadow-md cursor-pointer disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>{isSaving ? 'Menyimpan...' : 'Simpan Semua Perubahan'}</span>
              </button>
            </div>
          </form>
        )}

        {/* === TAB 2: KELOLA PORTOFOLIO === */}
        {activeTab === 'projects' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Simple Form */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-4">
                <h2 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-amber-600" /> Tambah Proyek Baru
                </h2>

                {projectMessage && (
                  <p className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded-lg">
                    {projectMessage}
                  </p>
                )}

                <form onSubmit={handleCreateProject} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Nama Proyek *</label>
                    <input
                      type="text"
                      required
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      placeholder="Misal: Rumah Minimalis Kemang"
                      className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Kategori</label>
                      <select
                        value={newProject.category}
                        onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                        className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
                      >
                        <option value="Rumah Tinggal">Rumah Tinggal</option>
                        <option value="Villa">Villa</option>
                        <option value="Komersial & Kantor">Komersial &amp; Kantor</option>
                        <option value="Desain Interior">Desain Interior</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Luas (m²)</label>
                      <input
                        type="number"
                        value={newProject.buildingArea}
                        onChange={(e) => setNewProject({ ...newProject, buildingArea: e.target.value })}
                        className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Lokasi *</label>
                    <input
                      type="text"
                      required
                      value={newProject.location}
                      onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                      placeholder="Contoh: Jakarta Selatan"
                      className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Link Foto Utama (URL)</label>
                    <input
                      type="url"
                      value={newProject.thumbnail}
                      onChange={(e) => setNewProject({ ...newProject, thumbnail: e.target.value })}
                      className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-700 mb-1">Deskripsi Singkat</label>
                    <textarea
                      rows={3}
                      value={newProject.description}
                      onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                      placeholder="Ceritakan konsep desainnya..."
                      className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-stone-900 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition cursor-pointer"
                  >
                    + Tambah ke Portofolio
                  </button>
                </form>
              </div>
            </div>

            {/* Project List */}
            <div className="lg:col-span-8 bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs">
              <h2 className="font-serif text-lg font-bold text-stone-900 mb-4">
                Daftar Proyek ({projects.length})
              </h2>
              <div className="divide-y divide-stone-100 max-h-[600px] overflow-y-auto pr-1">
                {projects.map((p) => (
                  <div key={p.id} className="py-3 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={p.thumbnail}
                        alt={p.title}
                        className="w-14 h-10 object-cover rounded-lg border border-stone-200 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-semibold text-sm text-stone-900 truncate">{p.title}</div>
                        <div className="text-xs text-stone-500 truncate">
                          {p.category} • {p.location} • {p.buildingArea} m²
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => handleToggleFeatured(p.id, p.isFeatured)}
                        title="Tandai Unggulan"
                        className={`p-2 rounded-lg border transition cursor-pointer ${
                          p.isFeatured
                            ? 'bg-amber-50 border-amber-300 text-amber-600'
                            : 'bg-stone-50 border-stone-200 text-stone-400 hover:text-stone-700'
                        }`}
                      >
                        <Star className={`w-4 h-4 ${p.isFeatured ? 'fill-amber-500' : ''}`} />
                      </button>
                      <button
                        onClick={() => handleDeleteProject(p.id)}
                        title="Hapus Proyek"
                        className="p-2 rounded-lg border border-stone-200 text-rose-500 hover:bg-rose-50 transition cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* === TAB 3: PESAN KLIEN (LEADS) === */}
        {activeTab === 'consultations' && (
          <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-4">
            <div>
              <h2 className="font-serif text-lg font-bold text-stone-900">Pesan Konsultasi Masuk</h2>
              <p className="text-xs text-stone-500">Klik tombol Chat WA untuk langsung membalas calon klien.</p>
            </div>

            {consultations.length === 0 ? (
              <p className="text-sm text-stone-400 py-8 text-center">Belum ada pesan konsultasi masuk.</p>
            ) : (
              <div className="space-y-3">
                {consultations.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-stone-900">{c.name}</span>
                        <span className="text-[11px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full">
                          {c.service}
                        </span>
                        <span className="text-[11px] text-stone-400">{c.createdAt}</span>
                      </div>
                      <p className="text-xs text-stone-600">
                        📍 {c.location || '-'} • 📐 {c.estimatedArea || '-'} • 📞 {c.phone}
                      </p>
                      <p className="text-xs text-stone-700 italic">&ldquo;{c.message}&rdquo;</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`https://wa.me/${c.phone.replace(/\D/g, '').replace(/^0/, '62')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition"
                      >
                        Chat WA
                      </a>
                      <select
                        value={c.status}
                        onChange={(e) => handleUpdateStatus(c.id, e.target.value)}
                        className="bg-white border border-stone-300 rounded-lg px-2.5 py-2 text-xs font-medium text-stone-800 cursor-pointer"
                      >
                        <option value="New">Baru</option>
                        <option value="In Progress">Diproses</option>
                        <option value="Completed">Selesai</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
