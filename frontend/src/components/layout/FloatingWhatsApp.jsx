'use client';
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bot, X, Send, MessageCircle } from 'lucide-react';
import { useSiteSettings } from '@/lib/useSiteSettings';
import { getArchitectBotReply, QUICK_QUESTIONS } from '@/lib/architectBot';

function formatMessageText(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-stone-950">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function FloatingWhatsApp() {
  const pathname = usePathname();
  const settings = useSiteSettings();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Halo! Saya **Asisten Arsitek SPRIO**. Ada yang ingin ditanyakan seputar desain rumah, interior, paket harga, atau konsultasi?',
    },
  ]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Jangan tampilkan bot di halaman Admin
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const defaultPhone = settings.whatsappNumber || '6287872008510';

  const sendQuestion = (questionText) => {
    const trimmed = questionText.trim();
    if (!trimmed) return;

    const botReply = getArchitectBotReply(trimmed, settings);
    setMessages((prev) => [
      ...prev,
      { sender: 'user', text: trimmed },
      { sender: 'bot', text: botReply },
    ]);
    setInput('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendQuestion(input);
  };

  const handleOpenWhatsApp = () => {
    const lastUserMsg = [...messages].reverse().find((m) => m.sender === 'user')?.text;
    const waText = lastUserMsg
      ? `Halo SPRIO Architect, saya ingin konsultasi lebih lanjut mengenai: "${lastUserMsg}"`
      : 'Halo SPRIO Architect, saya tertarik untuk konsultasi desain arsitektur / interior.';
    window.open(`https://wa.me/${defaultPhone}?text=${encodeURIComponent(waText)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Bot Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[390px] bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[540px] animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-stone-900 text-white p-4 flex items-center justify-between border-b border-stone-800 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-stone-100">
                  Asisten Arsitek SPRIO
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online • Siap Membantu</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white p-1 rounded-full hover:bg-stone-800 transition cursor-pointer"
              aria-label="Tutup chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 bg-stone-50 space-y-3 text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl whitespace-pre-line leading-relaxed shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-stone-900 text-white rounded-br-xs'
                      : 'bg-white text-stone-800 border border-stone-200 rounded-bl-xs'
                  }`}
                >
                  {msg.sender === 'bot' ? formatMessageText(msg.text) : msg.text}
                </div>
              </div>
            ))}

            {/* Quick Question Chips (tanpa label/tulisan "rekomendasi") */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {QUICK_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => sendQuestion(q)}
                  className="text-left text-[11px] bg-white hover:bg-amber-50 text-stone-700 hover:text-amber-900 border border-stone-200 hover:border-amber-300 px-3 py-1.5 rounded-full transition shadow-2xs cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            <div ref={chatEndRef} />
          </div>

          {/* Footer: Input + Direct WhatsApp */}
          <div className="p-3 bg-white border-t border-stone-200 space-y-2 shrink-0">
            <form onSubmit={handleFormSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ketik pertanyaan seputar arsitektur..."
                className="flex-1 px-3.5 py-2 text-xs text-stone-900 placeholder:text-stone-400 bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:border-amber-600 focus:bg-white"
              />
              <button
                type="submit"
                className="px-3.5 py-2 bg-stone-900 hover:bg-amber-600 text-white rounded-xl transition flex items-center justify-center shrink-0 cursor-pointer"
                title="Kirim pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <button
              type="button"
              onClick={handleOpenWhatsApp}
              className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Lanjut Konsultasi ke WhatsApp Arsitek</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Bot Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-stone-900 hover:bg-amber-600 text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border border-stone-700"
        title="Bot Asisten Arsitek"
      >
        <Bot className="w-5 h-5 text-amber-400 group-hover:text-white transition-colors" />
        <span className="text-xs font-bold tracking-wider uppercase hidden sm:inline">
          Tanya Bot Arsitek
        </span>
      </button>
    </div>
  );
}
