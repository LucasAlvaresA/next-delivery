import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Next Delivery!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className={styles.mainArea}>
        <Button 
          color='#296e18'
          label="NextPizza"
          onClick={() => router.push('/NextPizza')}
          fill
        />
        <Button 
          color='#836e13'
          label="NextBurger"
          onClick={() => router.push('/NextBurger')}
          fill
        />
      </div>
    </div>
  )
}

export default Home
