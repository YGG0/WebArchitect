'use client';
import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail, Clock } from 'lucide-react';
export default function ConsultationSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Jasa Desain Arsitektur',
        location: '',
        estimatedArea: '300 - 600 m²',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleSendViaWhatsApp = (e) => {
        e.preventDefault();
        const waText = `Halo SPRIO Architect, saya ingin konsultasi:\n- Nama: ${formData.name || '-'}\n- No. HP: ${formData.phone || '-'}\n- Layanan: ${formData.service}\n- Lokasi: ${formData.location || '-'}\n- Estimasi Luas: ${formData.estimatedArea}\n- Kebutuhan: ${formData.message || '-'}`;
        window.open(`https://wa.me/6287872008510?text=${encodeURIComponent(waText)}`, '_blank');
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        try {
            const res = await fetch(`${apiBase}/api/consultations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setIsSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'Jasa Desain Arsitektur',
                    location: '',
                    estimatedArea: '300 - 600 m²',
                    message: '',
                });
            }
        }
        catch {
            // Offline fallback
            setIsSuccess(true);
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (<section id="konsultasi" className="py-24 bg-stone-100 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Context & Contact info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-2">
                Konsultasikan Ide Desain Anda Bersama Arsitek Ahli
              </h2>
              <div className="w-16 h-1 bg-amber-500 mt-4 rounded-full"/>
            </div>

            <p className="text-stone-600 text-sm leading-relaxed">
              Tim arsitek kami siap membantu membedah potensi lahan, merancang layout ruang yang fungsional, serta memberikan estimasi biaya terencana. Isi formulir ini untuk mendapatkan sesi konsultasi awal gratis.
            </p>

            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center gap-3 text-sm text-stone-700">
                <div className="w-9 h-9 rounded-xs bg-stone-900 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4"/>
                </div>
                <div>
                  <div className="font-bold text-stone-900">Hotline WhatsApp (Resmi)</div>
                  <a href="https://wa.me/6287872008510" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-semibold text-xs hover:underline">
                    +62 878-7200-8510 (Respon Cepat)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-stone-700">
                <div className="w-9 h-9 rounded-xs bg-stone-900 text-amber-500 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4"/>
                </div>
                <div>
                  <div className="font-bold text-stone-900">Email Resmi Studio</div>
                  <div className="text-stone-500 text-xs">studio@sprioarchitect.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-stone-700">
                <div className="w-9 h-9 rounded-xs bg-stone-900 text-amber-500 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4"/>
                </div>
                <div>
                  <div className="font-bold text-stone-900">Waktu Respon</div>
                  <div className="text-stone-500 text-xs">Maksimal 1 x 24 Jam Kerja</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-xs shadow-lg border border-stone-200">
            {isSuccess ? (<div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10"/>
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Permintaan Konsultasi Diterima!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  Terima kasih telah mempercayakan rencana hunian Anda kepada kami. Tim arsitek kami akan segera menghubungi Anda via WhatsApp atau Email dalam 1x24 jam kerja.
                </p>
                <button onClick={() => setIsSuccess(false)} className="mt-4 text-xs font-semibold text-amber-700 underline hover:text-amber-800">
                  Kirim Permintaan Konsultasi Lainnya
                </button>
              </div>) : (<form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Contoh: Ir. Budi Santoso" className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600"/>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Nomor WhatsApp / HP *
                    </label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Contoh: 081234567890" className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email *
                    </label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="nama@email.com" className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600"/>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Lokasi Proyek / Kota *
                    </label>
                    <input type="text" required value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} placeholder="Contoh: Jakarta Selatan / Bali" className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600"/>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Jenis Layanan yang Dibutuhkan
                    </label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600">
                      <option value="Jasa Desain Arsitektur">Jasa Desain Arsitektur</option>
                      <option value="Desain Interior & Fit-Out">Desain Interior & Fit-Out</option>
                      <option value="Visualisasi 3D & Animasi">Visualisasi 3D & Animasi</option>
                      <option value="Perencanaan & Renovasi">Perencanaan & Renovasi</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Perkiraan Luas Bangunan
                    </label>
                    <select value={formData.estimatedArea} onChange={(e) => setFormData({ ...formData, estimatedArea: e.target.value })} className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600">
                      <option value="< 300 m²">&lt; 300 m²</option>
                      <option value="300 - 600 m²">300 - 600 m²</option>
                      <option value="600 - 1000 m²">600 - 1000 m²</option>
                      <option value="> 1000 m²">&gt; 1000 m²</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Ceritakan Kebutuhan atau Konsep Hunian Impian Anda *
                  </label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Contoh: Saya memiliki tanah ukuran 15x25 meter, berencana membangun rumah 2 lantai modern tropis dengan 4 kamar tidur dan kolam renang..." className="w-full text-xs bg-stone-50 border border-stone-200 rounded-xs p-3 text-stone-800 focus:outline-none focus:border-amber-600"/>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="submit" disabled={isSubmitting} className="flex-1 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs tracking-wider uppercase py-4 px-4 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50">
                    <Send className="w-4 h-4 text-amber-400"/>
                    {isSubmitting ? 'Mengirim Data...' : 'Kirim via Formulir'}
                  </button>

                  <button type="button" onClick={handleSendViaWhatsApp} className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase py-4 px-4 rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-[1.01]">
                    <Phone className="w-4 h-4 text-white"/>
                    Konsultasi via WhatsApp
                  </button>
                </div>
              </form>)}
          </div>
        </div>
      </div>
    </section>);
}
