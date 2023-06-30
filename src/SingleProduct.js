import { useEffect } from "react";
import { useProductContext } from "./ContextAPI/myContext";
import { useParams } from "react-router-dom";
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import MyImages from "./Components/MyImages";
import AddToCart from "./Components/AddToCart";
import "./index.css"


const SingleProduct = () => {
  const API = "https://api.pujakaitem.com/api/products"
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    image
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
    // console.log(singleProduct)
  }, [])

  return (
    <>
      <div className="container">
        <div className="row my-5 singleProductWrapper">
          <div className="left-side col-8">

            <MyImages image={image} />
          </div>

          <div className="right-side col-4">
            <h3>{name}</h3>
            <div><span className="bg-dark text-white rounded py-1 px-2 my-2 d-inline-block">Price:</span><span> {price}</span></div>

            <p>{description}</p>

            <div className="w-100 d-flex justify-content-evenly">
              <span className="d-flex flex-column align-items-center">
                <TbTruckDelivery className="fs-2 bg-warning text-white rounded p-1" />
                <p>Free Delivery</p>
              </span>
              <span className="d-flex flex-column align-items-center">
                <TbReplace className="fs-2 bg-warning text-white rounded p-1" />
                <p>Free Replacement</p>
              </span>
            </div>
            <hr />

            <div className="lower">
              <span className="bg-dark text-white rounded py-1 px-2 my-2 d-inline-block">Availability:</span><strong> {stock ? "In Stock" : "Not Available"}</strong> <br />
              <span className="bg-dark text-white rounded py-1 px-2 my-2 d-inline-block">Brand: </span><strong> {company}</strong> <br />
              <span className="bg-dark text-white rounded py-1 px-2 my-2 d-inline-block">Category:</span><strong> {category}</strong> <br />
              <div className="cart">
                {stock > 0 && <AddToCart singleProduct={singleProduct} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default SingleProduct;
