import React from 'react';
import './home.scss';
// import Button from '../../UI/Button/Button';
// import { useNavigate } from 'react-router';

import UserInfo from '../UserInfo/UserInfo';
import { useAppContext } from '../../../context/infoCTX';
import Bought from '../../pages/Bought/Bought';
import mainElephnat from '../../../assets/main-elephant.png';
import star from '../../../assets/Vector.svg';
import MainButton from '../../UI/Button/MainButton';
export default function Home() {
  const { hasElephant } = useAppContext();
  const { setHasElephant, elephantsData, setElephantsData } = useAppContext();

  const firstElephant = elephantsData.find((item) => item.level === 1);

  console.log(firstElephant);

  const handleBuy = () => {
    setElephantsData((prevData) => {
      const updatedData = [...prevData];

      const nextInactiveElephant = updatedData.find((item) => !item.active);
      if (nextInactiveElephant) {
        nextInactiveElephant.active = true;
        setHasElephant(true);
      }
      return updatedData;
    });
  };

  function handlePurchase(data) {
    console.log(data);
    handleBuy();

    setElephantsData((prevData) => {
      const updatedData = prevData.map((item) => {
        if (item.id === data.id) {
          return { ...item, purchased: true };
        }

        return item;
      });

      return updatedData;
    });
  }

  return (
    <section className="home">
      {/* home top section */}
      <div className="home__top">
        {!hasElephant ? <UserInfo /> : null}
        {hasElephant ? (
          <Bought />
        ) : (
          <div className="w-full h-full">
            <div className="w-full h-full flex items-center justify-center flex-col">
              <img className="w-[300px] h-[300px]" src={mainElephnat} alt="elephant" />
              <MainButton onClick={() => handlePurchase(firstElephant)} className={'!w-[364px]'}>
                Купить слона <img className="ml-[8px]" src={star} alt="star" />
              </MainButton>
            </div>
            <div className="home__bottom">
              <div className="home__start">
                {/* <h4>О вашем слоне:</h4>
       <p>
         Приглашай друзей и получай 50% <br /> с каждой продажи слона !
       </p> */}
                <div className="mt-[15px]">
                  {/*<Link to={'/buying'}>*/}
                  {/*  <Button>Купить слона</Button>*/}
                  {/*</Link>*/}
                  {/* <Button className={'home__btn'} onClick={() => handlePurchase(firstElephant)}>
                    Купить слона <img src="/cursor.svg" alt="cursor" />
                  </Button> */}
                  <div className="flex items-center justify-center h-[41px] bg-[#262626] w-[100%] m-auto mt-[20px] rounded-[52px]">
                    <h4 className="text-[#FEAC3E] font-bold !text-[14px] text-center leading-6">
                      Зарабатывайте до 70% от стоимости слона!
                    </h4>
                  </div>
                  <div className="w-[95%] m-auto mt-[16px]">
                    {/* <p className="text-[18px]">
                      Зарабатывайте до 70% <br />
                      от стоимости слона!
                    </p> */}

                    <p className="mt-[20px] !text-[14px] font-medium">
                      Получайте вознаграждения в
                      <b className="text-[#FEAC3E] ml-[2px]">
                        Telegram stars{' '}
                        <img className="inline w-[19px] h-[18px] mb-[5px]" src={star} alt="star" />
                      </b>{' '}
                      с возможностью вывода на карту
                    </p>

                    {/* 
                    <p className="mt-[20px] text-[18px] pt-[25px]">
                      Из-за повышенного спроса на <br /> слонов, полный функционал доступен только
                      после покупки слона
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* home bottom section */}
      </div>
    </section>
  );
}
