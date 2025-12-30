'use client';

import { Calendar, Heart, Star, Settings } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './BottomNav.module.css';

const tabs = [
  { id: '1', path: '/1', label: 'Page 1', Icon: Star },
  { id: '2', path: '/2', label: 'Page 2', Icon: Calendar },
  { id: '3', path: '/3', label: 'Page 3', Icon: Heart },
  { id: 'settings', path: '/settings', label: 'Settings', Icon: Settings },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  // 現在のパスに一致するタブのインデックスを取得
  const activeIndex = tabs.findIndex((tab) => {
    return pathname.startsWith(tab.path);
  });

  // 一致しない場合は0をデフォルトに
  const currentIndex = activeIndex === -1 ? 0 : activeIndex;

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <nav className={styles.nav}>
      {/* ピル型背景（スライドする要素） */}
      <div
        className={styles.pill}
        style={{
          left: `calc(${currentIndex * 25}% + 8px)`,
        }}
      />

      {/* タブボタン */}
      {tabs.map((tab, index) => {
        const isActive = currentIndex === index;
        const Icon = tab.Icon;

        return (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.path)}
            className={`${styles.tab} ${isActive ? styles.active : ''}`}
            aria-label={tab.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon
              className={styles.icon}
              size={24}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span className={styles.label}>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
