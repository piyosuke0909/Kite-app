import type { Metadata } from "next"; //webサイトの読み込み
import "./globals.scss";
import Header from "./components/Header";

export const metadata: Metadata = { //ブラウザのタブに表示されるタイトルや説明分
  title: "Kite - virtual try on",
  description: "あなただけの着せえアプリ", //サイトの説明
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  return(
    <html lang="ja">

      <body>
        <Header/>
        <main>{children}</main>
      </body>
    </html>
  );
}