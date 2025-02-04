'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body className={cn("font-sans antialiased", mounted ? "vsc-initialized" : "")}>
      {children}
    </body>
  );
}