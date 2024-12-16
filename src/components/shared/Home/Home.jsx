import React from 'react';
import './home.scss';
import Atention from '../Attention/Attention';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router';

import UserInfo from '../UserInfo/UserInfo';

export default function Home() {
  const [isElephant, setIsElephant] = React.useState(true);
  return (
    <section className="home">
      {/* home top section */}
      <div className="home__top">
        <UserInfo />
        <div className="w-full h-full flex items-center justify-center">
          <img className='w-[100%]' src="/main-elephant.png" alt="" />
        </div>
      </div>
      {/* home bottom section */}
      <div className="home__bottom">
        {isElephant ? (
          <div className="home__start">
            {/* <h4>О вашем слоне:</h4>
            <p>
              Приглашай друзей и получай 50% <br /> с каждой продажи слона !
            </p> */}
            <div className="mt-[15px]">
              <Link to={'/buying'}>
                <Button>Купить слона</Button>
              </Link>
              <div className="flex items-center justify-center h-[65px] bg-[#262626] w-[95%] m-auto mt-[15px] rounded-[52px]">
                <h4 className="text-[#FEAC3E] font-bold text-[18px] text-center leading-6">
                  Зарабатывайте от <br /> 50% вместе со слоном !
                </h4>
              </div>
              <div className="w-[95%] m-auto mt-[16px]">
                <p className="text-[18px]">
                  Продавайте слона, и зарабатывайте <br /> на друзьях которым его продали !
                </p>
                <p className='mt-[12px] text-[18px]'>Получайте вознаграждения <br /> в виде <b className='text-[#FEAC3E]'>Telegram stars <img className='inline' src="/star.png" alt="" /></b></p>
              </div>
            </div>
          </div>
        ) : (
          <div className="home__active">Active</div>
        )}
      </div>
    </section>
  );
}
