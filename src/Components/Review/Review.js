import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products';
import { addToDb, clearTheCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProduct = (productKey) => {
        const newCart = cart.filter((pd) => pd.key !== productKey);
        setCart(newCart);
        clearTheCart(productKey);
    }

    useEffect(() => {
        //cart
        const saveCart = getStoredCart();
        const productKeys = Object.keys(saveCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            return product;
        })
        console.log(cartProducts);
        setCart(cartProducts)
    }, [])
    return (
        <div>
            <h1>cart item: {cart.length}</h1>
            <div className="shop-container">
                {
                    cart.map(pd => <ReviewItem product={pd} removeProduct={removeProduct}></ReviewItem>)
                }
            </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Review;