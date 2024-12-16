import React from 'react'

import { Outlet } from 'react-router'
import Header from '../Header/Header'

export const Layout = () => {
  return (
    <div className='max-w-[393px] m-auto'>
      {/* <Header/> */}
      
      <main>
      <Outlet/>
      </main>

    </div>
  )
}