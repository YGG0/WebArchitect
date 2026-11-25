# SPRIO Architect & Interior — Struktur Terpisah (Frontend + Backend)

## Cara Menjalankan di Lokal

Buka **2 terminal** terpisah:

### 1. Jalankan Backend (Port 5000)
```bash
cd backend
npm install
npm run dev
```
Backend berjalan di: `http://localhost:5000`

### 2. Jalankan Frontend (Port 3000)
```bash
cd frontend
npm install
npm run dev
```
Frontend berjalan di: `http://localhost:3000`

---

## Cara Kembali ke Versi Menyatu (Monolith)
Jika suatu saat ingin kembali ke versi menyatu (1 folder Next.js):
```bash
git checkout backup-monolith-js
```
Atau untuk kembali ke versi TypeScript awal:
```bash
git checkout backup-typescript
```
