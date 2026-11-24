import React from 'react';
import { notFound } from 'next/navigation';
import { PACKAGES_DATA } from '@/data/mockData';
import PackageDetailClient from './PackageDetailClient';

export async function generateStaticParams() {
  return PACKAGES_DATA.map((pkg) => ({
    id: pkg.id,
  }));
}

export default async function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pkg = PACKAGES_DATA.find((p) => p.id === id);

  if (!pkg) {
    notFound();
  }

  return <PackageDetailClient pkg={pkg} />;
}

