'use client';

import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

export default function Skills() {
  const skills = [
    { id: 'react', name: 'React/Next.js', level: 90 },
    { id: 'typescript', name: 'TypeScript', level: 85 },
    { id: 'tailwind', name: 'TailwindCSS', level: 95 },
    { id: 'uiux', name: 'UI/UXデザイン', level: 80 },
    { id: 'accessibility', name: 'アクセシビリティ', level: 75 },
    { id: 'performance', name: 'パフォーマンス最適化', level: 85 },
  ];

  return (
    <section className="py-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">
            フロントエンド開発における主要なスキルセット
          </p>
        </motion.div>
        <div className="space-y-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: skills.indexOf(skill) * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}