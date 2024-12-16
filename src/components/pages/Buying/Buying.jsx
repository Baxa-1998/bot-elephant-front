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
    activeImg: '/elephant/1.png',
    stars: 150,
    price: 100, 
    active: true
  },
  {
    id: 2,
    level: 2,
    discount: 10,
    activeImg: '/elephant/2.png',
    notActiveImg : '/elephant/2b.png',
    stars: 300,
    price: 200,
    active: false
  },
  {
    id: 3,
    level: 3,
    discount: 15,
    activeImg: '/elephant/3.png',
    notActiveImg : '/elephant/3b.png',
    stars: 450,
    price: 300,
    active: false

  },
  {
    id: 4,
    level: 4,
    discount: 20,
    activeImg: '/elephant/4.png',
    notActiveImg : '/elephant/4b.png',
    stars: 600,
    price: 400, 
    active: false
  },
  {
    id: 5,
    level: 5,
    discount: 25,
    activeImg: '/elephant/5.png',
    notActiveImg : '/elephant/5b.png',
    stars: 750,
    price: 500, 
    active: false
  },
  {
    id: 6,
    level: 6,
    discount: 30,
    activeImg: '/elephant/6.png',
    notActiveImg : '/elephant/6b.png',
    stars: 900,
    price: 600, 
    active: false
  },
  {
    id: 7,
    level: 7,
    discount: 35,
    activeImg: '/elephant/7.png',
    notActiveImg : '/elephant/7b.png',
    stars: 1050,
    price: 700, 
    active: false
  },
  {
    id: 8,
    level: 8,
    discount: 40,
    activeImg: '/elephant/8.png',
    notActiveImg : '/elephant/8b.png',
    stars: 1200,
    price: 800, 
    active: false
  },
  {
    id: 9,
    level: 9,
    discount: 45,
    activeImg: '/elephant/9.png',
    notActiveImg : '/elephant/9b.png',
    stars: 1350,
    price: 900, 
    active: false
  },
  {
    id: 10,
    level: 10,
    discount: 50,
    activeImg: '/elephant/10.png',
    notActiveImg : '/elephant/10b.png',
    stars: 1500,
    price: 1000,
    active: false
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
