import React from 'react'
import { Link, useLocation } from 'react-router'
import './userInfo.scss'
export default function UserInfo() {
  const location = useLocation()
  
  
  return (
    <div className="home__heading">
   
    <Link to={'/profile'}>
      <div className="home__heading_left">
        <div className="avatar">
          <img src="/avatar1.png" alt="avatar" />
        </div>
        <h3 className={`${location.pathname === '/profile' ? 'text-black' : ''}`}>Viktor Kotov</h3>
      </div>
    </Link>

    <div className="home__heading_right">
      <h4>12 522</h4>
      <img src="/star.png" alt="" />
    </div>
  </div>
  )
}
