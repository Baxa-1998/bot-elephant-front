import React from 'react';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';
import ImageLoader from '../../shared/ImageLoader/ImageLoader';


const MyImage = ({ image, alt }) => {
 
  const [isLoaded, setIsLoaded] = useState(false);


  const handleImageLoad = () => {
    setIsLoaded(true);  
  };

  return (
    <div className='w-[358px] h-[358px]'>
     
      {!isLoaded && <ImageLoader/>}  

      <LazyLoadImage
        alt={alt}  
        effect="blur"  
        src={image} 
        onLoad={handleImageLoad}  
        wrapperProps={{
          style: { transitionDelay: "1s" }, 
        }}
      />
    </div>
  );
};

export default MyImage;

