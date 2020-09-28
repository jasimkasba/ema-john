import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    // console.log(props)
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
               <img src={img} alt=""/>

            </div>
            <div className='product-name'>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p><small>Only {stock} left in a stock ...</small></p>
                <br/>
                <button onClick = {() => props.addProduct(props.product)} id='btn'> <FontAwesomeIcon icon={faShoppingCart} /> Order Now</button>
            </div>
        </div>
      
    );
};

export default Product;