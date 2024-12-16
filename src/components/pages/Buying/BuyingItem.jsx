import React from 'react';
import './buying.scss';
import Button from '../../UI/Button/Button';

export default function BuyingItem({item}) {
  console.log(item);
  
 
  

  return (
    <div className="buying__item">
      <div className="buying__item_img">
        {item.active ? <img src={item.activeImg} alt="elephant" /> : <img src={item.notActiveImg} alt="elephant" /> }

      </div>
      <div className="buying__item_info">
        <div className="buying__lvl">
          {/* <img className='custom-prev' src="/arrow-left.png" alt="<" /> */}
          <span>Слон {item.level} lvl</span>
          {/* <img  className='custom-next' src="arrow-right.png" alt=">" /> */}
        </div>
        <div className="buying__discount">
          <h4>{item.discount}%</h4>
          <p>
            Вы зарабатываете с каждой <br /> продажи слона другу !
          </p>
        </div>
        <div className="buying__friends">
          <h4>
            После покупки слона вашими друзьями  вы  получите{' '}
            <b >
              {item.stars} 
              <img src="/star.png" alt="star" />
            </b>
         
          </h4>
        </div>
        <div className='buying__btn'>
        <Button className={'flex items-center'}>Купить <span className='ml-[48px]'>{item.price}</span> <img className='ml-[8px]' src="/white-star.png" alt="white-star" /></Button>
        </div>
      
      </div>
    </div>
  );
}
