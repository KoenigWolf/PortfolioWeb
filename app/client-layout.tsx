'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import Header from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { cn } from '@/lib/utils';

export default function ClientLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body className={cn("min-h-screen bg-background", mounted ? "vsc-initialized" : "")}>
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </body>
  );
}