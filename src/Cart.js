import CartItems from "./Components/CartItems";
import { useCartContext } from "./ContextAPI/cartContext";
import { NavLink } from "react-router-dom";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "./index.css"

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  console.log(cart);
  return (
    <>
      <div className="container m-auto my-5">
        {/* <div className="cartItemsTop row d-flex justify-content-center">
          <div className="col-3">Item</div>
          <div className="col-3">Price</div>
          <div className="col-2">Quantity</div>
          <div className="col-2">Sub Total</div>
          <div className="col-2">Remove</div>
          <hr />
        </div> */}
          {
            cart.map((curElem) => {
              return <CartItems key={curElem.id} {...curElem} />
            })
          }
      </div>
      <div className="d-flex justify-content-evenly my-4">
        <NavLink to={"/products"} className='cartLowerBtn btn btn-blue'>
          Continue Shopping
        </NavLink>
        <button className='cartLowerBtn btn bg-light border-warning' onClick={clearCart}>
          Clear Cart
        </button>
      </div>

      <div style={{ width: '275px', borderRadius: "12px", marginBottom: "25px" }} className="container bg-dark text-center text-white p-3">
        <div>
          <p><span>Subtotal: </span> <span>{total_price}</span></p>
          <span>Shipping Fee: </span> <span>{shipping_fee}</span> <br />
          <hr />
          <div style={{ marginBottom: "25px" }}>Total: {shipping_fee + total_price}</div>
        </div>
        <div style={{ width: "150px"}}>
          <PayPalButtons />
        </div>
      </div>

    </>
  )
};

export default Cart;
