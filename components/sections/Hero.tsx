'use client';

import { motion } from 'framer-motion';
import { Code2, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      className="min-h-screen flex flex-col items-center justify-center relative"
      aria-label="ヒーローセクション"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6 px-4"
      >
        <div className="flex items-center justify-center mb-6">
          <Code2 className="h-16 w-16 text-primary" aria-hidden="true" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
          フロントエンドエンジニア
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          モダンなウェブ体験を創造する
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <Button 
            size="lg" 
            asChild
          >
            <a href="#projects" tabIndex={0}>
              プロジェクトを見る
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            asChild
          >
            <a href="#contact" tabIndex={0}>
              お問い合わせ
            </a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="h-8 w-8 animate-bounce" aria-hidden="true" />
      </motion.div>
    </section>
  );
};

export default Hero;