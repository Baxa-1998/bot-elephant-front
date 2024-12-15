import React from 'react'
import './buying.scss'
import UserInfo from '../../shared/UserInfo/UserInfo'
import BuyingItem from './BuyingItem'
export default function Buying() {
  return (
    <section className='buying'>
      <div className='buying__top'>
        <UserInfo/>

      </div>
      <BuyingItem/>
   
    </section>
  )
}
