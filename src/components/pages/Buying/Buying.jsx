import React, { useEffect, useRef, useState } from 'react';
import './buying.scss';
import UserInfo from '../../shared/UserInfo/UserInfo';
import BuyingItem from './BuyingItem';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useAppContext } from '../../../context/infoCTX';
import { data } from '../../../data';

export default function Buying() {
  const { setHasElephant ,elephantsData, setElephantsData,} = useAppContext();
  
  // Массив данных (слоны)
  // const [elephantsData, setElephantsData, ] = useState(data);
 
  

  //добавление данных в state
  // function getElephantInfo(data) {
  //   // если слон уже есть в массиве
  //   const existElephant = elephants.some(item => item.level === data.level)
  //   if(existElephant){
  //     alert('У вас уже есть этот слон')
  //   }else{
  //     setElephants((prevElephants) => [...prevElephants, data]); 
  //     // если слон куплен убираем стартовую страницу
  //     setHasElephant(true)

  //   }

    
  // }



  const handleBuy = () => {
    setElephantsData((prevData) => {
      const updatedData = [...prevData];
     
      const nextInactiveElephant = updatedData.find((item) => !item.active);
      if (nextInactiveElephant) {
      
        nextInactiveElephant.active = true;
        setHasElephant(true)
      }
      return updatedData;
    });
  };

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
        {elephantsData.map((item) => (
          <SwiperSlide>
            <BuyingItem setHasElephant={setHasElephant} handleBuy={handleBuy} item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
