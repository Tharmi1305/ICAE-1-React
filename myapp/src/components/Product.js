import '../assets/CSS/layout.css';
import {useState} from 'react';

export default function Product({flower,addToCart}){
    const [quantity,setQuantity]= useState(null);

    const handleAddToCart = () => {
        if(quantity>0){
            addToCart(flower,quantity);
            setQuantity(0);
        }
        else{
            alert("Please enter a valid quantity");
        }
    }

    return(
        <div className="grid-item">

            <div class="card">
                <img src={require('../assets/image/'+flower.img)} alt={flower.name} />
                <div class="card-body">
                    <h5 class="card-title">Price:{flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input onChange={(e)=>setQuantity(parseInt(e.target.value) || 0)} type="number" id="quantity" name="quantity" />
                    </div>
                    <button onClick={handleAddToCart} class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}