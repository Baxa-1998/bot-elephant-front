import React from 'react'

import { Outlet } from 'react-router'

import '../../../App.scss'
import { AppProvider } from '../../../context/infoCTX'
import Bg from '../Bg/Bg'
import { useTelegram } from '../../../hooks/useTelegram'
import Plug from '../Plug/Plug'
export const Layout = () => {
  const telegram = useTelegram()
  if (!(telegram?.platform === 'ios' || telegram?.platform === 'android')) {
    return <Plug />;
  }else {
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

 
}