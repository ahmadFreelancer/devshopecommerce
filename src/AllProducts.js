import React from "react";
import ProductList from "./Components/ProductList";
import FilterSection from "./Components/FilterSection";
import Sorts from "./Components/Sorts";
import { useFilterContext } from "./ContextAPI/filterContext";
import "./index.css"

const AllProducts = () => {

  const {filter_products} = useFilterContext();

  return (
    <>
      <div className="container">
        <div className="row ProductPageWrapper">
          <div className="col-2 my-5 filterSection">
            <FilterSection />
          </div>

          <div className="col-10 my-5 productSection rightSection">
            <Sorts />
            <ProductList />
          </div>
        </div>

      </div>
    </>
  )
};

export default AllProducts;
