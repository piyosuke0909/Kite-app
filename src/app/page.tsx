import Link from 'next/link';
import styles from './page.module.scss';
import HeroBackground from './components/HeroBackground';

export default function Home(){
  return(
    <main className = {styles.main}>
      <HeroBackground />
      <h1 className = {styles.title}>Kite</h1>
      <p className = {styles.description}>
        あなたの理想のスタイルを探しましょう。
      </p>

      <div className = {styles.buttonContainer}>
       <Link href="/home" className={styles.button}>
         スタイルアップ
       </Link>
      </div>
    </main>
  );
}