import { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const initialState = {
        cart: [],
        total_item: "",
        total_price: 0,
        shipping_fee: 500,
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    const removeItem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const addToCart = (id, color, amount, singleProduct) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, singleProduct } })
    }

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    }

    const setDecrease = (id) =>{
        dispatch({type: "SET_DECREMENT", payload: id})
    }

    const setIncrease = (id, stock) =>{
        dispatch({type: "SET_INCREASE", payload: {id, stock}})
    }

    useEffect(() => {
        dispatch({ type: "CART_TOTAL_ITEM" })
        dispatch({ type: "CART_TOTAL_PRICE" })
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setIncrease, setDecrease }}>
            {children}
        </CartContext.Provider>
    )
}

const useCartContext = () => {
    return useContext(CartContext);
}


export { CartProvider, useCartContext };