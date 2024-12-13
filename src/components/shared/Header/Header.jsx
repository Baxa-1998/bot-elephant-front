import React from 'react'
import './header.scss'
export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <button>отмена</button> 
        {/* bot heading */}
        <div className='flex flex-col items-center'> 
          <h2 className='text-[14px] text-[#000000] font-semibold'>Купи слона</h2> 
          <p>bot</p>
         
        </div>
{/* burger menu */}
        <div className='burger'>
                
                </div>
      </div>
    </header>
  )
}
