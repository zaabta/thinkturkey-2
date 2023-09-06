export const Card = ({ price, imgSrc }) => {
    return( 
    <div className="card">
        <img src={imgSrc} alt=""/>
        <p>{price}$</p>
        <button>add to cart</button>
    </div>
    )
}