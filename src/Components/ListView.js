import { NavLink } from "react-router-dom";
import "../index.css"
import { useProductContext } from "../ContextAPI/myContext";


export default function ListView({ products }) {
    const { isLoading } = useProductContext();

    if (isLoading) {
        return <>
            <div className="spinner-border text-warning d-flex justify-content-center fs-3 m-auto" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </>
    }

    return (
        <div className="row">
            {
                products.map((curElem) => {
                    const { id, name, image, price, description, category } = curElem;
                    return (
                        <>
                            <div key={id + "laks"} className="col-6 listViewCard">
                                <figure><img className="listViewImg" src={image} alt={id} />
                                    <figcaption>{category}</figcaption>
                                </figure>

                            </div>
                            <div key={id} className="col-6 d-flex flex-column align-items-start justify-content-center mb-4">
                                <h4>{name}</h4>
                                <p>{price}</p>
                                <p>{description.slice(0, 42)}</p>
                                <NavLink to={`/singleproduct/${id}`} className="btn btn-primary">Read More</NavLink>
                            </div>
                        </>
                    )
                })
            }
        </div>
    )
}
