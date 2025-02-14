'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

/**
 * アニメーション設定の定数
 */
const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const FADE_IN_LEFT = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const FADE_IN_RIGHT = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

/**
 * 連絡先情報を表示するコンポーネント
 */
const ContactInfo = () => (
  <motion.div {...FADE_IN_LEFT} className="space-y-6">
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <Mail className="h-6 w-6" aria-hidden="true" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <a 
              href="mailto:contact@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              tabIndex={0}
              aria-label="メールを送信する"
            >
              contact@example.com
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-center gap-4">
          <MessageSquare className="h-6 w-6" aria-hidden="true" />
          <div>
            <h3 className="font-semibold">SNS</h3>
            <a 
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              tabIndex={0}
              aria-label="Twitterプロフィールを開く"
            >
              @username
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

/**
 * お問い合わせフォームコンポーネント
 */
const ContactForm = () => {
  const { formData, isSubmitting, handleSubmit, handleInputChange } = useContactForm();

  return (
    <motion.div {...FADE_IN_RIGHT}>
      <Card>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">お名前 <span className="text-destructive">*</span></Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                aria-required="true"
                placeholder="山田 太郎"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">メールアドレス <span className="text-destructive">*</span></Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                aria-required="true"
                placeholder="example@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">メッセージ <span className="text-destructive">*</span></Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[120px]"
                required
                aria-required="true"
                placeholder="お問い合わせ内容をご記入ください"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              <Send className="h-4 w-4 mr-2" aria-hidden="true" />
              {isSubmitting ? '送信中...' : '送信する'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

/**
 * お問い合わせセクションのメインコンポーネント
 * 
 * このコンポーネントは以下の機能を提供します：
 * - 連絡先情報の表示（メール、SNS）
 * - お問い合わせフォーム
 * - アニメーションによる視覚的なフィードバック
 * - アクセシビリティ対応
 */
const Contact = () => {
  return (
    <section 
      className="py-20 px-4"
      aria-label="お問い合わせ"
      id="contact"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          {...FADE_IN_UP}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            お気軽にご連絡ください
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;