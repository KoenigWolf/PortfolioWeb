import type { Metadata } from 'next'
import { Suspense } from 'react'
import { TimelineSection } from '@/components/sections/Timeline'
import Loading from '../loading'

export const metadata: Metadata = {
  title: 'Timeline | ポートフォリオ',
  description: 'エンジニアとしての成長の軌跡をご紹介します。これまでの経験と実績を時系列で確認いただけます。',
  openGraph: {
    title: 'Timeline | ポートフォリオ',
    description: 'エンジニアとしての成長の軌跡をご紹介します。これまでの経験と実績を時系列で確認いただけます。',
    type: 'website',
  },
}

export default function TimelinePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<Loading />}>
        <TimelineSection />
      </Suspense>
    </main>
  )
}