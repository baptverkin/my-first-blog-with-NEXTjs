import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
    <div className={styles.container}>


      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my Sport Blog !
        </h1>

        <div className={styles.grid}>
          <a href="/blog/Ferrari-is-back" className={styles.card}>
            <h2>🏎 Ferrari is back &rarr;</h2>
            <p>Charles Leclerc and Carlos Sainz make historical double podium for Ferrari at the Barhein GP </p>
          </a>

          <a href="/blog/second-article" className={styles.card}>
            <h2>🏉 Galthié : data, work, team spirit, the winning strategy &rarr;</h2>
            <p>An thorough analysis of the Christophe Galthié coaching method to win</p>
          </a>

        </div>
      </main>

    </div>
    </Layout>
  )
}

export default Home
