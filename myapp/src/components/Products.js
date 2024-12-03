import '../assets/CSS/layout.css';
import Product from './Product';
import Cart from './Cart';
import {flowers} from './FlowerDB'

export default function Products(){
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((flower)=>(
                            <Product key={flower.id} flower={flower}/>
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}