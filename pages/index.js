import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>Fictional Speedrun Tornament</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href="/games/signup">
            <a>Sign up here</a>
          </Link> {' '}to show off your speedy skills!
        </h1>

        <p className={styles.description}>
          Select from any of the games available, and try to beat the previous players' times!
        </p>

        <p className={styles.description}>
          <Link href="/games/game-list">
            <a className={styles.link}>Check out the competition!</a>
          </Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
    </Layout>
  )
}
