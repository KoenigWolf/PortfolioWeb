"use client";

import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TimelineSection() {
  const data = [
    {
      id: "2024",
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            フルスタックエンジニアとしてのスキルを磨きながら、個人開発や新しい技術の習得に励んでいます。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/project1.png"
              alt="project image"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/project2.png"
              alt="project image"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "2023",
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Webアプリケーション開発の基礎を学び、フロントエンドとバックエンドの技術を習得。
            React、Next.js、TypeScriptなどのモダンな技術スタックを使用したプロジェクトを開始。
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/study1.png"
              alt="study progress"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
            <Image
              src="/images/study2.png"
              alt="study progress"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
            />
          </div>
        </div>
      ),
    },
    {
      id: "2022",
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            プログラミングの学習を開始し、以下のような基礎スキルを習得しました：
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              HTML/CSS基礎
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              JavaScript基礎
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              Git/GitHubの基本操作
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              アルゴリズムとデータ構造の基礎
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="py-20 px-4"
      aria-label="タイムライン"
      id="timeline"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4" id="timeline-title">Timeline</h2>
          <p className="text-muted-foreground">
            私のエンジニアとしての成長の軌跡
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full"
        >
          <Timeline data={data} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button asChild>
            <Link href="/timeline">タイムライン詳細</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}