
import Head from 'next/head'
import styles from '../../styles/Home.module.css'


export default function Index() {
  return (
      <div className={styles.container}>
        <Head>
          <title>information</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            这是一个关于页面！
          </h1>

        </main>
      </div>
  )
}
