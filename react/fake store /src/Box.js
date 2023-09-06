import { Card } from "./Card"
export const Box = ({ products }) => {
    return( 
    <div className="box">
        {
            products.map((product) => {
                return(<Card key={product.id} price={product.price}  imgSrc={product.image}/>)
            })
        }
    </div>
    )
}
