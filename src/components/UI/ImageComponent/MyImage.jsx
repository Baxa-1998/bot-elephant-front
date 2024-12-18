import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = ({ image }) => (
  <LazyLoadImage
    alt={image}
    effect="blur"
    wrapperProps={{
        // If you need to, you can tweak the effect transition using the wrapper style.
        style: {transitionDelay: "1s"},
    }}
    src={image} />
);

export default MyImage