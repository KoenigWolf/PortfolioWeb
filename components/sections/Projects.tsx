'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/cards/ProjectCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <section
      className="py-20 px-4"
      aria-label="プロジェクト"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            最近取り組んだプロジェクトの一部をご紹介します
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild>
            <Link href="/projects">プロジェクト一覧</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
