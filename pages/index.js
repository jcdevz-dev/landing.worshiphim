import Image from 'next/image'
import sx from '../styles/Home.module.css'

import Hero from '../components/hero'

export default function Home() {
  return (
    <div>
      <Hero/>
      <main className={sx.main} id="Features">

        <p className={sx.description}>
          <code className={sx.code}>Premium</code>
          {' '}Features
        </p>

        <h1 className={sx.title}>
          What Makes WorshipHIM Different?
        </h1>

        <p style={{padding: 24, textAlign: 'center', maxWidth: 600}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
        </p>

        <div className={sx.grid}>
          <a href="https://nextjs.org/docs" className={sx.card}>
            <h2>Chord Diagram & Transposer &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
          </a>
          <a href="https://nextjs.org/docs" className={sx.card}>
            <h2>Songs Line up Manager &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
          </a>
          <a href="https://nextjs.org/docs" className={sx.card}>
            <h2>Extensive Song Database &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis culpa expedita dignissimos.</p>
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
