import React from 'react'
import hero from './images/hero.jpg'
import { NavLink } from 'react-router-dom'

let stylesLeft = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "column"
}

export default function About() {
    return (
        <div className='container my-5'>
            <div className='row align-items-center my-5'>
                <div className='col-6' style={stylesLeft}>
                    <div>Welcome To</div>
                    <h2>Dev Shoppers</h2>
                    <p>You can find all developers related products on this website. Good thing is, its just a developers thing while too much volatility out there in market. Cheers!!</p>
                    <NavLink to={"/products"}><button className='btn btn-primary'>Shop Now</button></NavLink>
                </div>

                <div className='col-6'>
                    <img src={hero} alt="Hero" className='w-100'/>
                </div>
            </div>

        </div>
    )
}
