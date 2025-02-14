import { Blog7 } from "@/components/blocks/blog7";

const BLOG_DATA = {
  tagline: "テックブログ",
  heading: "最新の技術記事",
  description:
    "私の技術的な知見や学びを共有しています。フロントエンド開発、React、TypeScriptなど、実践的な内容を中心に発信しています。",
  buttonText: "全ての記事を見る",
  buttonUrl: "/blog",
  posts: [
    {
      id: "post-1",
      title: "Next.jsとTypeScriptで作るモダンなWebアプリケーション",
      summary:
        "Next.js 14の新機能とTypeScriptを組み合わせた、最新のWebアプリケーション開発手法について解説します。パフォーマンスとDXの両立を目指したベストプラクティスをご紹介。",
      label: "Next.js",
      author: "Toshiki Sakuta",
      published: "2024-02-13",
      url: "https://zenn.dev",
      image: "/blog/nextjs-typescript.png",
    },
    {
      id: "post-2",
      title: "shadcn/uiで実現するモダンなUIデザイン",
      summary:
        "人気のUIコンポーネントライブラリshadcn/uiの基本から応用まで。実際のプロジェクトでの活用例とカスタマイズ方法を詳しく解説します。",
      label: "UI/UX",
      author: "Toshiki Sakuta",
      published: "2024-02-10",
      url: "https://zenn.dev",
      image: "/blog/shadcn-ui.png",
    },
    {
      id: "post-3",
      title: "Web開発者のためのAI活用術",
      summary:
        "GitHub CopilotやChatGPTなどのAIツールを活用した、効率的な開発手法について。実際の使用例とベストプラクティスを紹介します。",
      label: "AI",
      author: "Toshiki Sakuta",
      published: "2024-02-07",
      url: "https://zenn.dev",
      image: "/blog/ai-development.png",
    },
  ],
};

const Blog = () => {
  return <Blog7 {...BLOG_DATA} />;
};

export { Blog };