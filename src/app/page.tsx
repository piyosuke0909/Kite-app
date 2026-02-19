import Link from 'next/link';
import styles from './page.module.scss';

export default function Home(){
  return(
    <main className = {styles.main}>
      <h1 className = {styles.title}>Kite</h1>
      <p className = {styles.description}>
        あなたの理想のスタイルを探しましょう。
      </p>

      <div className = {styles.buttonContainer}>
       <Link href="/fitting" className={styles.button}>
         スタイルアップ
       </Link>
      </div>
    </main>
  );
}