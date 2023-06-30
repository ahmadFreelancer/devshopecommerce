import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Product({id, name, image, price, category}) {
  let priceFormat = new Intl.NumberFormat("en-PK", { style: "currency", "currency":"Pkr" });

  return (
    <div className='col-2 mx-3' style={{width: "260px"}}>
    <NavLink to={`/singleproduct/${id}`}>
      <div className='gridViewCard card p-3 my-2 align-items-center'>
        <figure>
            <img className='w-100' src={image} alt={name} />
            <figcaption>{category}</figcaption>
        </figure>
        <div className='cardData'>
            <h5 className='mx-2 d-block'>{name}</h5>
            <span className='mx-2'>Price: {priceFormat.format(price.toString().slice(0, 4))}</span>
        </div>
      </div>
    </NavLink>
    </div>
  )
}
