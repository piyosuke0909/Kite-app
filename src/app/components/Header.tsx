import Link from 'next/link'
import styles from './heder .module.scss';

export default function Header(){
    return(
        <header className={styles.header}>
        {/* ロゴ部分 */}
        <div className={styles.logo}>
            <Link href="/">Kite</Link>
        </div>

        {/* メニュー部分 */}
        <nav className={styles.nav}>
            <ul>
                <li><Link href="/">ホーム</Link></li>
                <li><Link href="/">フィッテイング</Link></li>
                <li><Link href="/">ログイン</Link></li>
            </ul>
        </nav>
        </header>
    )
}