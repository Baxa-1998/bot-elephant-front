import React, { useEffect, useRef, useState } from 'react'
import './button.scss'

const MainButton = React.memo(({ children, className, ...props }) => {
 


  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
});

export default MainButton ;
