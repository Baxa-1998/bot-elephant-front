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
    <h1>fdsa</h1>
      </div>
     
    </div>
  );
}
