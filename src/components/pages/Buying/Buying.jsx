import React, { useEffect, useRef } from 'react';
import './buying.scss';
import UserInfo from '../../shared/UserInfo/UserInfo';
import BuyingItem from './BuyingItem';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Buying() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="buying">
      <div className="buying__top">
        <UserInfo />
      </div>
      <Swiper
        // onInit={(swiper) => {

        //   swiper.params.navigation.prevEl = prevRef.current;
        //   swiper.params.navigation.nextEl = nextRef.current;
        //   swiper.navigation.init();
        //   swiper.navigation.update();
        // }}
        modules={[Navigation]}
        navigation={true}
        className="mySwiper">
        <SwiperSlide>
          {' '}
          <BuyingItem />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <BuyingItem />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <BuyingItem />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
