'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Project } from '@/data/projects';

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="h-full"
  >
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[16/9]">
        <Image
          src={project.image}
          alt={`${project.title}のスクリーンショット`}
          fill
          className="object-cover"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="flex-grow p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4 p-6 pt-0">
        <Button variant="outline" size="sm" asChild>
          <a
            href={`https://github.com/username/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
            tabIndex={0}
            aria-label={`${project.title}のソースコードを見る`}
          >
            <Github className="h-4 w-4 mr-2" aria-hidden="true" />
            Code
          </a>
        </Button>
        <Button size="sm" asChild>
          <a
            href={`https://demo.example.com/${project.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
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
);

export default ProjectCard;
