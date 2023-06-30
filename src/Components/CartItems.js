import { useProductContext } from '../ContextAPI/myContext';
import CartAmountToggle from './CartAmountToggle';
import { FaTrash } from "react-icons/fa"
import { useCartContext } from '../ContextAPI/cartContext';
import "../index.css"


export default function CartItems({amount, price, image, id, name, color} ) {
  const { singleProduct } = useProductContext();
  const { removeItem, setDecrease, setIncrease } = useCartContext();

  const { stock } = singleProduct;

  let priceFormat = new Intl.NumberFormat("en-US", { style: "currency", "currency":"Pkr" });
  
  let priceFormatted = priceFormat.format(price);

  return (
    <>

        <div className='row justify-content-around align-items-center'>
          <div style={{width: "445px"}} className='itemDetails col-5 my-2 d-flex cartItems align-items-center'>
            <div className='col-6'><img className='rounded' width={185} src={image} alt={name} /></div>
            <div className='col-6'>
              <div style={{background: "orange", padding: "2px 5px", borderRadius: "25px", marginBottom: "5px", textAlign: "center"}}>{name}</div>
              <div style={{ height: '15px', width: '15px', borderRadius: "15px", backgroundColor: color, margin: "auto" }}></div>
            </div>
          </div>

          <div className='col-2 cartItems'>
            {priceFormatted} Rs
          </div>

          {/* Quantity */}
          <div className='col-2 cartItems'>
            <div className='add-to-cart'>


              <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id, stock)}
              />

            </div>
          </div>

          <div className='col-2 subTotal cartItems'>

            {priceFormat.format(amount * price)} 

          </div>
          <div className='col-1 cartItems'><FaTrash style={{cursor: "pointer"}} onClick={() => removeItem(id)} /></div>
        </div>
        <hr />
      
    </>
  )
}
