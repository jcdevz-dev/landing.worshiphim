import { useEffect, useState } from 'react'
import Image from 'next/image'

import sx from '../styles/Hero.module.css'
import gplay from '../assets/google-play-black.png'
import astore from '../assets/app-store-black.png'
import feature from '../assets/feature.png'

import Navbar from '../components/navbar'



export default function Hero() {

    const [banner, setBanner] = useState([]);


    useEffect(() => {
        fetch('api/banner')
        .then(response => response.json())
        .then(data => setBanner(data));
    }, [])
    

  return (
      <div className={sx.dots}>
        <div className={sx.containerHero}>
            <Navbar/>
            <div style={{width: '100%'}}>
                <div id='stars'></div>
                <div id='stars2'></div>
                <div id='stars3'></div>
            </div>
            <div className={sx.gridHero}>
                <div className={sx.hero}>
                    <h1 className={sx.title}>{banner.title}</h1>
                    <p className='textWhite' style={{maxWidth: 379}}>{banner.details}</p>
                    <a href='#'>
                        <Image src={gplay} width={150} height={48} alt='download on google play'/>
                    </a>
                    <a href='#'>
                        <Image src={astore} width={150} height={48} alt='download on apple app store'/>
                    </a>
                    <i>
                        <p className='textWhite'>* Available on iPhone, iPad and all Android devices</p>
                    </i>
                </div>
                <div className={sx.welcomeThumb}>
                    <Image src={feature} alt='worshipHIM' priority/>
                </div>
            </div>
            <div className={sx.containerCounter}>
                <div className={sx.shapeBottom}>
                    <svg viewBox="0 0 1920 310" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="svg replaced-svg">
                        <title>WH Shape</title>
                        <desc>Created with Sketch</desc>
                        <defs />
                        <g id="sApp-Landing-Page" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <g id="sApp-v1.0" transform="translate(0.000000, -554.000000)" fill="#FFFFFF">
                            <path d="M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395" id="sApp-v1.0" />
                        </g>
                        </g>
                    </svg>
                </div>
                <div className={sx.counter}>
                    {
                        banner.counter?.map(data=>
                            <div key={data.name}>
                                <h1>{data.count}</h1>
                                <h3>{data.name}</h3>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
      </div>
  )
}
