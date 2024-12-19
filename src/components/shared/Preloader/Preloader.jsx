import React, { useEffect } from 'react'
import './preloader.scss'
import { splitTextToSpans } from '../../../utils/textSplit'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

export default function Preloader() {

    useGSAP(()=>{
      splitTextToSpans('#text')
      gsap.fromTo(
        '#text .char',
        {
          opacity: 0,
          yPercent: 130,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.2,
           
           repeat: -1,
          // yoyo: true,
        
        },
      );

    },[])

  return (
    <section className='preloader'>
      <div className='preloader__container'>
        <img src="/preloader-logo.svg" alt="preloader" />
        <div className='preloader__text_wrapper'>
          <h2 id='text'>Loading <img src="/line.svg" alt="line" /></h2>
          
        </div>
        </div>
      
    </section>
  )
}
