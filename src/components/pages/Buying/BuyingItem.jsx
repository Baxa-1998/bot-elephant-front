import React from 'react';
import './buying.scss';

export default function BuyingItem() {
 
  

  return (
    <div className="buying__item">
      <div className="buying__item_img">
        <img src="/elephant/1.png" alt="elephant" />
      </div>
      <div className="buying__item_info">
        <div className="buying__lvl">
          {/* <img className='custom-prev' src="/arrow-left.png" alt="<" /> */}
          <span>Слон 1 lvl</span>
          {/* <img  className='custom-next' src="arrow-right.png" alt=">" /> */}
        </div>
        <div className="buying__discount">
          <h4>5%</h4>
          <p>
            Вы зарабатываете с каждой <br /> продажи слона другу !
          </p>
        </div>
        <div className="buying__friends">
          <h4>
            После покупки слона вашими друзьями <br /> вы  получите{' '}
            <b >
              150 
              <img src="/star.png" alt="star" />
            </b>
         
          </h4>
        </div>
      </div>
    </div>
  );
}
