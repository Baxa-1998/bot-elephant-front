import React from 'react'
import './header.scss'
import { useLocation, useNavigate } from 'react-router';
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation()
  
  console.log(location.pathname);
  

  const handleBack = () => {
    if(location.pathname !== '/'){
      navigate(-1); 
    }
    navigate('/')

    
  };
  return (
    <header className='header'>
      <div className='header__container'>
        <button onClick={handleBack} className='text-[16px]'>Отмена</button> 
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
