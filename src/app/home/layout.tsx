// /home ページ専用レイアウト
// グローバルのHeaderを非表示にして、Sidebar だけを使うようにする
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'contents' }}>
            {/* layout.tsx の Header は表示させない。
                CSSで非表示にするため、このdivにclassを指定 */}
            <style>{`
                body > header,
                body > main > header {
                    display: none !important;
                }
            `}</style>
            {children}
        </div>
    );
}
