import type { Metadata } from 'next'
import { Suspense } from 'react'
import ContactSection from '@/components/sections/Contact'
import Loading from '../loading'

export const metadata: Metadata = {
  title: 'Contact | ポートフォリオ',
  description: 'お問い合わせはこちらのフォームからお願いいたします。',
  openGraph: {
    title: 'Contact | ポートフォリオ',
    description: 'お問い合わせはこちらのフォームからお願いいたします。',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<Loading />}>
        <ContactSection />
      </Suspense>
    </main>
  )
}