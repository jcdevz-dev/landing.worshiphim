import Image from 'next/image'
import sx from '../styles/Home.module.css'

import Hero from '../components/hero'

export default function Home() {
  return (
    <div>
      <Hero/>
      <main className={sx.main}>
        <h1 className={sx.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={sx.description}>
          Get started by editing{' '}
          <code className={sx.code}>pages/index.js</code>
        </p>

        <div className={sx.grid}>
          <a href="https://nextjs.org/docs" className={sx.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer className={sx.footer}>
        <a
          href="https://deverajc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crafted by John Carlo Devera{' '}
          <span className={sx.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
