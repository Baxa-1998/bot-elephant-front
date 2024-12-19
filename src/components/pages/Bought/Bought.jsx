import React, { Suspense, useEffect } from 'react';
import './bought.scss';
import UserInfo from '../../shared/UserInfo/UserInfo';
import { useAppContext } from '../../../context/infoCTX';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import BoughtItem from './BoughtItem';
import BuyingItem from '../Buying/BuyingItem';
import Buying from '../Buying/Buying';
import Preloader from '../../shared/Preloader/Preloader';
export default function Bought() {

  const { elephantsData } = useAppContext();
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Preloader />;
  } else {
    return (
      <section className="bought">
        <div className="bought__top">
          <UserInfo />
        </div>
      
        <Swiper modules={[Navigation]} navigation={true} className="mySwiper">
          {elephantsData.map((item,index) => (
            <SwiperSlide key={index}>
              {item.purchased ? <BoughtItem item={item} /> : <BuyingItem item={item} />}
            </SwiperSlide>
          ))}
        </Swiper>
      
       
      </section>
    );
  }
}
