import React, { useEffect, useRef, useState } from 'react'
import './button.scss'
import { useLocation } from 'react-router'
const Button = React.memo(({ children, className, ...props }) => {
 


  return (
    <button className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
});

export default Button;
