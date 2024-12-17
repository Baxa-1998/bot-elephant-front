import React from 'react';
import './home.scss';
import Button from '../../UI/Button/Button';
import {useNavigate} from 'react-router';

import UserInfo from '../UserInfo/UserInfo';
import {useAppContext} from '../../../context/infoCTX';
import Bought from '../../pages/Bought/Bought';

export default function Home() {
  const [isElephant, setIsElephant] = React.useState(true);
  const { elephants, hasElephant } = useAppContext();
  const { setHasElephant ,elephantsData, setElephantsData,} = useAppContext();
  const navigate = useNavigate();
  const firstElephant = elephantsData.find(item => item.level === 1);

    console.log(elephantsData);


    const handleBuy = () => {
        setElephantsData((prevData) => {
            const updatedData = [...prevData];

            const nextInactiveElephant = updatedData.find((item) => !item.active);
            if (nextInactiveElephant) {

                // nextInactiveElephant.active = true;
                setHasElephant(true)
            }
            return updatedData;
        });
    };

    function handlePurchase(data) {
        console.log(data);
        handleBuy()


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
            <div className="w-full h-full flex items-center justify-center">
              <img className="w-[393px] h-[426px]" src="/main-elephant.png" alt="elephant" />
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
                    <Button onClick={() => handlePurchase(firstElephant)}>
                        Купить слона
                    </Button>
                  <div className="flex items-center justify-center h-[65px] bg-[#262626] w-[100%] m-auto mt-[15px] rounded-[52px]">
                    <h4 className="text-[#FEAC3E] font-bold text-[18px] text-center leading-6">
                      Зарабатывайте от <br /> 50% вместе со слоном !
                    </h4>
                  </div>
                  <div className="w-[95%] m-auto mt-[16px]">
                    <p className="text-[18px]">
                      Зарабатывайте до 70% <br />
                      от стоимости слона!
                    </p>
                    <p className="mt-[20px] text-[18px]">
                      Получайте вознаграждения <br /> в{' '}
                      <b className="text-[#FEAC3E]">
                        Telegram stars <img className="inline" src="/star.png" alt="" />
                      </b>{' '}
                      с возможностью <br />
                      вывода на карту
                    </p>
                    <p className='mt-[20px] text-[18px]'>
                      Из-за повышенного спроса на <br /> слонов, полный функционал доступен только после
                      покупки слона
                    </p>
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
