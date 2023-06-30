import React from 'react'
import { useFilterContext } from '../ContextAPI/filterContext'
import GridView from './GridView';
import ListView from './ListView';

export default function ProductList() {
  const { filter_products, grid_view } = useFilterContext();

  // console.log(filter_products)
  if (grid_view === false) {
    return <GridView key="aksjh" products={filter_products}/>
  }
  if(grid_view === true){
    return <ListView key="asas" products={filter_products}/>
  }
}
