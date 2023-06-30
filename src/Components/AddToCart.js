import React, { useState } from 'react'
import "../index.css"
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../ContextAPI/cartContext';
import CartAmountToggle from './CartAmountToggle';

export default function AddToCart({ singleProduct }) {
    const {addToCart} = useCartContext();
    // console.log(singleProduct)
    const { id, colors, stock } = singleProduct;
    const [color, setColor] = useState(colors[0])
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    return (
        <div className='container'>
            <hr />
            <p style={{fontSize: "12px", letterSpacing: '1px'}} className='d-flex align-items-center'>
                Select Color: {
                    singleProduct && colors.map((curColor, index) => {
                        return (
                            <button className={color === curColor ? "myActive" : "colorClass"} onClick={() => setColor(curColor)} style={{ backgroundColor: curColor, width: 25, height: 25, borderRadius: "25px", margin: "3px 8px" }} key={index}> </button>
                        )
                    })
                }
            </p>
            
                
            <div className='add-to-cart'>
                <div>
                    <CartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease} />
                    <hr />
                    <NavLink className="btn btn-blue" to={"/cart"} onClick={() => addToCart(id, color, amount, singleProduct)}>Add To Cart</NavLink>
                </div>
            </div>


        </div>
    )
}
