import React from 'react'

import { Outlet } from 'react-router'

import '../../../App.scss'
import { AppProvider } from '../../../context/infoCTX'
import Plug from './../Plug/Plug'
import { useTelegram } from '../../../hooks/useTelegram'
import Footer from '../Footer/Footer'

export default function Layout  ()  {
  const telegram = useTelegram()
  // if (!(telegram?.platform === 'ios' || telegram?.platform === 'android')) {
  //   return <Plug/>;
  // }else {
    return (
      <AppProvider>
            <div className='wrapper'>
            {/* <Preloader/> */}
       
     
        <main>
        <Outlet/>
        </main>
  <Footer/>
      </div>
  
      </AppProvider>
  
    )
  }

 
