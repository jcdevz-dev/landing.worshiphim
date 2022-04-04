import { useEffect, useState } from 'react'
import Image from 'next/image'

import sx from '../styles/Feature.module.css'
import feature from '../assets/feature.png'

export default function Features() {

  return (

    <main className={sx.main} id="features">

        <section className={sx.section}>
            <p className={sx.description}>
                <code className={sx.code}>Premium Features</code>
            </p>

            <h1 className={sx.title}>
                What Makes WorshipHIM Different?
            </h1>

            <div style={{ width: '100%'}} className='flex'>
                <p style={{padding: 24, textAlign: 'center', maxWidth: 600}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                </p>
            </div>

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
        </section>

        <section className="flex" style={{background: '#f6f9fe'}}>
            <div className={sx.gridHero}>
                <div className={sx.hero}>
                    <h1 className={sx.title} style={{textAlign:"left"}}>Make Your Device Manage Everything For You</h1>
                    <p className='textWhite' style={{maxWidth: 379}}>Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.</p>
                </div>
                <div className={sx.welcomeThumb}>
                    <Image src={feature} alt='worshipHIM' priority/>
                </div>
            </div>
        </section>
        
    </main>
  )
}
