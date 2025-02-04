'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: 'レスポンシブデザイン',
      description: 'あらゆるデバイスで最適な表示を実現します',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'モダンな開発',
      description: '最新のフレームワークと技術を活用します',
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'クリエイティブな解決策',
      description: '独創的なアプローチで課題を解決します',
    },
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            フロントエンド開発に情熱を注ぐエンジニアとして、
            ユーザー体験を最重視した開発を行っています。
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-block p-3 bg-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}