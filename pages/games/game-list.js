import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';

export default function GameList() {
    return (
        <Layout>
            <Head>
                <title>Games List</title>
            </Head>
            <div className={styles.description}>
                <h1>Available Games</h1>
                <h2 className={styles.link}>
                    <Link href="/">
                        <a>back</a>
                    </Link>
                </h2>
            </div>
        </Layout>
    )
}