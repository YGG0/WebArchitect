import { NextResponse } from 'next/server';
import { INITIAL_CONSULTATIONS } from '@/data/mockData';
// In-memory store for consultation requests during runtime
let consultations = [...INITIAL_CONSULTATIONS];
export async function GET() {
    return NextResponse.json({
        success: true,
        data: consultations,
    });
}
export async function POST(request) {
    try {
        const body = await request.json();
        const newConsultation = {
            id: `cons-${Date.now()}`,
            name: body.name || 'Anonymous',
            email: body.email || '',
            phone: body.phone || '',
            service: body.service || 'Jasa Desain Arsitektur',
            location: body.location || '',
            estimatedArea: body.estimatedArea || '',
            message: body.message || '',
            status: 'New',
            createdAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
        };
        consultations = [newConsultation, ...consultations];
        return NextResponse.json({
            success: true,
            message: 'Permintaan konsultasi berhasil dikirim',
            data: newConsultation,
        });
    }
    catch {
        return NextResponse.json({ success: false, message: 'Gagal memproses data konsultasi' }, { status: 500 });
    }
}
export async function PATCH(request) {
    try {
        const { id, status } = await request.json();
        consultations = consultations.map((item) => item.id === id ? { ...item, status } : item);
        return NextResponse.json({
            success: true,
            message: 'Status konsultasi berhasil diperbarui',
            data: consultations,
        });
    }
    catch {
        return NextResponse.json({ success: false, message: 'Gagal memperbarui status' }, { status: 500 });
    }
}
