import React from 'react'
import Product from "./Product"
import { useProductContext } from '../ContextAPI/myContext';

export default function GridView({products}) {
  const { isLoading } = useProductContext();

  if (isLoading) {
    return <>
        <div className="spinner-border text-warning d-flex justify-content-center fs-3 m-auto" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </>
}


  return (
    <div>
      <div className='row justify-content-center'>
        
            {
                products.map((curElem, index) =>{
                    return <Product key={index} {...curElem}/>
                })
            }
        

      </div>
    </div>
  )
}
