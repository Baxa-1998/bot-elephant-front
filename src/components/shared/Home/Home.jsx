import React from 'react'
import './home.scss'
import Atention from '../Attention/Attention'

export default function Home() {
  return (
    <section className='home'>
      {/* home top section */}
      <div className="home__top">
      <div className='home__heading'>
      <div className='home__heading_left'>
        <div className='avatar'>
          <img src="/avatar1.png" alt="avatar" /> 
         

        </div>
        <h3>Viktor Kotov</h3>
      </div>
      <div className='home__heading_right'>
         <h4>12 522</h4> 
         <img src="/star.png" alt="" />
      </div>
     </div>
     <div className='w-full h-full flex items-center justify-center'>
     <Atention/>
     </div>
   
      </div>
     {/* home bottom section */}
     <div className="home__bottom">

     </div>
  
  
   
    

    </section>
  )
}
