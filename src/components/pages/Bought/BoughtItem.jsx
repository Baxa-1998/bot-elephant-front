import React from 'react';
import './bought.scss';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router';
import './bought.scss'
export default function BoughtItem({ item }) {


  return (
    <div className="bought__item">
      <div className="bought__item_img">
        <img src={item.activeImg} alt="elephant" />

      </div>
      <div className='bought__item_lvl'>
        <h3>Слон</h3> 
        <p>{item.level} lvl</p>

      </div>
      <div className='mt-[16px]'>
      <Button>Продать слона</Button>
      </div>
      
      <div className='bought__prize'>
          <h4>Вознаграждение</h4> 
          <div className='bought__prize_item'> 
            <h3>{item.stars}</h3>
              <img src="/star.png" alt="" />
          </div>
          <div> 

          </div>
      </div>
      <div className='bought__task'>
          <h4>Задача</h4> 
          <div className='bought__task_item'> 
           <p>Пригласить 5 друзей </p>
           <p>0 / 5</p>
        
          </div>
          <div> 

          </div>
      </div>
      <div className='w-full h-[1px] bg-[#CACACA] mt-[16px]'></div>
      <div className='bought__advantage'>
          <h4>Преимущества</h4> 
          <div className='bought__advantage_item'> 
            <h3>Бонус от продаж</h3>
             <p>+ 50%</p>
          </div>
          <div> 

          </div>
      </div>

      <div>
        <Button className={'!text-[#000000] !rounded-lg mt-[20px]'}>Купить слона</Button>
      </div>
   
     
    </div>
  );
}