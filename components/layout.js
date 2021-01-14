import styles from './layout.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.nav}>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div>{children}</div>
        </>
    )
}