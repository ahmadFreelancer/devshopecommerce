const cartReducer = (state, action) => {

    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, singleProduct } = action.payload;
        console.log(singleProduct)

        let cartProduct;
        cartProduct = {
            id: id + color,
            name: singleProduct.name,
            color: color,
            amount: amount,
            image: singleProduct.image[0].url,
            price: singleProduct.price
        }

        return {
            ...state,
            cart: [...state.cart, cartProduct]
        }


    }

    if (action.type === "REMOVE_ITEM") {

        let newCart = state.cart.filter((data) => {
            return data.id !== action.payload
        })

        return {
            ...state,
            cart: newCart
        }
    }


    if (action.type === "CLEAR_CART") {
        let clear = []
        return {
            ...state,
            cart: clear
        }
    }


    if (action.type === "CART_TOTAL_ITEM") {
        let updatedItemVal = state.cart.reduce((initialValue, curElem) => {
            const { amount } = curElem;
            initialValue = initialValue + amount
            return initialValue;
        }, 0)

        return {
            ...state,
            total_item: updatedItemVal
        }
    }


    if (action.type === "CART_TOTAL_PRICE") {
        let updatedPrice = state.cart.reduce((accumulator, curElem) =>{
            const {amount, price} = curElem;
            return amount * price;
        }, 0)

        return {
            ...state,
            total_price: updatedPrice
        }
    }

    if (action.type === "SET_DECREMENT") {
        let updatedCart = state.cart.map((curElem) => {
            if (curElem.id === action.payload) {
                
                let decAmount = curElem.amount - 1

                if(decAmount <= 1) {
                    decAmount = 1
                }

                return {
                    ...curElem,
                    amount: decAmount
                };
            }
            else{
                return curElem
            }
        })
        return {
            ...state,
            cart: updatedCart
        }
    }


    if (action.type === "SET_INCREASE") {
        let updatedCart = state.cart.map((curElem) => {
            if (curElem.id === action.payload.id) {
                
                let incAmount = curElem.amount + 1

                if(incAmount >= action.payload.stock) {
                    incAmount = action.payload.stock
                }

                return {
                    ...curElem,
                    amount: incAmount
                };
            }
            else{
                return curElem
            }
        })
        return {
            ...state,
            cart: updatedCart
        }
    }

    

    return state;
}



export default cartReducer;