import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./myContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: false,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "all",
        company: "all",
    }
}

const FilterContextProvider = ({ children }) => {
    const { products } = useProductContext();
    const [state, dispatch] = useReducer(reducer, initialState)

    const setGridView = () => {
        dispatch({ type: "SET_GRIDVIEW" })
    }
    const setListView = () => {
        dispatch({ type: "SET_LISTVIEW" })
    }

    const sorting = (event) => {
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue })
    }

    const updateFilterValue = (event) =>{
        let value = event.target.value;
        let name = event.target.name;
        return dispatch({type: "UPDATE_FILTERS_VALUE" , payload: {name, value}})
    }

    const clearFilters = () =>{
        console.log("Clear")
        dispatch({type: "CLEAR_FILTERS"})
    }

    useEffect(() =>{
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_PRODUCTS" })
    }, [state.sorting_value, state.filters])

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
        
    }, [products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () => {
    return useContext(FilterContext);
}

export { FilterContextProvider, useFilterContext }