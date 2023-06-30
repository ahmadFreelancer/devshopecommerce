import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextFunction } from "./ContextAPI/myContext";
import { FilterContextProvider } from "./ContextAPI/filterContext";
import { CartProvider } from "./ContextAPI/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ContextFunction>
    <FilterContextProvider >
        <CartProvider>
            <App />
        </CartProvider>
    </FilterContextProvider>
</ContextFunction>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
