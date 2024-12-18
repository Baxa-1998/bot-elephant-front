import React from 'react';
import './buying.scss';
import Button from '../../UI/Button/Button';
import { Link } from 'react-router';
import { useAppContext } from '../../../context/infoCTX';
import { handleBuy, handleClick, handlePurchase } from '../../../utils/utils';
import ImageComponent from '../../UI/ImageComponent/ImageComponent';

export default function BuyingItem({ item }) {
  const { setElephantsData } = useAppContext();

  // const handleClick = (data) => {
  //   handlePurchase(data);
    
  // };
  // function handlePurchase(data) {
  //   console.log(data);
  //   handleBuy()
    

  //   setElephantsData((prevData) => {
     
  //     const updatedData = prevData.map((item) => {
  //       if (item.id === data.id) {
    
        
          
  //         return { ...item, purchased: true };
  //       }
        
  //       return item;
  //     });

  //     return updatedData; 
  //   });
  // }
  // const handleBuy = () => {
  //   setElephantsData((prevData) => {
  //     const updatedData = [...prevData];
  //     const nextInactiveElephant = updatedData.find((item) => !item.active);
  //     if (nextInactiveElephant) {
  //       nextInactiveElephant.active = true;

  //       setHasElephant(true);
  //     }
  //     return updatedData;
  //   });
  // };
  function clickHandler(data) {
 
    handleClick(data,setElephantsData, handlePurchase)
    
  }

  return (
    <div className="buying__item">
      <div className="buying__item_img">
     
   <ImageComponent src={item.notActiveImg}/>
          {/* <img src={item.notActiveImg} alt="elephant" /> */}
    
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
            После покупки слона вашими друзьями вы получите{' '}
            <b>
              {item.stars}
              <img src="/star.png" alt="star" />
            </b>
          </h4>
        </div>
        <div className="buying__btn">
          {item.active ? (
            <Link to={'/'}>
     <Button onClick={() => clickHandler(item)} className={'flex items-center !w-[95%]'}>
                Купить <span className="ml-[48px]">{item.price}</span>{' '}
                <img className="ml-[8px]" src="/white-star.png" alt="white-star" />
              </Button>
            </Link>
         
          
          ) : (
            <Button className={'flex items-center !text-[12px] !w-[95%]'}>
              Разблокируется после покупки предыдущего
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
