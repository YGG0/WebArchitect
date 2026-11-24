'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Layers, 
  MessageSquare, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Eye, 
  CheckCircle, 
  Clock, 
  Search, 
  ArrowLeft,
  Lock,
  LogOut,
  FolderKanban,
  FileText,
  Download
} from 'lucide-react';
import { INITIAL_PROJECTS, INITIAL_CONSULTATIONS } from '@/data/mockData';
import { Project, ConsultationRequest } from '@/types';

export default function AdminDashboardPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // default true for dev preview
  const [adminKey, setAdminKey] = useState('');
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'consultations' | 'audit'>('overview');

  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [consultations, setConsultations] = useState<ConsultationRequest[]>(INITIAL_CONSULTATIONS);

  // New project quick form modal state
  const [showAddProject, setShowAddProject] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    code: `SP-${100 + projects.length + 1}`,
    category: 'Rumah Tinggal',
    style: 'Modern Tropis',
    location: '',
    floors: 2,
    buildingArea: 350,
    bedrooms: 4,
    description: '',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  });

  // Fetch latest consultations from API
  useEffect(() => {
    fetch('/api/consultations')
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setConsultations(data.data);
        }
      })
      .catch(() => {});
  }, []);

  const handleUpdateConsultationStatus = async (id: string, status: ConsultationRequest['status']) => {
    setConsultations((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );

    try {
      await fetch('/api/consultations', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
    } catch {}
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Apakah Anda yakin ingin menghapus proyek ini dari portofolio?')) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  const handleToggleFeatured = (id: string) => {
    setProjects((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p))
    );
  };

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    const created: Project = {
      id: `proj-${Date.now()}`,
      code: newProject.code,
      title: newProject.title,
      slug: newProject.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: newProject.category as any,
      style: newProject.style as any,
      location: newProject.location || 'Jakarta',
      year: new Date().getFullYear(),
      floors: Number(newProject.floors),
      buildingArea: Number(newProject.buildingArea),
      bedrooms: Number(newProject.bedrooms),
      thumbnail: newProject.thumbnail,
      description: newProject.description,
      concept: 'Harmonisasi fungsionalitas dan estetika arsitektur kontemporer.',
      isFeatured: false,
      status: 'Published',
      images: [
        {
          id: `img-${Date.now()}-1`,
          url: newProject.thumbnail,
          title: 'Fasad Utama Proyek',
          category: 'eksterior',
        },
      ],
    };

    setProjects([created, ...projects]);
    setShowAddProject(false);
    alert('Proyek berhasil ditambahkan ke portofolio!');
  };

  const newConsultationsCount = consultations.filter((c) => c.status === 'New').length;

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col font-sans">
      {/* Top Admin Bar */}
      <header className="bg-stone-900 text-white border-b border-stone-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 group" title="Kembali ke Website Publik">
            <div className="w-8 h-8 rounded-xs bg-amber-600 flex items-center justify-center text-white">
              <Building2 className="w-5 h-5" />
            </div>
            <span className="font-serif font-bold text-lg tracking-wider text-white">
              SPRIO <span className="text-amber-500 font-sans text-xs tracking-normal font-normal">Admin CMS</span>
            </span>
          </Link>
          <span className="hidden sm:inline-block text-xs text-stone-500 border-l border-stone-800 pl-4">
            PRD v1.1 Architecture & Interior Management System
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Lihat Website Publik
          </Link>
          <div className="w-7 h-7 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
            SA
          </div>
          <span className="hidden sm:inline-block text-stone-300 font-medium">Super Admin</span>
        </div>
      </header>

      {/* Main Admin Content */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-300 pb-4 mb-8 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xs transition ${
              activeTab === 'overview'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" /> Ringkasan Overview
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xs transition ${
              activeTab === 'projects'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <FolderKanban className="w-3.5 h-3.5" /> Kelola Portofolio ({projects.length})
          </button>

          <button
            onClick={() => setActiveTab('consultations')}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xs transition relative ${
              activeTab === 'consultations'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" /> Pesan Konsultasi ({consultations.length})
            {newConsultationsCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('audit')}
            className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xs transition ${
              activeTab === 'audit'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Audit Log & Security
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xs border border-stone-200 shadow-xs">
                <div className="text-stone-500 text-xs uppercase font-semibold">Total Proyek Portofolio</div>
                <div className="font-serif text-3xl font-bold text-stone-900 mt-2">{projects.length}</div>
                <div className="text-[11px] text-emerald-600 font-medium mt-1">Status: Aktif Tayang</div>
              </div>

              <div className="bg-white p-6 rounded-xs border border-stone-200 shadow-xs">
                <div className="text-stone-500 text-xs uppercase font-semibold">Proyek Unggulan (Featured)</div>
                <div className="font-serif text-3xl font-bold text-amber-600 mt-2">
                  {projects.filter((p) => p.isFeatured).length}
                </div>
                <div className="text-[11px] text-stone-500 mt-1">Ditampilkan di Homepage</div>
              </div>

              <div className="bg-white p-6 rounded-xs border border-stone-200 shadow-xs">
                <div className="text-stone-500 text-xs uppercase font-semibold">Permintaan Konsultasi</div>
                <div className="font-serif text-3xl font-bold text-stone-900 mt-2">{consultations.length}</div>
                <div className="text-[11px] text-stone-500 mt-1">Total leads masuk</div>
              </div>

              <div className="bg-white p-6 rounded-xs border border-stone-200 shadow-xs">
                <div className="text-stone-500 text-xs uppercase font-semibold">Konsultasi Baru (Belum Ditindak)</div>
                <div className="font-serif text-3xl font-bold text-rose-600 mt-2">{newConsultationsCount}</div>
                <div className="text-[11px] text-rose-600 font-medium mt-1">Perlu dihubungi via WA</div>
              </div>
            </div>

            {/* Quick Inquiries Table */}
            <div className="bg-white rounded-xs border border-stone-200 p-6 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-base font-bold text-stone-900">
                  Permintaan Konsultasi Terbaru
                </h3>
                <button
                  onClick={() => setActiveTab('consultations')}
                  className="text-xs text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Lihat Semua Leads &rarr;
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-50 text-stone-500 uppercase border-y border-stone-200 text-[10px]">
                    <tr>
                      <th className="py-2.5 px-3">Nama Klien</th>
                      <th className="py-2.5 px-3">WhatsApp / HP</th>
                      <th className="py-2.5 px-3">Layanan</th>
                      <th className="py-2.5 px-3">Lokasi Proyek</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 text-stone-700">
                    {consultations.slice(0, 3).map((item) => (
                      <tr key={item.id} className="hover:bg-stone-50/50">
                        <td className="py-3 px-3 font-medium text-stone-900">{item.name}</td>
                        <td className="py-3 px-3 font-mono">{item.phone}</td>
                        <td className="py-3 px-3">{item.service}</td>
                        <td className="py-3 px-3">{item.location}</td>
                        <td className="py-3 px-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              item.status === 'New'
                                ? 'bg-rose-100 text-rose-700'
                                : item.status === 'In Progress'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Projects Management */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Manajemen Portofolio Proyek
                </h3>
                <p className="text-xs text-stone-500">
                  Tambah, ubah, atau atur proyek arsitektur unggulan yang tayang di website publik.
                </p>
              </div>

              <button
                onClick={() => setShowAddProject(true)}
                className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold uppercase px-4 py-2.5 rounded-xs transition"
              >
                <Plus className="w-4 h-4" /> Tambah Proyek Baru
              </button>
            </div>

            {/* Modal Tambah Proyek */}
            {showAddProject && (
              <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
                <div className="bg-white rounded-xs max-w-lg w-full p-6 shadow-2xl border border-stone-200">
                  <h4 className="font-serif text-lg font-bold text-stone-900 mb-4">
                    Tambah Proyek Portofolio Baru
                  </h4>
                  <form onSubmit={handleCreateProject} className="space-y-3 text-xs">
                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Nama Desain Proyek *</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Villa Tropical Breeze"
                        value={newProject.title}
                        onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Kode Proyek</label>
                        <input
                          type="text"
                          value={newProject.code}
                          onChange={(e) => setNewProject({ ...newProject, code: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Kategori</label>
                        <select
                          value={newProject.category}
                          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        >
                          <option value="Rumah Tinggal">Rumah Tinggal</option>
                          <option value="Villa">Villa</option>
                          <option value="Komersial & Kantor">Komersial & Kantor</option>
                          <option value="Desain Interior">Desain Interior</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Gaya Arsitektur</label>
                        <select
                          value={newProject.style}
                          onChange={(e) => setNewProject({ ...newProject, style: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        >
                          <option value="Modern Tropis">Modern Tropis</option>
                          <option value="Klasik Mewah">Klasik Mewah</option>
                          <option value="Mediterania">Mediterania</option>
                          <option value="Industrial Modern">Industrial Modern</option>
                          <option value="Minimalis Kontemporer">Minimalis Kontemporer</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Lokasi Proyek</label>
                        <input
                          type="text"
                          placeholder="Jakarta / Bali"
                          value={newProject.location}
                          onChange={(e) => setNewProject({ ...newProject, location: e.target.value })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Jumlah Lantai</label>
                        <input
                          type="number"
                          value={newProject.floors}
                          onChange={(e) => setNewProject({ ...newProject, floors: Number(e.target.value) })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Luas Bangunan (m²)</label>
                        <input
                          type="number"
                          value={newProject.buildingArea}
                          onChange={(e) => setNewProject({ ...newProject, buildingArea: Number(e.target.value) })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-stone-700 mb-1">Kamar Tidur</label>
                        <input
                          type="number"
                          value={newProject.bedrooms}
                          onChange={(e) => setNewProject({ ...newProject, bedrooms: Number(e.target.value) })}
                          className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-stone-700 mb-1">Deskripsi Singkat</label>
                      <textarea
                        rows={2}
                        value={newProject.description}
                        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                        className="w-full bg-stone-50 border border-stone-200 p-2 rounded-xs"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3">
                      <button
                        type="button"
                        onClick={() => setShowAddProject(false)}
                        className="px-4 py-2 border border-stone-300 rounded-xs text-stone-600 hover:bg-stone-50"
                      >
                        Batal
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-stone-900 text-white rounded-xs font-semibold hover:bg-amber-600"
                      >
                        Simpan Proyek
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Projects Table */}
            <div className="bg-white rounded-xs border border-stone-200 shadow-xs overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-50 text-stone-500 uppercase border-b border-stone-200 text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Foto & Judul</th>
                    <th className="py-3 px-4">Kategori & Gaya</th>
                    <th className="py-3 px-4">Spesifikasi</th>
                    <th className="py-3 px-4">Featured</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {projects.map((p) => (
                    <tr key={p.id} className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 flex items-center gap-3">
                        <img
                          src={p.thumbnail}
                          alt=""
                          className="w-12 h-9 object-cover rounded-xs border border-stone-200"
                        />
                        <div>
                          <div className="font-bold text-stone-900">{p.title}</div>
                          <div className="text-[10px] text-stone-400 font-mono">{p.code} • {p.location}</div>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-stone-800">{p.category}</div>
                        <div className="text-[10px] text-amber-700">{p.style}</div>
                      </td>
                      <td className="py-3 px-4 text-stone-600">
                        {p.floors} Lt • {p.buildingArea} m² • {p.bedrooms ?? '-'} KT
                      </td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => handleToggleFeatured(p.id)}
                          className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                            p.isFeatured
                              ? 'bg-amber-100 text-amber-800 border-amber-300'
                              : 'bg-stone-100 text-stone-500 border-stone-200'
                          }`}
                        >
                          {p.isFeatured ? '★ Featured' : 'Normal'}
                        </button>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right space-x-2">
                        <Link
                          href={`/portfolio/${p.slug}`}
                          className="text-stone-500 hover:text-amber-600 font-medium inline-flex items-center"
                          title="Lihat Halaman Publik"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => handleDeleteProject(p.id)}
                          className="text-rose-500 hover:text-rose-700 font-medium inline-flex items-center"
                          title="Hapus Proyek"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Consultations Management */}
        {activeTab === 'consultations' && (
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Inbox Permintaan Konsultasi Desain
              </h3>
              <p className="text-xs text-stone-500">
                Daftar prospek klien dari formulir website. Ubah status follow up setelah menghubungi klien via WhatsApp/Telepon.
              </p>
            </div>

            <div className="bg-white rounded-xs border border-stone-200 shadow-xs overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-50 text-stone-500 uppercase border-b border-stone-200 text-[10px]">
                  <tr>
                    <th className="py-3 px-4">Waktu</th>
                    <th className="py-3 px-4">Data Klien</th>
                    <th className="py-3 px-4">Layanan & Lokasi</th>
                    <th className="py-3 px-4">Pesan Kebutuhan</th>
                    <th className="py-3 px-4">Status Follow-up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {consultations.map((c) => (
                    <tr key={c.id} className="hover:bg-stone-50/50">
                      <td className="py-3 px-4 text-[11px] text-stone-500 whitespace-nowrap">
                        {c.createdAt}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-stone-900">{c.name}</div>
                        <div className="text-[11px] text-amber-700 font-mono">
                          <a href={`https://wa.me/${c.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="hover:underline">
                            {c.phone} (Chat WA)
                          </a>
                        </div>
                        <div className="text-[10px] text-stone-400">{c.email}</div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-stone-800">{c.service}</div>
                        <div className="text-[10px] text-stone-500">{c.location}</div>
                        {c.estimatedArea && (
                          <div className="text-[10px] text-stone-400 font-mono">Luas: {c.estimatedArea}</div>
                        )}
                      </td>
                      <td className="py-3 px-4 max-w-xs text-stone-600 line-clamp-2">
                        {c.message}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <select
                          value={c.status}
                          onChange={(e) => handleUpdateConsultationStatus(c.id, e.target.value as any)}
                          className={`text-xs font-semibold px-2 py-1 rounded-xs border ${
                            c.status === 'New'
                              ? 'bg-rose-50 text-rose-700 border-rose-300'
                              : c.status === 'In Progress'
                              ? 'bg-amber-50 text-amber-800 border-amber-300'
                              : c.status === 'Contacted'
                              ? 'bg-blue-50 text-blue-800 border-blue-300'
                              : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                          }`}
                        >
                          <option value="New">New</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Completed">Completed</option>
                          <option value="Archived">Archived</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Audit Log & Security */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-xs border border-stone-200 p-6 shadow-xs space-y-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Audit Log & Pengamanan Sistem (PRD Section 7 & 9.9)
              </h3>
              <p className="text-xs text-stone-500">
                Pencatatan riwayat aktivitas pengguna administratif untuk kepatuhan keamanan dan audit forensik.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-stone-50 text-stone-500 uppercase border-y border-stone-200 text-[10px]">
                  <tr>
                    <th className="py-2.5 px-3">Waktu</th>
                    <th className="py-2.5 px-3">Pengguna</th>
                    <th className="py-2.5 px-3">Aktivitas</th>
                    <th className="py-2.5 px-3">IP Address</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-700">
                  <tr>
                    <td className="py-2.5 px-3 font-mono text-stone-500">2026-11-08 16:45</td>
                    <td className="py-2.5 px-3 font-bold">Super Admin</td>
                    <td className="py-2.5 px-3">Admin Login via Session Hash</td>
                    <td className="py-2.5 px-3 font-mono">127.0.0.1</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-semibold">Success</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono text-stone-500">2026-11-08 16:30</td>
                    <td className="py-2.5 px-3 font-bold">System</td>
                    <td className="py-2.5 px-3">New Consultation Captured (cons-1)</td>
                    <td className="py-2.5 px-3 font-mono">180.252.11.4</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-semibold">Success</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-3 font-mono text-stone-500">2026-11-08 15:20</td>
                    <td className="py-2.5 px-3 font-bold">Super Admin</td>
                    <td className="py-2.5 px-3">Database schema & mock data seeded</td>
                    <td className="py-2.5 px-3 font-mono">127.0.0.1</td>
                    <td className="py-2.5 px-3 text-emerald-600 font-semibold">Success</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

