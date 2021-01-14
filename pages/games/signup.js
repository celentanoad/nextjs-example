import Link from 'next/link';
import Head from 'next/head';
import Layout from '../../components/layout';
import styles from '../../styles/Home.module.css';


export default function Signup() {
   return (
       <Layout>
            <Head>
                <title>
                    Sign Up
                </title>
            </Head>
            <div className={styles.description}>
                <h1>Sign Up</h1>
                <h2 className={styles.link}>
                    <Link href="/">
                        <a>back</a>
                    </Link>
                </h2>
            </div>
       </Layout>
   ) 
}