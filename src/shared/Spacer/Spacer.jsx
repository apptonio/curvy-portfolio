import React from 'react'
import './Spacer.css';

const Spacer = ({layer}) => {
  return (
    <div className={`spacer ${layer}`}></div>
  )
}

export default Spacer