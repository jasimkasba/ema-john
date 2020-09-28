import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, pdt) => total + pdt.price ,0)

    let shipping = 0;
    if(total> 35){
        shipping = 0
    }else if(total > 12){
        shipping = 4.12
    }else if(total > 0){
        shipping = 12.15
    }

    const tax = (total / 10).toFixed(2);
    const grandtotal = (total + shipping + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order summary :</h4>
            <h5>Items Ordered :{cart.length}</h5>
            <h5>Product Price : {total}</h5>
             <h6><small>Shipping cost : {shipping}</small></h6>
            <h5><small>Tax + Vat: {tax}</small></h5>
            <h5>Total Price : {grandtotal}</h5>
        </div>
    );
};

export default Cart;