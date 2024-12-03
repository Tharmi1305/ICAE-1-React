import '../assets/CSS/layout.css';
export default function Product({flower,AddToCart}){
    
    return(
        <div className="grid-item">

            <div class="card">
                <img src={require(`../assets/image/${flower.img}`)} alt={flower.name} />
                <div class="card-body">
                    <h5 class="card-title">{flower.name}</h5>
                    <p>Price: ${flower.price}</p>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>(flower.qty=+e.target.value)} />
                    </div>
                    <button class="card-button" onClick={()=>AddToCart(flower)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}