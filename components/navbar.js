import { useState, useEffect } from 'react';

import Image from 'next/image'

import logolight from '../assets/logo.png'
import sx from '../styles/Navbar.module.css'

const links =[
    {
      name: 'Home',
      link: '#'
    },
    {
      name: 'Features',
      link: '#features'
    },
    {
      name: 'Screenshots',
      link: '#screenshots'
    },
    {
      name: 'Pricing',
      link: '#pricing'
    },
    {
      name: 'Contact',
      link: '#contact'
    },
  ]

export default function Navbar() {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(currentScrollPos > 480);
    setPrevScrollPos(currentScrollPos);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);
    
    
    const handleMenu=()=>{
        setShow(!show)
    }
    


  return (
      <div className={!visible ? sx.navbar : sx.navbarSticky}>
            <div style={{width: '100%', maxWidth:'1141px' }}>
                <div className='flex space-between'>
                        <div className="p-s">
                            <Image src={logolight} width={80} height={50} alt="WorshipHIM" />
                        </div>
                        <div onClick={handleMenu} className={sx.iconBar}>
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                        <div className={show ? sx.menuShow : sx.navbarItems}>
                            <ul>
                                <li className={sx.close}><a onClick={handleMenu}>x</a></li>
                                {links?.map(data=> <li key={data.name}><a href={data.link}>{data.name}</a></li>)}
                            </ul>
                        </div>
                </div>
            </div>
            <a href='#' style={{display:  !visible ? 'none' : 'block' }}>
              <div id="scrollUp" title="Scroll To Top">
                  <svg className="svg-inline--fa fa-arrow-up fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>
              </div>
            </a>
        </div>
  )
}
