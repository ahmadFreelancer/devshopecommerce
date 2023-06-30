import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from 'react-icons/fi'
import logo from '../images/logo.png'
import { useCartContext } from '../ContextAPI/cartContext'
import "../index.css"

export default function Header() {
    const { total_item } = useCartContext();
    return (
        <header>
            <nav className="myNavbar navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to={'/'}> <img className='navLogo shadow p-1 rounded' width={160} src={logo} alt="Pic" /> </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to={'/'}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/about'}>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/products'}>Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={'/contact'}>Contact Me</NavLink>
                            </li>
                        </ul>
                        <span className="navbar-text p-2 cart-span">
                            <NavLink to={"/cart"}>
                                <FiShoppingCart className='fs-3' />
                                <span className='bg-warning rounded-circle py-1 px-2'>{total_item}</span>
                            </NavLink>
                            
                        </span>
                    </div>
                </div>
            </nav>

        </header>
    )
}
