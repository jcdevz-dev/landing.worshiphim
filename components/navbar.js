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
        </div>
  )
}
