import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import './userInfo.scss';
import { useAppContext } from '../../../context/infoCTX';
import {useTelegram} from "../../../hooks/useTelegram.js";
export default function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const telegram = useTelegram();
  const { hasElephant, user, stars } = useAppContext();
  const handleBack = () => {
    if (location.pathname !== '/') {
      navigate(-1);
    }
    navigate('/');
  };
  const isCheckElephant = () =>{
    if(!hasElephant) {
      return;
    }
    navigate('/profile')

  }

  return (
    <div className="home__heading">
      
        <div onClick={isCheckElephant} className="home__heading_left">
          {/* {location.pathname === '/' && hasElephant ? (
            <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />
          ) : null} */}
          {location.pathname === '/profile' && (
            <img onClick={handleBack} src="/arrow-black.svg" alt="arrow-white" />
          )}
          {location.pathname === '/buying' && (
            <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />
          )}
          {/* {location.pathname === '/' &&   <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />   } */}
          {/* {location.pathname === '/bought' &&      <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" /> } */}
          {/* {hasElephant &&  <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />} */}
          <div className="avatar">
            <img
                // src={`https://t.me/i/userpic/320/${telegram.initDataUnsafe.user?.username}.jpg`}
                // onLoad={({currentTarget}) => {
                //   currentTarget.naturalWidth == 1 ? (currentTarget.src = "/avatar1.png") : '';
                // }}
                src='/avatar.png'
                alt="User avatar"
            />
            {/*<img src="/avatar1.png" alt="avatar"/>*/}
          </div>
          <h3 className={`${location.pathname === '/profile' ? 'text-black' : ''}`}>
            {telegram.initDataUnsafe.user?.last_name || telegram.initDataUnsafe.user?.first_name ? (
                `${telegram.initDataUnsafe.user?.first_name} ${telegram.initDataUnsafe.user?.last_name}`
            ) : (
                telegram.initDataUnsafe.user?.username
            )}
          </h3>
        </div>
   
          {hasElephant &&    <div className="home__heading_right">
        <h4>{stars}</h4>
        <img src="/star.png" alt="" />
      </div> }
   
    </div>
  );
}
