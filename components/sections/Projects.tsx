'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';

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
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
