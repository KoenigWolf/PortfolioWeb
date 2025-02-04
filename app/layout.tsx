import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ClientBody from '@/components/ClientBody';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Toshiki Portfolio Web',
  description: 'Portfolio of engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}