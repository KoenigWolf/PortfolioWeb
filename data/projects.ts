export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'ECサイトリニューアル',
    description: 'Next.js 13とTypeScriptを使用したモダンなECサイト',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    id: 'dashboard',
    title: 'ダッシュボード開発',
    description: 'データ可視化とリアルタイム更新機能を実装',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['React', 'Recharts', 'WebSocket'],
  },
  {
    id: 'sns',
    title: 'SNSアプリケーション',
    description: 'インタラクティブなSNSプラットフォーム',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
];
