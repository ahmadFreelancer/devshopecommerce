import React from 'react'
import { useFilterContext } from '../ContextAPI/filterContext'
import "../index.css"

export default function FilterSection() {
  const { filters: { text }, updateFilterValue, all_products, clearFilters } = useFilterContext();

  // Get Unique Data from an array
  const getUniqueData = (allProducts, property) => {
    let newVal = allProducts.map((data) => {
      return data[property];
    })

    return (newVal = ["all", ...new Set(newVal)]);
  }

  const categoryData = getUniqueData(all_products, "category")
  const companyData = getUniqueData(all_products, "company")


  return (
    <>
      <form className='inputSearch mb-3' onSubmit={(e) => e.preventDefault()}>

        <input type="text" className='w-100'
          name='text'
          value={text}
          placeholder='Search'
          onChange={updateFilterValue}
        />
      </form>
      <div className='filter-category flex-wrap'>
        <h5>Category</h5>
        
          {
            categoryData.map((curElem, index) => {
              return (<button style={{ border: 'none' }} className='m-1' key={index} type='button' name='category' value={curElem} onClick={updateFilterValue}>{curElem}</button>)
            })
          }
        
      </div>

      <div className='filter-company'>
        <h5>Company</h5>
        <form action="#">
          <select name="company" id="company" onClick={updateFilterValue}>
            {
              companyData.map((curElem, index) =>{
                return <option key={index} value={curElem} name="company">{curElem}</option>
              })
            }
          </select>
        </form>

      </div>

      <div className='clear-filters'>
            <button onClick={clearFilters} className='btn btn-blue' style={{fontSize: "12px"}}>
              Clear Filters
            </button>
      </div>
    </>
  )
}
