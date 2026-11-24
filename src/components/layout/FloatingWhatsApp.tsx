'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const defaultPhone = '6287872008510'; // Studio WhatsApp Hotline (087872008510)

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = message.trim() || 'Halo SPRIO Architect, saya tertarik untuk konsultasi desain arsitektur / interior hunian.';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/${defaultPhone}?text=${encoded}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-xs shadow-2xl border border-stone-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex items-center justify-between border-b border-stone-800">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                WA
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-100">
                  Konsultasi Desain SPRIO
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online • Siap Membantu
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-stone-400 hover:text-white rounded-xs"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-stone-50 space-y-3 text-xs text-stone-700">
            <div className="bg-white p-3 rounded-xs border border-stone-200 shadow-xs leading-relaxed">
              Selamat datang di <strong>SPRIO Architect & Interior</strong>! Ada yang bisa kami bantu terkait rencana desain rumah, villa, atau interior Anda?
            </div>

            {/* Quick Templates */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => setMessage('Halo, saya ingin menanyakan estimasi biaya desain rumah.')}
                className="text-[11px] bg-white border border-stone-300 hover:border-amber-600 hover:text-amber-700 px-2.5 py-1 rounded-xs transition"
              >
                Tanya Biaya Desain
              </button>
              <button
                type="button"
                onClick={() => setMessage('Halo, saya ingin jadwal konsultasi desain dengan arsitek.')}
                className="text-[11px] bg-white border border-stone-300 hover:border-amber-600 hover:text-amber-700 px-2.5 py-1 rounded-xs transition"
              >
                Jadwal Konsultasi
              </button>
              <button
                type="button"
                onClick={() => setMessage('Halo, saya memiliki lahan dan ingin rekomendasi denah.')}
                className="text-[11px] bg-white border border-stone-300 hover:border-amber-600 hover:text-amber-700 px-2.5 py-1 rounded-xs transition"
              >
                Konsultasi Denah Lahan
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendWhatsApp} className="pt-2 flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ketik pertanyaan Anda..."
                className="flex-1 bg-white border border-stone-300 rounded-xs px-3 py-2 text-xs text-stone-800 focus:outline-none focus:border-amber-600"
              />
              <button
                type="submit"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-xs flex items-center justify-center transition shadow-xs"
                title="Kirim ke WhatsApp"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 hover:scale-105"
        title="Chat WhatsApp Arsitek"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline-block pr-1">
          Tanya Arsitek
        </span>
      </button>
    </div>
  );
}

