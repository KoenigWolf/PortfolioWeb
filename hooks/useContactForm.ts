import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useToast } from '@/hooks/use-toast';

/**
 * フォームデータの型定義
 */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/**
 * お問い合わせフォームのロジックを管理するカスタムフック
 * 
 * @returns {object} フォームの状態と操作メソッド
 * - formData: フォームの入力データ
 * - isSubmitting: 送信中かどうかのフラグ
 * - handleSubmit: フォーム送信時のハンドラー
 * - handleInputChange: 入力値変更時のハンドラー
 */
export const useContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  /**
   * フォーム送信時の処理
   * @param e フォームイベント
   */
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // フォーム送信処理をここに実装
      // TODO: API実装後に実際の送信処理に置き換える
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: '送信完了',
        description: 'メッセージを受け付けました。',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: 'エラー',
        description: '送信に失敗しました。再度お試しください。',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * 入力値変更時の処理
   * @param e 入力イベント
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    formData,
    isSubmitting,
    handleSubmit,
    handleInputChange,
  };
};