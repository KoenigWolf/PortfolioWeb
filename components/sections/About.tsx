'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Lightbulb } from 'lucide-react';

interface Feature {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 'responsive',
    icon: <Monitor className="h-8 w-8" aria-hidden="true" />,
    title: 'レスポンシブデザイン',
    description: 'あらゆるデバイスで最適な表示を実現します',
  },
  {
    id: 'modern',
    icon: <Smartphone className="h-8 w-8" aria-hidden="true" />,
    title: 'モダンな開発',
    description: '最新のフレームワークと技術を活用します',
  },
  {
    id: 'creative',
    icon: <Lightbulb className="h-8 w-8" aria-hidden="true" />,
    title: 'クリエイティブな解決策',
    description: '独創的なアプローチで課題を解決します',
  },
];

const About = () => {
  return (
    <section 
      className="py-20 px-4 bg-background"
      aria-label="自己紹介"
      id="about"
    >
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
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
          {features.map((feature) => (
            <motion.li
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: features.indexOf(feature) * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardContent className="pt-6">
                  <div 
                    className="mb-4 inline-block p-3 bg-primary/10 rounded-full"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;