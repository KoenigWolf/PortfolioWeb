import type { Metadata } from 'next'
import { Suspense } from 'react'
import ProjectsSection from '@/components/sections/Projects'
import Loading from './loading'

export const metadata: Metadata = {
  title: 'Projects | ポートフォリオ',
  description: '私が手がけた主要なプロジェクトをご紹介します。各プロジェクトの詳細や使用技術をご覧いただけます。',
  openGraph: {
    title: 'Projects | ポートフォリオ',
    description: '私が手がけた主要なプロジェクトをご紹介します。各プロジェクトの詳細や使用技術をご覧いただけます。',
    type: 'website',
  },
}

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <Suspense fallback={<Loading />}>
        <ProjectsSection />
      </Suspense>
    </main>
  )
}