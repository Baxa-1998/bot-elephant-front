import React from 'react'

import { Outlet } from 'react-router'

import '../../../App.scss'
import { AppProvider } from '../../../context/infoCTX'
import Bg from '../Bg/Bg'
export const Layout = () => {
  return (
    <AppProvider>
          <div className='wrapper'>
   
      <main>
      <Outlet/>
      </main>

    </div>

    </AppProvider>

  )
}