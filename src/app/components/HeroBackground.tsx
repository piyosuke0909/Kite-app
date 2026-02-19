import Image from 'next/image';
import styles from './heroBackground.module.scss';

const placeholderImages = [
    "https://picsum.photos/seed/fashion1/400/300",
    "https://picsum.photos/seed/fashion2/400/300",
    "https://picsum.photos/seed/fashion3/400/300",
    "https://picsum.photos/seed/fashion4/400/300",
    "https://picsum.photos/seed/fashion5/400/300",
    "https://picsum.photos/seed/fashion6/400/300",
    "https://picsum.photos/seed/fashion7/400/300",
    "https://picsum.photos/seed/fashion8/400/300",
    "https://picsum.photos/seed/fashion9/400/300",
    "https://picsum.photos/seed/fashion10/400/300",
];

export default function HeroBackground(){
    const rows = [1,2,3,4];


    const loopImages = [...placeholderImages,...placeholderImages];

    return(
        <div className={styles.container}>
            {rows.map((rowId) => (
                <div key={rowId} className={styles.row}>
                    {loopImages.map((src, index) => (
                        <div key={`${rowId}-${index}`} className={styles.imageWrapper}>
                            <Image
                                src={src}
                                alt="Fashion item"
                                width={200}
                                height={140}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}