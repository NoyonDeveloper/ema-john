import React from 'react';
import { Link} from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const tax = totalPrice / 5;
    const totalAmount = totalPrice + tax;
  
    
    return (
        <div className='cart-con'>
            <h4>Order Summer</h4>
            <p>Order Item: {cart.length}</p>
            <p>Product Price: ${totalPrice}</p>
            <p>Tax + Vat: ${tax}</p>
            <p className='total-pirce'>Total Price: ${totalAmount}</p>
            <Link to='/review'><button>Review Your Order</button></Link>
        </div>
    );
};

export default Cart;