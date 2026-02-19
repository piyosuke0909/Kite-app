import React from 'react';

// 天気の種類を定義
export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'rainy_sunny' | 'snowy';

interface WeatherIconProps {
    type: WeatherType;
    size?: number; // アイコンのサイズ（px）
}

// 晴れ（太陽）
function SunnyIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            {/* 太陽本体 */}
            <circle cx="24" cy="24" r="10" fill="#f5c542" stroke="#333" strokeWidth="2" />
            {/* 光線 */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <line
                    key={deg}
                    x1="24"
                    y1="8"
                    x2="24"
                    y2="4"
                    stroke="#333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    transform={`rotate(${deg} 24 24)`}
                />
            ))}
        </svg>
    );
}

// 曇り（雲）
function CloudyIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            <path
                d="M14 32a8 8 0 0 1-1.6-15.8A10 10 0 0 1 32 18h1a7 7 0 0 1 1 13.9"
                fill="#d5d5d5"
                stroke="#333"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            {/* 雲の底ライン */}
            <line x1="12" y1="32" x2="35" y2="32" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// 雨（雲＋雨粒）
function RainyIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            {/* 雲 */}
            <path
                d="M14 26a7 7 0 0 1-1.4-13.8A9 9 0 0 1 30 14h1a6 6 0 0 1 1 11.9"
                fill="#d5d5d5"
                stroke="#333"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <line x1="12" y1="26" x2="33" y2="26" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            {/* 雨粒 */}
            <line x1="16" y1="30" x2="14" y2="36" stroke="#6baed6" strokeWidth="2" strokeLinecap="round" />
            <line x1="23" y1="30" x2="21" y2="38" stroke="#6baed6" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="30" x2="28" y2="36" stroke="#6baed6" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// 雨のち晴れ（雲＋太陽＋雨粒）
function RainySunnyIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            {/* 背景の太陽（右上に少し見える） */}
            <circle cx="36" cy="12" r="7" fill="#f5c542" stroke="#333" strokeWidth="1.5" />
            {/* 光線（短め） */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
                <line
                    key={deg}
                    x1="36"
                    y1="3"
                    x2="36"
                    y2="1"
                    stroke="#333"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    transform={`rotate(${deg} 36 12)`}
                />
            ))}
            {/* 雲（手前） */}
            <path
                d="M12 30a7 7 0 0 1-1.2-13.8A8.5 8.5 0 0 1 27 18h1a6 6 0 0 1 .8 11.9"
                fill="#d5d5d5"
                stroke="#333"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <line x1="10" y1="30" x2="30" y2="30" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            {/* 雨粒（少なめ） */}
            <line x1="15" y1="34" x2="13" y2="39" stroke="#6baed6" strokeWidth="2" strokeLinecap="round" />
            <line x1="23" y1="34" x2="21" y2="39" stroke="#6baed6" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

// 雪（雲＋雪の結晶）
function SnowyIcon({ size }: { size: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
            {/* 雲 */}
            <path
                d="M14 26a7 7 0 0 1-1.4-13.8A9 9 0 0 1 30 14h1a6 6 0 0 1 1 11.9"
                fill="#d5d5d5"
                stroke="#333"
                strokeWidth="2"
                strokeLinejoin="round"
            />
            <line x1="12" y1="26" x2="33" y2="26" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            {/* 雪の粒 */}
            <circle cx="16" cy="33" r="2" fill="#999" />
            <circle cx="24" cy="36" r="2" fill="#999" />
            <circle cx="30" cy="33" r="2" fill="#999" />
        </svg>
    );
}

// メインのコンポーネント
export default function WeatherIcon({ type, size = 48 }: WeatherIconProps) {
    switch (type) {
        case 'sunny':
            return <SunnyIcon size={size} />;
        case 'cloudy':
            return <CloudyIcon size={size} />;
        case 'rainy':
            return <RainyIcon size={size} />;
        case 'rainy_sunny':
            return <RainySunnyIcon size={size} />;
        case 'snowy':
            return <SnowyIcon size={size} />;
        default:
            return <CloudyIcon size={size} />;
    }
}
