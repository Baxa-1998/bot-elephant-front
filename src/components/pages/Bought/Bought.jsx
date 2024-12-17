import React from 'react'
import './bought.scss'
import UserInfo from '../../shared/UserInfo/UserInfo'
import { useAppContext } from '../../../context/infoCTX'
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BoughtItem from './BoughtItem';
export default function Bought() {
  const {elephants} = useAppContext()
  
  
  
  return (
    <section className="bought">
      <div className="bought__top">
        <UserInfo />
      </div>
      <Swiper
    
        modules={[Navigation]}
        navigation={true}
        className="mySwiper">
        {elephants.map((item) => (
          <SwiperSlide>
            <BoughtItem  item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
  
}
