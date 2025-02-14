import type { Metadata } from 'next'
import { Suspense } from 'react'
import SkillsSection from '@/components/sections/Skills'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'Skills | ポートフォリオ',
  description: 'フロントエンド開発における技術スタックと専門性についてご紹介します。',
  openGraph: {
    title: 'Skills | ポートフォリオ',
    description: 'フロントエンド開発における技術スタックと専門性についてご紹介します。',
    type: 'website',
  },
}

export default function SkillsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <Suspense fallback={<Loading />}>
        <SkillsSection />
      </Suspense>
    </main>
  )
}