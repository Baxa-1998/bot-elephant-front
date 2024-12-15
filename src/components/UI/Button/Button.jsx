import React from 'react'
import './button.scss'
import { useLocation } from 'react-router'
export default function Button({children, className, ...props}) {
 

  return (
    <button className={`btn ${className}`} {...props}>{children}</button>
  )
}
