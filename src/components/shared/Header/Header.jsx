import React from 'react'
import './header.scss'
export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <button className='text-[16px]'>Отмена</button> 
        {/* bot heading */}
        <div className='flex flex-col items-center'> 
          <h2 className='text-[14px] text-[#000000] font-semibold'>Купи слона</h2> 
          <p>bot</p>
         
        </div>
{/* burger menu */}
        <div className='burger'>
                <div className='burger__dots'>
                  <div className='burger__dots_item'></div>
                  <div className='burger__dots_item'></div>
                  <div className='burger__dots_item'></div>
                </div>
                </div>
      </div>
    </header>
  )
}
