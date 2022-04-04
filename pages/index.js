import Image from 'next/image'
import sx from '../styles/Home.module.css'

import Hero from '../components/hero'
import Features from '../components/features'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
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
