'use client';
import React, { useState, useRef } from 'react';
import { Upload, Loader2 } from 'lucide-react';

export default function ImageUploadField({ label, value, onChange, spec, compact = false }) {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setError('');
    const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    try {
      const formData = new FormData();
      formData.append('file', file);

      const res = await fetch(`${apiBase}/api/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok && data.success && data.url) {
        onChange(data.url);
      } else {
        setError(data.message || 'Gagal mengunggah foto');
      }
    } catch {
      setError('Gagal terhubung ke server backend (port 5000)');
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-2">
      {label && <label className="block text-xs font-semibold text-stone-700">{label}</label>}

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300 text-xs font-semibold transition cursor-pointer shrink-0 disabled:opacity-50"
        >
          {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
          <span>{isUploading ? 'Mengunggah...' : 'Upload Foto'}</span>
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />

        <input
          type="text"
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Atau tempel link URL foto di sini..."
          className="flex-1 px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
        />
      </div>

      {spec && (
        <p className="text-[11px] text-stone-500 flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
          <span>{spec}</span>
        </p>
      )}

      {error && <p className="text-[11px] text-rose-600">{error}</p>}

      {value && !compact && (
        <img
          src={value}
          alt="Preview"
          className="h-28 w-full object-cover rounded-xl border border-stone-200 bg-stone-100"
        />
      )}
    </div>
  );
}
