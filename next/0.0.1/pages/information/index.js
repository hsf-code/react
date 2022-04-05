
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import infoCss from './information.module.css'
/**
 * pages:
 *    一个页面（page）就是一个从 pages 目录下的 .js、.jsx、.ts 或 .tsx 文件导出的 React 组件。
 *    这个文件会被收纳到路由中去，文件名作为路径，information.js则路径是http://localhost:3000/information
 *
 * */

export default function Index() {
  return (
      <div className={styles.container}>
        <Head>
          <title>information</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={ styles.title + ' ' + infoCss.test }>
            这是一个资讯页！
          </h1>

        </main>
      </div>
  )
}
