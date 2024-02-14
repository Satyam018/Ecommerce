import React from 'react'
import './BreadCrum.css'
import arrow from '../Assets/breadcrum_arrow.png'

const BreadCrum = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
        Home <img src={arrow}/>Shop<img src={arrow}/>{product.category}<img src={arrow}/>{product.name}
    </div>
  )
}

export default BreadCrum
