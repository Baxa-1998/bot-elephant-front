import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import './userInfo.scss';
import { useAppContext } from '../../../context/infoCTX';
export default function UserInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hasElephant } = useAppContext();
  const handleBack = () => {
    if (location.pathname !== '/') {
      navigate(-1);
    }
    navigate('/');
  };

  return (
    <div className="home__heading">
      <Link to={'/profile'}>
        <div className="home__heading_left">
          {location.pathname === '/' && hasElephant ? (
            <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />
          ) : null}
          {location.pathname === '/profile' && (
            <img onClick={handleBack} src="/arrow-left.png" alt="arrow-white" />
          )}
          {location.pathname === '/buying' && (
            <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />
          )}
          {/* {location.pathname === '/' &&   <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />   } */}
          {/* {location.pathname === '/bought' &&      <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" /> } */}
          {/* {hasElephant &&  <img onClick={handleBack} src="/arrow-white.svg" alt="arrow-white" />} */}
          <div className="avatar">
            <img src="/avatar1.png" alt="avatar" />
          </div>
          <h3 className={`${location.pathname === '/profile' ? 'text-black' : ''}`}>
            Viktor Kotov
          </h3>
        </div>
      </Link>

      <div className="home__heading_right">
        <h4>12 522</h4>
        <img src="/star.png" alt="" />
      </div>
    </div>
  );
}
