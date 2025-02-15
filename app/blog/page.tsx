import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Blog } from '@/components/sections/Blog'
import Loading from '../loading'

export const metadata: Metadata = {
  title: 'Blog | ポートフォリオ',
  description: 'フロントエンド開発、React、TypeScriptなどの技術記事を掲載しています。',
  openGraph: {
    title: 'Blog | ポートフォリオ',
    description: 'フロントエンド開発、React、TypeScriptなどの技術記事を掲載しています。',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<Loading />}>
        <Blog />
      </Suspense>
    </main>
  )
}