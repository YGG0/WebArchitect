import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { INITIAL_PROJECTS } from '@/data/mockData';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
  return INITIAL_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = INITIAL_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-stone-500">Memuat detail proyek...</div>}>
      <ProjectDetailClient project={project} />
    </Suspense>
  );
}
