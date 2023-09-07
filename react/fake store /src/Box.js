import { Card } from "./Card"
import { Link } from "react-router-dom"
export const Box = ({ products }) => {
    return( 
    <div className="box">
        {
            products.map((product) => {
                return(
                <Link to={`/product/${product.id}`}>
                    <Card key={product.id} price={product.price}  imgSrc={product.image}/>
                </Link>)
            })
        }
    </div>
    )
}
