import React, { useState } from 'react';

import '../../shared/Home/home.scss';

import UserInfo from '../../shared/UserInfo/UserInfo';
import './profile.scss';
import Button from '../../UI/Button/Button';
import { useAppContext } from '../../../context/infoCTX';
import star from '../../../assets/star.svg'

export default function Profile() {
  const { hasElephant,  stars, friends, elephantsData } = useAppContext();
  const data = elephantsData.filter((item)=> item.purchased === true)
  const count = data.length
  const [isDisabled, setIsDisabled] = useState(true); 
  
  return (
    <section className="profile">
      <UserInfo />
      <div className="statistics">
        <h4 className="text-[#747272] text-[14px] pb-[4px]">Статистика</h4>
        <div className="statistics__item">
          <h3>Куплено слонов</h3>
          <p>{count}</p>
        </div>
        <div className="statistics__item">
          <h3 className="flex items-center gap-2">
            Заработана <img src="/star.png" alt="star" />
          </h3>
          <p>550</p>
        </div>
        <div className="statistics__item">
          <h3>Приглашено друзей</h3>
          <p>28</p>
        </div>
      </div>
      <div className="mt-[28px]">
      <Button
 
  className={`!text-[#696969] !w-[95%] !bg-gradient-to-r from-[#959595] to-[#959595]`}
>
  Вывести <img className="ml-[10px]" src={star} alt="star" />
</Button>
        <p className="text-center mt-[9px]">Вывод доступен от 1 000 рублей</p>
      </div>
    </section>
  );
}
