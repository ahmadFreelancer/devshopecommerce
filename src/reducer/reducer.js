const ProductReducer = (state, action) => {
    switch (action.type) {
        case ("SET_LOADING"):
            return { ...state, isLoading: true }

        case ("MY_ERROR_API"):
            return { ...state, isLoading: false, isError: true }

        case ("SET_SINGLE_LOADING"):
            return { ...state, isSingleLoading: true }

        case ("SET_SINGLE__PRODUCT"):
            return { ...state, isSingleLoading: false, singleProduct: action.payload }

        case ("SET_SINGLE_ERROR"):
            return { ...state, isSingleLoading: false, isError: true }


        case ("MY_API_DATA"):
            const featureData = action.payload.filter((curElem) => {
                return curElem.featured === true;
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureData
            }


        default:
            return state;
    }

}


export default ProductReducer;