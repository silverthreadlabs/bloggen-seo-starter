import React from 'react';
import { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import Hero from '@/components/home/hero/Hero';
import HomeSchema from '@/lib/seo/schema/home';

export const metadata: Metadata = createPageMetadata({
  path: '',
});

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center justify-center overflow-hidden relative">
      <HomeSchema />
      <Hero />
    </main>
  );
}
