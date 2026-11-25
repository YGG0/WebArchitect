'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { INITIAL_PROJECTS } from '@/data/mockData';
import { DEFAULT_SITE_SETTINGS } from '@/lib/useSiteSettings';
import ImageUploadField from '@/components/admin/ImageUploadField';
import {
  Building2,
  Plus,
  Trash2,
  Star,
  CheckCircle2,
  MessageSquare,
  Home,
  FolderKanban,
  Briefcase,
  Package,
  Info,
  MapPin,
  LogOut,
  Lock,
  Save,
  ExternalLink,
} from 'lucide-react';

const MENU_TABS = [
  { id: 'beranda', label: 'Beranda', icon: Home, previewUrl: '/' },
  { id: 'portfolio', label: 'Portofolio', icon: FolderKanban, previewUrl: '/portfolio' },
  { id: 'layanan', label: 'Layanan', icon: Briefcase, previewUrl: '/layanan' },
  { id: 'paket', label: 'Paket Desain', icon: Package, previewUrl: '/paket' },
  { id: 'tentang', label: 'Tentang Kami', icon: Info, previewUrl: '/tentang-kami' },
  { id: 'kontak', label: 'Kontak & Maps', icon: MapPin, previewUrl: '/kontak' },
  { id: 'leads', label: 'Pesan Klien', icon: MessageSquare, previewUrl: null },
];

export default function AdminDashboard() {
  const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState('beranda');
  const [settings, setSettings] = useState(DEFAULT_SITE_SETTINGS);
  const [saveMessage, setSaveMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

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
  const [consultations, setConsultations] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('sprio_admin') === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

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

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage('');
    const primaryPhone = settings.phones?.[0];
    const primaryEmail = settings.emails?.[0];
    const payload = {
      ...settings,
      whatsappNumber: primaryPhone?.number || settings.whatsappNumber,
      whatsappDisplay: primaryPhone?.display || settings.whatsappDisplay,
      email: primaryEmail || settings.email,
    };
    try {
      const res = await fetch(`${apiBase}/api/settings`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSaveMessage('Berhasil disimpan! Buka atau refresh halaman terkait untuk melihat hasilnya.');
        setTimeout(() => setSaveMessage(''), 4000);
      }
    } catch {
      setSaveMessage('Gagal terhubung ke server backend (pastikan port 5000 menyala).');
    } finally {
      setIsSaving(false);
    }
  };

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
        setProjectMessage('Proyek baru berhasil ditambahkan!');
        setTimeout(() => setProjectMessage(''), 3000);
      }
    } catch {}
  };

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

  const handleDeleteProject = async (id) => {
    if (!confirm('Yakin ingin menghapus proyek ini?')) return;
    setProjects((prev) => prev.filter((p) => p.id !== id));
    try {
      await fetch(`${apiBase}/api/projects/${id}`, { method: 'DELETE' });
    } catch {}
  };

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

  const inputClass =
    'w-full px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white';

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
              Masuk untuk mengubah isi setiap menu website dengan mudah.
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
                className={inputClass}
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

  const newLeadsCount = consultations.filter((c) => c.status === 'New').length;
  const activeMenuInfo = MENU_TABS.find((t) => t.id === activeTab);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-stone-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-600 text-white flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-stone-900">Panel Admin SPRIO</span>
              <span className="text-[11px] text-stone-500 block -mt-1">Pilih menu di kiri untuk ubah kontennya</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeMenuInfo?.previewUrl && (
              <Link
                href={activeMenuInfo.previewUrl}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-medium bg-stone-100 hover:bg-stone-200 text-stone-800 px-3 py-2 rounded-lg transition"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Lihat Halaman {activeMenuInfo.label}</span>
              </Link>
            )}
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

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar: Menu List matching website navbar */}
        <aside className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-stone-200 p-3 shadow-2xs space-y-1 sticky top-24">
            <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400">
              Menu Website
            </div>
            {MENU_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
                    isActive
                      ? 'bg-stone-900 text-white shadow-xs'
                      : 'text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-400'}`} />
                    <span>{tab.label}</span>
                  </span>
                  {tab.id === 'leads' && newLeadsCount > 0 && (
                    <span className="bg-amber-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                      {newLeadsCount}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Content Area */}
        <section className="lg:col-span-9 space-y-6">
          {saveMessage && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl text-xs font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{saveMessage}</span>
            </div>
          )}

          {/* === MENU 1: BERANDA === */}
          {activeTab === 'beranda' && (
            <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-5">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">Edit Konten Menu: Beranda</h2>
                <p className="text-xs text-stone-500">Ubah tampilan utama yang pertama dilihat pengunjung.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Besar Hero (Warna Emas)</label>
                  <input
                    type="text"
                    value={settings.heroTitle}
                    onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Sub-Judul Hero</label>
                  <input
                    type="text"
                    value={settings.heroSubtitle}
                    onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <ImageUploadField
                  label="Foto Background Utama"
                  value={settings.heroImage}
                  onChange={(url) => setSettings({ ...settings, heroImage: url })}
                  spec="Rekomendasi: Landscape (16:9) • Min. 1920 × 1080 px • JPG/PNG/WebP (Maks. 5 MB)"
                />

                <hr className="border-stone-100" />

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Bagian Portofolio Pilihan</label>
                  <input
                    type="text"
                    value={settings.homePortfolioTitle}
                    onChange={(e) => setSettings({ ...settings, homePortfolioTitle: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Deskripsi Portofolio Pilihan</label>
                  <textarea
                    rows={2}
                    value={settings.homePortfolioDesc}
                    onChange={(e) => setSettings({ ...settings, homePortfolioDesc: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition cursor-pointer">
                  <Save className="w-4 h-4" />
                  <span>{isSaving ? 'Menyimpan...' : 'Simpan Perubahan Beranda'}</span>
                </button>
              </div>
            </form>
          )}

          {/* === MENU 2: PORTOFOLIO === */}
          {activeTab === 'portfolio' && (
            <div className="space-y-6">
              <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-4">
                <div>
                  <h2 className="font-serif text-xl font-bold text-stone-900">Edit Banner Halaman Portofolio</h2>
                  <p className="text-xs text-stone-500">Ubah judul, deskripsi, dan foto header halaman Portofolio.</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Halaman Portofolio</label>
                  <input
                    type="text"
                    value={settings.portfolioTitle}
                    onChange={(e) => setSettings({ ...settings, portfolioTitle: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Deskripsi Singkat</label>
                  <textarea
                    rows={2}
                    value={settings.portfolioDesc}
                    onChange={(e) => setSettings({ ...settings, portfolioDesc: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <ImageUploadField
                  label="Foto Banner Header"
                  value={settings.portfolioBannerImage}
                  onChange={(url) => setSettings({ ...settings, portfolioBannerImage: url })}
                  spec="Rekomendasi: Landscape (16:9) • Min. 1920 × 800 px • JPG/PNG/WebP (Maks. 5 MB)"
                />

                <div className="flex justify-end">
                  <button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition cursor-pointer">
                    <Save className="w-4 h-4" />
                    <span>Simpan Header Portofolio</span>
                  </button>
                </div>
              </form>

              {/* Kelola Daftar Proyek */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-5 bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-4 h-fit">
                  <h3 className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                    <Plus className="w-4 h-4 text-amber-600" /> Tambah Proyek Baru
                  </h3>

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
                        className={inputClass}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Kategori</label>
                        <select
                          value={newProject.category}
                          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                          className={inputClass}
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
                          className={inputClass}
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
                        className={inputClass}
                      />
                    </div>
                    <ImageUploadField
                      label="Foto Utama Proyek"
                      value={newProject.thumbnail}
                      onChange={(url) => setNewProject({ ...newProject, thumbnail: url })}
                      spec="Rekomendasi: Landscape (4:3) • Min. 1200 × 900 px • JPG/PNG/WebP (Maks. 5 MB)"
                      compact
                    />
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Deskripsi</label>
                      <textarea
                        rows={2}
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        placeholder="Konsep desain singkat..."
                        className={inputClass}
                      />
                    </div>
                    <button type="submit" className="w-full bg-stone-900 hover:bg-amber-600 text-white font-bold py-3 rounded-xl transition cursor-pointer">
                      + Tambah ke Portofolio
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs">
                  <h3 className="font-serif text-lg font-bold text-stone-900 mb-4">
                    Daftar Proyek ({projects.length})
                  </h3>
                  <div className="divide-y divide-stone-100 max-h-[520px] overflow-y-auto pr-1">
                    {projects.map((p) => (
                      <div key={p.id} className="py-3 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <img src={p.thumbnail} alt={p.title} className="w-14 h-10 object-cover rounded-lg border border-stone-200 shrink-0" />
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-stone-900 truncate">{p.title}</div>
                            <div className="text-xs text-stone-500 truncate">{p.category} • {p.location} • {p.buildingArea} m²</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            type="button"
                            onClick={() => handleToggleFeatured(p.id, p.isFeatured)}
                            className={`p-2 rounded-lg border cursor-pointer ${p.isFeatured ? 'bg-amber-50 border-amber-300 text-amber-600' : 'bg-stone-50 border-stone-200 text-stone-400'}`}
                          >
                            <Star className={`w-4 h-4 ${p.isFeatured ? 'fill-amber-500' : ''}`} />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteProject(p.id)}
                            className="p-2 rounded-lg border border-stone-200 text-rose-500 hover:bg-rose-50 cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* === MENU 3: LAYANAN === */}
          {activeTab === 'layanan' && (
            <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-5">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">Edit Konten Menu: Layanan</h2>
                <p className="text-xs text-stone-500">Ubah judul, deskripsi, dan foto header halaman Layanan.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Halaman Layanan</label>
                  <input
                    type="text"
                    value={settings.layananTitle}
                    onChange={(e) => setSettings({ ...settings, layananTitle: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Deskripsi Halaman Layanan</label>
                  <textarea
                    rows={3}
                    value={settings.layananDesc}
                    onChange={(e) => setSettings({ ...settings, layananDesc: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <ImageUploadField
                  label="Foto Banner Header"
                  value={settings.layananBannerImage}
                  onChange={(url) => setSettings({ ...settings, layananBannerImage: url })}
                  spec="Rekomendasi: Landscape (16:9) • Min. 1920 × 800 px • JPG/PNG/WebP (Maks. 5 MB)"
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition cursor-pointer">
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Layanan</span>
                </button>
              </div>
            </form>
          )}

          {/* === MENU 4: PAKET DESAIN === */}
          {activeTab === 'paket' && (
            <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-5">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">Edit Konten Menu: Paket Desain</h2>
                <p className="text-xs text-stone-500">Ubah judul, deskripsi, dan foto header halaman Paket Desain.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Halaman Paket</label>
                  <input
                    type="text"
                    value={settings.paketTitle}
                    onChange={(e) => setSettings({ ...settings, paketTitle: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Deskripsi Halaman Paket</label>
                  <textarea
                    rows={3}
                    value={settings.paketDesc}
                    onChange={(e) => setSettings({ ...settings, paketDesc: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <ImageUploadField
                  label="Foto Banner Header"
                  value={settings.paketBannerImage}
                  onChange={(url) => setSettings({ ...settings, paketBannerImage: url })}
                  spec="Rekomendasi: Landscape (16:9) • Min. 1920 × 800 px • JPG/PNG/WebP (Maks. 5 MB)"
                />
              </div>

              <div className="flex justify-end">
                <button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition cursor-pointer">
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Paket</span>
                </button>
              </div>
            </form>
          )}

          {/* === MENU 5: TENTANG KAMI === */}
          {activeTab === 'tentang' && (
            <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-5">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">Edit Konten Menu: Tentang Kami</h2>
                <p className="text-xs text-stone-500">Ubah profil studio, cerita perusahaan, dan foto.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Halaman</label>
                  <input
                    type="text"
                    value={settings.tentangTitle}
                    onChange={(e) => setSettings({ ...settings, tentangTitle: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Deskripsi Singkat Banner</label>
                  <textarea
                    rows={2}
                    value={settings.tentangDesc}
                    onChange={(e) => setSettings({ ...settings, tentangDesc: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Judul Cerita Studio</label>
                  <input
                    type="text"
                    value={settings.tentangHeadline}
                    onChange={(e) => setSettings({ ...settings, tentangHeadline: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Paragraf 1</label>
                  <textarea
                    rows={3}
                    value={settings.tentangBody1}
                    onChange={(e) => setSettings({ ...settings, tentangBody1: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Paragraf 2</label>
                  <textarea
                    rows={3}
                    value={settings.tentangBody2}
                    onChange={(e) => setSettings({ ...settings, tentangBody2: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ImageUploadField
                    label="Foto Banner Atas"
                    value={settings.tentangBannerImage}
                    onChange={(url) => setSettings({ ...settings, tentangBannerImage: url })}
                    spec="Rekomendasi: Landscape (16:9) • Min. 1920 × 800 px • JPG/PNG/WebP"
                  />
                  <ImageUploadField
                    label="Foto Samping Cerita"
                    value={settings.tentangSideImage}
                    onChange={(url) => setSettings({ ...settings, tentangSideImage: url })}
                    spec="Rekomendasi: Landscape (4:3) • Min. 1200 × 900 px • JPG/PNG/WebP"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition cursor-pointer">
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Tentang Kami</span>
                </button>
              </div>
            </form>
          )}

          {/* === MENU 6: KONTAK & GOOGLE MAPS === */}
          {activeTab === 'kontak' && (
            <form onSubmit={handleSaveSettings} className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-5">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">Edit Konten Menu: Kontak &amp; Google Maps</h2>
                <p className="text-xs text-stone-500">Atur nomor WhatsApp, email, alamat studio, dan peta Google Maps.</p>
              </div>

              {/* Multi Nomor WhatsApp / Telepon */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Daftar Nomor WhatsApp / Telepon
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setSettings({
                        ...settings,
                        phones: [
                          ...(settings.phones || []),
                          { label: 'Admin Cabang', number: '628', display: '+62 8...' },
                        ],
                      })
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah Nomor
                  </button>
                </div>

                <div className="space-y-2.5">
                  {(settings.phones || []).map((p, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center bg-stone-50/70 p-2.5 rounded-xl border border-stone-200">
                      <div className="sm:col-span-3">
                        <input
                          type="text"
                          value={p.label}
                          onChange={(e) => {
                            const updated = [...settings.phones];
                            updated[idx] = { ...updated[idx], label: e.target.value };
                            setSettings({ ...settings, phones: updated });
                          }}
                          placeholder="Label (misal: Hotline)"
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <input
                          type="text"
                          value={p.number}
                          onChange={(e) => {
                            const updated = [...settings.phones];
                            updated[idx] = { ...updated[idx], number: e.target.value };
                            setSettings({ ...settings, phones: updated });
                          }}
                          placeholder="Format WA: 62878..."
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-4">
                        <input
                          type="text"
                          value={p.display}
                          onChange={(e) => {
                            const updated = [...settings.phones];
                            updated[idx] = { ...updated[idx], display: e.target.value };
                            setSettings({ ...settings, phones: updated });
                          }}
                          placeholder="Tampilan: +62 878-..."
                          className={inputClass}
                        />
                      </div>
                      <div className="sm:col-span-1 flex justify-end">
                        {settings.phones.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              setSettings({
                                ...settings,
                                phones: settings.phones.filter((_, i) => i !== idx),
                              })
                            }
                            className="p-2 rounded-lg text-rose-500 hover:bg-rose-50 cursor-pointer"
                            title="Hapus nomor"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Multi Email */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    Daftar Email Studio
                  </label>
                  <button
                    type="button"
                    onClick={() =>
                      setSettings({
                        ...settings,
                        emails: [...(settings.emails || []), ''],
                      })
                    }
                    className="inline-flex items-center gap-1 text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1.5 rounded-lg cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" /> Tambah Email
                  </button>
                </div>

                <div className="space-y-2">
                  {(settings.emails || []).map((em, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <input
                        type="email"
                        value={em}
                        onChange={(e) => {
                          const updated = [...settings.emails];
                          updated[idx] = e.target.value;
                          setSettings({ ...settings, emails: updated });
                        }}
                        placeholder="contoh@domain.com"
                        className={inputClass}
                      />
                      {settings.emails.length > 1 && (
                        <button
                          type="button"
                          onClick={() =>
                            setSettings({
                              ...settings,
                              emails: settings.emails.filter((_, i) => i !== idx),
                            })
                          }
                          className="p-2.5 rounded-xl border border-stone-200 text-rose-500 hover:bg-rose-50 cursor-pointer shrink-0"
                          title="Hapus email"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Alamat Utama</label>
                  <input
                    type="text"
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Alamat Cabang (Opsional)</label>
                  <input
                    type="text"
                    value={settings.branchAddress}
                    onChange={(e) => setSettings({ ...settings, branchAddress: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Link Tombol &ldquo;Buka di Google Maps&rdquo;</label>
                  <input
                    type="url"
                    value={settings.googleMapsUrl}
                    onChange={(e) => setSettings({ ...settings, googleMapsUrl: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Link Embed Peta (iframe src)</label>
                  <input
                    type="url"
                    value={settings.googleMapsEmbedUrl}
                    onChange={(e) => setSettings({ ...settings, googleMapsEmbedUrl: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="submit" disabled={isSaving} className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-xl transition cursor-pointer">
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Kontak</span>
                </button>
              </div>
            </form>
          )}

          {/* === MENU 7: PESAN KLIEN === */}
          {activeTab === 'leads' && (
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-2xs space-y-4">
              <div>
                <h2 className="font-serif text-xl font-bold text-stone-900">Pesan Konsultasi Masuk</h2>
                <p className="text-xs text-stone-500">Klik tombol Chat WA untuk langsung membalas calon klien.</p>
              </div>

              {consultations.length === 0 ? (
                <p className="text-sm text-stone-400 py-8 text-center">Belum ada pesan konsultasi masuk.</p>
              ) : (
                <div className="space-y-3">
                  {consultations.map((c) => (
                    <div key={c.id} className="p-4 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm text-stone-900">{c.name}</span>
                          <span className="text-[11px] bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full">{c.service}</span>
                          <span className="text-[11px] text-stone-400">{c.createdAt}</span>
                        </div>
                        <p className="text-xs text-stone-600">📍 {c.location || '-'} • 📐 {c.estimatedArea || '-'} • 📞 {c.phone}</p>
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
                          className="bg-white border border-stone-300 rounded-lg px-2.5 py-2 text-xs font-medium text-stone-900 cursor-pointer"
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
        </section>
      </div>
    </div>
  );
}
