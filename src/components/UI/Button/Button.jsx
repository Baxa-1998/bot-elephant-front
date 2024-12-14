import React from 'react'
import './button.scss'
export default function Button({children, className, ...props}) {
  return (
    <button className={`btn ${className}`} {...props}>{children}</button>
  )
}
