import { useProductContext } from "../ContextAPI/myContext"
import Product from "./Product";
import "../index.css"

export default function FeaturedSection() {

    const { isLoading, featureProducts } = useProductContext();
    

    if (isLoading) {
        return <>
            <div className="spinner-border text-warning d-flex justify-content-center fs-3 m-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    }

    return (
        <div className="container-fluid bg-dark my-5">
            <h5 style={{ color: "white", padding: "25px 0 0 25px"}}>Hey!!</h5>
            <h3 style={{ color: "white", paddingLeft: "25px" }}>Check Some Featured Products</h3>
            <div className="container-lg d-flex justify-content-evenly flex-wrap py-5">
                {
                    featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />
                    })
                }
            </div>
        </div>
    )
}
