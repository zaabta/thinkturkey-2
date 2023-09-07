import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => setData(json))
    }, [id])

    return(<div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <div style={{
            backgroundColor: "white",
            width: "70%",
            height: "60%",
            display: 'flex',
            flexDirection: "row",
            gap: 80,
            padding:100
        }}>
            <img style={{
                height: "100%",
                width: "40%"
            }}  src={data.image} alt={data.title}/>
            <div>
                <h1 style={{color: "black", marginTop: 0}}>{data.title}</h1>
                <p style={{ fontSize: 20 }}>{data.description}</p>
                <p style={{ fontSize: 20 }} >
                    <span style={{ fontWeight: "bolder" }}>Category:</span> 
                    {data.category}
                </p>
                <p style={{ fontSize: 20 }} ><span style={{ fontWeight: "bolder" }}>Price:</span> {data.price}$</p>
            </div>
        </div>
    </div>);
}

export default SingleProduct