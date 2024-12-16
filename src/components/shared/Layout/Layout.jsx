import React from 'react'

import { Outlet } from 'react-router'
import Header from '../Header/Header'
import '../../../App.scss'
export const Layout = () => {
  return (
    <div className='wrapper'>
      {/* <Header/> */}
      
      <main>
      <Outlet/>
      </main>

    </div>
  )
}