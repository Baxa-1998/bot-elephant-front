import React from 'react'
import Header from '../components/shared/Header/Header'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <div className='max-w-[440px] m-auto'>
      <Header/>
      <main>
      <Outlet/>
      </main>

    </div>
  )
}