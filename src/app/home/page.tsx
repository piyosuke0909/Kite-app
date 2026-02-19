'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './home.module.scss';
import Sidebar from '../components/Sidebar';
import WeatherIcon from '../components/WeatherIcon';
import type { WeatherType } from '../components/WeatherIcon';

// --- モックデータ ---
const WEATHER = {
    date: '2/20',
    dayOfWeek: 'Thu',
    location: '東京 新宿',
    temp: '8°C',
    humidity: '35%',
    icon: 'cloudy' as WeatherType,
};

const FORECAST: { date: string; day: string; temp: string; icon: WeatherType }[] = [
    { date: '2/21', day: 'Fri', icon: 'sunny', temp: '10°C/30%' },
    { date: '2/22', day: 'Sat', icon: 'rainy', temp: '6°C/55%' },
    { date: '2/23', day: 'Sun', icon: 'rainy_sunny', temp: '9°C/40%' },
];

const SUGGESTION = {
    tags: ['モノトーン', '曇り', 'コート'],
    text: '本日は朝から冷え込むため、厚手のコートにダークトーンのコーデを提案します。シンプルなモノトーンで洗練された印象に。',
};

// ファッション写真 6枚（2列 × 3行）
const FASHION_PHOTOS = [
    'https://picsum.photos/seed/fashion1/400/400',
    'https://picsum.photos/seed/fashion2/400/400',
    'https://picsum.photos/seed/fashion3/400/400',
    'https://picsum.photos/seed/fashion4/400/400',
    'https://picsum.photos/seed/fashion5/400/400',
    'https://picsum.photos/seed/fashion6/400/400',
];

// 持ち物チェック（初期データ）
const INITIAL_BELONGINGS = [
    { item: '折りたたみ傘', needed: true },
    { item: 'マフラー', needed: true },
    { item: '日焼け止め', needed: false },
    { item: 'サングラス', needed: false },
];

// お出かけスポット
const OUTING_SPOTS = [
    { name: '表参道ヒルズ', tag: 'ショッピング', distance: '1.2km' },
    { name: '新宿御苑', tag: '散歩', distance: '0.8km' },
    { name: 'KITTE丸の内', tag: 'カフェ', distance: '3.5km' },
];

export default function HomePage() {
    // 持ち物リストのstate管理
    const [belongings, setBelongings] = useState(INITIAL_BELONGINGS);
    const [newItem, setNewItem] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [memo, setMemo] = useState('');

    // アイテム追加
    const handleAdd = () => {
        if (newItem.trim()) {
            setBelongings([...belongings, { item: newItem.trim(), needed: true }]);
            setNewItem('');
            setShowInput(false);
        }
    };

    // アイテム削除
    const handleDelete = (index: number) => {
        setBelongings(belongings.filter((_, i) => i !== index));
    };

    // 必要/不要トグル
    const handleToggle = (index: number) => {
        setBelongings(belongings.map((b, i) =>
            i === index ? { ...b, needed: !b.needed } : b
        ));
    };

    return (
        <>
            <Sidebar />

            <div className={styles.page}>
                <div className={styles.content}>

                    {/* ===== 左カラム ===== */}
                    <div className={styles.leftColumn}>

                    {/* 2×2 カードグリッド（黄色枠） */}
                    <div className={styles.cardWrapper}>
                    <div className={styles.cardGrid}>

                        {/* 左上：天気カード */}
                        <div className={styles.weatherCard}>
                            <div className={styles.cardLabel}>Today</div>
                            <div className={styles.weatherTop}>
                                <div className={styles.iconCircle}>
                                    <WeatherIcon type={WEATHER.icon} size={36} />
                                </div>
                                <div>
                                    <div className={styles.dateText}>{WEATHER.date}</div>
                                    <div className={styles.locationText}>
                                        in {WEATHER.location}（{WEATHER.dayOfWeek}）
                                    </div>
                                </div>
                            </div>
                            <div className={styles.tempText}>
                                {WEATHER.temp} / {WEATHER.humidity}
                            </div>
                        </div>

                        {/* 右上：週間予報 */}
                        <div className={styles.forecastCard}>
                            <div className={styles.cardLabel}>Forecast</div>
                            <div className={styles.forecastRow}>
                                {FORECAST.map((day) => (
                                    <div key={day.date} className={styles.forecastItem}>
                                        <span className={styles.forecastDate}>{day.date}</span>
                                        <span className={styles.forecastDay}>{day.day}</span>
                                        <div className={styles.iconCircleSmall}>
                                            <WeatherIcon type={day.icon} size={18} />
                                        </div>
                                        <span className={styles.forecastTemp}>{day.temp}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 左下：コーデ画像 */}
                        <div className={styles.outfitCard}>
                            <Image
                                src="https://picsum.photos/seed/outfit1/400/600"
                                alt="今日のコーデ提案"
                                fill
                                sizes="210px"
                                style={{ objectFit: 'cover' }}
                                unoptimized
                                priority
                            />
                            <div className={styles.outfitDots}>
                                <span className={`${styles.dot} ${styles.active}`} />
                                <span className={styles.dot} />
                                <span className={styles.dot} />
                            </div>
                        </div>

                        {/* 右下：提案テキスト */}
                        <div className={styles.suggestionCard}>
                            <div>
                                <h3 className={styles.suggestionTitle}>今日のコーデを提案</h3>
                                <div className={styles.tags}>
                                    {SUGGESTION.tags.map((tag) => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <p className={styles.suggestionBody}>{SUGGESTION.text}</p>
                            </div>
                            <button className={styles.styleUpBtn}>更新</button>
                        </div>

                    </div>
                    </div>

                    {/* 持ち物チェックカード（水色の背景枠） */}
                    <div className={styles.belongingsWrapper}>
                    <div className={styles.belongingsCard}>
                        <div className={styles.belongingsHeader}>
                            <div className={styles.cardLabel}>Belongings</div>
                            <button
                                className={styles.addBtn}
                                onClick={() => setShowInput(!showInput)}
                                aria-label="追加"
                            >
                                {showInput ? '×' : '+'}
                            </button>
                        </div>
                        {showInput && (
                            <div className={styles.addForm}>
                                <input
                                    className={styles.addInput}
                                    type="text"
                                    placeholder="アイテム名を入力..."
                                    value={newItem}
                                    onChange={(e) => setNewItem(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                                />
                                <button className={styles.addSubmitBtn} onClick={handleAdd}>追加</button>
                            </div>
                        )}
                        <div className={styles.belongingsBody}>
                            {/* 左側：チェックリスト */}
                            <div className={styles.belongingsListArea}>
                        {belongings.length === 0 ? (
                            <div className={styles.emptyState}>
                                <span className={styles.emptyIcon}>🧳</span>
                                <p className={styles.emptyText}>＋ボタンで最低限<br/>必要なものをチェックしよう</p>
                            </div>
                        ) : (
                        <ul className={styles.belongingsList}>
                            {belongings.map((b, index) => (
                                <li key={`${b.item}-${index}`} className={styles.belongingsItem}>
                                    <button
                                        className={b.needed ? styles.checkOn : styles.checkOff}
                                        onClick={() => handleToggle(index)}
                                    >
                                        {b.needed ? '✓' : '−'}
                                    </button>
                                    <span className={styles.belongingsName}>{b.item}</span>
                                    <span className={styles.belongingsStatus}>
                                        {b.needed ? '必要' : '不要'}
                                    </span>
                                    <button
                                        className={styles.deleteBtn}
                                        onClick={() => handleDelete(index)}
                                        aria-label="削除"
                                    >
                                        ×
                                    </button>
                                </li>
                            ))}
                        </ul>
                        )}
                            </div>
                            {/* 右側：メモ欄 */}
                            <div className={styles.memoArea}>
                                <div className={styles.memoHeader}>
                                    <div className={styles.memoLabel}> Memo</div>
                                    {memo.length > 0 && (
                                        <button
                                            className={styles.eraserBtn}
                                            onClick={() => {
                                                if (confirm('メモを全部消しますか？')) {
                                                    setMemo('');
                                                }
                                            }}
                                            aria-label="全消し"
                                            title="メモを全消し"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                                <textarea
                                    className={styles.memoInput}
                                    placeholder="メモを入力..."
                                    maxLength={200}
                                    value={memo}
                                    onChange={(e) => setMemo(e.target.value)}
                                />
                                <div className={styles.memoCount}>{memo.length}/200</div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* AI一言アドバイスカード（紫の背景枠） */}
                    <div className={styles.aiAdviceWrapper}>
                    <div className={styles.aiAdviceCard}>
                        <div className={styles.aiAdviceHeader}>
                            <span className={styles.aiAdviceIcon}>✦</span>
                            <div className={styles.cardLabel}>AI Advice</div>
                        </div>
                        <p className={styles.aiAdviceText}>
                            今日は風が強いので、マフラーを忘れずに。午後から気温が下がるため、重ね着がおすすめです。
                        </p>
                        <div className={styles.aiAdviceFooter}>
                            <span className={styles.aiAdviceTime}>2分前に更新</span>
                            <button className={styles.aiRefreshBtn}>↻ 更新</button>
                        </div>
                    </div>
                    </div>

                    {/* お出かけスポットカード（緑色の背景枠） */}
                    <div className={styles.outingWrapper}>
                    <div className={styles.outingCard}>
                        <div className={styles.cardLabel}>Outing Spots</div>
                        <ul className={styles.outingList}>
                            {OUTING_SPOTS.map((spot) => (
                                <li key={spot.name} className={styles.outingItem}>
                                    <div className={styles.outingInfo}>
                                        <span className={styles.outingName}>{spot.name}</span>
                                        <span className={styles.outingTag}>{spot.tag}</span>
                                    </div>
                                    <span className={styles.outingDistance}>{spot.distance}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>

                    </div> {/* leftColumn の閉じ */}

                    {/* ===== 右カラム：ファッション写真グリッド ===== */}
                    <div className={styles.photoSection}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTitle}>Fashion</span>
                            <button className={styles.sectionLink}>すべて見る</button>
                        </div>
                        <div className={styles.photoGrid}>
                            {FASHION_PHOTOS.map((src, index) => (
                                <div key={index} className={styles.photoItem}>
                                    <Image
                                        src={src}
                                        alt={`ファッション写真 ${index + 1}`}
                                        fill
                                        sizes="180px"
                                        style={{ objectFit: 'cover' }}
                                        unoptimized
                                    />
                                </div>
                            ))}
                        </div>
                        <button className={styles.styleUpFloat}>スタイルアップ</button>
                    </div>

                </div>
            </div>
        </>
    );
}
