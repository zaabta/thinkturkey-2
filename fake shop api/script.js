const list = document.querySelector(".list-card");

const setRate  = (rate) => {
    const rated =  '<span class="fa fa-star checked"></span>';
    const unrated =  '<span class="fa fa-star"></span>';
    let res = "";
    for(var i = 1; i <= 5; i++) {
        if(i <= Math.round(rate)){
            res += rated
        } else {
            res += unrated
        }
    }
    return res;
}

const getData = async (api) => {
    try {
        const res = await fetch(api);
        const json = await res.json();
        return json;
    } catch(err) {
        console.log("ERROR-->", err)
    }   
}

const products = await getData("https://fakestoreapi.com/products");

products.map(({ title, price, image, rating, description }) => {
    list.innerHTML += ` 
        <div title="${description}" class="card">
            <img src="${image}" alt=""/>
            <h3>${title}</h3>
            <div class="review">
            ${setRate(rating.rate)}
            </div>
            <p name="price">${price}$</p>
        </div>
    `;
})
