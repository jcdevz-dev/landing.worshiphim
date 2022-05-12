import { useEffect, useState } from "react";
import Image from "next/image";

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import sx from "../styles/Feature.module.css";
import feature from "../assets/banner-thumb.png";

import ss1 from "../assets/ss1.jpg";
import ss2 from "../assets/ss2.jpg";
import ss3 from "../assets/ss3.jpg";
import ss4 from "../assets/ss4.jpg";
import ss5 from "../assets/ss5.jpg";

import r1 from "../assets/r1.webp";
import r2 from "../assets/r2.webp";
import r3 from "../assets/r3.webp";

import quote from "../assets/quote.png";

export default function Features() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };

    const items = [
        <Image key="1" width="1140px" height="500px" src={ss1} alt="worshipHIM" role="presentation"/>, 
        <Image key="2" width="1140px" height="500px" src={ss2} alt="worshipHIM" role="presentation"/>, 
        <Image key="3" width="1140px" height="500px" src={ss3} alt="worshipHIM" role="presentation"/>, 
        <Image key="4" width="1140px" height="500px" src={ss4} alt="worshipHIM" role="presentation"/>, 
        <Image key="5" width="1140px" height="500px" src={ss5} alt="worshipHIM" role="presentation"/>, 
    ];

    const Star =()=>(
        <div>
            <svg className="svg-inline--fa fa-star fa-w-18 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <svg className="svg-inline--fa fa-star fa-w-18 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <svg className="svg-inline--fa fa-star fa-w-18 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <svg className="svg-inline--fa fa-star fa-w-18 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
            <svg className="svg-inline--fa fa-star fa-w-18 text-warning" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
        </div>
    )
    
  return (
    <main className={sx.main}>

      <section className={sx.section} id="features">
        <p className={sx.description}>
          <code className={sx.code}>Premium Features</code>
        </p>

        <h1 className={sx.title}>
          {/* What Makes WorshipHIM Different? */}
          Your go-to app for Praise and Worship!
        </h1>

        <div style={{ width: "100%" }} className="flex">
          <p style={{ padding: 16, textAlign: "center", maxWidth: 600 }}>
            featuring an array of tools in assisting you with your worship
            technicalities.
          </p>
        </div>

        <div className={sx.grid}>
          <a href="#" className={sx.card}>
            <h2>Chord Diagram & Transposer &rarr;</h2>
            <p>
              View chord diagrams as you play, and transpose song keys
              instantly.
            </p>
          </a>
          <a href="#" className={sx.card}>
            <h2>Create Lineups, Add Favorites &rarr;</h2>
            <p>
              Personalize your use of the app by creating your own lineups and
              adding your favorite songs!
            </p>
          </a>
          <a href="#" className={sx.card}>
            <h2>Extensive Song Database &rarr;</h2>
            <p>
              With the ever expanding, fast-growing library for Christian music,
              we strive to provide whatever you may need.
            </p>
          </a>
        </div>
      </section>

      <section className="flex" style={{ background: "#f6f9fe" }}>
      {/* <section className="flex" style={{ background: "#04111f" }}> */}
      {/* <section className="flex" style={{ 
          background: "rgb(4,17,31)",
          background: "linear-gradient(0deg, rgba(4,17,31,1) 0%, rgba(29,40,50,1) 31%, rgba(111,119,126,1) 64%, rgba(255,255,255,1) 100%);" 
        }}> */}
        <div className={sx.gridHero}>
          <div className={sx.hero}>
            <h1 className={sx.title} style={{ textAlign: "left" }}>
                From Contemporary to Hymnal Christian music, we got it covered.
            </h1>
            <div className="flex">
                
                <p className="textOff" style={{ maxWidth: 379 }}>
                Fully layered dolor sit amet, consectetur adipisicing elit.
                Facere, nobis, id expedita dolores officiis laboriosam.
                </p>
            </div>
          </div>
          <div className="flex">
            <Image src={feature} alt="worshipHIM" priority />
          </div>
        </div>
      </section>

      <section className="flex" style={{ background: "rgb(44 166 213)" }}>
        <div className="grid">
            <p className={sx.description}>
            {/* <code className={sx.code}>Premium Features</code> */}
            </p>

            <h1 className={sx.title} style={{color: "white"}}>
            {/* What Makes WorshipHIM Different? */}
            How the App works?
            </h1>

            <div style={{ width: "100%" }} className="flex">
                <p style={{ padding: 24, textAlign: "center", maxWidth: 600, color: "white"}}>
                    easy to get started with the rich and user friendly interface
                </p>
            </div>

            <div className={sx.grid}>
            <div className={sx.card2} style={{color: "white"}}>
                <h2>Install the App</h2>
                <p>
                Download and Install from Googleplay.
                </p>
            </div>
            <div className={sx.card2} style={{color: "white"}}>
                <h2>Search your Song</h2>
                <p>
                Easily search your favorite song and on our ever expanding, fast-growing library for Christian music
                </p>
            </div>
            <div className={sx.card2} style={{color: "white"}}>
                <h2>Enjoy the features!</h2>
                <p>
                Tranpose the chords, auto scroll, chord diagram and much more for you to explore!
                </p>
            </div>
            </div>
        </div>
      </section>

      <section className="flex" id="screenshots">
        <div className="grid">
            <p className={sx.description}>
            <code className={sx.code}>Awesome Interface</code>
            </p>

            <h1 className={sx.title}>
            Simple & Beautiful Interface
            </h1>

            <div style={{ width: "100%" }} className="flex">
                <p style={{ padding: 24, textAlign: "center", maxWidth: 600}}>
                    WorshipHIM has simple and elegant looking user friendly interface
                </p>
            </div>
        </div>
        
      </section>

      <AliceCarousel 
        style={{width: "500px"}}
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={3000}
        animationDuration={3000}
        animationType="slide"
        disableButtonsControls
        infinite
        autoWidth
        mouseTracking
        responsive={responsive}
        items={items}
        paddingLeft={50}
        paddingRight={50}
       />

      <section className={sx.section}>
        <p className={sx.description}>
          {/* <code className={sx.code}>Premium Features</code> */}
        </p>

        <h1 className={sx.title}>
          {/* What Makes WorshipHIM Different? */}
          What Our Users Are Saying
        </h1>

        <div style={{ width: "100%" }} className="flex">
          <p style={{ padding: 16, textAlign: "center", maxWidth: 600 }}>
            {/* featuring an array of tools in assisting you with your worship
            technicalities. */}
          </p>
        </div>

        <div className={sx.grid}>
          <a className={sx.review} target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US&reviewId=gp%3AAOqpTOHrmq_t5Jf4uDBwLy8g_aybFArPTW88VlErljKXJ_jnpkO8jvby9DmO4OWyRltoUL2aGd27TG6ynEvQYg">
            <div className={sx.quoteIcon}>
                <Image height={40} width={40} src={quote} alt="quote" priority/>
            </div>
            <div style={{padding: '1.2rem'}}>
                <Star/>
                <p style={{fontSize: 14}}>
                    nice app! 100% guaranteed hoping for more gospel songs in the future😊 some songs of most arists are missing tho... but this is already a great app... besides its free! Thank you sooo much for your effort! 😘 You've helped a lot of believers in the struggle of looking for chords, lyrics, transpositions and other more☺ God bless you! truly that He makes a way! 👆
                </p>
            </div>
            <div className="flex" style={{justifyContent: 'start', background:'#f6f9fe',padding: '1rem'}}>
                <Image className="rounded" src={r1} alt="Ar_anne 3" priority/>
                <h4 style={{paddingLeft: '10px'}}>Ar_anne 3</h4>
            </div>
          </a>
          <a className={sx.review} target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US&reviewId=gp%3AAOqpTOEpOvuRnCcp1GtQGnt61joHZHdKcvmX4lKw3G_6-7_53EyGDLQCZg9doRjilWrR71UcHcnnJwDw6J900w">
            <div className={sx.quoteIcon}>
                <Image height={40} width={40} src={quote} alt="quote" priority/>
            </div>
            <div style={{padding: '1.2rem'}}>
                <Star/>
                <p style={{fontSize: 14}}>
                    i love it, been looking for such an app like this where in you don't have to manually transpose chords. as a beginner, it helps a lot. looking forward for more songs (especially tagalog songs)! would also love if there were visayan christian songs as well. ❤ God bless you!
                </p>
            </div>
            <div className="flex" style={{justifyContent: 'start', background:'#f6f9fe',padding: '1rem'}}>
                <Image className="rounded" src={r2} alt="SheMight" priority/>
                <h4 style={{paddingLeft: '10px'}}>SheMight</h4>
            </div>
          </a>
          <a className={sx.review} target='_blank' rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.ellinx.lightapps.worshiphim&hl=en&gl=US&reviewId=gp%3AAOqpTOFgbOUcLP0jdEq5lwpK7nhcPJhEHciTM3rhhYenEyDDsoISThD1xegMW1go2P1BSvXKDsUtrxtj5pOeKg">
            <div className={sx.quoteIcon}>
                <Image height={40} width={40} src={quote} alt="quote" priority/>
            </div>
            <div style={{padding: '1.2rem'}}>
                <Star/>
                <p style={{fontSize: 14}}>
                    I would say it is an excellent app. I completely appreciate the effort they've put into it. Thanks a lot. Now after the update, I think this app reached perfection as per the controls, though more songs could be added.. Praise God
                </p>
            </div>
            <div className="flex" style={{justifyContent: 'start', background:'#f6f9fe',padding: '1rem'}}>
                <Image className="rounded" src={r3} alt="Sam Marvin" priority/>
                <h4 style={{paddingLeft: '10px'}}>Sam Marvin</h4>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
