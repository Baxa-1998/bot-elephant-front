import React from 'react';
import './buying.scss';
export default function BuyingItem() {
  function test() {
    console.log('click');
  }
  return (
    <div className="buying__item">
      <div className="buying__item_img">
        <img src="/elephant/1.png" alt="elephant" />
      </div>
      <div className="buying__item_info">
        <div className="buying__lvl">
          <img onClick={test} src="/arrow-left.png" alt="<" />
          <span>Слон 1 lvl</span>
          <img src="arrow-right.png" alt=">" />
        </div>
        <div className="buying__discount">
          <h4>5%</h4>
          <p>Вы зарабатываете с каждой <br /> продажи слона другу !</p>
        </div>
      </div>
    </div>
  );
}
