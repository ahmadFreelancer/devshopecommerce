import React from 'react'
import {BsFillGridFill, BsList} from "react-icons/bs"
import { useFilterContext } from '../ContextAPI/filterContext'
import "../index.css"


export default function Sorts() {
    const {grid_view, setListView ,setGridView, filter_products, sorting} = useFilterContext()
  return (
    <div>
      <div className='row my-2 justify-content-between align-items-center sortWrapper'>

        <div className='col-4'>
            <button style={{border: "0px", margin: "8px 5px", fontSize: "18px"}} className={`sortButtons ${grid_view === true ? 'myActiveSort' : ''} `} onClick={setGridView}>
                <BsList />
            </button>
            <button style={{border: "0px", margin: "8px 5px", fontSize: "18px"}} className={`sortButtons ${grid_view === false ? 'myActiveSort' : ''} `} onClick={setListView}>
                <BsFillGridFill />
            </button>
        </div>

        <div className='col-4 availableProducts'>{`${filter_products.length} Products`}</div>

        <div className='col-4 mr-5'>
            <form action="#">
                <label htmlFor="sort"></label>
                <select className='w-100 sortSelect' name="sort" id="sort" onClick={sorting}>
                    <option value="lowest">Lowest Price</option>
                    <option value="highest">Highest Price</option>
                    <option value="a-z">A to Z</option>
                    <option value="z-a">Z to A</option>
                </select>
            </form>
        </div>
      </div>
    </div>
  )
}
