import React from 'react';
import './home.scss';
import Atention from '../Attention/Attention';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router';

import UserInfo from '../UserInfo/UserInfo';

export default function Home() {
  const [isElephant,  setIsElephant] = React.useState(true)
  return (
    <section className="home">
      {/* home top section */}
      <div className="home__top">
   <UserInfo/>
        <div className="w-full h-full flex items-center justify-center">
          <Atention />
        </div>
      </div>
      {/* home bottom section */}
      <div className="home__bottom">
        {isElephant ?     <div className="home__start">
          <h4>О вашем слоне:</h4>
          <p>Приглашай друзей и получай 50% <br /> с каждой продажи слона !</p>
          <div className='mt-[45px]'>
          <Button>Купить слона</Button>
          </div>
        
        </div> :    <div className='home__active'>
          Active
        </div> }
    
     
      </div>
    </section>
  );
}
