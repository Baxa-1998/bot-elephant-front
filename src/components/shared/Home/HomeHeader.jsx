import React from 'react'
import { Link } from 'react-router'
import './home.scss'
export default function HomeHeader() {
  return (
   <Link to={'/profile'}>
         <div className="home__heading_left">
             
             <div className="avatar">
               <img src="/avatar1.png" alt="avatar" />
             </div>
             <h3>Viktor Kotov</h3>
           </div>
         </Link>
  )
}
