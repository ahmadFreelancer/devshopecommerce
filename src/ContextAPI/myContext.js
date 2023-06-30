/*   In Context API, there are 3 main things to remember
1. create context, make a <Provider>, then useContext to assign its value anywhere

     1. let a = createContext() ,  used to create context
     
     const Test = (props) => {
            let s = 'hello world';
             <a.Provider value={s}>
                    {props.children}
             </a.Provider>
     }
     where
     2. <a.Provider value={s}>
      {props.children}
      </a.Provider>
     is used to wrap all components (in our case, <App />), in order to pass my Context as children to all components 
     3. let b = UseContext(a) , used to use my created contexts in any component 
*/

import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import ProductReducer from "../reducer/reducer";

let MyContext = createContext();


const ContextFunction = (props) => {

       const initialState = {
              isLoading: false,
              isError: false,
              products: [],
              featureProducts: [],
              isSingleLoading: false,
              singleProduct: {}
       }
       let url = 'https://api.pujakaitem.com/api/products';

       const [state, dispatch] = useReducer(ProductReducer, initialState);

       const getData = async () => {
              dispatch({ type: "SET_LOADING" });
              try {
                     let data = await axios.get(url);
                     let response = data.data;
                     // console.log(response)

                     dispatch({ type: "MY_API_DATA", payload: response })
                     
              } catch (error) {
                     dispatch({ type: "MY_ERROR_API" });

              }
       }

       const getSingleProduct = async (link) => {
              dispatch({ type: "SET_SINGLE_LOADING" });
              
              try {
                     let data = await axios.get(link);
                     let singleProduct = await data.data;
                     // console.log(singleProduct)
                     dispatch({ type: "SET_SINGLE__PRODUCT", payload: singleProduct })
              } catch (error) {
                     dispatch({ type: "SET_SINGLE_ERROR" })
              }
       }

       useEffect(() => {
              getData();
       }, [])

       return (
              <MyContext.Provider value={{ ...state, getSingleProduct }}>
                     {props.children}
              </MyContext.Provider>
       )
}

const useProductContext = () => {
       return useContext(MyContext);
}

export { MyContext, ContextFunction, useProductContext };