import React, { useEffect, useRef, useState } from 'react';
import './buying.scss';
import UserInfo from '../../shared/UserInfo/UserInfo';
import BuyingItem from './BuyingItem';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Buying() {
  const [data, setData] = useState([
    {
    id: 1,
    level: 1,
    discount: 5,
    img: '/elephant/1.png',
    stars: 150,
    price: 100
  },
  {
    id: 2,
    level: 2,
    discount: 10,
    img: '/elephant/2.png',
    stars: 300,
    price: 200
  },
  {
    id: 3,
    level: 3,
    discount: 15,
    img: '/elephant/3.png',
    stars: 450,
    price: 300

  },
  {
    id: 4,
    level: 4,
    discount: 20,
    img: '/elephant/4.png',
    stars: 600,
    price: 400
  },
  {
    id: 5,
    level: 5,
    discount: 25,
    img: '/elephant/5.png',
    stars: 750,
    price: 500
  },
  {
    id: 6,
    level: 6,
    discount: 30,
    img: '/elephant/6.png',
    stars: 900,
    price: 600
  },
  {
    id: 7,
    level: 7,
    discount: 35,
    img: '/elephant/7.png',
    stars: 1050,
    price: 700
  },
  {
    id: 8,
    level: 8,
    discount: 40,
    img: '/elephant/8.png',
    stars: 1200,
    price: 800
  },
  {
    id: 9,
    level: 9,
    discount: 45,
    img: '/elephant/9.png',
    stars: 1350,
    price: 900
  },
  {
    id: 10,
    level: 10,
    discount: 50,
    img: '/elephant/9.png',
    stars: 1500,
    price: 1000
  },

])


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
          {data.map((item)=>(
            <SwiperSlide>
         
          <BuyingItem item={item}/>
         </SwiperSlide>
          ))}
        
     
       
      </Swiper>
    </section>
  );
}
