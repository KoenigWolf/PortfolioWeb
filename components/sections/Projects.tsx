'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
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

const Projects = () => {
  return (
    <section 
      className="py-20 px-4 bg-background"
      aria-label="プロジェクト一覧"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            最近取り組んだプロジェクトの一部をご紹介します
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: projects.indexOf(project) * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <img
                  src={project.image}
                  alt={`${project.title}のスクリーンショット`}
                  className="h-48 w-full object-cover"
                  loading="lazy"
                />
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    asChild
                  >
                    <a 
                      href={`https://github.com/username/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                      aria-label={`${project.title}のソースコードを見る`}
                    >
                      <Github className="h-4 w-4 mr-2" aria-hidden="true" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    asChild
                  >
                    <a 
                      href={`https://demo.example.com/${project.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                      aria-label={`${project.title}のデモを見る`}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" aria-hidden="true" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;