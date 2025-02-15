import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import { TimelineSection } from '@/components/sections/Timeline';
import { Blog } from '@/components/sections/Blog';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション - フルスクリーン */}
      <Hero />

      {/* メインコンテンツセクション */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid gap-16 md:gap-24 lg:gap-32">
          {/* 自己紹介セクション */}
          <section 
            id="about" 
            aria-labelledby="about-title"
            className="scroll-mt-20"
          >
            <About />
          </section>

          {/* スキルセクション */}
          <section 
            id="skills" 
            aria-labelledby="skills-title"
            className="scroll-mt-20"
          >
            <Skills />
          </section>

          {/* 経歴セクション */}
          <section 
            id="timeline" 
            aria-labelledby="timeline-title"
            className="scroll-mt-20"
          >
            <TimelineSection />
          </section>

          {/* プロジェクトセクション */}
          <section 
            id="projects" 
            aria-labelledby="projects-title"
            className="scroll-mt-20"
          >
            <Projects />
          </section>

          {/* ブログセクション */}
          <section 
            id="blog" 
            aria-labelledby="blog-title"
            className="scroll-mt-20"
          >
            <Blog />
          </section>         
        </div>
      </div>
    </div>
  );
}