import BottomNav from '@/components/BottomNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'App with bottom navigation',
};

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* メインコンテンツ */}
      <main className="main-content">
        {children}
      </main>

      {/* ボトムナビゲーション */}
      <BottomNav />
    </>
  );
}
