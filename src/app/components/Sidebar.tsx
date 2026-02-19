import React from 'react';
import Link from 'next/link';
import styles from './sidebar.module.scss';

export default function Sidebar() {
    return (
        <nav className={styles.sidebar}>
            {/* ロゴ */}
            <Link href="/" className={styles.logo}>K</Link>

            {/* ナビゲーションアイテム */}
            <ul className={styles.navList}>
                {/* ホーム */}
                <li>
                    <button className={`${styles.navItem} ${styles.active}`} aria-label="ホーム">
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                    </button>
                </li>

                {/* 検索 */}
                <li>
                    <button className={styles.navItem} aria-label="検索">
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </button>
                </li>

                {/* 投稿（+） */}
                <li>
                    <button className={styles.navItem} aria-label="投稿">
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="3" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                        </svg>
                    </button>
                </li>

                {/* DM */}
                <li>
                    <button className={styles.navItem} aria-label="ダイレクトメッセージ">
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </li>

                {/* ハート（お気に入り） */}
                <li>
                    <button className={styles.navItem} aria-label="お気に入り">
                        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </button>
                </li>
            </ul>

            {/* 下部のアイテム */}
            <div className={styles.navBottom}>
                {/* その他メニュー */}
                <button className={styles.navItem} aria-label="メニュー">
                    <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
