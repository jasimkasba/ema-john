import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);

    const [cart, setCart] = useState([]);


    const handleAddProduct = (product) =>{
        console.log('product added', product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className ="shop-container">
            <div className ="product-container">
             <ul>
                 {
                     products.map(pdt => <Product addProduct={handleAddProduct} product={pdt}></Product>)
                 }
             </ul>
               
            </div>
            <div className ="cart-container">
                <Cart cart= {cart}></Cart>
                 
             </div>

            
             
        
             
        </div>
    );
};

export default Shop;